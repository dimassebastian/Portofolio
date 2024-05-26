import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Modal from "./Modal";
// npm i @emailjs/browser

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_hcbd7hp",
          "template_n8qyb7n",
          form.current,
          "3WOSQyi85q4qROG6c"
        )
        .then(
          (result) => {
            console.log(result.text);
            setModalMessage("Message sent successfully!");
            setModalOpen(true);
            console.log("message sent");
          },
          (error) => {
            console.error(error.text);
          }
        );
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>

      {isModalOpen && <Modal message={modalMessage} onClose={closeModal} />}
    </StyledContactForm>
  );
};

export default Contact;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  max-width: 400px; /* Limit maximum width */
  margin-bottom: 3rem;
  font-size: 16px;

  form {
    
    flex-direction: column;
    
    input,
    textarea {
      width: 100%;
      padding: 10px; /* Increased padding for better touch experience */
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
      background: #050505;
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
        background:white;
      }
    }

    textarea {
      min-height: 100px;
      resize: vertical; /* Allow vertical resizing */
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: #050505;
      color: #ffff;
      border: 1px solid #ffffff; /* Set border */
      padding: 12px 20px; /* Increase padding for better touch experience */
      border-radius: 5px;
      font-size: 16px;

      &:hover {
        background: #1a1a1a; /* Darken background on hover */
      }
  }

  @media screen and (max-width: 768px) {
    font-size: 14px; /* Decrease font size on smaller screens */
  }
`;
