import { react, useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
export default function User() {
  let params = useParams();
  const id = params.id;
  const [user, setUser] = useState({});

  useEffect(() => {
    async function fetchData(params) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const listData = await response.json();
      console.log("listdata", listData);

      let userData = listData.find((x) => x.id === 1);
      console.log("data", userData);

      setUser(userData);
    }

    fetchData();
  }, []);

  function handleViewMore(id) {
    alert(JSON.stringify(user.find((x) => x.id === id)));
  }
  return (
    <>
      <p>User Page</p>
      {user ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //  backgroundColor:'red',
            marginBottom: 20,
            border: "1px solid",
            alignItems: "start",
            justifyContent: "center",
            paddingLeft: 20,
            maxWidth: 500
          }}
        >
          <p>ID: {user.id}</p>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>
            {/* Address: {user.address.street} {user.address.suite}
            {user.address.city} */}
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "end"
            }}
          >
            <button
              onClick={(e) => {
                handleViewMore(user.id);
              }}
            >
              View More
            </button>
          </div>
        </div>
      ) : (
        false
      )}
    </>
  );
}
