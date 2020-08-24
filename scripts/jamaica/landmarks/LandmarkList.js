import { useLandmark } from "./LandmarkDataProvider.js";
import { landmark } from "./Landmark.js";
export const LandmarkList = () => {

    const landmarks = useLandmark();

// Get a reference to the `<article class="content">` element
    // Reference to the DOm, reference to the array
    const landmarkElement = document.querySelector(".landmarks");
    

    let landmarkHTMLRepresentations = "";
    for (const oneLandmark of landmarks) {
        landmarkHTMLRepresentations += landmark(oneLandmark);   
    
    // Add to the existing HTML in the content element
    }
    landmarkElement.innerHTML += `${landmarkHTMLRepresentations};
    `
}     