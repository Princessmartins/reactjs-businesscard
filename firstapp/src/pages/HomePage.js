import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Explore from "../components/Explore"

function Home() {
    return(
        <div>
            Home
        <Navbar></Navbar>
        <Hero/>
        <Explore></Explore>
        <Footer></Footer>
        </div>
    )
}

export default Home