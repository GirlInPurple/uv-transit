# UVDOT UltraVanilla Transit Router

This page was moved from the original UV website due to the amount of upkeep it needs, along with not having to bother the admins to accept a PR every week or so to update the graph.\
It was also partly rewritten to make it slightly easier to maintain, this time around taking full advantage of jQuery and proper nesting/scoping.

Licensed under AGPL v3 as to keep compatibility with [UltraVanilla/uvweb](https://github.com/UltraVanilla/uvweb).\
[416.png](./416.png) is CC-BY-SA &copy;UltraVanilla 2024.

## Contributing

All contributions are welcome! All I ask is you read the [technical explanation](./technical.md) first, as that will catch you up with the project.

NPM and Node.js are required, and >= Python 3.8 for the [node manager](https://github.com/Niklas20114552/uvdot-editor) (Thanks Niklas!).\
First run `npm i` to get all the dependencies,\
then `npm run start` if you're editing the code, and `npm run build` to just build the app.\
I recommend using VSCode's LiveServer plugin, but viewing it in a browser seems to work as well.

## Roadmap

In order of importance:

- [x] Finish the rendering engine
- [ ] Finish the graph, making the router actually useable
- [ ] Finish the Toll Preferences section
- [x] Port the entire app to use Typescript, ~~and maybe Vue or React~~ Sticking with jQuery, just added Typescript and SCSS to the project for convenience
- [ ] Add back the "Scenic" and "Least Transfers" options
