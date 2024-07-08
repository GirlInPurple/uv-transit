# UVDOT UltraVanilla Transit Router

This page was moved from the original UV website due to the amount of upkeep it needs, along with not having to bother the admins to accept a PR every week or so to update the graph.\
It was also partly rewritten to make it slightly easier to maintain, this time around taking full advantage of jQuery and proper nesting/scoping.\

Licensed under AGPL v3 as to keep compatibility with [UltraVanilla/uvweb](https://github.com/UltraVanilla/uvweb), [416.png](./416.png) is CC-BY-SA &copy;UltraVanilla 2024.

## Technical Info

There is a single function that controls all the routing processes, from data manipulation to tracking how long it takes.
This is activated by the user clicking the "Route!" button.

The function then takes all the settings from the user, along with the location graph, and creates a node graph that is parsable by A-Star. This is the longest part of the base process due to the sheer amount of data it needs to handle.\
During this stage, weights can be altered in either direction, up or down, depending on the factors the user chooses. This is primarily used to avoid tolls and for the alternative routing methods.

The AStar function is the part where the actual routing happens, based on the [A* pathing algorithm](https://en.wikipedia.org/wiki/A*_search_algorithm). It sends back a list of nodes and methods it followed to get this route, or an error message if one occurs.

From here, all the data from the pathing and compiling functions get passed into the rendering functions. This is a text based explanation similar to

## Adding Location Nodes

Here is an example of a location node:

```javascript
const routes = {
    // ...
    "Outpost": [
        [-1890764,-1894658],
        {
            roadways: {
                "UV-OP-201 UV-OP-2 Intersection": [["UV-OP-2"], 1200],

                "Evergreen": [["UV-OP-1", "UV-VY"], 1200],
                "Stonehelm": [["UV-OP-1", "UV-OP-2", "UV-VY"], 1200],
            },
            railways: {
                "Outpost UltraStar Station": [["Toll"], 0, {
                    currency: "Emerald",
                    price: 4,
                    pass: "SeaCard",
                    passPrice: 2
                }]
            },
            iceways: {
                "Illyria": [["OPE Ouest"], 1200],
                "Stonehelm": [["EGRK Expressway"], 1200],
            },
        },
    ]
    // ...
}
```

Lets go from top to bottom:

- First is the node name. If its a town or destination it should be the same as the one in the `places` variable, and the name has to be unique.
- Next is the coordinates, the Y coordinate is dropped due to it not being useful to us.
- Lastly, the routes
  - Each route is formatted in this manner:
    - Node Name
    - Transit Name(s)
    - Distance in Blocks/Meters
    - Toll (if applicable)
      - The toll is again split up into 4 sections:
        - `currency` is the type of currency the toll requires. Common currencies are Diamond, Emerald, and Paper.
        - `price` is the amount of that currency needed to pass the toll.
        - `pass` is the name of the pass that allows you to skip the toll. Currently only SeaCard and EasyPass are options.
        - `passPrice` is the price that is paid if the user checked the box saying they have a specific pass.
  - The `roadways` section is for connected roadways, be it UVDOT highways or other nearby roads that aren't numbered.
    - The space between "UV-OP-201 UV-OP-2 Intersection" and "Evergreen" is to tell people who are adding onto the network graph that the "UV-OP-201 UV-OP-2 Intersection" node can not be selected from the UI, but still exists. Same thing with the "Outpost UltraStar Station" node, but this time there are no other connections so the space doesnt make sense to add.
  - The `railways` and `iceways` sections are for minecart railways and ice boat tunnels respectively.
