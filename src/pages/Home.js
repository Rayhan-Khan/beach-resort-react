import React from 'react'
import Banner from '../component/Banner';
import Hero from '../component/Hero';
import {Link} from 'react-router-dom'
import Services from '../component/Services';
import FeaturedRooms from '../component/FeaturedRooms'
const Home = () => {
    return <>
    <Hero>
        <Banner title="lauxurious rooms" subtitle="Deluxe
        room starting as $299">
           <Link to='/room' className='btn-primary'>Our rooms</Link>
        </Banner>
    </Hero>
    <Services/>
    <FeaturedRooms/>
    </>
}
export default Home;