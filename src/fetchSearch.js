const fetchSearch = async ({ querykey }) => {
    const { animal, location, breed } = querykey[1];

    const res = await fetch(
        `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    )
    if (!res.ok) {
        throw new Error("dashjhkdlasdh")
    }

    return res.json()


}
export default fetchSearch;