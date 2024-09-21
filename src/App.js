import { Routes,Route } from 'react-router-dom';
import {Box} from '@mui/material';
//import {Feed,Navbar,SearchFeed,VideoDetail,ChannelDetail} from './components/common';
import Feed from './components/Feed';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';
import VideoDetail from './components/VideoDetail';
import Navbar from './components/Navbar';

const App = () => (
    
    <Box sx={{backgroundColor: '#000'}}>
       <Navbar />
        <Routes>
            <Route path="/" element = {<Feed/>}/>
            <Route path="/video/:id" element = {<VideoDetail/>}/>
            <Route path = "/channel/:id" element = {<ChannelDetail/>} />
            <Route path = "/search/:searchTerm" element = {<SearchFeed/>} />
        </Routes>

    </Box>

)
    

export default App;
//TIP: Create entire project structure 1st and than create files and folders for the components
//To use BrowserRouter remove repalce { by ( in APP component and remove return key
//"/video/:id" this means that if u go through /video and than some random seq of nums, then we reach
// to the specific video page, consist of detail of the video
//"/channel/:id"  specific channel for which we are looking for.
//  "/search/:searchTerm" seqs of characters for which we are searching for.

//Routes are ready now lets create actuall components for these routes.

//For creating the components we create a folder 'components' in 'src' folder.
//Now we have to import these components inside App.js  