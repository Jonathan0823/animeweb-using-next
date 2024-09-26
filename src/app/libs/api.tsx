
const getAnimeResponse = async ( resource: string, query: string ) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`
    )

    const data = await res.json()
    return data
}

export default getAnimeResponse

interface ApiResponse {
    [key: string]: unknown;
    data: {
        mal_id: number
        title: string
        images: {
            jpg: {
                large_image_url: string
            }
        }
    }[]
}

export const getNestedAnimeResponse = async ( resource: string, object: string) => {
    const res = await getAnimeResponse( resource, "" )

    return res.data.flatMap((item: ApiResponse) => item[object])
}
