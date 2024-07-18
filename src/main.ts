import $ from 'jquery';
import compileRoutingGraph from './compile';
import { routes } from './data';
import { renderNerdy, renderRoute } from './rendering';
import internalRoute from './routing';
import './style.scss'

jQuery(() => {
    // Dropdown Data
    ["from-list", "to-list"].forEach((eleName) => {
        let ele = $(`#${eleName}`)

        for (let townName in routes) {
            if ("TODO".includes(townName)) {
                // This will be modified to add the visible-nonvisible distinction back in,
                // as this change broke that feature completely
                continue;
            } else {
                ele.append('<option class="' + routes[townName][2]?.region + '" value="' + townName + '">' + routes[townName][2]?.region + '</option>')
            }
        }
    });

    // Dropdown Save
    ["from", "to"].forEach((eleName) => {
        let ele = $(`#${eleName}`)

        ele.on("change", () => {
            console.debug(`Set ${eleName} to ${ele.val()} in LocalStorage`)
            localStorage.setItem(eleName, ele.val() as string)
        })

        ele.val(localStorage.getItem(eleName) as string)
    })

    // Toggle for if Roadways are on
    $("#use-roadways").on("change", () => {
        let ele = $("#roads-as")
        if ($("#use-roadways").is(":checked")) {
            //@ts-expect-error
            ele.attr("disabled", false)
        } else {
            //@ts-expect-error
            ele.attr("disabled", true)
        }
    })

    // Flip the to-from selections
    $("#flip-button").on("click", () => {
				// TS doesnt like the typing of .val()
				// but its supposed to return a string
        let from:string|any = $("#from").val()
        let to:string|any = $("#to").val()
        $("#from").val(to)
        $("#to").val(from)
				// Save the new selections
				localStorage.setItem("from", to)
				localStorage.setItem("to", from)
				console.debug(`Set from and to to ${$("#from").val()} and ${$("#to").val()} in LocalStorage`)

		})

		// Button the clear the current selections
		$("#clear-button").on("click", () => {
			// Clear the values
			$("#from").val("")
			$("#to").val("")
			// Save the new selections
			localStorage.setItem("from", "")
			localStorage.setItem("to", "")
			console.debug(`Set both from and to to null in LocalStorage`)
		})

		// Saves the selected speed
		// Doesnt really work as intended
		$("#roads-as").on("change", () => {
			//@ts-expect-error
			localStorage.setItem("speed", $("#roads-as").val())
			console.debug(`Set speed to ${$("#roads-as").val()} in LocalStorage`)
		})

    // If Pressed, route()
    $("#route-button").on("click", () => {
        route()
    })

    // If Enter, route()
    $(document).on("keypress", (event) => {
        if (event.key === "Enter") {
            route()
        }
    })

    // Set boilerplate status text
    $("#status-injection").text("No route has been calculated yet")
})

const route = () => {
    let beginRoutingFn = performance.now()

		let beginGraphPreprocess = performance.now()
  	let { processedGraph, renderGraph } = compileRoutingGraph()
  	let graphProcessTime = performance.now() - beginGraphPreprocess

    let { route, graph, path, error, routingTime } = internalRoute(processedGraph, renderGraph)
    console.debug(route, graph, path, error, routingTime, graphProcessTime)

    let beginRenderFn = performance.now()
    renderRoute(route, graph, error, graphProcessTime, routingTime)
    let renderFnTime = performance.now() - beginRenderFn
    renderNerdy(graphProcessTime, routingTime, renderFnTime, graph)

    // Finishing up
    let routingFnTime = performance.now() - beginRoutingFn
    console.debug(`Took ${routingFnTime}ms total`)
}
