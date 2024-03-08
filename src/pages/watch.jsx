import VideoPlayer from "../components/videoPlayer";
import Recommended from "../components/recommended";
import Comments from "../components/comments";

function Watch(){

    return(
        <div className='watch'>
            <div className='left-content'>
                <VideoPlayer />
                <Comments />
            </div>

            <div className='right-content'>
                <Recommended />
            </div>
        </div>
    )
}
export default Watch;