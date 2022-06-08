import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import EComImgSrc from "../assets/ecomm.png";
import LogoImgSrc from "../assets/one.png";
import './styles.css';
import { DeviceSize } from "../responsive";
export function EComServicePage() {
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
                    <h2 style={{ color: '#676565' }}>E-Commerce apps</h2>
                </div>
                <div className="container" style={{ padding: '0 3vW 3vW 3vW' }}>
                    <div className="row" >
                        <div className="col-12 col-md-6 " style={{ justifyContent: 'left' }}  >
                            <img src={EComImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-12 col-md-6 " style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                            <h3 >Why E-Commerce apps?</h3>
                            <p style={{ fontSize: '18px' }}>
                                Simply put, because the world is moving more and more into the digital realm every day.
                                According to marketing research firm Coleman Parkes, 21-40% of a business’s contributions are a direct result of e-Commerce
                                and that number is expected to grow rapidly over the coming years. With the growing impact of the digital community affecting the way business is done,
                                now is the time to start thinking about an e-Commerce solution.
                            </p>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: '#f7f7f7' }} >
                    <div className="container" style={{ padding: '3vW' }}  >
                        <div className="row" >
                            <div className="col-12 col-md-6 order-md-2" style={{ justifyContent: 'left' }}  >
                                <img src={EComImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                            </div>
                            <div className="col-12 col-md-6 order-md-1" style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                            <h3 >Popular E-Commerce Apps</h3>
                            <p style={{ fontSize: '18px' }}>• Amazon</p>
                            <p style={{ fontSize: '18px' }}>• eBay</p>
                            <p style={{ fontSize: '18px' }}>• Paytm</p>
                            <p style={{ fontSize: '18px' }}>• Starbucks</p>
                            <p style={{ fontSize: '18px' }}>• Walmart</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container" style={{ padding: '3vW' }}>
                    <div className="row" >
                        <div className="col-12 col-md-6 " style={{ justifyContent: 'left' }}  >
                            <img src={EComImgSrc} style={{ width: isMobile ? '100%' : '85%', height: isMobile ? '250px' : '350px', objectFit: 'cover' }} />
                        </div>
                        <div className="col-12 col-md-6 " style={{ color: '#676565', margin: 'auto', paddingTop: '3vW', textAlign: 'center' }} >
                            <h3 >Benefits of E-Commerce Apps</h3>
                            <p style={{ fontSize: '18px' }}>• Less Investment For Set-Up</p>
                            <p style={{ fontSize: '18px' }}>• Reduced Operational Cost</p>
                            <p style={{ fontSize: '18px' }}>• No Geographical Limitations </p>
                            <p style={{ fontSize: '18px' }}>• Easy To Scale Up Your Business</p>
                            <p style={{ fontSize: '18px' }}>• Open 24X7</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
