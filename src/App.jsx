import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HomeCards from './components/HomeCards'
import JobListings from './components/JobListings'

var titleText='Become a React Dev';
var subtitleText='Find the React job that fits your skills and needs';
 
const App = () => {
  return (<>
    <Navbar />

    <Hero title={titleText} subtitle={subtitleText} />

    <HomeCards />

    <JobListings />


  <section className="m-auto max-w-lg my-10 px-6">
    <a
      href="jobs.html"
      className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Jobs</a
    >
  </section>
  </>
  )
}

export default App