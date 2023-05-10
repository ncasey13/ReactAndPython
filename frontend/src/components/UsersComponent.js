import React, { useEffect, useState } from "react";

const UsersComponent = ({ users, onDelete }) => {
  return (
    <>
      <div className="table-responsive">
        <table className="table" id="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user[4]}>
                <td>{user[0]}</td>
                <td>{user[1]}</td>
                <td>{user[2]}</td>
                <td>{user[3]}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) => {
                      if (
                        !window.confirm(
                          "Are you sure you want to delete this User?"
                        )
                      ) {
                        e.preventDefault();
                      } else {
                        onDelete(user[4]);
                      }
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UsersComponent;
