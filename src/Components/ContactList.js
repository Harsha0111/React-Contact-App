import React from "react";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts }) => {
  const renderContactList = contacts.map((con) => {
    return <ContactCard contact={con}></ContactCard>;
  });
  return <div className="ui celled list">{renderContactList}</div>;
};

export default ContactList;
