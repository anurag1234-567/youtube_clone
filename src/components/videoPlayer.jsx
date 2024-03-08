import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { formatCount } from '../utilis/utilis';
import axios from "axios";

function VideoPlayer(){
    const { id } = useParams();
    const [channelId, setChannelId] = useState('');
    const [videoData, setVideoData] = useState(null);
    const [channelData, setChannelData] = useState(null);

    useEffect(()=>{
        const fetchVideoData = async()=>{
            try{
                const api_key = process.env.REACT_APP_API_KEY;
                const url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=${api_key}`;
                
                const res = await axios.get(url);
                setChannelId(res.data.items[0].snippet.channelId);
                setVideoData(res.data.items[0]);
            }catch(err){
                console.log(err);
                alert('error');
            }
        }
        fetchVideoData();
    }, [id])

    useEffect(()=>{
        const fetchChannelData = async()=>{
            if(!channelId) return;

            try{
                const api_key = process.env.REACT_APP_API_KEY;
                const url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${api_key}`;
                
                const res = await axios.get(url);
                setChannelData(res.data.items[0]);
                console.log(res.data.items[0]);
            }catch(err){
                console.log(err);
                alert('error');
            }
        }
        fetchChannelData();
    }, [channelId])

    return(
        <div className='videoPlayer'>
            <iframe className="video" src={`https://www.youtube.com/embed/${id}?autoplay=1`} title="title" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

            {
                videoData && 
                (<>
                    <p className='title'>{videoData.snippet.title}</p>

                    <div className='description'>
                        <div className='left'>
                            <img src={channelData && channelData.snippet.thumbnails.default.url} alt='' />
                            <div>
                                <p>{videoData.snippet.channelTitle}</p>
                                <p>{channelData && formatCount(channelData.statistics.subscriberCount)} subscribers</p>
                            </div>
                            <button>Subscribe</button>
                        </div>

                        <div className='right'>
                            <div className='btn-wrp'>
                                <div className='like'>
                                    <img src={process.env.PUBLIC_URL + '/images/like.svg'} alt='' /> 
                                    <span>{formatCount(videoData?.statistics?.likeCount)}</span>
                                </div>
                                <img src={process.env.PUBLIC_URL + '/images/dislike.svg'} alt='' />
                            </div>

                            <div className='btn-wrp'>
                                <img src={process.env.PUBLIC_URL + '/images/share.svg'} alt='' /> Share
                            </div>

                            <div className='btn-wrp'>
                                <img src={process.env.PUBLIC_URL + '/images/download.svg'} alt='' /> Download
                            </div>
                        </div>

                    </div>
                </>)
            }
        </div>
    )
}
export default VideoPlayer;