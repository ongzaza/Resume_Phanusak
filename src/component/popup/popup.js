// import React, { useState } from "react";
// import "./popup.css";

// export default function Popup(a,b) {
//   const [modal, setModal] = useState(false);
//   if(b==true){setModal(!modal);}
//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   if(modal) {
//     document.body.classList.add('active-modal')
//   } else {
//     document.body.classList.remove('active-modal')
//   }

//   return (
//     <>
//       {modal && (
//         <div className="modal">
//           <div onClick={toggleModal} className="overlay"></div>
//           <div className="modal-content">
//             <img src={a} width={550} height={750} />
//             <button className="close-modal" onClick={toggleModal}>
//               CLOSE
//             </button>
//           </div>
//         </div>
//       )} 
//     </>
//   );
// }