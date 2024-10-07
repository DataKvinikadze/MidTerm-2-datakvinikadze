import React, { useEffect, useState } from "react";
import axios from "axios";
import { div, li } from "framer-motion/m";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://randomuser.me/api/?results=10");
      console.log(response.data.results);
      setData(response.data.results);
    };
    fetchData();
  }, []);
  return (
    <>
      <h1 className="text-3xl font-bold text-center">Midterm 2</h1>
      <ul>
        <div>
          {data.map((item) => (
            <div key={item.cell}>
              <li>{item.dob.age}</li>
              <li>{item.name.first}</li>
              <li>{item.login.username}</li>
              <li>{item.location.city}</li>
              <li>{item.location.country}</li>
              <li>{item.location.postcode}</li>
            </div>
          ))}
        </div>
      </ul>
    </>
  );
}

export default App;
