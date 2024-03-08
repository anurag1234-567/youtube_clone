import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header =({ toggleSidebar }) =>{
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleChange = (e)=>{ setQuery(e.target.value) }
    const handleClear = ()=>{ setQuery('') }

    const handleNavigate = ()=>{ navigate(`/search?q=${query}`) }
    
    const handlekeyPress = (e)=>{
        if(e.key === 'Enter'){
            navigate(`/search?q=${query}`)
        }
    }

    return(
        <div className='header'>
            <div className='left'>
                <img src={process.env.PUBLIC_URL + '/images/menu.svg'} className='icon' alt='' onClick={toggleSidebar}/>
                <img src={process.env.PUBLIC_URL + '/images/brand.jpg'} className='logo' alt=''/>
            </div>
 
            <div className='center'>
                <div className='input-wrp'>
                    <input type='text' name='search' value={query} onChange={handleChange} onKeyDown={handlekeyPress} placeholder='Search'/>
                    <img src={process.env.PUBLIC_URL + '/images/clear.svg'} className={query ? 'clear icon active' : 'clear icon'} alt='' onClick={handleClear}/>
                </div>

                <img src={process.env.PUBLIC_URL + '/images/search.svg'} className='search' alt='' onClick={handleNavigate}/>
            </div>

            <div className='right'>
                <img src={process.env.PUBLIC_URL + '/images/camera.svg'} className='icon' alt='' />
                <img src={process.env.PUBLIC_URL + '/images/notification.svg'} className='icon' alt='' />
                <img src={process.env.PUBLIC_URL + '/images/profile.jpg'} className='profile' alt=''/>
            </div>
        </div>
    )
}
export default Header;