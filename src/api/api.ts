import axios from 'axios';

export const fetchRecipes = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/recipes');
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error('Failed to fetch recipes');
        }
    } catch (error) {
        console.error('Error fetching recipes:', error);
        throw error;
    }
};