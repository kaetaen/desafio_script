const axios = require('axios')
const University = require('../src/models/University') 

async function getUniversityAPIData (countryName) {
    const BASE_URL = "http://universities.hipolabs.com/search?country="

    try {
        if (!countryName) {
            throw "Erro: País não informado"
        }

        const { data } = await axios.get(BASE_URL + countryName)
        
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

    let universityCollection = []

    for (countryName of countries) {
        const universityData = await getUniversityAPIData(countryName)
        universityCollection = [...universityCollection, ...universityData]
    }

    const university = await University.insertMany(universityCollection)

    process.exit(0);
}

run()
