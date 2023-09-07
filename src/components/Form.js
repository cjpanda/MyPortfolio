import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Form = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // Form validation state
  const [errors, setErrors] = useState({});

  // Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = "Please enter your full name.";
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = "Please enter your email.";
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = "Please enter a subject.";
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = "Please enter a message.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData);
    
    formDataObject.access_key = "086105b0-dfb9-4806-8277-2879cf9a5620";

    // Reset success and failure messages
    setShowSuccessMessage(false);
    setShowFailureMessage(false);

    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("https://api.web3forms.com/submit", {
        body: JSON.stringify(formDataObject),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setButtonText("Send");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="w-full rounded-[20px] shadow-2xl flex flex-col px-8 py-8 bg-white dark:bg-purple-900"
      initial={{ y: 50 }}
      whileInView={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <h1 className="text-2xl font-bold dark:text-gray-50">Send me a Message</h1>

      {/* Full Name field */}
      <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">
        Full name<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        name="fullname"
        value={fullname}
        className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-light font-light text-dark dark:text-light ${
          errors["fullname"] ? "border-red-500" : ""
        }`}
        onChange={(e) => {
          setFullname(e.target.value);
          setErrors({ ...errors, fullname: "" }); // Clear the error when the user starts typing
        }}
      />
      {errors["fullname"] && (
        <div className="text-red-500 font-semibold mt-2 dark:text-gray-50">
          {errors["fullname"]}
        </div>
      )}

      {/* Email field */}
      <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">
        E-mail<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="email"
        name="email"
        value={email}
        className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-light font-light text-dark dark:text-light ${
          errors["email"] ? "border-red-500" : ""
        }`}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors({ ...errors, email: "" }); // Clear the error when the user starts typing
        }}
      />
      {errors["email"] && (
        <div className="text-red-500 font-semibold mt-2 dark:text-gray-50">
          {errors["email"]}
        </div>
      )}

      {/* Subject field */}
      <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">
        Subject<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <input
        type="text"
        name="subject"
        value={subject}
        className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-light font-light text-dark dark:text-light ${
          errors["subject"] ? "border-red-500" : ""
        }`}
        onChange={(e) => {
          setSubject(e.target.value);
          setErrors({ ...errors, subject: "" }); // Clear the error when the user starts typing
        }}
      />
      {errors["subject"] && (
        <div className="text-red-500 font-semibold mt-2 dark:text-gray-50">
          {errors["subject"]}
        </div>
      )}

      {/* Message field */}
      <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">
        Message<span className="text-red-500 dark:text-gray-50">*</span>
      </label>
      <textarea
        name="message"
        value={message}
        className={`bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-light font-light text-dark dark:text-light ${
          errors["message"] ? "border-red-500" : ""
        }`}
        onChange={(e) => {
          setMessage(e.target.value);
          setErrors({ ...errors, message: "" }); // Clear the error when the user starts typing
        }}
      ></textarea>
      {errors["message"] && (
        <div className="text-red-500 font-semibold mt-2 dark:text-gray-50">
          {errors["message"]}
        </div>
      )}

      {/* Success and Failure Messages */}
      {showSuccessMessage && (
        <div className="text-green-500 font-semibold mt-4 ">
          Form submitted successfully!
        </div>
      )}

      {showFailureMessage && (
        <div className="text-red-500 font-semibold mt-4 dark:text-gray-50">
          Form submission failed. Please check your input.
        </div>
      )}

      <div className="flex flex-row items-center justify-start">
        <button
          type="submit"
          className="px-10 mt-8 py-2 bg-dark text-light dark:bg-light dark:text-dark font-semibold rounded-md text-lg flex flex-row items-center"
        >
          {buttonText}
        </button>
      </div>
    </motion.form>
  );
};

export default Form;
