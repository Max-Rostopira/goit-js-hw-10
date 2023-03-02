export const countriesMarkup = (data, element) => {
    const markup = data.map(el => `<li><img src ="${el.flags.svg}" width = "60px" height = "60px"/> ${el.name}</li> `).join('');

    element.insertAdjacentHTML('beforeend', markup);
}

export const countryMarkup = (data, element) => {
    const markup = data.map(el => `<div>
    <h1>${el.name}</h1>
    <img src ="${el.flags.svg}" width = "60px" height = "60px"/>
    <p> Capital: ${el.capital}</p>
    <p> Population:  ${el.population}</p>
    <p> Language: ${el.languages.map(({name})=>name)}</p>
    </div>`).join('');

    element.insertAdjacentHTML('beforeend', markup);
}
