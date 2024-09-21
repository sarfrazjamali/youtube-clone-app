import React from 'react';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Box} from '@mui/material';
import Videos from './Videos';
import ChannelCard from './ChannelCard';
import {fetchFromAPI} from '../utils/fetchFromAPI';

const ChannelDetail = () => {
    const [channelDetail,setChannelDetail] = useState(null);
    const [videos,setVideos] = useState(null)
    console.log(channelDetail,videos);
    const {id} = useParams();

    useEffect(() => {

        const fetchChannelDetails = async () => {
           const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
           setChannelDetail(data?.items[0]);

           const channelVideos = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);
           setVideos(channelVideos?.items)
         };
         fetchChannelDetails();
    },[id]);

    return (
        <Box minHeight='95vh'>
            <Box>
                <div  style={{
                    background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
                    zIndex:10,
                    height:'300px'
                    }}/>
                    <ChannelCard channelDetail={channelDetail} marginTop = "-110px"/> 
            </Box>
            <Box p={2} display="flex">
                <Box sx={{ mr:{sm:'100px'} }} />
                    <Videos videos={videos}/>
            </Box>
        </Box>
    );
}

export default ChannelDetail;