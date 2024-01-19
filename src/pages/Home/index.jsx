import React from 'react'
import AboutTasty from '../../components/AboutTasty'
import DiscoverMenu from '../../components/DiscoverMenu'
import { Helmet } from 'react-helmet-async'
import StaisfedGuests from '../../components/SatisfedGuests'
import RecentBlog from '../../components/RecentBlog'

function Home() {
  return (
    <div>
        <Helmet>
            <title>Home</title>
        </Helmet>
    <AboutTasty></AboutTasty>
    <DiscoverMenu></DiscoverMenu>
    <StaisfedGuests></StaisfedGuests>
    <RecentBlog></RecentBlog>
    </div>
  )
}

export default Home