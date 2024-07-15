import $ from 'jquery'
import { getSpeeds, routes, lines } from './data'

const transfers = [
    // Warps
    "Outpost Warp", "New Spawn Warp", "Old Spawn Warp",
    // Transfers
    "Outpost UltraStar Station Main Entrance",
]

type lineMeta = {
    color: string[]
    altName: string
    operator: string
    extraText: string
}

type totals = {
    distance: number
    time: number
    eachMethod: any
    tolls: any
}

/**
 * The rendering function, handles all the rendering of the routing output.
*/
export const renderRoute = (
    route: string[], 
    graph: [any, any], 
    error: [boolean, string | null], 
    graphingTime: number, 
    routingTime: number
) => {
    /**
     * The numbers in data.js are in meters, or blocks, 
     * so getting the distance between locations is very easy by doing this.
    */
    const getDistanceBetween = (from: string, to: string) => {
        let searchData = routes[from][1]
        for (let prop in searchData) {
            let locationData = searchData[prop]
            if (locationData[to] !== undefined) {
                return locationData[to][1]
            }
        }
        // Past this point assume this is a warp and calculate the real distance
        return Math.hypot(routes[from][0][0] - routes[to][0][0], routes[from][0][1] - routes[to][0][1])
    }
    /**
     * Gets the total distance of the route. 
    */
    const cascadeDistanceBetween = (route: string[]) => {
        let totalDistance = 0
        route.forEach((location, index, array) => {
            if ((index + 1) < array.length) {
                totalDistance += getDistanceBetween(location, array[index + 1])
            }
        })
        return totalDistance
    }
    /**
     * ! TODO: broken due to it relying on getDistanceBetween()
     * 
     * Gets the total distance of the route. 
    */
    const perStopDistanceBetween = (route: string[]) => {
        let totalDistance: number[] = []
        route.forEach((location, index, array) => {
            if ((index + 1) < array.length) {
                totalDistance.push(getDistanceBetween(location, array[index + 1]))
            }
        })
        return totalDistance
    }
    /**
     * Gets the number of seconds between 2 locations
    */
    const getTimeBetween = (from: string, to: string, graph: [any, any]): number => {
        let searchData = graph[0][from][1]
        if (searchData[to] !== undefined) {
            return searchData[to]
        } else {
            return 0
        }
    }
    /**
     * Gets the number of seconds along a path
    */
    const cascadeTimeBetween = (route: string[], graph: [any, any]) => {
        let totalTime = 0
        route.forEach((location, index, array) => {
            if ((index + 1) < array.length) {
                totalTime += getTimeBetween(location, array[index + 1], graph)
            }
        })
        return totalTime
    }
    /**
     * Gets the line/road name between two points, and what type of method it is.
    */
    const getLineBetween = (from: string, to: string, graph: [any, any]): [string[], string] | undefined => {
        if (graph[1][from][to] !== undefined) {
            return [
                graph[1][from][to][0],
                graph[1][from][to][1]
            ]
        } else {
            return undefined
        }
    }
    /**
     * Returns a nested list containing all the nodes on different lines on the route.
    */
    const cascadeLinesBetween = (route: string[], graph: [any, any]): [[string[], [string[], string]]] => {
        //@ts-expect-error Empty array != this mess of a type
        let lineSections: [[string[], [string[], string]]] = []
        route.forEach((location, index, array) => {
            if (index + 1 < array.length) {
                let line = getLineBetween(array[index], array[index + 1], graph)
                if (
                    lineSections.length > 0 &&
                    line !== undefined &&
                    // i hate this, but it will do.
                    line[0][0] === lineSections[lineSections.length - 1][1][0][0] &&
                    line[0][1] === lineSections[lineSections.length - 1][1][0][1] &&
                    line[0][2] === lineSections[lineSections.length - 1][1][0][2]
                ) {
                    lineSections[lineSections.length - 1][0].push(array[index + 1])
                } else {
                    lineSections.push([
                        [array[index], array[index + 1]],
                        //@ts-expect-error Due to the [...]|undefined typing on the getLineBetween function, this will always error.
                        line
                    ])
                }
            }
        })
        return lineSections
    }
    /**
     * Returns the metadata for that route's primary route.
    */
    const lineMetadata = (line: string): lineMeta => {
        let md = lines[line]
        return {
            color: md.color,
            altName: (md.altName === undefined) ? line : md.altName,
            operator: md.operator,
            extraText: md.extraText
        }
    }
    /**
     * Calculates some basic totals of a route
    */
    const calculateTotals = (lines: [[string[], [string[], string]]], route: any, graph: [any, any]) => {
        let totals = {
            distance: cascadeDistanceBetween(route),
            time: cascadeTimeBetween(route, graph),
            eachMethod: {},
            tolls: {}
        }
        return totals
    }
    /**
     * Finds the connections to the specified node
    */
    const calculateConnections = (nodeName: string, existingNames: string[], graph: [any, any]): string[] => {
        let nodeData = graph[1][nodeName]
        let exceptNames: string[] = []
        transfers.forEach((name) => { exceptNames.push(name) })
        existingNames.forEach((name) => { exceptNames.push(name) })
        // Get the lines
        let lineList: string[] = []
        for (let prop in nodeData) {
            let routingData = nodeData[prop]
            for (let line in routingData[0]) {
                let lineName = routingData[0][line]
                if (!lineList.includes(lineName) && !exceptNames.includes(lineName)) {
                    lineList.push(lineName)
                }
            }
        }
        // Parse the lines
        let elementList: string[] = []
        for (let line in lineList) {
            let lineName = lineList[line]
            if (lineName != "" || lineName != undefined) {
                let meta:lineMeta = lineMetadata(lineName)
                elementList.push(`<span class="line" style="background-color: ${meta.color[0]}; color: ${meta.color[1]};">${meta.altName}</span>`)
            }
        }

        return elementList
    }
    /**
     * @param {number} weight - The weight of the route, also the number of seconds that route will take. (meters / meters-per-second = seconds)
     * 
     * @returns {string}
    */
    const secondStringify = (weight: number): string => {
        const minutes = Math.floor(weight / 60)
        const seconds = weight % 60
        const stringifiedMins = (
            (minutes > 0 || seconds > 0) ?
                1 == minutes ?
                    `1 min` :
                    `${minutes} mins` :
                `instantly`
        )
        let stringifiedTime = (
            seconds > 0 ?
                1 == seconds ?
                    `${stringifiedMins}, 1 sec` :
                    `${stringifiedMins}, ${Math.round(seconds)} secs` :
                stringifiedMins
        )
        console.debug(stringifiedMins, stringifiedTime, stringifiedTime === `Instantly`)
        return (
            stringifiedTime === `instantly` ?
                `${stringifiedTime}` :
                `in ${stringifiedTime}`
        )
    }
    /**
     * Returns a human-readable distance. Uses Kilometeres past 1000 blocks.
    */
    const distanceStringify = (meters: number): string => {
        if (meters >= 1000) {
            return `${(meters / 1000).toFixed(2)} km`
        } else {
            return `${Math.round(meters)} blocks`
        }
    }
    /**
     *
    */
    const statusRender = (totals: totals, error: [boolean, string | null], milliseconds: number) => {
        console.debug(error, statusInjection, routeInjection)

        if (error !== undefined && !error[0]) {
            statusInjection.text(`There was an issue making the route: ${error[1]}`)
        } else {
            statusInjection.text(`
                Arriving ${secondStringify(totals.time)} and traveling ${distanceStringify(totals.distance)}.
                Route created in ${milliseconds}ms
            `)
        }
    }
    /**
     * @param {} lines
     * @param {string[]} route
     * @param {[any, any]} graph
    */
    const textRender = (lines: [[string[], [string[], string]]], route: string[], graph: [any, any]) => {
        const flavorText = {
            // Up to 10 texts in each category
            keepGoing: [
                // formatted like: "[TEXT] for (another) [DISTANCE]km (more)"
                "Keep going",
                "Stay on this route",
                "Continue on",
                "Keep holding W",
                "Make sure you have enough food and keep going",
                "Just keep swimming",
            ],
            interchange: [
                // formatted like: "[TEXT] (the) [DESTINATION]"
                "Make your way to",
                "Find your way to",
                "You should see signs for",
                "Follow the signs for",
            ],
            waiting: [
                // formatted like: "[TEXT] [DESTINATION], then [INSTRUCTIONS]"
                "Wait until",
                "Stare into the sun until",
            ],
            commandTeleport: [
                // formatted like: "[TEXT] [DESTINATION]"
                "Warp to",
                "Teleport to",
                "Wonder why the two major regions are almost 3,000km apart and teleport to",
                "Wonder why the two major regions are just under 3,000km apart and warp to"
            ],
            netherTeleport: [
                // formatted like: "[TEXT] [DESTINATION]'s Nether Portal"
                "Walk through",
                "Run through",
                "Jump through",
                "Slide through",
                "Head through",
            ],
            changeTrains: [
                // formatted like: [TEXT] to []
                "Change trains to",
                "Head to your connection to",
                ""
            ],
            atDestination: [
                "You will have reached your destination.",
            ]
        }
        /**
         * @param {string[]} textList
         * @param {string} append
         * 
         * @returns {string} 
        */
        const getFlavorText = (textList: string[], append: string): string => {
            let notChosen = true
            let choice: number = 0 // This immediately gets overwritten
            while (notChosen) {
                choice = Math.round(Math.random() * 10)
                if (textList[choice] !== undefined) {
                    notChosen = false
                }
            }
            return `${textList[choice]} ${append}`
        }
        /**
         * @param {string[][]} colors - The colors used by this section of the route
         * @param {string[]} routeNames - The Alternative/Human-Friendly version of the route's names used
         * @param {string[]} realNames - The real names of the routes used
         * @param {number} distance -  The distance in meters this section crosses
         * @param {number} time - The time in seconds this section will take
         * @param {any} otherNodes - A list of nodes along the route 
         * @param {string} from - The location coming from
         * @param {string} to - The location going to
         * @param {string} operator - The company or group operating this section
         * @param {string} method - The method of transport used by this route
         * @param {string} extraText - Any extra text gathered from the node
        */
        const addLine = (
            colors: string[][],
            routeNames: string[],
            realNames: string[],
            distance: string,
            time: string,
            otherNodes: string[],
            from: string,
            to: string,
            operator: string,
            method: string,
            extraText: string
        ) => {
            // Handling for the extra nodes
            let nodeText = ""
            let nodes: string[] = []
            let distances = perStopDistanceBetween(route)
            if (otherNodes.length > 0) {
                nodeText = `<p style="padding-bottom: 5px">You will pass these locations:</p>`
                otherNodes.forEach((node, index) => {

                    let connections = calculateConnections(node, realNames, graph)
                    //@ts-ignore
                    let speed = getSpeeds()[method]
                    if (connections.length === 0) {
                        nodes.push(`
                        <p>
                            <span class="station">${node}</span><br>
                            ${distanceStringify(distances[index])}; ${secondStringify(distances[index] / speed)}
                        </p>
                        <br>
                    `)
                    } else {
                        nodes.push(`
                        <p>
                            <span class="station">${node}</span><br>
                            ${distanceStringify(distances[index])}; ${secondStringify(distances[index] / speed)}<br>
                            Connections to ${connections.map(node => `${node}`).join(" ")}
                        </p>
                        <br>
                    `)
                    }
                })
            }

            // Handling for the "Via..." section
            let lines: string[] = []
            routeNames.forEach((name, index) => {
                if (name.length !== 0) {
                    lines.push(`
                        <span class="line" style="background-color: ${colors[index][0]}; color: ${colors[index][1]};">${name}</span>
                    `)
                }
            })
            let via = ""
            if (lines.length > 0) {
                via = "Via"
            }

            // Handling for the Operator section
            let oper = ""
            if (lines.length > 0) {
                oper = `<p style="color: gray; font-size: x-small;">Operated by ${operator}</p>`
            }

            // Handling for the extraText section
            let instructionText = (extraText !== undefined) ?
                `<p>${extraText}</p><br>` :
                ""

            // Handling for styles
            let borderStyle = "solid"
            switch (method) {
                case "warp":
                case "portal":
                case "walkways":
                    borderStyle = "dotted";
                    break;
                case "roadways":
                    borderStyle = "dashed";
                    break;
                case "pistonbolt":
                case "iceways":
                    borderStyle = "double";
                    break;
            }

            inject.append(`
                <div class="route-box" style="border-color: ${colors[0][0]}; border-left-style: ${borderStyle};">
                    From <span class="station">${from}</span><br>
                    ${via} ${lines.map(line => `${line}`).join("")}
                    ${oper}<br>
                    <p>Travel ${distance} ${time}</p>
                    <br>
                    ${instructionText}
                    ${nodes.map(node => `${node}`).join("")}
                    To <span class="station">${to}</span>
                </div>
                <br>
            `)
        }

        const inject = $("#output-injection")
        // Add the new routes
        lines.forEach((route, index, array) => {
            let nodes = route[0]
            let from = nodes[0]
            let to = nodes[nodes.length - 1]
            let otherNodes = nodes.slice(1, nodes.length - 1);

            let lineData: lineMeta[] = []
            route[1][0].forEach((line) => {
                lineData.push(lineMetadata(line))
            })

            let colorData: string[][] = []
            let nameData: string[] = []
            lineData.forEach((line) => {
                colorData.push(line.color)
                nameData.push(line.altName)
            })

            addLine(
                colorData,
                nameData,
                route[1][0],
                distanceStringify(cascadeDistanceBetween(route[0])),
                secondStringify(cascadeTimeBetween(route[0], graph)),
                otherNodes,
                from,
                to,
                lineData[0].operator,
                route[1][1],
                lineData[0].extraText
            )
        })
        inject.css("display", "block")
    }

    const statusInjection = $("#status-injection")
    const routeInjection = $("#output-injection")
    let cascadedLines = cascadeLinesBetween(route, graph)
    let totals = calculateTotals(cascadedLines, route, graph)
    statusRender(totals, error, (graphingTime + routingTime))
    $("#output-injection").empty()
    //@ts-ignore Something broke here, no clue why
    if (lines.length !== 0) { textRender(cascadedLines, route, graph) }
}

/**
 * The debug rendering function, handling all performance data
*/
export const renderNerdy = (compileTime: number, routingTime: number, renderTime: number, graph: any) => {
    $("#compile-time").text(`compile-time: ${compileTime}ms`)
    $("#route-time").text(`route-time: ${routingTime}ms`)
    $("#render-time").text(`route-render-time: ${renderTime}ms`)
    $("#graph-length").text(`node-graph-length: ${Object.keys(graph[0]).length} nodes`)
    $("#nerds").css("display", "block")
}
