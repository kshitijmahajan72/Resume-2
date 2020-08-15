import React, { memo } from 'react';
const About = memo(() => {
    const time = new Date().getFullYear()-new Date('February 7,1998').getFullYear();
    return (
        <div >
            <div className="about">
            <div className="heading">Profile</div>
            <div className="profile-context">I am <s>IronMan</s> a Web Developer</div>
            <hr></hr>
            <div className="my-3 row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
                <div className="sub-heading">About Me</div>
                <div className="profile-context">
                Experienced System Engineer with a demonstrated history of working in the education management industry. Skilled in Java programming, Angular and React with the certifications of Big Data Analytics, Python, and Cyber Security. Strong information technology professional with a Bachelor of Engineering - BE focused on Computer Science from Chitkara University.
                </div>
                </div>
                
                <div className="col-md-3 ">
                <div className="sub-heading">Details</div>
                <div className="profile-context">
                   <div><strong>Name :</strong><div>Kshitij Mahajan</div></div>
                   <div><strong>Age :</strong><div>{time} years</div></div>
                   <div><strong>Contact Number :</strong><div>+91-9796910084</div></div>
                   
                   <div className="mt-5"><a href={require('./resources/KshitijMahajan.pdf')} target="_blank" rel="noreferrer noopener" ><button className="btn btn-info" style={{backgroundColor:"#22A39F"}}>Resume</button></a></div>
                </div>
                
            </div>
            </div>
            </div>
            
            
        </div>
    );
});

export default About;