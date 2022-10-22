import React from "react";
import Container from "react-bootstrap/Container";
import banner_icon from "../images/banner_icon.png";
import app_store from "../images/app_store.png";
import google_play from "../images/google_play.png";

function Banner() {
  return (
    <Container>
      <div className="row" style={{ paddingTop: 30, alignItems: "center" }}>
        <div className="col-xs-6 col-sm-8">
          <div>
            <h1 style={{ fontSize: 50, paddingBottom: 30 }}>
              Oder <span style={{ color: "#e2b887" }}>food </span>any time
              anytime, <br></br> anywher
            </h1>
          </div>
          <div>
            <h3 style={{ fontSize: 20, opacity: "75%", lineHeight: "33px" }}>
              Browse from our list of specials to place your order and have food
              <br></br> delivered to you on time. Affordable, tasty and fast!
            </h3>
          </div>
          <div className="row" style={{ paddingTop: 30 }}>
            <img
              className="col-xs-6 col-sm-3"
              src={app_store}
              alt={"play-store"}
            />
            <img
              className="col-xs-6 col-sm-3"
              src={google_play}
              alt={"app-staor"}
            />
          </div>
        </div>
        <div className="col-xs-6 col-sm-4">
          <img
            style={{
              width: "100%",
              height: 350,
              paddingBottom: 30,
              paddingTop: 30,
            }}
            src={banner_icon}
            alt={"egg-noddle"}
          />
        </div>
      </div>
    </Container>
  );
}

export default Banner;
