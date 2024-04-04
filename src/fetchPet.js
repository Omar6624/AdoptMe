const fetchPet = async ({ queryKey }) => {
    const id = queryKey[1];
    if (!animal) return [];
    const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
    if (!apiRes.ok) {
        throw new Error(`details ${id} fetch thew error`)
    }

    return apiRes.json()
}
export default fetchPet