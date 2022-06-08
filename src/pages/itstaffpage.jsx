import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import ITStaffImgSrc from "../assets/itstaffm.png";
import LogoImgSrc from "../assets/one.png";
import './styles.css';
import { DeviceSize } from "../responsive";
export function ITStaffServicePage() {
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
                    <h2 style={{ color: '#676565' }}>IT Staff Augmentation</h2>
                </div>
                <div className="container" style={{ padding: '0 3vW 3vW 3vW' }}>
                    <div className="row" >
                        <div className="col-12 col-md-6 " style={{ justifyContent: 'left' }}  >
                            <img src={ITStaffImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-12 col-md-6 " style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                            <h3 >Why IT Staff Augmentation?</h3>
                            <p style={{ fontSize: '18px' }}>
                                IT Staff Augmentation is a business strategy of delegating software development project to an third party company instead of
                                executing it within in-house capabilities. This can be done on a temporary or permanent basis and this allows businesses to
                                immediately find the right fit for hard-to-fill or temporary positions, which boosts the scalability and efficiency of project development.
                                Companies all over the world are now using this strategy to achieve their objectives faster and more cost-effectively.

                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#f7f7f7' }} >
                    <div className="container" style={{ padding: '3vW' }}  >
                        <div className="row" >
                            <div className="col-12 col-md-6 order-md-2" style={{ justifyContent: 'left' }}  >
                                <img src={ITStaffImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-12 col-md-6 order-md-1" style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                                <h3 >Who needs staff augmentation?</h3>
                                <p style={{ fontSize: '18px' }}>
                                    Staff augmentation is one of the most effective strategies to grow both startups and established businesses.
                                    Even though small businesses have many common characteristics and share general assets,
                                    the existing time of a firm influences the way of thinking.
                                    It forces us to consider both business kinds' preferences from various perspectives.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ padding: '3vW' }}>
                    <div className="row" >
                        <div className="col-12 col-md-6 " style={{ justifyContent: 'left' }}  >
                            <img src={ITStaffImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-12 col-md-6 " style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                            <h3 >Benefits of IT Staff Augmentation</h3>
                            <p style={{ fontSize: '18px' }}>• High productivity level </p>
                            <p style={{ fontSize: '18px' }}>• Guaranteed Talent </p>
                            <p style={{ fontSize: '18px' }}>• Cost-effectiveness </p>
                            <p style={{ fontSize: '18px' }}>• Growth and adaptability</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
