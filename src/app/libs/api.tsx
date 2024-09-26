
const getAnimeResponse = async ( resource: string, query: string ) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
    )

    const data = await res.json()
    return data
}

export default getAnimeResponse