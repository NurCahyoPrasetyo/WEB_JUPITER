import React, { useState } from "react";
import { Button, Modal, Row, Col } from "react-bootstrap";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputForm from "./InputForm";

const CustomForm = ({ status, message, onValidated }) => {
    let email, name;
    const submit = () =>
      email &&
      name &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value,
        NAME: name.value,
        COUNTRY: 'SEA',
        TAGS: 'Pre Register'
      });
  
    return (
      <div
        style={{
          background: "#efefef",
          borderRadius: 2,
          padding: 10,
          display: "inline-block"
        }}
      >
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && (
          <div
            style={{ color: "red" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        {status === "success" && (
          <div
            style={{ color: "green" }}
            dangerouslySetInnerHTML={{ __html: message }}
          />
        )}
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (name = node)}
          type="text"
          placeholder="Your name"
        />
        <br />
        <input
          style={{ fontSize: "2em", padding: 5 }}
          ref={node => (email = node)}
          type="email"
          placeholder="Your email"
        />
        <br />
        <button style={{ fontSize: "2em", padding: 5 }} onClick={submit}>
          Submit
        </button>
      </div>
    );
  };

const Register = () => {
  const MAILCHIMP_URL =
    "https://gmail.us20.list-manage.com/subscribe/post?u=87fa41a12ccc41692bc4c0814&amp;id=3e785bb404";

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(MAILCHIMP_URL);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Register
      </Button>

      <MailchimpSubscribe
        url={MAILCHIMP_URL}
        render={({ subscribe, status, message }) => (
          <InputForm
            status={status}
            message={message}
            onValidated={(formData) => subscribe(formData)}
          />
        )}
      /> */}

      <div>
        <h1>react-mailchimp-subscribe Demo</h1>
        <h2>Default Form</h2>
        <MailchimpSubscribe url={MAILCHIMP_URL} />
        <h2>Custom Form</h2>
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={({ subscribe, status, message }) => (
            <CustomForm
              status={status}
              message={message}
              onValidated={(formData) => subscribe(formData)}
            />
          )}
        />
      </div>
    </>
  );
};

export default Register;
