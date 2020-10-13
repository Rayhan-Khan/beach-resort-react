import React from 'react'
import Banner from '../component/Banner'
import Hero from '../component/Hero'
import {Link} from 'react-router-dom'

export default function Error() {
    return <Hero>
        <Banner title='404' subtitle="page not found">
          <Link to='/' className="btn-primary">Return Home</Link>
        </Banner>
    </Hero>
}


