import { Height } from '@mui/icons-material';
import { Grid, Container, Button, ButtonGroup, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { SearchBar } from './Search';

export const Header = () => {
    return (
        <Container maxWidth="lg" sx={{ backgroundColor: 'red' }}>
            <Grid
                container
                spacing={3}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    height: '100px'
                }}
            >
                <Grid item>
                    <Typography variant="h4" component="h1">
                        Heroes!
                    </Typography>
                </Grid>
                <Grid item>
                    <SearchBar filteredHero={undefined} setFilteredHero={undefined} />
                </Grid>
                <Grid item>
                    <ButtonGroup
                        sx={{
                            backgroundColor: 'black'
                        }}
                    >
                        <Button component={Link} to="/home">
                            Home
                        </Button>
                        <Button component={Link} to="/about">
                            About
                        </Button>
                    </ButtonGroup>
                </Grid>
            </Grid>
        </Container>
    );
};
