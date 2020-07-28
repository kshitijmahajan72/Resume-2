import React from 'react';
import Like from './Like';
class Contact extends React.Component {  
    
    render() {
        return (
            <div>
                
                <div className="contact">
                    <div className="heading1">Contact</div>
                    <span className="text-white">Let's connect. I prefer <span className="checked"><strong>Twitter DMs</strong></span> and <span className="checked"><strong>LinkedIn messages.</strong></span></span>
                    <hr></hr>
                    <div className="row text-left">
                        <div className="col-md-3"></div>
                        <div className="col-md-4 my-2">
                        <a href="https://twitter.com/KshitijMahaja13" className="text-decoration-none " target="_blank" rel="noreferrer noopener">
                        <div className="contact-links"><span className="fa fa-twitter-square fa-3x"></span>
                        <span className="link"> www.twitter.com/KshitijMahaja13</span>
                        </div>
                        </a>
                        </div>
                        
                        <div className="col-md-4 my-2">
                        <a href="https://www.linkedin.com/in/kshitij-mahajan-898974a4" className="text-decoration-none contact-links" target="_blank" rel="noreferrer noopener">
                        <div className="contact-links"><span className="fa fa-linkedin-square fa-3x"></span>
                        <span className="link"> kshitij-mahajan-898974a4</span>
                        </div>
                        </a>
                        </div>
                        <div className="col-md-1"></div>
                        <div className="col-md-3"></div>
                        <div className="col-md-4  my-2">
                            <a href="https://www.instagram.com/kshitij________" className="text-decoration-none contact-links" target="_blank" rel="noreferrer noopener">
                                <div className="contact-links"><span className="fa fa-instagram fa-3x"></span>
                                <span className="link"> www.instagram.com/kshitij________</span>
                                </div>
                            </a>
                        </div>
                        
                        <div className="col-md-4 my-2">
                        <a href="mailto:km.kshitij.mahajan@gmail.com" className="text-decoration-none contact-links">
                        <div className="contact-links"><span className="fa fa-envelope fa-3x"></span>
                        <span className="link"> Kshitij Mahajan</span>
                        </div>
                        </a>
                        </div>
                    </div>
                    {/* <hr></hr>{
                        this.state.like?<button className="btn btn-primary" onClick={this.counter.bind(this)}><span className="fa fa-thumbs-up fa-lg"></span> Like {this.state.counter}</button>
                        :<button className="btn btn-info"><span className="fa fa-check fa-lg"></span> Liked</button>
                    } */}
                    <Like/>
                    
                </div>
                
            </div>
        );
    }
}


export default Contact;