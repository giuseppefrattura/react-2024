import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'
import ViewAllJobs from './components/ViewAllJobs'

var titleText='Become a React Dev';
var subtitleText='Find the React job that fits your skills and needs';
 
const App = () => {
  return (<>
    <Navbar />
    <Hero title={titleText} subtitle={subtitleText} />
    <HomeCards />
    <JobListings />
    <ViewAllJobs />
  </>
  )
}

export default App