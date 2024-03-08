import { useState, useEffect, useRef } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";

const Shorts = ({sidebar}) =>{
    const [data, setData] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const containerRef = useRef(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const api_key = process.env.REACT_APP_API_KEY;
                const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=48&q=shorts&regionCode=IN&relevanceLanguage=hi&key=${api_key}`;

                const res = await axios.get(url);
                setLoading(false);
                setData(res.data.items);
                setCurrentVideo(res.data.items[0].id.videoId);
                console.log(res.data.items);
            } catch (err) {
                console.log(err);
                alert('error');
            }
        }
        fetchData();
    }, []);

    const handleScroll = () => {
        const shortsContainer = containerRef.current;
        const shorts = document.querySelectorAll('.shorts');
        const shortsHeight = shorts[0].clientHeight;
        const scrollTop = shortsContainer.scrollTop;

        const index = Math.floor((scrollTop + 50)/ shortsHeight);
        setCurrentVideo(data[index].id.videoId);
        console.log('done');
    }

    return (
        <div className='main'>
            <Sidebar  sidebar={sidebar}/>
            <div className="shorts-wrp" ref={containerRef} onScroll={handleScroll}>
                {loading ? <p>Loading...</p> :
                    data.map((item, index) => (
                        <div className='shorts' key={index}>
                            {currentVideo === item.id.videoId ?
                                <iframe className="video" src={`https://www.youtube.com/embed/${item.id.videoId}?autoplay=1`} title={item.snippet.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                :
                                <img src={item.snippet.thumbnails.high.url} alt='' />
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Shorts;