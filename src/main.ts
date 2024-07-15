import $ from 'jquery';
import internalRoute from './routing';
import { renderNerdy, renderRoute } from './rendering';
import './style.scss'
import places from './places.json5'

jQuery(() => {
    // Dropdown Data
    ["from-list", "to-list"].forEach((eleName) => {
        let ele = $(`#${eleName}`)

        for (let townName in places) {
            if ("TODO".includes(townName)) {
                // This will be modified to add the visible-nonvisible distinction back in,
                // as this change broke that feature completely
                continue;
            } else {
                ele.append('<option class="' + places[townName] + '" value="' + townName + '">' + places[townName] + '</option>')
            }
        }
    })
    /*
    // Dropdown Save
    // Currently Broken
    ["from","to"].forEach((eleName) => {
        let ele = $(`#${eleName}`)

        ele.on("change", () => {
            console.debug(`Set ${eleName} to ${ele.val()} in LocalStorage`)
            localStorage.setItem(eleName, ele.val())
        })

        ele.val(localStorage.getItem(eleName))
    })
    */
    // Toggle for if Roadways are on
    $("#use-roadways").on("change", () => {
        let ele = $("#roads-as")
        if ($("#use-roadways").is(":checked")) {
            //@ts-ignore
            ele.attr("disabled", false)
        } else {
            //@ts-ignore
            ele.attr("disabled", true)
        }
    })
    // Flip the to-from selections
    $("#flip-button").on("click", () => {
        let from: any = $("#from").val()
        let to: any = $("#to").val()
        $("#from").val(to)
        $("#to").val(from)
    })
    // If Pressed, route()
    $("#route-button").on("click", () => {
        route()
    })
    // If Enter, route()
    //@ts-ignore
    $(this).on("keypress", (event) => {
        if (event.key === "Enter") {
            route()
        }
    })
    // Set boilerplate status text
    $("#status-injection").text("No route has been calculated yet")
})

function route() {
    let beginRoutingFn = performance.now()

    let { route, graph, path, error, routingTime, graphingTime } = internalRoute()
    console.debug(route, graph, path, error, routingTime, graphingTime)

    let beginRenderFn = performance.now()
    renderRoute(route, graph, error, graphingTime, routingTime)
    let renderFnTime = performance.now() - beginRenderFn
    renderNerdy(graphingTime, routingTime, renderFnTime, graph)

    // Finishing up
    let routingFnTime = performance.now() - beginRoutingFn
    console.debug(`Took ${routingFnTime}ms total`)
}