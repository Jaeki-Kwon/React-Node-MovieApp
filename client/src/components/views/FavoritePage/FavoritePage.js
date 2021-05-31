import React, { useEffect, useState } from "react";
import "./favorite.css";
import axios from "axios";

function FavoritePage() {
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
    axios
      .post("/api/favorite/getFavoriteMovie", {
        userFrom: localStorage.getItem("userId"),
      })
      .then((response) => {
        console.log(response);
        if (response.data.success) {
          setFavorites(response.data.favorites);
          console.log(response.data.favorites);
        } else {
          alert("영화 정보를 가져오는데 실패 했습니다.");
        }
      });
  }, []);

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h2>Favorite Movies</h2>
      <br />

      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <td>Remove from favorite</td>
          </tr>
        </thead>
        <tbody>
          {Favorites.map((favorite, index) => (
            <tr key={index}>
              <td>{favorite.movieTitle}</td>
              <td>{favorite.movieRunTime} mins</td>
              <td>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FavoritePage;
