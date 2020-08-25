/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const landmarkArray = ["Edinburgh Castle", "Loch Ness", "Loch Lomond", "Arthur's Seat", "Stirling Castle", "Glenfinnan Viaduct"];


/*  
*   export a function that will return a copy of the original array
*   this uses the slice method to make the copy
*/

export const useLandmark = () => {
    return landmarkArray.slice()
}