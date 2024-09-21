import React from 'react';
import {useState,useEffect} from 'react';
import {Box, Stack, Typography} from '@mui/material';
import Sidebar from './Sidebar';
import Videos from './Videos';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const Feed = () => {
    const[videos,setVideos] = useState([]);
    const[selectedCategory,setSelectedCategory] = useState("New");

    useEffect(()=>{
        const fetchVideos = async () => {
            try{
                const response = await fetchFromAPI(`search?part=snippet&q=${selectedCategory}`);
               // console.log(response);
                setVideos(response.items);
            }catch(error){
                console.log(error); 
            }
        }
        fetchVideos();
        },[selectedCategory] );
    return(

        <Stack
        sx={{flexDirection:{sx:"coloumn",md:"row"} }}
        >
            <Box
            sx={{height:{sx:'auto',md:'92vh'},
            borderRight:'1px solid #3d3d3d',
            px:{sx:0 , md:2}
        }}>
            <Sidebar
            selectedCategory = {selectedCategory}
            setSelectedCategory = {setSelectedCategory}
            />
                <Typography
                className='copyright'
                variant='body2'
                sx={{mt:1.5,color: '#fff'}}
                >
                    Copyright 2024 Youtube Clone
                </Typography>
            </Box>
            <Box
            p={2}
            sx={{overflow:"auto",height:'90vh',flex:2}}>
               <Typography
               variant='h4'
               fontWeight= 'bold'
               mb={2}
               sx={{color:'white'}}>
                {selectedCategory}
                <span style={{color:"#fc1503"}}>vidoes</span>
               </Typography>
               <Videos videos={videos} />
            </Box>
        </Stack>

    );
}
export default Feed;