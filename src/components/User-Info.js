import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/User-Info.css";

const UserInfo = ({ username }) => {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}`
      /*, {
        headers: {
          Authorization: `token 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`,
        },
      }*/
      )
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [username]);

  return (
    <div className="user-info">
      <img src={userInfo.avatar_url} alt={userInfo.name} />
      <h1>{username}</h1>
      <div className="info">
        <div>
          <p>{userInfo.public_repos}</p>
          <p>Repositories</p>
        </div>
        <div>
          <p>{userInfo.followers}</p>
          <p>Followers</p>
        </div>
        <div>
          <p>{userInfo.following}</p>
          <p>Following</p>
        </div>
      </div>
      <Link to={userInfo.html_url} target="_blank" className="github-link">
        <button>Go to GitHub</button>
      </Link>
    </div>
  );
};

export default UserInfo;
