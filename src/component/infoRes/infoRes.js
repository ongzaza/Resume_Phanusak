import React, { useState } from "react";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import "./infoRes.css";
import { Link } from "react-scroll";
import Resu from "../../img/Resume_Phanusak.png";
import Tran from "../../img/Transcript_Phanusak.jpg";
export default function InfoRes() {
  return (
    <>
      <div className="text2" id="infores">
        <h1>Check my profile</h1>
      </div>
      <div>
        <AnimateSharedLayout>
          <div className="res-ul">
            <motion.ul layout initial={{ borderRadius: 25 }}>
              {
                <div>
                  {Item("My Resume", Resu)}
                  {Item("Transcript", Tran)}
                </div>
              }
            </motion.ul>
          </div>
        </AnimateSharedLayout>
      </div>
    </>
  );
}

function Item(a, b) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="res-li">
        <motion.li layout onClick={toggleOpen} initial={{ borderRadius: 10 }}>
          <motion.div className="avatar" layout />
          <AnimatePresence>
            {isOpen && (
              <center>
                <button class="button-75" role="button" onClick={toggleModal} n>
                  <span class="text">{a}</span>
                </button>
              </center>
            )}
          </AnimatePresence>
        </motion.li>
      </div>
      {modal && (
        <div div className>
          <div onClick={toggleModal}></div>
          <div className>
            <img src={b} width={550} />
            <br />
            <center>
              <Link to="infores" spy={true} smooth={true}>
                <button class="button-64" role="button" onClick={toggleModal}>
                  <span class="text">CLOSE</span>
                </button>
              </Link>
            </center>
          </div>
        </div>
      )}
    </>
  );
}

// function Content() {
//   return (
//     <motion.div
//       layout
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//     >
//       <div className="row" />
//       <div className="row" />
//       <div className="row" />
//     </motion.div>
//   );
// }
