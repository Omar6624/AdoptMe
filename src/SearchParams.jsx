import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
let animalList = ["birds", "cat", "dog", "rabbit", "reptile"];
import useBreedList from "./useBreedList";
import fetchSearch from "./fetchSearch";
d;
import Results from "./Results";
const SearchParams = () => {
  const [reqParams, setReqParams] = useState({
    location: "",
    animal: "",
    breed: "",
  });
  let [animal, setAnimal] = useState("");
  let [breedList] = useBreedList(animal);

  const results = useQuery(["search", reqParams], fetchSearch);
  const pets = results?.data?.pets ?? [];
  // useEffect(() => {
  //   reqPets();
  // }, []);

  // async function reqPets() {
  //   const response = await fetch(
  //     `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
  //   );
  //   const json = await response.json();
  //   setPets(json.pets);
  // }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          reqPets();

          const formdata = new FormData(e.target);
          const obj = {
            animal: formdata.get("animal") ?? "",
            location: formdata.get("location") ?? "",
            breed: formdata.get("breed") ?? "",
          };
          setReqParams(obj);
        }}
      >
        <label htmlFor="location">location</label>
        <input id="location" name="location" placeholder="location" />
        <label htmlFor="animal"> animal</label>
        <select
          id="animal"
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
        >
          <option />
          {animalList.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>

        <label htmlFor="breed">Breed</label>
        <select id="breed" disabled={breedList.length == 0} name="breed">
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
