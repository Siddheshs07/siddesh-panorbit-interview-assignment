import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const API = "https://panorbit.in/api/users.json";

const UserData = () => {
  const [users, setUsers] = useState([]);

  const fetchUser = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.users.length > 0) {
        setUsers(data.users);
      }
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchUser(API);
  }, []);
  return (
    <>
      <div className="user-list-main">
        <div className="user-container">
          <div className="heading">
            <p className="heading-text">Select an account</p>
          </div>
          <div className="user-list">
            {users &&
              users?.map((curUser) => (
                <div className="list-main" key={curUser.id}>
                  <Link className="list" to={`/profile/${curUser.id}`}>
                    <img
                      className="user-images"
                      src={curUser.profilepicture}
                      alt={curUser.name}
                    />
                    <p className="usernames">{curUser.name}</p>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default UserData;
