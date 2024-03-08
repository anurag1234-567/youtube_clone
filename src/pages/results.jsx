import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import Sidebar from '../components/sidebar';
import { formatCount, formatDate, formatDuration } from '../utilis/utilis';
import axios from 'axios';

const Results = ({sidebar}) =>{
    const [videoData, setVideoData] = useState([]);
    const [searchParams] = useSearchParams();
    const queryValue = searchParams.get('q');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchResults = async () => {
            if(!queryValue) return;
            console.log('called');

            try {
                const api_key = process.env.REACT_APP_API_KEY;
                let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=IN&maxResults=48&q=${queryValue}&regionCode=IN&relevanceLanguage=hi&key=${api_key}`;
                const res = await axios.get(url);

                // Extract videos ids
                const ids = res.data.items.map(item => item.id.videoId);
                // Make list of video ids
                const list = ids.join(',');

                // Fetch detailed video data including content details and statistics
                url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${list}&key=${api_key}`;
                
                const response = await axios.get(url);
                setVideoData(response.data.items);
            } catch (err) {
                console.log(err);
                alert('Error fetching video data');
            }
        }
        fetchResults();
    }, [queryValue]);
    
    return(
        <div className="main">
            <Sidebar sidebar={sidebar}/>
            <div className="content">
            {
                videoData.length > 0 &&
                videoData.map((item, index)=>{
                    return (
                        <div className='video' key={index} onClick={()=>{ navigate(`/watch/v/${item.id}`) }}>
                            <div className='img-wrp'>
                                <img src={item.snippet.thumbnails.medium.url} alt='' />
                                <span className='duration'>{formatDuration(item.contentDetails.duration)}</span>
                            </div>

                            <div className='description'>
                                <p className='title'>{item.snippet.title}</p>
                                <p className='channel_name'>{item.snippet.channelTitle}</p>
                                <p className='rating'>{formatCount(item.statistics.viewCount)} views • {formatDate(item.snippet.publishedAt)}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>

        </div>
    )
}
export default Results;