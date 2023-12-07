import { movieListGetData, populerGetData, singleCategoryGetData, topPopulerGetData } from "@/Data";
import HomeContainer from "@/containers/home";
import Movies from '@/mocks/movies.json'



export default async function HomePage({ params }) {
    let selectedCategory

    const [topPopularData, popularData, categories] = await Promise.all([
        topPopulerGetData(),
        populerGetData(),
        movieListGetData()
    ]);

    if (params.category?.length > 0) {
        selectedCategory = await singleCategoryGetData(params.category[0])
    }

    return <HomeContainer
        topPopularData={topPopularData}
        popularData={popularData}
        categories={categories}
        selectedCategory={{
            id: params.category?.[0] ?? '',
            movies: selectedCategory ? selectedCategory.slice(0, 7) : []
        }} />
}
