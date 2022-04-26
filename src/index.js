
class SwapiService {
    _apiBase = 'https://swapi.dev/api'
    async getResource(url){
        const result = await fetch(`${this._apiBase}${url}`);
        if (!result.ok){
            throw new Error(`Could not fetch ${url}` + `, received ${result.status}`)
        }
        return await result.json()
    }

    async getAllPeople(){
        const result = await this.getResource(`/people/`)
        return result.results
    }

    getPersonById(id){
        return this.getResource(`/people/${id}`)
    }

    async getAllPlanets(){
        const result = await this.getResource(`/planets/`)
        return result.results
    }

    getPlanetsById(id){
        return this.getResource(`/planets/${id}`)
    }

    async getAllStarships(){
        const result = await this.getResource(`/starships/`)
        return result.results
    }

    getStarshipById(id){
        return this.getResource(`/starships/${id}`)
    }
}

const swapi = new SwapiService();
swapi.getAllPeople().then((people)=>{// get all people
    people.forEach((p)=> {
       console.log(p.name);
    });
})

swapi.getPersonById(1).then((p)=>{//get by Id person
    console.log(p.name)
})