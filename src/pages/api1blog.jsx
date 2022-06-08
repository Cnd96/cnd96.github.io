import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import API1Src from "../assets/API1.png";
import LogoImgSrc from "../assets/one.png";

import { DeviceSize } from "../responsive";
export function Api1Page() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <div>
            <div style={{ backgroundColor: 'white', width: '100%', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => { navigate("/") }}>
                <img src={LogoImgSrc} style={{ width: '100px' }} />
            </div>
            <img src={API1Src} style={{ width: '100%', height: isMobile? '300px':'500px', objectFit: 'cover' }} />
            <div className="container" style={{paddingLeft:'4vW',paddingRight:'4vW'}}>

                <h3 style={{textAlign:'center',marginTop:'2vW'}}>
                    <span>Web API security part one</span>
                </h3>
                <div style={{ marginTop: '2vW', color: '#0c343d', fontSize: isMobile? '17px':'20px', marginBottom: '100px', letterSpacing: 'normal' }}>
                    <p style={{ textAlign: 'left' }}>
                        <span >
                            <i>“In computer programming, an application programming interface (API) is a set of subroutine definitions,
                                protocols, and tools for building application software"-Wikipedia&nbsp;
                            </i>
                        </span>
                    </p>
                    <div >
                        <span  >In general, an Application Programming Interface (API) is a software
                            intermediary that allows two applications to talk to each other. APIs have become a means for accessing data through digital channels such as mobile applications, web applications, cloud and the
                            Internet of Things (IoT), making it easy for enterprises to make their data, processes and capabilities available to wider audiences, whether they are customers, partners or employees.&nbsp;
                        </span>
                        <br></br>
                        <br></br>
                        <span>Based on the characteristics of the consuming party APIs can be classified into three. They are,</span>
                        <br></br>

                        <span>
                            1. B2C APIs - APIs consumed by an organization's customers.
                        </span>
                        <br></br>
                        <span>
                            2. B2B APIs - APIs consumed by other organizations.
                        </span>
                        <br></br>
                        <span>
                            3. Internal APIs - APIs consumed by intra-organizationally.
                        </span>
                        <br></br>
                        <br></br>
                        <span  >
                            During the past years, API development has been increased astronomically due to
                            the digital transformation and APIs have allowed businesses to transition from entities governed by centralized IT
                            to open IT that promotes self-service. However, this growth is making API security a top concern. Since APIs are exposed for
                            the public network, and they are typically well documented or easily reverse-engineered, they are highly sensitive to malicious attacks and Denial of Service (DoS) attacks.
                        </span>
                    </div>
                    <br></br>
                    <p style={{ textAlign: 'left' }}>
                        <span style={{}}>
                            <i>"By 2022, API abuses will be the most-frequent attack vector resulting in data breaches for enterprise
                                web applications”- Gartner Research
                            </i>
                        </span>
                    </p>
                    <br></br>
                    <h3 >
                        <span>Highly publicized API attacks</span>
                    </h3>
                    <div>
                        <ul>
                            <li>
                                <span >Facebook - A massive data breach was discovered on September 25, 2018, that has affected over 50 million accounts. Mark Zuckerberg
                                    said that the attackers used Facebook developer APIs for this attack.
                                </span>
                            </li>
                            <li>
                                <span >Apple iPhone- In September 2018, iPhone mobile device management API was found to be vulnerable to brute-forcing, allowing unauthorized
                                    access to confidential information.
                                </span>
                            </li>
                            <li>
                                <span >T-Mobile - Over 2 million T-Mobile customers personal information was access by a hacker in August 20,2018 by using an improperly
                                    secured API. In 2017, they had a similar issue with their&nbsp; "wsg" API.
                                </span>
                            </li>
                            <li>
                                <span ><span >Internal Revenue Service U.S.A. (</span>IRS)-&nbsp; Hackers breached more than 100,000 accounts of taxpayers accounts who
                                    had used the IRS's "Get Transcript" application.
                                </span>
                            </li>
                            <li>
                                <span ><span>Valve - A vulnerability was found in the marketplace API&nbsp;</span>in October 2018 that leaked game license keys.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <h3 >
                        <span>Understanding API Security Vulnerabilities
                        </span>
                    </h3>
                    <div >
                        <span  >

                            When it comes to web API testing, <a href="https://owasp.org/www-project-api-security/" target="_blank">Open Web Application Security Project(OWASP) Top 10 </a>
                            is one of the best reference guides anyone can use.
                            OWASP is an online community that produces freely-available articles, methodologies, documentation, tools, and technologies in the field of the web application.
                            The OWASP Top 10 is a standard awareness document for developers and web application security. It represents a broad consensus about the most critical security risks to web applications.
                        </span>
                    </div>
                    <br />
                    <br />
                    <h3 >
                        <span>OWASP Top 10 Web Application Security Risks
                        </span>
                    </h3>
                    <br />
                    <div>
                        <ol>
                            <li><span ><span >Broken object-level authorization-According to OWASP this is the number one API attack in 2019.
                            </span>
                                <i>"Attackers can exploit API endpoints that are vulnerable to broken object-level authorization by manipulating the
                                    ID of an object that is sent within the request,"-OWASP Top 10 document.
                                </i>Attackers use this vulnerability to access unauthorized sensitive data.<br />
                            </span>
                            </li>
                            <li>
                                <span >Broken Authentication - This vulnerability allows a hacker to either capture or bypasses the authentication methods that are used by a web application.</span>
                            </li>
                            <li>
                                <span >Excessive Data Exposure- As the name suggests, this vulnerability occurs when your API endpoint exposes more information than what the user really needs.</span>
                            </li>
                            <li>
                                <span >Lack of Resources & Rate Limiting- Sometimes APIs are published without any restrictions for amounts of calls and payload sizes. This leads to Denial of Service(DOS) attacks and brute force attacks.</span>
                            </li>
                            <li>
                                <span >Broken Function Level Authorization-By exploiting this vulnerability the attackers invoke admin API methods directly and get other user's resources.</span>
                            </li>
                            <li>
                                <span >Mass Assignment-Mass assignment is a vulnerability where an attacker maliciously attempts to change data in an object or database using an active record assignment pattern.</span>
                            </li>
                            <li>
                                <span >Security Misconfiguration- This can include insecure default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured HTTP headers or exposed error messages which guide attackers in their search for vulnerabilities.</span>
                            </li>
                            <li>
                                <span >Injection - It is a vulnerability that an attacker sends malicious data as part of a command or query to an interpreter (SQL, NoSQL, OS, and LDAP injections).</span>
                            </li>
                            <li>
                                <span >Improper Assets Management- This vulnerability occurs when attackers find old API versions or non-production versions of the APIs(testing,beta,staging) that are not well secured as the production APIs.</span>
                            </li>
                            <li><span >
                                <span >Insufficient Logging & Monitoring - This happens when the applications fail to log security-critical events and fail to monitor the system to identify any potential threats.</span>
                                <i>"Most breach studies show time to detect a breach is over 200 days, typically detected by external parties rather than internal processes or monitoring."-OWASP Top 10 document
                                </i>
                            </span>
                            </li>
                        </ol>
                    </div>
                </div>

            </div>
        </div>
    );
}
