import {  useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formatCount, formatDate, formatDuration } from '../utilis/utilis';
import axios from "axios";

function CategoryWiseContent(){
    const [data, setData] = useState([]);
    const { categoryId } = useParams();
    const navigate = useNavigate();
    
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const api_key = process.env.REACT_APP_API_KEY;
                const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&hl=en-IN&maxResults=48&regionCode=IN&videoCategoryId=${categoryId}&key=${api_key}`;
    
                const res = await axios.get(url);
                setData(res.data.items);
            }catch(err){
                console.log(err);
                alert('error');
            }
        }
        fetchData();
    }, [categoryId])

    return (
        <div className="content">
            {
                data.length > 0 &&
                data.map((item, index)=>{
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
           
    )
}
export default CategoryWiseContent;