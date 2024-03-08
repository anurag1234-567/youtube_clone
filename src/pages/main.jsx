import Sidebar from '../components/sidebar';
import Content from '../components/content';

const Main = ({sidebar}) =>{
    return(
        <div className='main'>
            <Sidebar sidebar={sidebar}/>
            <Content />
        </div>
    )
}
export default Main;