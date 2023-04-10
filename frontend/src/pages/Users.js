import React, { useEffect, useState } from "react";
import UsersComponent from "../components/UsersComponent";
import Axios from "axios";

const Users = ({ userinfo }) => {
  const [refreshTrigger, setRT] = useState(false);

  const instance = Axios.create({
    baseURL: "http://127.0.0.1:5000",
    withCredentials: false,
  });

  useEffect(() => {
    console.log("refreshing");
    instance.get("/create").then((response) => {
      console.log(response.data);
    });
  }, [refreshTrigger]);

  useEffect(() => {
    setTimeout(set, 5000);
  }, [refreshTrigger]);
  const set = () => {
    setRT(!refreshTrigger);
  };

  return (
    <div>
      <UsersComponent></UsersComponent>
    </div>
  );
};

export default Users;
