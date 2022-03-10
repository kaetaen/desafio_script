const axios = require('axios')
const University = require('../src/models/University') 

async function getUniversityAPIData (countryName) {
    const BASE_URL = "http://universities.hipolabs.com/search?country="

    try {
        if (!countryName) {
            throw "Erro: País não informado"
        }

        const { data } = await axios.get(BASE_URL + countryame)
        
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

    for (countryName of countries) {
    
        const universityData = await getUniversityAPIData(countryName)
        const university = await University.create(universityData)
    }
    process.exit(1);
}

run()
