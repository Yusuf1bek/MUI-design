import React, { useEffect, useState } from 'react';
import { Container, Typography, CircularProgress, Box } from '@mui/material';
import { fetchRecipes } from '../api/api';

const RecipeList: React.FC = () => {
    const [recipes, setRecipes] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getRecipes = async () => {
            try {
                const data = await fetchRecipes();
                console.log('Fetched data:', data);
                if (data && data.recipes) {
                    setRecipes(data.recipes);
                } else {
                    setError('No recipes found');
                }
            } catch (err) {
                setError('Failed to fetch recipes');
            } finally {
                setLoading(false);
            }
        };

        getRecipes();
    }, []);

    if (loading) {
        return (
            <Container>
                <CircularProgress />
            </Container>
        );
    }

    if (error) {
        return (
            <Container>
                <Typography color="error">{error}</Typography>
            </Container>
        );
    }

    return (
        <Container>
            <Box display="flex" flexWrap="wrap" justifyContent="space-around">
                {recipes.map((recipe, index) => (
                    <Box key={index} p={2} width={{ xs: '100%', sm: '45%', md: '30%' }}>
                        <Typography variant="h6">{recipe.name}</Typography>
                        <img className='mb-[20px]' src={recipe.image} alt={recipe.name} style={{ width: '100%', height: 'auto' }} />
                        <Typography variant="subtitle1">Ingredients:</Typography>
                        <ul className='mb-[30px] w-[300px] flex items-start flex-wrap'>
                            {recipe.ingredients.map((ingredient: string, i: number) => (
                                <li key={i}>{ingredient},</li>
                            ))}
                        </ul>
                        <Typography variant="subtitle1">Instructions:</Typography>
                        <Typography variant="body2">{recipe.instructions}</Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default RecipeList;