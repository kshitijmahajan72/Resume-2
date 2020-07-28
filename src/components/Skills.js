import React, { memo } from 'react';

const Skills = memo(() => {
    // const skills=["React", "Bootstrap","css(3)","HTML(5)","JSON","MYSQL","XML","Command Line Interface","JQuery","Java", "JavaScript","Object Oriented Programming","AngularJs","Elastic Search","C","CPP"];
    return (
        <div>
            <div className="abilities">
            <div className="heading">Abilities</div>
            <span><b>उद्यमेन हि सिद्ध्यन्ति कार्याणि न मनोरथैः।</b></span>
            <hr></hr>
            
            <div className="text-left mt-4 sub-topic">
                <div className="sub-heading">Skills</div>
                <div className="row">
                    <div className="col-md-5  ">
                    <ul className="list-unstyled mr-1" >
                            <li className="skills checke"><span>ReactJs <img src="https://img.icons8.com/ultraviolet/20/000000/react.png" alt="react"/></span>
                                <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                </span>
                            </li>
                            <li className="skills checke"><span>Bootstrap <img src="https://img.icons8.com/color/20/000000/bootstrap.png" alt="bootstrap"/></span>
                            <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>CSS(3) <img src="https://img.icons8.com/dusk/20/000000/css3.png" alt="css"/></span>
                            <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>HTML(5) <img src="https://img.icons8.com/color/20/000000/html-5.png" alt="html"/></span>
                            <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>JavaScript <img src="https://img.icons8.com/color/20/000000/javascript.png" alt="javascript"/></span>
                            <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span>
                                </li>
                            <li className="skills"><span>AngularJs <img src="https://img.icons8.com/color/20/000000/angularjs.png" alt="angular"/></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                </span></li>
                            <li className="skills"><span>ES6
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="es6"
                                width="20" height="20"
                                viewBox="0 0 172 172"
                                ><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="none" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0"><path d="M0,172v-172h172v172z" fill="none" stroke="none" strokeWidth="1"></path><g fill="#ffd600" stroke="none" strokeWidth="1"><path d="M21.5,150.5v-129h129v129z"></path><path d="M105.8445,118.06008c2.47967,4.02767 5.17433,7.88692 10.88258,7.88692c4.7945,0 7.31,-2.38292 7.31,-5.67958c0,-3.94525 -2.6015,-5.34633 -7.87617,-7.64325l-2.89175,-1.23267c-8.34558,-3.54033 -13.89617,-7.9765 -13.89617,-17.34692c0,-8.63583 6.61125,-15.20767 16.942,-15.20767c7.35658,0 12.642,2.54775 16.45467,9.21992l-9.0085,5.75842c-1.98158,-3.54033 -4.12442,-4.93425 -7.44617,-4.93425c-3.38983,0 -5.53625,2.13925 -5.53625,4.93425c0,3.45433 2.15,4.85183 7.11292,6.99108l2.89175,1.23267c9.83625,4.18892 15.38325,8.46742 15.38325,18.08508c0,10.363 -8.18433,16.04258 -19.17083,16.04258c-10.74642,0 -16.84883,-5.39292 -20.24583,-12.06867zM64.328,118.35392c1.81317,3.2465 4.56875,5.74408 8.53192,5.74408c3.79117,0 5.97342,-1.49783 5.97342,-7.32075v-37.94392h11.94325v39.77858c0,12.06508 -6.99825,17.55475 -17.21792,17.55475c-9.23425,0 -15.89925,-6.2565 -18.61542,-12.06867z"></path></g><g fill="#000000" stroke="none" strokeWidth="1"><path d="M85.545,104.62v6.74h-27.12v22.17h31.5v6.75h-39.75v-62.56h39.32v6.79h-31.07v20.11zM118.625,112.39v0c-7.07333,-2.03333 -12.22333,-4.53 -15.45,-7.49c-3.22,-2.96667 -4.83,-6.62667 -4.83,-10.98v0c0,-4.92667 1.97,-9.00333 5.91,-12.23c3.94,-3.22 9.06,-4.83 15.36,-4.83v0c4.29333,0 8.12333,0.83 11.49,2.49c3.36667,1.66 5.97333,3.95333 7.82,6.88c1.85333,2.92 2.78,6.11333 2.78,9.58v0h-8.3c0,-3.78 -1.20333,-6.75333 -3.61,-8.92c-2.40667,-2.16 -5.8,-3.24 -10.18,-3.24v0c-4.06667,0 -7.24,0.89333 -9.52,2.68c-2.27333,1.79333 -3.41,4.28 -3.41,7.46v0c0,2.54667 1.08,4.7 3.24,6.46c2.16,1.76667 5.84,3.38 11.04,4.84c5.2,1.46 9.27,3.07 12.21,4.83c2.93333,1.76667 5.11,3.82333 6.53,6.17c1.41333,2.34667 2.12,5.11 2.12,8.29v0c0,5.07333 -1.97667,9.13333 -5.93,12.18c-3.95333,3.05333 -9.23667,4.58 -15.85,4.58v0c-4.3,0 -8.31,-0.82333 -12.03,-2.47c-3.72667,-1.64667 -6.6,-3.90333 -8.62,-6.77c-2.02,-2.86667 -3.03,-6.11667 -3.03,-9.75v0h8.3c0,3.78 1.39667,6.76667 4.19,8.96c2.79333,2.18667 6.52333,3.28 11.19,3.28v0c4.35333,0 7.69,-0.88667 10.01,-2.66c2.32,-1.77333 3.48,-4.19333 3.48,-7.26c0,-3.06667 -1.07333,-5.43667 -3.22,-7.11c-2.14667,-1.68 -6.04333,-3.33667 -11.69,-4.97z"></path></g><path d="M40.175,151.14v-84.28h111.65v84.28z" fill="#ff0000" stroke="#50e3c2" strokeWidth="3" opacity="0"></path></g></svg>

                            </span>
                            <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>ElasticSearch <img src="https://img.icons8.com/color/20/000000/elasticsearch.png" alt="elasticsearch"/></span>
                            <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                </span>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <ul className="list-unstyled mr-1" >
                            <li className="skills"><span>Java <img src="https://img.icons8.com/color/20/000000/java-coffee-cup-logo.png" alt="java"/></span>
                            <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>TypeScript <img src="https://img.icons8.com/color/20/000000/typescript.png" alt="typescript"/></span>
                            <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>JSON <img src="https://img.icons8.com/nolan/20/json.png" alt="json"/></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>XML<img src="https://img.icons8.com/color/25/000000/xml.png" alt="xml"/></span>
                            <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>SQL <img src="https://img.icons8.com/color/20/000000/sql-database-administrators-group.png" alt="sql"/></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>CPP <img src="https://img.icons8.com/ios/25/000000/c-plus-plus.png" alt="cpp"/></span>
                            <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>Python <img src="https://img.icons8.com/color/20/000000/python.png" alt="python"/></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                </span>
                            </li>
                            <li className="skills"><span>Firebase<img src="https://img.icons8.com/color/20/000000/firebase.png" alt="firebase"/></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="text-left mt-4 sub-topic">
                <div className="sub-heading">Tools</div>
                <div className="row">
                    <div className="col-md-5">
                        <ul className="list-unstyled mr-1" >
                        <li className="skills"><span>Eclipse <img src="https://img.icons8.com/office/20/000000/java-eclipse.png" alt="eclipse" /></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span></li>
                        <li className="skills"><span>Visual Studio <img src="https://img.icons8.com/fluent/20/000000/visual-studio-code-2019.png"  alt="visualstudio"/></span>
                        <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span></li>
                        <li className="skills"><span>Notepad++ <img src="https://img.icons8.com/color/23/000000/notepad-plus-plus.png"  alt="notepad"/></span>
                        <span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span></li>
                        <li className="skills"><span>Oracle Database <img src="https://img.icons8.com/color/25/000000/oracle-logo.png"  alt="oracle"/></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star  mx-1"></span>
                                </span></li>
                        </ul>
                    </div>
                    <div className="col-md-5">
                        <ul className="list-unstyled mr-1" >
                        <li className="skills responsive"><span>Github <img src="https://img.icons8.com/fluent/20/000000/github.png"  alt="github"/></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star  mx-1"></span>
                                </span></li>
                        <li className="skills responsive"><span>Adobe Photoshop <img src="https://img.icons8.com/fluent/20/000000/adobe-photoshop.png"  alt="photoshop"/></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star mx-1"></span>
                                </span></li>
                        <li className="skills responsive"><span>Microsoft Office <img src="https://img.icons8.com/color/20/000000/microsoft.png"  alt="ms"/></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                </span></li>
                        <li className="skills responsive"><span>MongoDB<img src="https://img.icons8.com/color/20/000000/mongodb.png" alt="mongo"/></span><span className="float-right star">
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star checked mx-1"></span>
                                <span className="fa fa-star  mx-1"></span>
                                <span className="fa fa-star  mx-1"></span>
                                </span></li>
                        </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
});

export default Skills;