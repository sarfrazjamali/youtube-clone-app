import React from 'react';
import { Stack,Box } from '@mui/material';
import VideoCard from './VideoCard';
import ChannelCard from './ChannelCard';
    
const Videos = ({videos,direction}) => {
    if(!videos || videos.length === 0) return <p>Videos are not available</p>
    
    return(
        <Stack direction={direction||"row"} flexWrap="wrap" justifyContent="start"  gap={2}>
            {videos.map( (item) => (

                <Box key={item.id.videoId || item.id.channelId}>
                    {item.id.videoId && <VideoCard video = {item} /> }
                    {item.id.channelId && <ChannelCard channelDetail = {item} />}
                </Box>
            ))}
        </Stack>
    );
};
export default Videos;