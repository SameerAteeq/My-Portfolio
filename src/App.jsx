import { Toaster } from "react-hot-toast";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Hero from "./components/hero/Hero";
import Works from "./components/works/Works";
import css from "./styles/app.module.scss"
const App = () => {
  return( 
    <>
    <Toaster/>
        <div className={`bg-primary ${css.container}`}>
            <Header/>
            <Hero/>
            <About/>
            <Works/>
            <Contact/>
            <Footer/>
        </div>
    </>
  ) ;
};

export default App;
