// import React, { useRef, useState } from "react";
// Import Swiper React components
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Navbar from "./component/navbar/navbar";
import Pro from "./component/profile/profile";
import Footer from "./component/footer/footer";
import InfoRes from "./component/infoRes/infoRes";
import Skill from "./component/skill/skill";
import Opai from "./component/opai/opai";
// import Popup from "./component/popup/popup";
import "./App.css";
// import Header from "./component/header/header";
// import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
// import resu from "./img/Resume_Phanusak.png";

export default function App() {
  return (
    <div className="">
      <div className="main">
      </div>
      <Navbar />
      <Pro />
      <div className="res-body">
        <InfoRes />
      </div>
     

      <div>
        <Skill />
      </div>
      <Opai/>
      
      <Footer />
      
    </div>
  );
}
