import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const API = "https://panorbit.in/api/users.json";
const Profile = () => {
  const [users, setUsers] = useState([]);
  const [single, setSingle] = useState();

  const { id } = useParams();
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
    setSingle(users.filter((u) => u.id === id));
  }, [users]);

  useEffect(() => {
    fetchUser(API);
  }, []);

  return (
    <>
      <div>
        <p>User:{id}</p>
      </div>
    </>
  );
};

export default Profile;
