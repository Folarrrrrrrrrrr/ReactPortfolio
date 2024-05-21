import NavBar from "../components/NavBar"
import Botton from "../components/Botton"
import Home from "../components/Home"
import Projects from "../components/Projects"
import About from "../components/About"
import Services from "../components/Services"
const MainPage =()=>{

    return(
        <>
            <div >
                 <NavBar/>
                <Home />
                <Projects/>
                <About/>
                <Services/>
                <Botton/>
            </div>
        </>
    )
}

export default MainPage