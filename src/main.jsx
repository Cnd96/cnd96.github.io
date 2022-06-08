import { useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from './components/navbar/index';
import { DeviceSize } from "./responsive";
import LogoImgSrc from "./assets/home.jpg";
import EcomImgSrc from "./assets/ecom.svg";
import WebImgSrc from "./assets/web.svg";
import ITStaffImgSrc from "./assets/itstaff.svg";
import MobileImgSrc from "./assets/mobile.svg";
import MobileMImgSrc from "./assets/mobilem.png";
import ITStaffMImgSrc from "./assets/itstaffm.png";
import WebMImgSrc from "./assets/webappm.png";
import EcommImgSrc from "./assets/ecomm.png";
import API1Src from "./assets/API1.png";
import BlogMobileSrc from "./assets/mobileapp.png";
import API2Src from "./assets/api2.jpg";
import BlogITSrc from "./assets/blogit.jpg";
import WhatsappSrc from "./assets/whatsapp.svg";


import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


export function MainPage(props) {
  const ServicesRef = useRef(null);
  const BlogRef = useRef(null);
  const ContactRef = useRef(null);
  const HomeRef = useRef(null);
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  const gotoServices = () =>
    window.scrollTo({
      top: ServicesRef.current.offsetTop,
      behavior: "smooth",
    });

  const gotoBlog = () =>
    window.scrollTo({
      top: BlogRef.current.offsetTop,
      behavior: "smooth",
    });

  const gotoHome = () =>
    window.scrollTo({
      top: HomeRef.current.offsetTop,
      behavior: "smooth",
    });

  const gotoContacts = () =>
    window.scrollTo({
      top: ContactRef.current.offsetTop,
      behavior: "smooth",
    });
  return (
    <div style={{ overflowX: 'hidden' }} >
      <Navbar gotoServices={gotoServices} gotoBlog={gotoBlog} gotoHome={gotoHome} gotoContacts={gotoContacts} />
      <div className='main-banner' style={{ background: 'rgba(0, 0, 0, 0.5)' }} ref={HomeRef}>

        <img src={LogoImgSrc} style={{ height: isMobile ? '380px' : '550px', width: '100%', objectFit: 'cover', opacity: '0.8' }} />
        <div class="centered"><h3 style={{ fontSize: isMobile ? '5vW' : '3vW' }}>Your Partner of Choice</h3><br></br>
          <div style={{ backgroundColor: 'black', background: 'rgba(76, 88, 138, 0.4)', padding: '2vw', borderRadius: '8px' }}>
            <h4 style={{ fontColor: 'white', fontSize: isMobile ? '3vW' : '1.5vW' }} >
              We are a team that builds software products that accelerates your business up for long-lasting success
            </h4>
          </div>
        </div>
      </div>

      <div className='container' style={{ padding: '3vW 5vW 0 5vW', textAlign: 'center' }}>
        <p style={{ fontSize: '18px' }}>
          SwifySoft is a firm that specializes in delivering high-quality services and products for its clients.
          SwifySoft mainly provides expert-level software developers that build impactful solutions for our clients.
          With the IT staff augmentation services, our remote team becomes an integral part of your team by
          carefully selecting each team member based on the requirements and expertise you demand.
          SwifySoft is always open to keeping things flexible with the team and clients.
        </p>
      </div>

      <div className='container' style={{ padding: '3vW 4vW', textAlign: 'center' }}>
        <h2 style={{ margin: '10px 20px 4vW 20px', color: '#0178b4' }} ref={ServicesRef} >Our Services Include</h2>
        <div className="row">
          <div className="col-6 col-md-4 col-lg-3" style={{ marginBottom: '4vW' }}>
            <div className="card" onClick={() => { navigate("/services/ITStaff") }}>
              <img src={ITStaffMImgSrc} className="card-main-img" />
              <div className='card-round-div'>
                <img src={ITStaffImgSrc} className="card-round-div-img" />
              </div>
              <div className="card-container">
                <h4 className={'card-container-text'} >IT Staff Augmentation</h4>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3" style={{ marginBottom: '4vW' }}>
            <div className="card" onClick={() => { navigate("/services/web") }}>
              <img src={WebMImgSrc} style={{ width: '100%', borderRadius: ' 5px 5px 0 0' }} />
              <div className='card-round-div'>
                <img src={WebImgSrc} className="card-round-div-img" />
              </div>

              <div className="card-container">
                <h4 className={'card-container-text'} >Web App Development</h4>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3" style={{ marginBottom: '4vW' }}>
            <div className="card" onClick={() => { navigate("/services/mobile") }}>
              <img src={MobileMImgSrc} style={{ width: '100%', borderRadius: ' 5px 5px 0 0' }} />
              <div className='card-round-div'>
                <img src={MobileImgSrc} className="card-round-div-img" />
              </div>
              <div className="card-container">
                <h4 className={'card-container-text'} >Mobile App Development</h4>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3" style={{ marginBottom: '4vW' }}>
            <div className="card" onClick={() => { navigate("/services/ECom") }}>
              <img src={EcommImgSrc} style={{ width: '100%', borderRadius: ' 5px 5px 0 0' }} />
              <div className='card-round-div'>
                <img src={EcomImgSrc} className="card-round-div-img" />
              </div>
              <div className="card-container">
                <h4 className={'card-container-text'} >E-Commerce Apps</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={BlogRef}>
        <div className='container blog-list-container'>
          <h2 style={{ margin: '10px 20px 4vW 20px', color: '#0178b4' }} >Blog</h2>

          <div className="row">
            <div className="col-12 col-md-6 blog-container" onClick={() => { navigate("/blog/ITStaff") }}>
              <img src={BlogITSrc} className={"blog-image"} />
              <div className="overlay">
                <div className="blog-tile-text ">What is IT staff augmentation ?</div>
              </div>

            </div>
            <div className="col-12 col-md-6 blog-container" >
              <img src={BlogMobileSrc} className={"blog-image"} />
              <div className="overlay">
                <div className="blog-tile-text ">Top mobile application development frameworks</div>
                {/* https://amzur.com/blog/top-mobile-app-development-frameworks */}
              </div>
            </div>
            <div className="col-12 col-md-6 blog-container" onClick={() => { navigate("/blog/API2") }} >
              <img src={API2Src} className={"blog-image"} />
              <div className="overlay">
                <div className="blog-tile-text ">Web API security part (2)</div>
              </div>
            </div>
            <div className="col-12 col-md-6 blog-container" onClick={() => { navigate("/blog/API1") }} >
              <img src={API1Src} className={"blog-image"} />
              <div className="overlay">
                <div className="blog-tile-text ">Web API security part (1)</div>
              </div>

            </div>
          </div>

          {/* <div className="row" style={{ marginBottom: '4vW'  }}>
          <div className="col-12 col-md-6" style={{position:'relative'}}>
             <img src={API1Src} className={"blog-image"} />
             <div className="blog-container" style={{color:'red'}}>sss</div>
          </div>
          <div className="col-12 col-md-6"  >
            <div style={{textAlign:'left'}}>
              <h4 style={{backgroundColor:"#0178b4",color:'white',width:'100%'}}>Web API security part (1)</h4>
              <p style={{color:'white',fontSize:'18px'}}>“In computer programming, an application programming interface (API) is a set of subroutine definitions, 
              protocols, and tools for building application software"-Wikipedia. 
              <br></br>In general, an Application Programming 
              Interface (API) is a software intermediary that allows two applications to talk to each other. 
              APIs have become a means for accessing data through digital channels such </p>
            </div>
          </div>
        </div> */}

          {/* <div class="container">
          <img src="https://1.bp.blogspot.com/-QhmjFEbCuP0/X9RkGcnsi7I/AAAAAAAABMk/HWQyH6DurHE9UDMC3TBVL8Ur7iCUhgWyQCLcBGAsYHQ/w945-h600-p-k-no-nu/API.jpg" />
          <div class="overlay">My Name is John</div>
        </div>   */}


        </div>
      </div>
      <footer style={{ background: '#0178b4', paddingTop: '30px', paddingBottom: '30px', color: 'white', }}>
        <div class="container">
          <div class="row row-30">
            <div class="col-md-4 col-xl-5">
              <div class="pr-xl-4">
                <p hidden={isMobile}>
                  SwifySoft is a firm that specializes in delivering high-quality services and products for its clients.
                  SwifySoft mainly provides expert-level software developers that build impactful solutions for our clients.
                  With the IT staff augmentation services, our remote team becomes an integral part of your team by carefully selecting each team member based on the requirements and expertise you demand.
                  SwifySoft is always open to keeping things flexible with the team and clients.
                </p>
                <p ><span>©  </span><span >2022</span><span> </span><span>SwifySoft</span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div class="col-md-4" ref={ContactRef}>
              <h5>Contacts</h5>
              <dl >
                <dt>Address:</dt>
                <dd>Temporary address, 2nd Street, Colombo, Srilanka</dd>
              </dl>
              <dl >
                <dt>email:</dt>
                <dd>temporary@gmail.com</dd>
              </dl>
              <dl>
                <dt>phone:</dt>
                <dd style={{ fontSize: '18px', cursor: 'pointer' }} onClick={() => { window.open('https://api.whatsapp.com/send?phone=947777777777', "_blank"); }}> <img src={WhatsappSrc} style={{ height: '18px', width: '18px', }} />  +94 7777777777 </dd>
              </dl>
            </div>
            <div class="col-md-4 col-xl-3" style={{ cursor: 'pointer' }}>
              <h5>Links</h5>
              <h6 onClick={gotoHome}>Home</h6>
              <h6 onClick={gotoServices}>Services</h6>
              <h6 onClick={gotoBlog}>Blog</h6>
            </div>
          </div>
        </div>
      </footer >
    </div >
  );
}
