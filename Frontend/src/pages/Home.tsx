import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Instagram from "../components/Instagram"
import Products from "../components/Products"
import Team from "../components/Team"
import Whatwedo from "../components/Whatwedo"
import Youtube from "../components/Youtube"


const Home = () => {
  return (
    <main className="relative bg-[#000319]  flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 ">
      <div className="max-w-[85%] w-full ">
       
        <Hero/>
        <Whatwedo/>
        <Products/>
        <Team/>
        <Instagram/>
        <Youtube/>
        <Footer/>
      </div>
    </main>
  )
}


export default Home
