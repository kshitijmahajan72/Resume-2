import React from 'react';
class Navbar extends React.Component {  

    render() {
        return (
            <div>
                <nav className="navbar fixed-bottom mx-5 " role="navigation">
                <span className="navbar-brand"></span>
                <ul className="nav navbar-nav">
                    <li><a href="#top"><span className="fa fa-arrow-circle-up navigate"></span></a></li>
                </ul>
                
            </nav>
            </div>
        );
    }
}


export default Navbar;