import { useCity } from "./CityDataProvider.js";
import { city } from "./City.js";

export const CityList = () => {
    const cities = useCity();

// Get a reference to the `<article class="content">` element
    // Reference to the DOm, reference to the array
    const cityElement = document.querySelector(".cities");
   
    let cityHTMLRepresentations = "<h2>Island Destinations</h2>";
    for (const oneCity of cities) {
        cityHTMLRepresentations += city(oneCity);   
    
    // Add to the existing HTML in the content element
    }
    cityElement.innerHTML += `${cityHTMLRepresentations}
    `
}
