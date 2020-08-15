import React from 'react';
import Like from './Like';
class Contact extends React.Component {  
    
    render() {
        return (
            <div>
                
                <div className="contact">
                    <div className="heading1">Contact</div>
                    <span className="text-white">Let's connect over <span className="checked"><strong>Chole Bhature</strong></span> and <span className="checked"><strong>Patiala Lassi.</strong></span></span>
                    <hr></hr>
                    <div className="media-icons-list">
                    <a href="https://twitter.com/KshitijMahaja13" className="text-decoration-none p-3" target="_blank" rel="noreferrer noopener">
                    <div className="contact-links"><span className="fa fa-twitter-square fa-3x"></span>
                    
                    </div>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/kshitij-mahajan-898974a4" className="text-decoration-none p-3" target="_blank" rel="noreferrer noopener">
                    <div className="contact-links"><span className="fa fa-linkedin-square fa-3x"></span>
                    
                    </div>
                    </a>
                        
                        
                    <a href="https://www.instagram.com/kshitij________" className="text-decoration-none p-3" target="_blank" rel="noreferrer noopener">
                        <div className="contact-links"><span className="fa fa-instagram fa-3x"></span>
                        
                        </div>
                    </a>
                        
                    <a href="mailto:km.kshitij.mahajan@gmail.com" className="text-decoration-none p-3">
                    <div className="contact-links"><span className="fa fa-envelope fa-3x"></span>
                    
                    </div>
                    </a>
                    </div>
                    
                    <Like/>
                    
                </div>
                
            </div>
        );
    }
}


export default Contact;