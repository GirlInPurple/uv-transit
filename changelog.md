# Changelog

First digit for massive changes, like UI rewrite or massive feature addition.\
Second digit for smaller but impactful feature additions or .\
Third digit for node updates, like editing or adding a new town to the system.

Sections added in chronological order, oldest last.

- [Changelog](#changelog)
  - [1.1.0](#110)
  - [1.0.2](#102)

## 1.1.0

- Added a dropdown menu for the road speed input
- Moved all the technical info from readme.md to technical.md
- Completely overhauled how nodes are handled
  - Added Tolls and Toll Preferences back in finally
  - Added layers, making upkeep on the graph a bit easier
- Removed the `<abbr>` from the date, instead replacing it with "D/M/Y" beside it
  - Mostly because I didn't want to keep updating the time, plus the timezone difference and it not really being useful

## 1.0.2

- Finished the rendering engine, the site is fully operational for most major routes!
- Added routes to these towns and their neighbors:
  - Outpost
    - Steambolt
    - Malus
  - New Spawn
    - Spawn Warp
    - Borealis
    - Sky Temple
  - Old Spawn
    - Old Spawn Warp
    - Mercy
- Added these methods to the network:
  - UltraStar Express 1 and 2
  - UV-OP-1 between Banal-Witchita and Steambolt
  - The Entire New Spawn Metro system
