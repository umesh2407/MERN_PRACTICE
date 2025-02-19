import React from "react";

const Profile = ({ data, setData }) => {
  const { name, age, email } = data;

  // prevState → Represents the previous state before updating. 

  const handleInputChange = (e, item) => {
    setData((prevState) => ({ ...prevState, [item]: e.target.value }));
  };
  return (
    <div>
      <div>
        <label>Name: </label>
        <input
          className="border border-gray-400 p-2 m-2"
          type="text"
          value={name}
          onChange={(e) => handleInputChange(e, "name")}
        ></input>
      </div>
      <div>
        <label>Age: </label>
        <input
          className="border border-gray-400 p-2 m-2"
          type="number"
          value={age}
          onChange={(e) => handleInputChange(e, "age")}
        ></input>
      </div>
      <div>
        <label>Email: </label>
        <input
          className="border border-gray-400 p-2 m-2"
          type="email"
          value={email}
          onChange={(e) => handleInputChange(e, "email")}
        ></input>
      </div>
    </div>
  );
};

export default Profile;
