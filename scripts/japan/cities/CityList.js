import { makeCities } from './CityDataProvider.js'
import { City } from './City.js'

export const cityList = () => {
    const cityElement = document.querySelector('.cities')
    const cities = makeCities()

    let cityHTMLRepresentation = "";

    cities.forEach(
        (cityObj) => {
            cityHTMLRepresentation += City(cityObj)
        }
    );
    cityElement.innerHTML += `
        ${cityHTMLRepresentation}
    `
}
