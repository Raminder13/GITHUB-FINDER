import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import UserInfo from "../components/User-Info";
import Repository from "../components/Repository";

const User = () => {
  const [username, setUsername] = useState("");
  const { id } = useParams();

  useEffect(() => {
    setUsername(id);
  }, [id]);

  return (
    <div className="user">
      <UserInfo username={username} />
      <Repository username={username} />
    </div>
  );
};

export default User;
