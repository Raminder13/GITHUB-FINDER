import React, { useState } from "react";
import "../style/Search.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [profile, setProfile] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${profile}`
      /*, {
        headers: {
          Authorization: `token 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`,
        },
      }*/
      )
      .then((res) => {
        console.log(res.data);
        setError("");
        setProfile("");
        navigate(`/user/${profile}`);
      })
      .catch((err) => {
        setError("User not found. Try again.");
        console.log(err);
      });
    setProfile("");
  };

  return (
    <div className="search">
      <h1>GitHub Finder</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Profile"
          value={profile}
          onChange={(e) => setProfile(e.target.value)}
        />{" "}
        <button>Search</button>
        <p className="error">{error}</p>
      </form>
    </div>
  );
};

export default Search;
