import React, { useEffect, useState } from "react";
import UsersComponent from "../components/UsersComponent";
import Axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Users = ({ userinfo }) => {
  const [refreshTrigger, setRT] = useState(false);
  const [users, setUsers] = useState([]);
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const instance = Axios.create({
    baseURL: "http://127.0.0.1:5000",
    withCredentials: false,
  });

  useEffect(() => {
    instance.get("/create").then((response) => {
      setUsers(response.data);
    });
  }, [refreshTrigger]);

  useEffect(() => {
    setTimeout(set, 3000);
  }, [refreshTrigger]);
  const set = () => {
    setRT(!refreshTrigger);
  };

  const add = () => {
    instance
      .post("/create", {
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone,
      })
      .then((response) => {
        setRT(!refreshTrigger);
      });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
  };

  const remove = (id) => {
    instance.post("/remove", { id: id }).then(() => {
      setRT(!refreshTrigger);
    });
  };

  return (
    <div>
      <h1>Users</h1>
      <div className="form-group">
        <Form>
          <Row>
            <Col>
              <input
                required
                type="text"
                placeholder="First Name"
                id="first_name"
                name="first_name"
                className="form-control"
                value={first_name}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              ></input>
            </Col>
            <Col>
              <input
                required
                type="text"
                placeholder="Last Name"
                id="last_name"
                name="last_name"
                className="form-control"
                value={last_name}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              ></input>
            </Col>
            <Col>
              <input
                required
                type="text"
                placeholder="Email"
                id="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </Col>
            <Col>
              <input
                required
                type="text"
                placeholder="Phone Number"
                id="phone"
                name="phone"
                className="form-control"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              ></input>
            </Col>
            <button
              className="btn btn-outline-success btn-sm"
              type="button"
              id="Add"
              onClick={add}
            >
              Finish
            </button>
          </Row>
        </Form>
      </div>
      <UsersComponent users={users} onDelete={remove} key={1}></UsersComponent>
    </div>
  );
};

export default Users;
