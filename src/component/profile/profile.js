import * as React from "react";
import { motion } from "framer-motion";
import "./profile.css";
// import pro from "../../img/Profile.png";

const Pro = () => {
  return (
    <div>
      <div className="banner" id="Profile">
        <div className="text1">
          <h1>HELLO</h1>
          <h1>My name is Phanusak</h1>
        </div>
      </div>
      <motion.div img className = "pic" 
        
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 2 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}

        whileHover={{ scale: 1.2, rotate: 180 }}
        
        whileTap={{ scale: 1, rotate: -360, borderRadius: "100%" }}
      >
        {/* <img className = "pic" src={pro}/> */}
      </motion.div>
    </div>
  );
};
export default Pro;
