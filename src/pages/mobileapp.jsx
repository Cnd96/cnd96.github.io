import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import MobileImgSrc from "../assets/mobilem.png";
import LogoImgSrc from "../assets/one.png";
import './styles.css';
import { DeviceSize } from "../responsive";
export function MobileAppsPage() {
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
                    <h2 style={{ color: '#676565' }}>Mobile Applications Development</h2>
                </div>
                <div className="container" style={{ padding: '0 3vW 3vW 3vW' }}>
                    <div className="row" >
                        <div className="col-12 col-md-6 " style={{ justifyContent: 'left' }}  >
                            <img src={MobileImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-12 col-md-6 " style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                            <h3 >Why mobile applications?</h3>
                            <p style={{ fontSize: '18px' }}>
                                The world is moving towards smartphones. We can turn your idea into a market-winning mobile app thanks to our years of experience designing mobile apps.
                                If you want to make your existing platforms mobile-friendly,
                                contact us to get started on a smooth journey that will complete your product ecosystem.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#f7f7f7' }} >
                    <div className="container" style={{ padding: '3vW' }}  >
                        <div className="row" >
                            <div className="col-12 col-md-6 order-md-2" style={{ justifyContent: 'left' }}  >
                                <img src={MobileImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-12 col-md-6 order-md-1" style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                                <h3 >Native App Development</h3>
                                <p style={{ fontSize: '18px' }}>
                                    Platform-specific native apps must be designed separately for each platform (iOS and Android).
                                    They are noted for their higher quality in terms of both aesthetic and functional elements, despite the fact that they increase the expense of creation. These platform-specific native Apps are created using native app development frameworks.
                                    Our technical methods, which have been developed for mobile app development, will ensure that your app is flawless.

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ padding: '3vW' }}>
                    <div className="row" >
                        <div className="col-12 col-md-6 " style={{ justifyContent: 'left' }}  >
                            <img src={MobileImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-12 col-md-6 " style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                            <h3 >Cross Platform Development</h3>
                            <p style={{ fontSize: '18px' }}>Cross-platform App developments work across both iOS and Android platforms. These apps are developed ones and work on both ios and android. This helps to develop your mobile apps faster.
                                We use cross platform technologies such as React Native and Flutter to build Cross-platform apps.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
