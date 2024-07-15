import $ from 'jquery'
import rawRoutes from './routes.json5'
import rawLines from './lines.json5'

/**
 * Gets the speeds of all the methods of transit.
*/
export function getSpeeds() {
    return {
        iceways: 70, // Boat go zoom
        pistonbolts: 50, // Estimated speed of a well built pistonbolt. May need adjusting
        railways: 8, // Maximum speed of a minecart
        boatways: 8, // Maximum speed of a boat
        //@ts-ignore
        roadways: ($("#roads-as").val() === "") ? 10 : parseFloat($("#roads-as").val()),
        walkways: 6.5, // Speed of walking, also the speed used by Tolls
    }
}

// Trying to get types for these working
// Either way, they're global constants now.
export const routes:any = rawRoutes
export const lines:any = rawLines