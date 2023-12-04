"use client";

import React from "react";
import { Input } from "../Input";
import { TextField } from "../TextField";

export function ContactUsForm() {
  // const [emailBody, setEmailBody] = useState({
  //   Name: "",
  //   Email: "",
  //   Location: "",
  //   Body: "",
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    // const mailtoLink = `mailto:jamie@condorwebworks.co.uk?subject=${encodeURIComponent(
    //   `Website Query ${format(new Date(), "dd/MM/yyyy HH:mm")}`,
    // )}&body=${encodeURIComponent(JSON.stringify(emailBody))}`;

    // // Open the user's default email client
    // window.location.href = mailtoLink;
  };

  return (
    <form
      className="flex w-full flex-col max-lg:w-2/3"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <h1 className="w-full text-center text-lg text-white">
        Have you got any queries?
      </h1>
      <Input type="text" label="Fullname" placeholder="Enter fullname" />
      <Input type="email" label="Email" placeholder="Enter Email Address" />
      <Input type="text" label="Location" placeholder="Enter Location" />
      <TextField label="Message" placeholder="Add your query here" />
      <button
        className="mt-4 rounded-lg bg-orange-600 py-2 text-white"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
