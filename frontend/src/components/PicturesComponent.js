import React from "react";
import black_picture from "../pictures/A_black_image.jpg.webp";
import currpic from "../pictures/currpic.png";

const PicturesComponent = () => {
  return (
    <div className="container">
      <table className="tbl">
        <tbody>
          <tr>
            <td>
              <img src={black_picture} alt="nothing" width={200}></img>
            </td>
            <td>
              <img src={black_picture} alt="nothing" width={200}></img>
            </td>
            <td>
              <img src={black_picture} alt="nothing" width={200}></img>
            </td>
          </tr>
          <tr>
            <td>
              <img src={black_picture} alt="nothing" width={200}></img>
            </td>
            <td>
              <img src={currpic} alt="nothing" width={200}></img>
            </td>
            <td>
              <img src={black_picture} alt="nothing" width={200}></img>
            </td>
          </tr>
          <tr>
            <td>
              <img src={black_picture} alt="nothing" width={200}></img>
            </td>
            <td>
              <img src={black_picture} alt="nothing" width={200}></img>
            </td>
            <td>
              <img src={black_picture} alt="nothing" width={200}></img>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PicturesComponent;
