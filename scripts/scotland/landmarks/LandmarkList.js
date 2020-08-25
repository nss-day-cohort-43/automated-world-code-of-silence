import { useLandmark } from './LandmarkDataProvider.js';
import { Landmark } from './Landmark.js';

export const LandmarkList = () => {
    const landmarks = useLandmark();

    const landmarkElement = document.querySelector(".landmarks");
    let landmarkHTMLRepresentation = "<h2>Landmarks</h2>";
    for (const landmark of landmarks) {
        landmarkHTMLRepresentation += Landmark(landmark);
    };
    // Add to the existing HTML in the content element
    landmarkElement.innerHTML += `
        ${landmarkHTMLRepresentation}
    `
}