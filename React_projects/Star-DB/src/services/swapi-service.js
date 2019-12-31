export default class SwapiService {
    #apiBase = 'https://swapi.co/api';

    async getResourses(url) {
        const res = await fetch(`${this.#apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}. Received ${res.status} status`)
        }

        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResourses('/people/');

        return res.results.map(this.#transformPersonData);
    }

    async getPerson(id) {
        const res = await this.getResourses(`/people/${id}`);

        return this.#transformPersonData(res);
    }

    async getAllPlanets() {
        const res = await this.getResourses('/planets/');

        return res.results.map(this.#transformPlanetData);
    }

    async getPlanet(id) {
        const res = await this.getResourses(`/planets/${id}`);

        return this.#transformPlanetData(res);
    }

    async getAllStarships() {
        const res = await this.getResourses('/starships/');

        return res.results.map(this.#transformStarshipData);
    }

    async getStarship(id) {
        const res = await this.getResourses(`/starships/${id}`);

        return this.#transformStarshipData(res);
    }

    #extractId = item => {
        const urlRegExp = /\/([0-9]+)\/$/;
        return item.url.match(urlRegExp)[1];
    };

    #transformPersonData = person => {
        return {
            id: this.#extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
        }
    };

    #transformPlanetData = planet => {
        return {
            id: this.#extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
        }
    };

    #transformStarshipData = starship => {
        return {
            id: this.#extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
        }
    };
}
