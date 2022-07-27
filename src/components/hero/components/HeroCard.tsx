import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

interface HeroTypes {
    name: string;
    id: number;
    comics?: string;
    description?: string;
}

export const HeroCard = ({ name, id, comics, description }: HeroTypes) => {
    return (
        <Card
            sx={{
                width: 200,
                marginBottom: 4,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <CardContent>
                <Typography variant="h5" component="h1">
                    {name}
                </Typography>
                <Typography variant="body1" color="text.primary">
                    {comics}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="outlined" color="secondary" component={Link} to={`/heropage/${id}`}>
                    View More!
                </Button>
            </CardActions>
        </Card>
    );
};
