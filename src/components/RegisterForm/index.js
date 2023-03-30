import { useState } from "react";
import DataForm from "./DataForm";
import EmailForm from "./EmailForm";

export default function RegisterForm() {
  const [formEmail, setFormEmail] = useState(false);
  const [registerComplete, setRegisterComplete] = useState(false);

  function handleSubmitEmail() {
    setFormEmail(true);
  }

  async function handleSubmitData() {
    let resp = await fetch("/api/register");
    let dataResp = await resp.json();
    console.log(dataResp);
    setRegisterComplete(dataResp);
  }

  if (registerComplete) {
    return (
      <div>
        <h2>Gracias por registrarte!😀</h2>
      </div>
    );
  }

  return (
    <div>
      {!formEmail ? (
        <EmailForm onSubmit={handleSubmitEmail} />
      ) : (
        <DataForm onSubmit={handleSubmitData} />
      )}
    </div>
  );
}
