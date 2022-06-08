import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import API1Src from "../assets/api2.jpg";
import LogoImgSrc from "../assets/one.png";

import { DeviceSize } from "../responsive";
export function Api2Page() {
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
            <img src={API1Src} style={{ width: '100%', height: isMobile ? '300px' : '500px', objectFit: 'cover' }} />
            <div className="container" style={{ paddingLeft: '4vW', paddingRight: '4vW' }}>

                <h3 style={{ textAlign: 'center', marginTop: '2vW' }}>
                    <span>Web API security part two</span>
                </h3>
                <div style={{ marginTop: '2vW', color: '#0c343d', fontSize: isMobile ? '17px' : '20px', marginBottom: '100px', letterSpacing: 'normal' }}>
                    <p style={{ textAlign: 'left' }}>
                        <span  >
                            In my first article on API security, I explained about the APIs and about the security threats of APIs. In this article, I will explain how to mitigate the API vulnerabilities mentioned in that article.
                        </span>
                    </p>
                    <br></br>
                    <div >
                        <h3 >
                            <span>1.Broken Object Level Authorization</span>
                        </h3>
                        <span  >Broken object-level authorization vulnerability occurs because of two reasons.
                            First one is enumerable identifiers and the second one is lack of checking of access rights on the requests.
                            If we provide solutions for these two issues, we can mitigate this vulnerability.
                            Some solutions for these issues are,</span>
                        <br></br>
                        <ul>
                            <li>
                                <span >
                                    Implement authorization checks with user policies and hierarchy.
                                </span>
                            </li>
                            <li>
                                <span >
                                    Verifying whether the user has permissions to access the objects, every time access is attempted.
                                </span>
                            </li>
                            <li>
                                <span >
                                    Using random IDs instead of auto-increment IDs.
                                </span>
                            </li>
                            <li>
                                <span >
                                    Using an ID that is stored in the session object rather than using an ID sent by the user.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <div >
                        <h3 >
                            <span>2.Broken  Authentication</span>
                        </h3>
                        <span >Broken authentication is a threat that can be prevented easily by implementing some changes.
                            We can use multi-factor authentication or two-factor authentication for all logins to prevent brute force, credential stuffing, and stolen credential attacks. Increasing the complexity of user passwords is another good way to reduce this vulnerability.
                            Few more steps that can be used to prevent broken authentication are,</span>
                        <br></br>
                        <ul>
                            <li>
                                <span >
                                    Rate-limiting the login attempts.
                                </span>
                            </li>
                            <li>
                                <span >
                                    Blacklisting IPs.
                                </span>
                            </li>
                            <li>
                                <span >
                                    Developing strong session management controls.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <div >
                        <h3 >
                            <span>3.Excessive Data Exposure</span>
                        </h3>
                        <span >Prevention of this vulnerability should start from the API design phase.
                            Since we cannot rely on the client side to filter the data, it is important to review all the API use cases and the response payloads, to check whether a response carries other than the required information.
                            We should carefully define schemas for all the API responses and error responses.</span>

                    </div>
                    <br></br>
                    <div >
                        <h3 >
                            <span>4.Lack of Resources & Rate Limiting</span>
                        </h3>
                        <span >Defing throttle rates at the application level and API level can mitigate this vulnerability.
                            This includes execution timeouts, maximum allowable memory,
                            the number of records per page that can be returned to a user,
                            or the number of processes permitted within a defined timeframe.</span>

                    </div>
                    <br></br>
                    <div >
                        <h3 >
                            <span>5.Broken Function Level Authorization</span>
                        </h3>
                        <span >Broken functional level authorization issue is related to access control at functionality level and involve authentication authorization modules as protection mechanisms.
                            To mitigate this vulnerability, it is required to create an appropriate authentication and authorization module that is invoked from all the business functions and it should deny all access by default, requiring explicit grants to specific roles for access to every function. Furthermore, we should only allow operations to users belonging to the appropriate
                            group or role and review API endpoints against function level authorization flaws according to the groups hierarchy and business logic.</span>

                    </div>
                    <br></br>
                    <div >
                        <h3 >
                            <span>6.Mass Assigment</span>
                        </h3>
                        <span >This vulnerability have several alternative names depending on the backend framework:</span>
                        <br></br>
                        <ul>
                            <li>
                                <span >
                                    Mass Assignment: Ruby on Rails, NodeJS
                                </span>
                            </li>
                            <li>
                                <span >
                                    Autobinding: Spring MVC, ASP NET MVC.
                                </span>
                            </li>
                            <li>
                                <span >
                                    Object injection: PHP
                                </span>
                            </li>
                        </ul>
                        <span  >
                            And these backend frameworks and some programming languages provide specific solutions for this vulnerability. Whitelist the bindable, non-sensitive fields and Blacklist the non-bindable, sensitive fields are the solutions provided by most of them.
                            <a href="https://code.tutsplus.com/tutorials/mass-assignment-rails-and-you--net-31695" target="_blank">This tutorial </a>
                            will give you some idea on how to deal with mass assignment issue with Ruby on Rails. In addition to the solutions provided by these technologies we can use Data Transfer Objects (DTOs) to avoid binding inputs directly to domain objects and handle this issue.
                        </span>
                    </div>
                    <br></br>
                    <div >
                        <h3 >
                            <span>7.Security Misconfiguration</span>
                        </h3>
                        <span >To prevent this vulnerability, efforts from multiple parties are required.
                            For example, suppose that the developer implements a secure code, but it is still up to the integration team to properly integrate the application into production, and the responsibility of the system administrator to actively patch and update the system.
                            The best way to prevent this is educating and the staff on current security trends. Some recommendations for security misconfiguration are:</span>
                        <br></br>
                        <ul>
                            <li>
                                <span >
                                    Keeping software up to date
                                </span>
                            </li>
                            <li>
                                <span >
                                    Encrypting data
                                </span>
                            </li>
                            <li>
                                <span >
                                    Enforcing strong access controlls
                                </span>
                            </li>
                            <li>
                                <span >
                                    Removing unnecessary features, libraries, functions from the web app
                                </span>
                            </li>
                            <li>
                                <span >
                                    Running automated scans and doing audits periodically
                                </span>
                            </li>
                        </ul>
                    </div>
                    <br></br>
                    <div >
                        <h3 >
                            <span>8.Injection</span>
                        </h3>
                        <span >
                            By using techniques like query parameterization, stored procedures and ORM tools can give some protection for the injections.
                            By using them, it is ensured that the attacker cannot change the intent of a query, even if commands are inserted by the attacker.
                            Whitelisting, validating and encoding inputs are some other processes we can use to mitigate injections.
                        </span>

                    </div>
                    <br></br>
                    <div >
                        <h3 >
                            <span>9.Improper Assets Management</span>
                        </h3>
                        <span>
                            We can do things like taking the inventory of all of our APIs and API hosts to ensure clear separation between production ,
                            development and other environments. Furthermore by, limiting the public access to the APIs,
                            avoiding accessing of production data sources from non-production environments and using API firewalls can mitigate this vulnerability.
                        </span>
                    </div>
                    <br></br>
                    <div >
                        <h3 >
                            <span>10.Insufficient Logging & Monitoring</span>
                        </h3>
                        <span>
                            Inorder to find a vulnerability of an application, an attacker should spend a lot of time with the application.
                            If there is no sufficient logging and monitoring, attackers can easily exploits the vulnerabilities.
                            Therefore, maintaining a detailed and secure logs of all access attempts is important to prevent this issue and improve the security of the application.
                            Logs should be treated like sensitive information and they should include enough detail to identify the attacker.
                            Finally we can integrate with SIEMs and other monitoring systems to continuously monitor logs and the APIs.
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
