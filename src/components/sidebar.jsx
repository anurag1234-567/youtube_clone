import { NavLink } from "react-router-dom";

const Sidebar =({ sidebar }) =>{

    return (
        <>
            <div className={sidebar ? "sidebar active" : "sidebar"}>
                <NavLink exact to='/' className="list-item" >
                    <img src={process.env.PUBLIC_URL + '/images/icon1.svg'} alt='' className='light-icon'/>
                    <img src={process.env.PUBLIC_URL + '/images/icon1-d.svg'} alt='' className='dark-icon'/> Home
                </NavLink>

                <NavLink to='/shorts' className="list-item">
                    <img src={process.env.PUBLIC_URL + '/images/icon2.svg'} alt='' className='light-icon'/>
                    <img src={process.env.PUBLIC_URL + '/images/icon2-d.svg'} alt='' className='dark-icon'/> Shorts
                </NavLink>

                <div className='explore-items'>
                    <p className='title'>Explore</p>

                    <NavLink to='/trending' className="list-item" >
                        <img src={process.env.PUBLIC_URL + '/images/icon4.svg'} alt='' className='light-icon'/>
                        <img src={process.env.PUBLIC_URL + '/images/icon4-d.svg'} alt='' className='dark-icon'/> Trending
                    </NavLink>

                    <NavLink to='/category/26' className="list-item" >
                        <img src={process.env.PUBLIC_URL + '/images/icon5.svg'} alt='' className='light-icon'/>
                        <img src={process.env.PUBLIC_URL + '/images/icon5-d.svg'} alt='' className='dark-icon'/> Shopping
                    </NavLink>

                    <NavLink to='/category/10' className="list-item" >
                        <img src={process.env.PUBLIC_URL + '/images/icon6.svg'} alt='' className='light-icon'/>
                        <img src={process.env.PUBLIC_URL + '/images/icon6-d.svg'} alt='' className='dark-icon'/> Music
                    </NavLink>

                    <NavLink to='/category/25' className="list-item" >
                        <img src={process.env.PUBLIC_URL + '/images/icon7.svg'} alt='' className='light-icon'/>
                        <img src={process.env.PUBLIC_URL + '/images/icon7-d.svg'} alt='' className='dark-icon'/> News
                    </NavLink>

                    <NavLink to='/category/17' className="list-item" >
                        <img src={process.env.PUBLIC_URL + '/images/icon8.svg'} alt='' className='light-icon'/>
                        <img src={process.env.PUBLIC_URL + '/images/icon8-d.svg'} alt='' className='dark-icon'/> Sports
                    </NavLink>

                    <NavLink to='/category/28' className="list-item" >
                        <img src={process.env.PUBLIC_URL + '/images/icon9.svg'} alt='' className='light-icon'/>
                        <img src={process.env.PUBLIC_URL + '/images/icon9-d.svg'} alt='' className='dark-icon'/> Learning
                    </NavLink>
                </div>
            </div>

            <div className="overlay"></div>
        </>
    )
}
export default Sidebar;