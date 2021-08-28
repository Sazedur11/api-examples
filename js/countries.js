const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <h3>${country.name}</h3>
            <p>${country.capital}<p/>
            <button onclick="loadCountryByName('${country.name}')">Details</button>
        `;
        countriesDiv.appendChild(div)
    })
}

const loadCountryByName = name => {
    const url = `https://restcountries.eu/rest/v2/name/${name}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayCountry(data[0]))
}

const displayCountry = country => {
    const countryDiv = document.getElementById('country-details');
    countryDiv.classList.add('country-details')
    countryDiv.innerHTML = `
        Name: <h3>${country.name}</h3>
        Capital: <p>${country.capital}<p/>
        Currencies: <p>${country.currencies[0].name
        } ${country.currencies[0].symbol
        }<p/>
        <img width="200px" src="${country.flag}"/>
`
}
