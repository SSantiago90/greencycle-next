import { useState } from "react";
import DataForm from "./DataForm";
import EmailForm from "./EmailForm";

export default function RegisterForm() {
  const [formEmail, setFormEmail] = useState(false);

  function handleSubmitEmail() {
    setFormEmail(true);
  }

  function handleSubmitData() {
    console.log("datos completos...");
  }

  return (
    <div>
      {formEmail ? (
        <DataForm onSubmit={handleSubmitData} />
      ) : (
        <EmailForm onSubmit={handleSubmitEmail} />
      )}
    </div>
  );
}
