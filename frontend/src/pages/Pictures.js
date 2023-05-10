import React, { useEffect, useState } from "react";
import PicturesComponent from "../components/PicturesComponent";
import Axios from "axios";

const Pictures = () => {
  const instance = Axios.create({
    baseURL: "http://127.0.0.1:5000",
    withCredentials: false,
  });

  useEffect(() => {
    instance.post("/pictures");
    console.log("sent post");
  }, []);

  return (
    <div>
      <PicturesComponent></PicturesComponent>
    </div>
  );
};

export default Pictures;
