import { populerGetData, topPopulerGetData } from "@/Data";
import HomeContainer from "@/containers/home";
import Movies from '@/mocks/movies.json'



export default async function HomePage({ params }) {
    let selectedCategory

    const [topPopularData, popularData] = await Promise.all([
        topPopulerGetData(),
        populerGetData()
    ]);




    if (params.category?.length > 0) {
        selectedCategory = true
    }

    return <HomeContainer
        topPopularData={topPopularData}
        popularData={popularData}
        selectedCategory={{
            id: params.category?.[0] ?? '',
            movies: selectedCategory ? Movies.results.slice(0, 7) : []
        }} />
}
