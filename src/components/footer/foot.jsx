import React from "react";
import "mdbreact/dist/css/mdb.css";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPagePro = () => {
  return (
    <MDBFooter
      color="stylish-color-dark"
      className="page-footer font-small pt-4 mt-4"
    >
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
              Humankind has never had a more urgent task than creating broad
              immunity for coronavirus. It’s going to require a global
              cooperative effort like the world has never seen. But I know we’ll
              get it done. There’s simply no alternative.The #coronavirus
              pandemic pits all of humanity against the virus. The damage to
              health, wealth, and well-being has already been enormous. This is
              like a world war, except in this case, we’re all on the same side.
              Everyone can work together to learn about #covid19 and develop
              tools to fight it. ~Bill Gates
            </h5>
            <p></p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <hr />
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          A simple React web app using the api from
          https://covid19.mathdro.id/api. Special Thanks to JavaScript Mastery!
        </MDBContainer>
      </div>
      <hr />
      <div className="footer-copyright text-center py-4">
        <MDBContainer fluid>
          Yash Mahant | Y.Mahant001@umb.edu | Computer Science Graduate Student
          | University of Massachusetts Boston
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPagePro;
