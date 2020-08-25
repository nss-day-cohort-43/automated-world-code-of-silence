import { useCity } from './CityDataProvider.js';
import { City } from './City.js';

export const CityList = () => {
    const cities = useCity();

    const cityElement = document.querySelector(".cities");
    let cityHTMLRepresentation = "";
    for (const city of cities) {
        cityHTMLRepresentation += City(city);
    };
    // Add to the existing HTML in the content element
    cityElement.innerHTML += `
        ${cityHTMLRepresentation}
    `
}

