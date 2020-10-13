import React from 'react'
import Banner from '../component/Banner';
import Hero from '../component/Hero';
import {Link} from 'react-router-dom';
import RoomContainer from '../component/RoomContainer'
 const Room = () => {
    return(
        <>
         <Hero hero='roomsHero'>
             <Banner title="Our rooms">
             <Link to='/' className="btn-primary">Return Home</Link>
             </Banner>
         </Hero>
         <RoomContainer/>
        </> 
        )
}
export default Room;

