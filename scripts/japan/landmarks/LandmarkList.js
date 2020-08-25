import { makeLandmarks } from './LandmarkDataProvider.js'
import { Landmark } from './Landmark.js'

export const landmarkList = () => {
    const landmarkElement = document.querySelector('.landmarks')
    const landmarks = makeLandmarks()

    let landmarkHTMLRepresentation = "<h2>Landmarks</h2>";

    landmarks.forEach(
        (landmarkObj) => {
            landmarkHTMLRepresentation += Landmark(landmarkObj)
        }
    );
    landmarkElement.innerHTML += `
        ${landmarkHTMLRepresentation}
    `
}