import { Container, Grid, Typography } from "@mui/material"
import SearchForm from "./components/SearchForm"
import { NewsProvider } from "./context/newsProvider"
import ListNews from "./components/ListNews"


function App() {
    return (
        <NewsProvider>
            <Container>
                <header>
                    <Typography align="center" marginY={5} component="h1" variant="h3">
                        Search News 
                    </Typography>
                </header>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={12} md={6} lg={4}>
                        <SearchForm />
                    </Grid>
                </Grid>

                <ListNews></ListNews>
            </Container>
        </NewsProvider>
    )
}

export default App
