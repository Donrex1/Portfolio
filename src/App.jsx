//import React, { useState } from "react"
//import "./data.css";
import React from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Expenrience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {

  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

//vercel

/*function data() {
    const [count, setCount] = useState(0);

    function decreaseCount() {
        if (count > 0) {
            setCount((prevCount) => prevCount - 1);
        }
    }
}

function increaseCount() {
    setCount((prevCount) => prevCount + 1);
}
return (
    <div className="data">
        <div className="counter_container">
            <button onClick={decreaseCount}>-</button>
            <span>{count}</span>
            <button onClick={increaseCount}>+</button>
        </div>
    </div>
);
*/
export default App;