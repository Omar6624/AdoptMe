import { useEffect, useState } from "react";
let animalList = ["birds", "cat", "dog", "rabbit", "reptile"];
import useBreedList from "./useBreedList";
import Results from "./Results";
const SearchParams = () => {
  let [location, setLocation] = useState("");
  let [pets, setPets] = useState([]);
  let [animal, setAnimal] = useState("");
  let [breed, setBreed] = useState("");
  let [breedList] = useBreedList(animal);

  useEffect(() => {
    reqPets();
  }, []);

  async function reqPets() {
    const response = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await response.json();
    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          reqPets();
        }}
      >
        <label htmlFor="location">location</label>
        <input
          id="location"
          value={location}
          placeholder="location"
          onChange={(e) => setLocation(e.target.value)}
        />
        <label htmlFor="animal"> animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
            setBreed("");
          }}
        >
          <option />
          {animalList.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>

        <label htmlFor="breed">Breed</label>
        <select
          id="breed"
          disabled={breedList.length == 0}
          value={breed}
          onChange={(e) => {
            setBreed(e.target.value);
          }}
        >
          <option value=""></option>
          {breedList.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
        <button>Submit</button>
      </form>

      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
