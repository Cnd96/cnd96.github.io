import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import ITStaffSrc from "../assets/itstaff.jpg";
import LogoImgSrc from "../assets/one.png";

import { DeviceSize } from "../responsive";

export function ITStaffPage() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <div style={{ backgroundColor: 'white', width: '100%', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => { navigate("/") }}>
                <img src={LogoImgSrc} style={{ width: '100px' }} />
            </div>
            <img src={ITStaffSrc} style={{ width: '100%', height: isMobile ? '300px' : '500px', objectFit: 'cover' }} />
            <div className="container" style={{ paddingLeft: '4vW', paddingRight: '4vW' }}>
                <h3 style={{ textAlign: 'center', marginTop: '2vW', }}>
                    <span>IT staff augmentation</span>
                </h3>
                <div style={{ marginTop: '2vW', color: '#0c343d', fontSize: isMobile ? '17px' : '20px', marginBottom: '100px', }}>
                    <div >
                        <span >In the fast changing world of high technology, to stay on track, many companies around the world must not only keep an eye on trends but
                            also stay one step ahead. To meet market challenges and remain competitive, both startups and large enterprises need a wide range of technical skills.
                            Where to get them for your business?
                        </span>
                        <br></br>
                        <br></br>
                        <span>There are three possible ways to address this issue,</span>
                        <br></br>

                        <span>
                            1. Establishing a new in-house team consisting of experts with the necessary technology.
                        </span>
                        <br></br>
                        <span>
                            2. Training the current team.
                        </span>
                        <br></br>
                        <span>
                            3. Finding highly skilled professionals from abroad to expand a current project team.
                        </span>
                        <br></br>
                        <br></br>
                        <span>Paying full-time wage to the inhouse staff and training software engineers for a project can be costly. Therefore, one of the most convenient models of
                            cooperation with external teams is the staff augmentation with its flexibility and scalability.
                        </span>
                        <br></br>
                        <br></br>
                        <h4 >
                            <span>What Is IT Staff Augmentation?
                            </span>
                        </h4>
                        <div >
                            <span>
                                IT Staff Augmentation is a business strategy of delegating software development project to an third party company instead of executing it within in-house capabilities.
                                This can be done on a temporary or permanent basis and this allows businesses to immediately find the right fit for hard-to-fill or temporary positions, which boosts
                                the scalability and efficiency of project development. Companies all over the world are now using this strategy to achieve their objectives faster and more cost-effectively.</span>
                        </div>
                        <br></br>
                        <h4 >
                            <span>Who needs staff augmentation?
                            </span>
                        </h4>
                        <div >
                            <span>
                                Staff augmentation is one of the most effective strategies to grow both startups and established businesses.
                                Even though small businesses have many common characteristics and share general assets, the existing time of a firm influences the way of thinking.
                                It forces us to consider both business kinds' preferences from various perspectives.

                            </span>
                        </div>
                        <br></br>
                        <h4 >
                            <span>Benefits of IT Staff Augmentation
                            </span>
                        </h4>
                        <div >
                            <span>
                                There are several benefits that come with IT staff augmentation. Here are some,
                            </span>
                            <br></br>
                            <ul>
                                <li>
                                    High productivity level : Project outsourcing teams may handle several projects at the same time but using a staff augmentation team keeps developers focused on a single one at all times,
                                    allowing them to be more productive. Being motivated and dedicated to one client’s huge goal is a great feeling.

                                </li>
                                <li>Guaranteed Talent : With IT staff augmentation you are able to hire with a diverse and qualified software development team with all sorts of skill sets. They will come to development process 
                                    on-demand and that is going to work out the best for you. Additionally, IT staffing companies have access to a larger pool of IT talent. This allows you to find IT professionals with the specific 
                                    skills and experience you need for your project.</li>
                                <li>Cost-effectiveness : Staff augmentation is a great option for companies that cannot afford to hire full-time workers. Paying full-time wage to the inhouse staff and training software engineers for a 
                                    project can be costly. Therefore, staff augmentation can help you avoid the inconvenience and cost of hiring and training additional software engineers. Furthermore, IT staff augmentation can provide you with a 
                                    larger pool of qualified workers.</li>
                                <li>Minimal influence : Augmentation staff can be added or deleted at any time, and they are designed to seamlessly integrate into the work environment. They make it simple for IT to finish critical projects without 
                                    disturbing the business strategy.</li>
                                <li>Growth and adaptability : Flexible hiring allows companies to expand their operations on a trial basis without committing to a full-time workforce and risking failure or investment loss. Team augmentation services 
                                    provide growing businesses more alternatives by allowing them to hire on a project basis to evaluate their market acceptance. </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
