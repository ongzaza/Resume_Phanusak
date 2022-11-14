import "./skill.css";
import React from "react";


const Skill = () => {
  return (
    <>
      <center>
        <div className="text-skill" id="skill">
          <h1>My skill</h1>
        </div>
        {/* <table>
          <tr>
            <th>
              <h2 className="text-js">Java Script</h2>
            </th>
            <th>
              <h2 className="text-js">node.js</h2>
            </th>
          </tr>
          <tr>
            <td style={{"margin-left":"20%"}}>
              <div class="progress">
                <div class="progress-value1"></div>
              </div>
            </td>
            <td>
              <tr>
                <td style={{"margin":"20%"}}>
                  <div class="progress">
                    <div class="progress-value1"></div>
                  </div>
                </td>
              </tr>
            </td>
          </tr>
          <tr>
            <th>
              <h2 className="text-js">Java Script</h2>
            </th>
            <th>
              <h2 className="text-js">node.js</h2>
            </th>
          </tr>
          <tr>
            <td style={{"margin-left":"20%"}}>
              <div class="progress">
                <div class="progress-value1"></div>
              </div>
            </td>
            <td>
              <tr>
                <td style={{"margin":"20%"}}>
                  <div class="progress">
                    <div class="progress-value1"></div>
                  </div>
                </td>
              </tr>
            </td>
          </tr>
        </table> */}
        <div className="subtext" >
        <h2 className="subtext">Java Script</h2>
        <div class="progress">
                <div class="progress-value1"></div>
              </div>
        </div>
        <div className="subtext">
         <h2 className="subtext">Node js</h2>
         <div class="progress">
                <div class="progress-value2"></div>
              </div>
         </div>
         <div className="subtext" >
        <h2 className="subtext">React</h2>
        <div class="progress">
                <div class="progress-value3"></div>
              </div>
        </div>
        <div className="subtext">
         <h2 className="subtext">C</h2>
         <div class="progress">
                <div class="progress-value4"></div>
              </div>
         </div>
         <div className="subtext" >
        <h2 className="subtext">Java</h2>
        <div class="progress">
                <div class="progress-value5"></div>
              </div>
        </div>
        <div className="subtext">
         <h2 className="subtext">CSS</h2>
         <div class="progress">
                <div class="progress-value6"></div>
              </div>
         </div>
      </center>
    </>
  );
};
export default Skill;
