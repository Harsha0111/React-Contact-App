import React from "react";
import user from "../Images/user.png";

const ContactCard = ({ contact,clickHandler }) => {
  const { id, name, email } = contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt ="user"/>
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
         <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick = {() => clickHandler(id)}
      ></i>
     
      </div>
      
    </div>
  );
};

export default ContactCard;
