const axios = require('axios')

async function getUniversityAPIData (country_name) {
    const BASE_URL = "http://universities.hipolabs.com/search?country="

    try {

        if (!country_name) 
            throw "Erro: País não informado"
        
        if (!countries.includes(country_name)) 
            throw "Erro: País não listado"
        
        const { data } = await axios.get(BASE_URL + country_name)
        return data

    } catch (e) {
       console.log(e)
    }
}


async function run () {
    const countries = [
        "argentina",
        "brazil",
        "chile",
        "colombia",
        "paraguay",
        "peru",
        "suriname",
        "uruguay"
    ]

    for (country in countries) {
        const universityData = await getUniversityAPIData(country)
    }
}

run()