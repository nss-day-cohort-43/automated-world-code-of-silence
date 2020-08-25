/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const leaderArray = ["Sir Sean Connery", "William Wallace", "Robert the Bruce", "Rob Roy", "Alistair Begg", "John Knox"];


/*  
*   export a function that will return a copy of the original array
*   this uses the slice method to make the copy
*/

export const useLeader = () => {
    return leaderArray.slice()
}