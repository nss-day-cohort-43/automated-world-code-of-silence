import { useLeader } from "./LeaderDataProvider.js";
import { leader } from "./Leader.js";
export const LeaderList = () => {

    const leaders = useLeader();

// Get a reference to the `<article class="content">` element
    // Reference to the DOm, reference to the array
    const leaderElement = document.querySelector(".citizens");
    
    let leaderHTMLRepresentations = "";
    for (const oneLeader of leaders) {
        leaderHTMLRepresentations += leader(oneLeader);   
    
    // Add to the existing HTML in the content element
    }
    leaderElement.innerHTML += `${leaderHTMLRepresentations}
    `
}