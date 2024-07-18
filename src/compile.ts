import $ from 'jquery'
import { getSpeeds, routes } from './data'

export default function compileRoutingGraph() {
		const tollMode: string = $("#tolls").val() as string
    const useWarps: boolean = $("#use-warps").is(":checked")
    const useNether: boolean = $("#use-nether").is(":checked")
    const useIceway: boolean = $("#use-iceways").is(":checked")
    const usePistonbolt: boolean = $("#use-pistonbolt").is(":checked")
    const useRailway: boolean = $("#use-minecarts").is(":checked")
    const useBoatway: boolean = $("#use-boatways").is(":checked")
    const useRoadway: boolean = $("#use-roadways").is(":checked")
    const useSeasonal: boolean = $("#use-seasonal").is(":checked")

    const methods = getSpeeds()
    /**
     * Adds data to the output graphs.
    */
    const setGraphs = (node:any, name:string, set:number, graph:any, nodeKey:string, routes:any) => {
        try {
            if (node[name] > set || node[name] === undefined) {
                node[name] = set // Node Graph, for Pathing
                if (name !== nodeKey) {
                    graph[nodeKey][name] = routes // Render Graph, for Rendering
                }
            }
        } catch (error) {
            console.error(node, name, set, graph, nodeKey, routes, error)
        }
    }
    /**
     * Calculate the weight for this route, and if the weight it in invalid number fix it by setting it to 0.
     *
     * @param {number[]} locationRoute
     *
     * @returns {number}
    */
    const weightCorrection = (locationRoute:any, methodKey:string) => {
        let weight = 0
        try {
            //@ts-ignore
            weight = locationRoute[1]/methods[methodKey]
            if (weight === Infinity || Number.isNaN(weight)) {
                weight = 0
            }
        } finally {
            return weight
        }
    }
    /**
     * Check if this method is enabled or not.
    */
    const isMethodEnabled = (methodKey:string) => {
        switch (methodKey) {
            case "roadways":
                if (useRoadway) return true
                else return false
            case "iceways":
                if (useIceway) return true
                else return false
            case "pistonbolts":
                if (usePistonbolt) return true
                else return false
            case "railways":
                if (useRailway) return true
                else return false
            case "boatways":
                if (useBoatway) return true
                else return false
            case "walkways":
                return true
            default:
                throw new RangeError(`This method (${methodKey}) is unvalid!`)
        }
    }

    let outputNodeGraph:any = {}
    let outputRenderGraph:any = {}

    const compileGraph = (routes:routeType) => {
        for (let nodeKey in routes) {
            const node = routes[nodeKey]
            console.debug("Begin New Compilation", nodeKey, node)
            let nodeRoutes = {}
            outputRenderGraph[nodeKey] = {}

            for (let methodKey in node[1]) {
                if (isMethodEnabled(methodKey)) {
                    const method = node[1][methodKey]
                    console.debug(method, node[1][methodKey])
                    for (let routeKey in method) {
											const locationRoute = method[routeKey]

											// "Infinity" weight is technically possible, avoid that.
											let weight = weightCorrection(locationRoute, methodKey)

											// Handle tolls

											if (locationRoute[2] !== undefined) {
												let toll:tollType = locationRoute[2]
												if (tollMode === "avoid-tolls") {
													// If told to avoid tolls, skip this iteration
													continue;
												} else
												if (tollMode === "unless-necessary") {
													// Multiply the weight by 4, discouraging this route
													if (!$(`#have-${toll.pass}`).is(":checked")) {
															weight *= 4
													}
												}
											}

											// Handle adding to the graphs
											setGraphs(nodeRoutes, routeKey, weight, outputRenderGraph, nodeKey, [locationRoute[0], methodKey])
											console.debug(`"${nodeKey}"'s ${methodKey} route to "${routeKey}" is ${locationRoute[1]} meters. Weight of ${weight}.`)
                    }
                }
            }

            if (useWarps) {
                setGraphs(nodeRoutes, "Outpost", 0, outputRenderGraph, nodeKey, [["Outpost Warp"],"warp"])          // /o
                setGraphs(nodeRoutes, "New Spawn", 0, outputRenderGraph, nodeKey, [["New Spawn Warp"],"warp"])      // /s
                setGraphs(nodeRoutes, "Old Spawn", 0, outputRenderGraph, nodeKey, [["Old Spawn Warp"],"warp"])      // /os
            }

            if (useSeasonal) {
                setGraphs(nodeRoutes, "Solitude", 0, outputRenderGraph, nodeKey, ["Olympics Warp"])                 // /warp olympics
            }

            // Finishing up this iteration
            outputNodeGraph[nodeKey] = [node[0],nodeRoutes]
            console.debug(`"${nodeKey}" compiled successfully`)
        }
    }

    console.debug("method values: ", methods)
    console.debug(useWarps,useNether,useIceway,usePistonbolt,useRailway,useBoatway,useRoadway)

    compileGraph(routes)

    return {
        processedGraph: outputNodeGraph,
        renderGraph: outputRenderGraph
    }
}
