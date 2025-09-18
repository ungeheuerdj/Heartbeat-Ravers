import { useState } from "react";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    displayName: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Registration for ${formData.displayName} is not connected yet.`);
  };

  return (
    <section className="page">
      <h2>Create an account</h2>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Display name
          <input
            name="displayName"
            value={formData.displayName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Join the community</button>
      </form>
    </section>
  );
};

export default RegisterPage;
