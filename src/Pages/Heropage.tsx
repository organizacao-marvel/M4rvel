import { Grid, Typography, CardMedia, Card, CardContent, Box } from "@mui/material";
import { RootState } from "../App/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Comics } from "../components/hero/Comics";

export const Heropage = () => {

  const heroes = useSelector((state: RootState) => state.heroes.heroes );
  let { heroId } = useParams();

  return (
    <Grid container display="flex" alignItems="center" justifyContent="center" sx={{marginTop: 4}}>
      <Grid item width={660}>
        <Card sx={{
          boxShadow: "2px 2px 2px 1px rgba(0, 0, 0, 0.2)"
        }}>
          { heroes.map((hero: any) => {
            if (Number(heroId) === hero.id) {
              return (
                <>
                  <CardMedia 
                    component="img"
                    alt={hero.name}
                    height="340"
                    image={hero.thumbnail.path + "/landscape_amazing.jpg"}
                  />
                  <CardContent>
                    <Typography
                      variant="h3"
                      color="primary"
                    >
                      { hero.name }
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.primary"
                    >
                      { hero.description === "" && (
                        <Typography
                          variant="h5"
                          color="error"
                        >
                          Herói ainda não encontrado pela Field!
                        </Typography>
                      ) }

                      { hero.description !== "" && (
                        <Typography>
                          { hero.description }
                        </Typography>
                      ) }
                    </Typography>
                    <Box>
                      <Typography
                        variant="body1"
                        color="error"
                        sx={{
                          width: "100%",
                          display: "flex",
                          marginTop: 3
                        }}
                      >
                        { hero.comics.items.map((comic: any, index: number) => {
                          if (index >=0 && index < 4) {
                            return <Comics comicsName={ comic.name } comicsURL={ comic.resourceURI } />
                          }
                        }) }
                      </Typography>
                    </Box>
                  </CardContent>
                </>
              );
            }
          }) }
        </Card>
      </Grid>
    </Grid>
  )
}
