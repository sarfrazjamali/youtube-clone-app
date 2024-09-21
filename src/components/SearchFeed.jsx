import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { fetchFromAPI } from '../utils/fetchFromAPI';
import Videos from './Videos';


const SearchFeed = () => {
    const [videos, setVideos] = useState([]);
    const { searchTerm } = useParams();

    useEffect(() => {
        const searchedVidoes = async () => {
            const data = await fetchFromAPI(`search?part=snippet&q=${searchTerm}`);
            setVideos(data.items);
        }
        searchedVidoes();
    }, [searchTerm]);
    return (
        <Box p={2} minHeight="95vh">
            <Typography variant='h4' fontWeight={900} mb={3} color="white" ml={{ sm: "100px" }}>

                Search results for: <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos

            </Typography>
            <Box display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                {<Videos videos={videos} />}

            </Box>
        </Box>
    );
};

export default SearchFeed;