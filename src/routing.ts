import $ from 'jquery'
import compileRoutingGraph from './compile'

/**
 * The router function, handles everything related to pathing.
 */
export default function internalRoute():{route: string[], graph: [any, any], path: any|null, error: [boolean, string|null], routingTime: number, graphingTime: number} {

    /**
     * @returns {{path: string[], pathTook: any|null, reachable: boolean, reason: string|null}}
    */
    const aStar = (graph:any, startNode:string, goalNode:string) => {

        function reconstructPath(cameFrom:{[key:string]:string}, current:string) {
            let totalPath = [current]
            while (current in cameFrom) {
                current = cameFrom[current]
                totalPath.unshift(current)
            }
            return totalPath
        }

        function heuristic(node:any, goal:any) {
            return Math.hypot(goal[0][0] - node[0][0], goal[0][1] - node[0][1])
        }

        class Queue {

            nodes:any[]

            constructor() {
                this.nodes = []
            }

            enqueue(priority:number, key:string) {
                this.nodes.push({ key, priority })
                this.sort()
            }

            dequeue() {
                return this.nodes.shift()
            }

            sort() {
                this.nodes.sort((a, b) => a.priority - b.priority)
            }

            isEmpty() {
                return !this.nodes.length
            }
        }

        console.debug(graph, startNode, goalNode)
        if (jQuery.isEmptyObject(graph) || startNode === null || goalNode === null) {
            return { 
                path: [], 
                pathTook: null, 
                reachable: false, 
                reason: "The routing data was bad. This most likely means you didn\'t choose a start/end destination." 
            }
        }

        let openSet = new Queue()
        openSet.enqueue(0, startNode)

        let cameFrom:{[key:string]:string} = {}
        let gScore:{[key:string]:number} = {}
        let fScore:{[key:string]:number} = {}

        for (let node in graph) {
            gScore[node] = Infinity
            fScore[node] = Infinity
        }

        gScore[startNode] = 0
        fScore[startNode] = heuristic(startNode, goalNode)

        console.debug("gScore", gScore)
        console.debug("fScore", fScore)
        console.debug("cameFrom", cameFrom)
        console.debug("openSet.nodes", openSet.nodes)
        console.debug("nodeGraph", graph)

        while (!openSet.isEmpty()) {
            let current:string = openSet.dequeue().key

            if (current === goalNode) {
                return { 
                    path: reconstructPath(cameFrom, current), 
                    pathTook: cameFrom, 
                    reachable: true, 
                    reason: null }
            }

            console.debug(current, graph[current])
            for (let neighbor in graph[current][1]) {
                let tentative_gScore = gScore[current] + graph[current][1][neighbor]
                console.debug(neighbor, tentative_gScore < gScore[neighbor])

                if (tentative_gScore < gScore[neighbor]) {
                    cameFrom[neighbor] = current
                    gScore[neighbor] = tentative_gScore
                    fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goalNode)
                    openSet.enqueue(fScore[neighbor], neighbor)
                }
            }
        }

        console.error('This route is impossible to complete. This most likely means you chose options in differing regions (Outpost and New Spawn are disconnected from Old Spawn), or your allowed methods are too restrictive.')
        return { 
            path: [], 
            pathTook: null, 
            reachable: false, 
            reason: "This route is impossible to complete. This most likely means you chose options in differing regions (Outpost and New Spawn are disconnected from Old Spawn), your allowed methods are too restrictive, or the locations are not on the network yet." 
        }
    }

    let beginGraphPreprocess = performance.now()
    let { processedGraph, renderGraph } = compileRoutingGraph(
        //@ts-ignore
        $("#tolls").val(),
        $("#use-warps").is(":checked"),
        $("#use-nether").is(":checked"),
        $("#use-iceways").is(":checked"),
        $("#use-pistonbolt").is(":checked"),
        $("#use-minecarts").is(":checked"),
        $("#use-boatways").is(":checked"),
        $("#use-roadways").is(":checked"),
        $("#use-seasonal").is(":checked")
    )
    let graphProcessTime = performance.now() - beginGraphPreprocess


    let beginAStarFn = performance.now()
    let { 
        path, 
        pathTook, 
        reachable, 
        reason 
    } = aStar(
        processedGraph,
        //@ts-ignore
        $("#from").val(),
        $("#to").val()
    )
    let AStarFnTime = performance.now() - beginAStarFn

    return {
        route: path,
        graph: [processedGraph, renderGraph],
        path: pathTook,
        error: [reachable, reason],
        routingTime: AStarFnTime,
        graphingTime: graphProcessTime
    }
}
