import Sidebar from '../components/sidebar';
import CategoryWiseContent from '../components/categoryWiseContent';

const Category= ({sidebar}) =>{
    return(
        <div className='main'>
            <Sidebar sidebar={sidebar}/>
            <CategoryWiseContent />
        </div>
    )
}
export default Category;