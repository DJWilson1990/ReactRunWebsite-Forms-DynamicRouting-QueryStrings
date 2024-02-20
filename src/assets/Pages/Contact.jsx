import { useState } from "react";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    enquiry: "",
  });

  function handleSubmit(event) {
    preventDefault();
  }

  function handleChange(event) {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div>
      <h1>CONTACT</h1>
      <p>Fill out the form and we will get back to you as soon as possible!</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={formValues.email}
          onChange={handleChange}
        />
        <label htmlFor="enquiry">Enquiry</label>
        <input
          type="text"
          id="enquiry"
          name="enquiry"
          value={formValues.enquiry}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}
