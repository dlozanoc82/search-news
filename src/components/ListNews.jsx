import { Grid, Typography, Pagination, Stack } from "@mui/material"
import useNews from "../hooks/useNews"
import News from "./News";


const ListNews = () => {

    const { news, totalNews, handleChangePage, page } = useNews();

    const totalPages = Math.ceil(totalNews / 20);


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

            <Stack 
                spacing={2}
                direction={'row'}
                justifyContent={'center'}
                alignItems={'center'}
                sx={{
                    marginY: 5
                }}
            >
                <Pagination 
                    count={totalPages} 
                    color="primary" 
                    onChange={handleChangePage}
                    page={page}
                />
            </Stack>


        </>
    )
}

export default ListNews