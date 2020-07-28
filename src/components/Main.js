import React from 'react';
import Profile from './Profile';
import About from './About'
import Experience from './Experience';
import Skills from './Skills';
import Contact from './Contact';
import Navbar from './Navbar';
import Projects from './Projects';

class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div>  
                <Navbar/>
                <Profile/>
                <About/>
                <Experience/>
                <Projects/>
                <Skills/>
                <Contact/>
                
            </div>
        );
    }
}


export default Main;