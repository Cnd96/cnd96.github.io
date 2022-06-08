import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import WebImgSrc from "../assets/webappm.png";
import LogoImgSrc from "../assets/one.png";
import './styles.css';
import { DeviceSize } from "../responsive";
export function WebAppsPage() {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });
    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(isMobile)
    }, [])
    return (
        <div>
            <div style={{ position: 'fixed', backgroundColor: '#0178b4', width: '100%', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                onClick={() => { navigate("/") }}>
                <img src={LogoImgSrc} style={{ width: '100px' }} />
            </div>
            <div style={{ paddingTop: '70px' }} >

                <div className="container" style={{ padding: '3vW' }} >
                    <h2 style={{ color: '#676565' }}>Web Applications Development</h2>
                </div>
                <div className="container" style={{ padding: '0 3vW 3vW 3vW' }}>
                    <div className="row" >
                        <div className="col-12 col-md-6 " style={{ justifyContent: 'left' }}  >
                            <img src={WebImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-12 col-md-6 " style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                            <h3 >Why web applications?</h3>
                            <p style={{ fontSize: '18px' }}>An online presence is crucial for any business in today's fast-paced consumer society.
                                Whether you have a product to sell, a service to offer, or a message to share,
                                the internet is quickly becoming a global marketplace.
                                Our team can deliver an end-to-end web application that will increase the productivity of your business.</p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#f7f7f7' }} >
                    <div className="container" style={{ padding: '3vW' }}  >
                        <div className="row" >
                            <div className="col-12 col-md-6 order-md-2" style={{ justifyContent: 'left' }}  >
                                <img src={WebImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-12 col-md-6 order-md-1" style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                                <h3 >How we work?</h3>
                                <p style={{ fontSize: '18px' }}>Once you have shared your business requirement, we will collaborate with your specialists to develop a strategy
                                    for your application that is consistent with your mission and values. We will typically release working software
                                    using agile approach to prevent risks such as cost overruns or delivery delays, and to allow clients to track
                                    project progress and quality.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ padding: '3vW' }}>
                    <div className="row" >
                        <div className="col-12 col-md-6 " style={{ justifyContent: 'left' }}  >
                            <img src={WebImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-12 col-md-6 " style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                            <h3 >Application Development</h3>
                            <p style={{ fontSize: '18px' }}>We use cutting edge technologies, languages and frameworks for the product development and we work on all three tiers -
                                client, server and database of an application to build end-to-end web solutions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
