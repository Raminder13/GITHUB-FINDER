import axios from "axios";
import React, { useState, useEffect } from "react";
import "../style/Repository.css";

const Repository = ({ username }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((res) => {
        setRepositories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [username]);

  return (
    <div className="repository">
      <h2>My repositories</h2>
      <div className="repo-list">
        {repositories ? (
          repositories.map((repo) => {
            return (
              <div className="repo" key={repo.id}>
                <div>
                  <h3>{repo.name}</h3>
                  <p>{repo.description}</p>
                </div>
                <div style={{ color: "rgb(137, 137, 143)" }}>
                  Updated at{" "}
                  {new Date(repo.updated_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>
            );
          })
        ) : (
          <p>No repositories</p>
        )}
      </div>
    </div>
  );
};

export default Repository;
