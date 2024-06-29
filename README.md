# UVDOT UltraVanilla Transit Router

This page was moved from the original UV website due to the amount of upkeep it needs, along with having less oversight and not having to bother the admins to accept a PR every week or so.

Licensed under AGPL v3 as to keep compatibility with [UltraVanilla/uvweb](https://github.com/UltraVanilla/uvweb), [416.png](./416.png) is CC-BY-SA &copy;UltraVanilla 2024.

## Routing Methods

### Routing Basics / Fastest Route

There is a single function that controls all the routing processes, from data manipulation to tracking how long it takes.\
This is activated by the user clicking the "Route!" button.

The function then takes all the settings from the user, along with the location graph, and creates a node graph that is parsable by A-Star.\
This is the longest part of the base process due to the sheer amount of data it needs to handle.

The AStar function is the part where the actual routing happens, based on the [A* pathing algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm). It sends back a list of nodes and methods it followed to get this route, or an error message if one occurs.

From here, it takes the output from the router, parses it, and and displays it on the page, with extra formatting, road and transit line names, and more.

### Least Transfers

For this routing method, during the generation of the node graph, the routing weights for transfers out of stations or onto different roads are quadrupled, making the routing algorithm choose them much less often.

### Scenic / Longest Route

This one is the most complex and costly, but ends up working pretty well.\
This method runs the "Fastest Route" method 10 times, but each time the weights going into all the nodes the router hit are quadrupled, making the router very unhappy and taking the most round-about route possible. This route only works if the route is restricted to Overworld and/or slower methods, as if everything was available the router will keep taking lesser but still efficient routes of getting to your destination.

## Adding Location Nodes

TODO
