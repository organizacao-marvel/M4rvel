import { HeroCard } from './HeroCard';
import { Grid, Container } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../../App/store';
import { SearchBar } from '../../Search';
import { useState, useMemo } from 'react';

export const HeroPage = () => {
    const [filterHero, setFilterHero] = useState('');
    const allHeroes = useSelector((state: RootState) => state.heroes.heroes);
    const foundedHero = useMemo(() => allHeroes.filter(hero => hero.name.startsWith(filterHero)), [filterHero]);

    const heroes = useSelector((state: RootState) => state.heroes.heroes);

    if (foundedHero.length !== 0) {
        return (
            <Container maxWidth="lg">
                <Grid spacing={2}>
                    <Grid item xs={4}>
                        {foundedHero.map((hero: any) => {
                            return <HeroCard name={hero.name} id={hero.id} />;
                        })}
                    </Grid>
                </Grid>
            </Container>
        );
    }

    return (
        <>
            <Container maxWidth="lg">
                <Grid display="flex" justifyContent="center" mt={4}>
                    <Grid
                        item
                        xs={4}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: '1rem'
                        }}
                    >
                        {heroes.map((hero: any) => {
                            return <HeroCard name={hero.name} id={hero.id} />;
                        })}
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};
