/**
 * Stores data about tolls
*/
declare type tollType = {
	currency:string
	price:number
	pass:string
	passPrice:number
}

/**
 * Contains the name of the node, and data about is connection
*/
declare type routeNodeType = {
	[targetName:string]:[
		string[],
		number,
		tollType?,
		string?
	]
}

/**
 * Contains a instances of a connection between 2 nodes, sorted by methods
*/
declare type routesContainer = {
	[method:string]:routeNodeType
}

/**
 * Contains data about a node
*/
declare type routeType = {
	[nodeName:string]:[
		[number, number],
		routesContainer,
		{
			layer:string
			region:string
		}?
	]
}

/**
 * Contains data about a line
*/
declare type metadataType = {
		altName?:string
		color:[string,string]
		operator:string
		transfer?:boolean
}

/**
 * Stores data about lines, sorted by it's name
*/
declare type metadataContainer = {
	[lineName:string]:metadataType
}

/**
 * Typing for the output of graph compiling
 * Work in progress
*/
declare type compiledGraphType = [
	compiledGraphDataType,
	compiledLineDataType
]

declare type compiledLineDataType = {

}

declare type compiledGraphDataType = {

}
