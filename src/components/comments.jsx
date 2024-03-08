import { useState, useEffect } from "react";
import { useParams} from "react-router-dom";
import { formatDate } from "../utilis/utilis";
import ReadMore from './ReadMore';
import axios from "axios";

function Comments(){
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const api_key = process.env.REACT_APP_API_KEY;
                const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=50&videoId=${id}&key=${api_key}`;
                
                const res = await axios.get(url);
                setData(res.data.items);
            }catch(err){
                console.log(err);
                alert('error');
            }
        }
        fetchData();
    }, [id])

    return (
        <div className='comments'>
            <h2>Comments</h2>

            {
                data.length > 0 &&
                data.map((comment, index)=>{
                    let main = comment.snippet.topLevelComment.snippet;

                    return (
                        <div key={index} className='comment'>
                            <img src={main.authorProfileImageUrl} alt='' />
                            
                            <div className='data'>
                                <div className='user-data'>
                                    <span>{main.authorDisplayName}</span>
                                    <span>{formatDate(main.updatedAt)}</span>
                                </div>

                                <ReadMore text={main.textOriginal}/>
                                
                                <div className='btn-wrp'>
                                    <span>
                                        <img src={process.env.PUBLIC_URL+'/images/like.svg'} alt=''  /> 
                                        {main.likeCount > 0 ? main.likeCount : ""}
                                    </span>
                                    <img src={process.env.PUBLIC_URL + '/images/dislike.svg'}  alt='' />
                                </div>

                            </div>
                        </div>
                    )
                })

            }

            

        </div>
    )
}
export default Comments;