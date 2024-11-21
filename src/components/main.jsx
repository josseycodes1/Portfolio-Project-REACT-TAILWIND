import Nav from "./nav"
import Hero from "./hero"
import Testimonial from "./testimonial"
import Project from "./project"
import Footer from "./footer" 

const main = () => {
  return (
    <div className=" bg-blue-700">
      <Nav/>
      <Hero/>
      <Project/>
      <Testimonial/>
      <Footer/>
    </div>
  )
}

export default main