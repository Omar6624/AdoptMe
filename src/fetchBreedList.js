const fetchBreedList = async ({ queryKey }) => {
    const animal = queryKey[1];
    const apiRes = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}`
    );
    if (!apiRes.ok) {
        throw new Error("ashdsj")

    }
    return apiRes.json();


}
export default fetchBreedList;