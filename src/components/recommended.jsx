import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { formatCount, formatDate, formatDuration } from "../utilis/utilis";
import axios from "axios";
 
function Recommended(){
    const { id } = useParams();
    const [categoryId, setCategoryId] = useState(null);
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const api_key = process.env.REACT_APP_API_KEY;
                const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${api_key}`;
                
                const res = await axios.get(url);
                setCategoryId(res.data.items[0].snippet.categoryId);
            }catch(err){
                console.log(err);
                alert('error');
            }
        }
        fetchData();
    }, [id])

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                if(!categoryId) return;

                const api_key = process.env.REACT_APP_API_KEY;
                const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&hl=en-IN&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${api_key}`;

                const res = await axios.get(url);
                setData(res.data.items);
            }catch(err){
                console.log(err);
            }
        }
        fetchData();
    }, [categoryId]);

    return(
        <div className='recommended-list'>
            {
                data.length > 0 &&
                data.map((video, index)=>{
                    return(
                        <div key={index} className='list-item' onClick={()=>{ navigate(`/watch/v/${video.id}`) }}>
                            <div className='img-wrp'>
                                <img src={video.snippet.thumbnails.medium.url} alt='' />
                                <span>{formatDuration(video.contentDetails.duration)}</span>
                            </div>

                            <div className='description'>
                                <p className='title'>{video.snippet.title}</p>
                                <p>{video.snippet.channelTitle}</p>
                                <p>{formatCount(video.statistics.viewCount)} views • {formatDate(video.snippet.publishedAt)}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}
export default Recommended;