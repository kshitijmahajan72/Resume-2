import React from 'react';

function Projects() {
    return (
        <div>
            <div className="projects">
                <div className="heading">Projects</div>
                <hr></hr>
                <div className="m-4 ">
                <div className="card-deck">
                    
                    <div className="card">
                        <img className="card-img-top" src={require('./resources/covid-19.png')} alt="covid-19" height="230px"/>
                        <div className="card-body">
                        <h5 className="card-title">CoVID-19 India</h5>
                        <p className="card-text">Live tracking of CoVID-19 cases in India.</p>
                        <p><button className="btn btn-info" data-toggle="collapse" href="#covid-19" aria-expanded="false" aria-controls="covid-19">Read More</button></p>
                                <div className="collapse multi-collapse" id="covid-19">
                                    <div className="card card-body m-1" >
                                        <p>
                                            <strong>CoVID-19</strong> is a global pandemic of corona virus disease caused by severe acute respiratory syndrome.
                                            
                                        </p>
                                        <p>
                                        It is static website that awares people about the spread of disease. It shows state wise and district wise spread of cases in India. Graph on number of active and recovered cases of each district has also been plotted.
                                        </p>
                                        <ul className="text-justify">
                                            <li><strong>Made in React Js</strong></li>
                                            <li>API is used to fetch Data</li>
                                            <li>Bootstrap is used to beautify.</li>
                                            <li>React-ChartJs is used to plot graph .</li>
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require('./resources/effortTracking.png')} alt="effortTracking" height="230px"/>
                        <div className="card-body">
                        <h5 className="card-title">Employee Effort Tracking System</h5>
                        <p className="card-text">Project on tracking the effort of an employee of an Education and Training firm.</p>
                        <p><button className="btn btn-info" data-toggle="collapse" href="#effortTracking" aria-expanded="false" aria-controls="effortTracking">Read More</button></p>
                                <div className="collapse multi-collapse" id="effortTracking">
                                    <div className="card card-body m-1" >
                                        <p>
                                            Tracking the effort of an employee who also works as a trainer. Effort tracking is based on multiple pillars which also include the feedback points given by the manager and trainees.
                                        </p>
                                        <p>
                                            Admin / Manager's account access is provided manually. Admin can add and manage accounts of employee and Employees can add and manage accounts of trainee.
                                        </p>
                                        <ul className="text-justify">
                                            <li><strong>Made in Angular Js</strong></li>
                                            <li>Oracle database is used in backend.</li>
                                            <li>Bootstrap is used to beautify.</li>
                                            <li>J2EE is used as backend platform.</li>

                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src={require('./resources/flightBooking.jpg')} alt="flightBooking" height="230px"/>
                        <div className="card-body">
                        <h5 className="card-title">Flight Booking</h5>
                        <p className="card-text">View flight details and book tickets</p>
                        <p><button className="btn btn-info" data-toggle="collapse" href="#flightBooking" aria-expanded="false" aria-controls="flightBooking">Read More</button></p>
                                <div className="collapse multi-collapse" id="flightBooking">
                                    <div className="card card-body m-1" >
                                        <p>
                                            Checking the details of flight was never so easy for a traveller. Life is so much fun by exploring new places.
                                        </p>
                                        <p>
                                        A user can sign up through a google account and book flight tickets through the app. A wallet system is also added to make payment. Flight tickets can be downloaded in pdf format.
                                        </p>
                                        <ul className="text-justify">
                                            <li><strong>Made in Angular Js</strong></li>
                                            <li>Flights data is fetched through API</li>
                                            <li>Oracle database is used in backend.</li>
                                            <li>Bootstrap is used to beautify.</li>
                                            <li>J2EE is used as backend platform.</li>
                                            <li>Firebase is used for account signup/login through google</li>
                                            
                                        </ul>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>   
            <div className=" content">
               <div className="sub-heading">
                    Mini Projects
                </div>
                <hr></hr>
                <div className="m-4 ">
                        <div className="card-deck">
                        <div className="card">
                            <img className="card-img-top" src={require('./resources/quizApp.png')} alt="quizApp" height="230px"/>
                            <div className="card-body">
                            <h5 className="card-title">Quiz App</h5>
                            <p className="card-text">It is based on smart work. I used Angular Js as front-end and Google forms as the backend. The app was integrated with google forms which has a feature of creating quiz. The user has to login using google mail id and after wards create a quiz. The quiz is shared through a link. The result can be saved in the form of excel file in Google Sheets.</p>
                            
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={require('./resources/webScrapper.png')} alt="webScrapper" height="230px"/>
                            <div className="card-body">
                            <h5 className="card-title">Web scrapper</h5>
                            <p className="card-text">Web Scrapping is used in a variety of digital businesses that rely on data harvesting. It is made using python tool scrapy, which scraps the data from websites and store it in excel file. It requires a little knowledge of python and frontend too.</p>
                            
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={require('./resources/phoneBook.jpg')} alt="phoneBook" height="230px"/>
                            <div className="card-body">
                            <h5 className="card-title">Phone Book Directory</h5>
                            <p className="card-text">A Java project which uses data structure to store contacts. The benefit of using java is that it is cross platform and a complied java program can run on all platforms for which there exits a JVM.</p>
                            
                            </div>
                        </div>
                        <div className="card">
                            <img className="card-img-top" src={require('./resources/primer.jpg')} alt="dnaPrimer" height="230px"/>
                            <div className="card-body">
                            <h5 className="card-title">Potential Primer</h5>
                            <p className="card-text">A primer is a short single-stranded nucleic acid utilized by all living organisms in the initiation of DNA synthesis. A DNA sequence is checked using a python program which satisfies the charactersics of a potential primer.</p>
                            
                            </div>
                        </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
}

export default Projects;