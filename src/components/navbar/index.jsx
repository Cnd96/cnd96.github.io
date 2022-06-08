import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "../../responsive";
import { MobileNavLinks } from "./mobileNav";
import { LaptopNavLinks } from "./laptopNav";
import { Logo } from "./logo";


export function Navbar(props) {
  const { gotoServices, gotoBlog, gotoHome, gotoContacts } = props;
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tab });

  return (
    <div
      style={{
        width: '100%',
        height: '70px',
        boxShadow: '0 1px 3px rgba(15, 15, 15, 0.13)',
        zIndex: '100',
        display: 'flex',
        alignItems: 'center',
        position: 'fixed',
        background: 'white'
      }}  >
      <div className="container" >
        <div className="row">
          <div className="col-3" style={{ paddingLeft: '5%' }} ><Logo /></div>
          <div className="col-8" style={{ display: 'flex', justifyContent: 'center' }} >
            {!isMobile &&
              <LaptopNavLinks gotoServices={gotoServices} gotoBlog={gotoBlog} gotoHome={gotoHome} gotoContacts={gotoContacts} />
            }
          </div>
          <div className="col-1" >
            {isMobile &&
              <MobileNavLinks gotoServices={gotoServices} gotoBlog={gotoBlog} gotoHome={gotoHome} gotoContacts={gotoContacts} />
            }
          </div>
        </div>
      </div>
    </div>
  );
}
