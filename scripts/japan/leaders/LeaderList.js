import { makeLeaders } from './LeaderDataProvider.js'
import { Leader } from './Leader.js'


export const leaderList = () => {
    const leaderElement = document.querySelector('.citizens')
    const leaders = makeLeaders()

    let leaderHTMLRepresentation = "<h2>Leaders</h2>";

    leaders.forEach(
        (leaderObj) => {
            leaderHTMLRepresentation += Leader(leaderObj)
        }
    );
    leaderElement.innerHTML += `
        ${leaderHTMLRepresentation}
    `
}