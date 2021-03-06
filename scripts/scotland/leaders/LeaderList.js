import { useLeader } from './LeaderDataProvider.js';
import { Leader } from './Leader.js';

export const LeaderList = () => {
    const leaders = useLeader();

    const leaderElement = document.querySelector(".citizens");
    let leaderHTMLRepresentation = "<h2>Leaders</h2>";
    for (const leader of leaders) {
        leaderHTMLRepresentation += Leader(leader);
    };
    // Add to the existing HTML in the content element
    leaderElement.innerHTML += `
        ${leaderHTMLRepresentation}
    `
}