import { useState } from "react";
import "./opai.css";
import { Configuration, OpenAIApi } from "openai";
// import { ToastContainer, toast } from 'react-toastify';
import Swal from 'sweetalert2';

const Opai = () => {
  const [modal, setModal] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [dataAi, setdataAi] = useState("");

  const configuration = new Configuration({
    apiKey: "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"
  });
  const openai = new OpenAIApi(configuration);

  if(modal) {
    document.body.classList.add('active-modal')
   
  } else {
    document.body.classList.remove('active-modal')
   
  }

  const toggleModal = () => {
    if (prompt == "") {
      
      Swal.fire({
        icon: 'error',
        title: 'Plz type something!',
        
      })
    } else {
    setModal(!modal);
    }
  };

  const ing = () => { 
    toggleModal();
    generateImage();
  }

  const generateImage = async () => {
      const res = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "512x512",
      });
      setdataAi(res.data.data[0].url);
      console.log(res.data.data[0].url);
    
  };

  return (
    <div id="opai">
      <center>
      <div className="text-opai">
      <h2>
          Let see something special!!
      </h2>
      <h4>
          Create your own picture here
      </h4>
      </div>
      <textarea
        className="textarea"
        placeholder="Type something"
        onChange={(e) => setPrompt(e.target.value)}
      />
      <br />
      <button class="button-ai" role="button" onClick={ing}><span class="text">
        Click
        </span>
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <h2 className="text-modalhead">Here your picture</h2>
             <img src={dataAi}></img> 
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
            
          </div>                                
        </div>
      )}
      </center>
    </div>
  );
};
export default Opai;
