import { Grid, Typography } from "@mui/material"
import useNews from "../hooks/useNews"
import News from "./News";


const ListNews = () => {

    const { news } = useNews();

    return (
        <>
            <Typography
                textAlign={'center'}
                marginY={5}
                variant="h3"
                component={'h2'}
            >
                Ultimas Noticias
            </Typography>

            <Grid
                container
                spacing={2}
            >
                {news.map(article => (
                    <News 
                        article={article}
                        key={article.url}
                    />
                ))}
            </Grid>

        </>
    )
}

export default ListNews