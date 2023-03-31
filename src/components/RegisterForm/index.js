import Link from "next/link";
import { useState } from "react";
import DataForm from "./DataForm";
import EmailForm from "./EmailForm";
import { useRouter } from "next/router";

export default function RegisterForm(props) {
  const [formEmail, setFormEmail] = useState(false);
  const [registerComplete, setRegisterComplete] = useState(false);
  const [errors, setErrors] = useState();

  const navigate = useRouter();
  function handleSubmitEmail() {
    setFormEmail(true);
  }

  async function handleSubmitData() {
    let response = await fetch("/api/users/register");
    let jsonData = await response.json();
    console.log(jsonData);
    setRegisterComplete(jsonData);
  }

  async function handleLogin(data) {
    const JSONdata = JSON.stringify(data);

    let response = await fetch("/api/users/login", {
      method: "POST",
      body: JSONdata,
    });

    let jsonData = await response.json();
    if (jsonData.auth) {
      navigate.push("/dashboard");
    } else {
      setErrors(jsonData.message);
    }
  }

  if (registerComplete) {
    return (
      <div>
        <h2>Gracias por registrarte!😀</h2>
        <Link href="/login">
          <small>Ahora inicia sesión</small>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {!formEmail ? (
        <EmailForm
          onSubmit={props.register ? handleSubmitEmail : handleLogin}
          register={props.register}
        />
      ) : (
        <DataForm onSubmit={handleSubmitData} />
      )}
      <div>
        {!props.register && (
          <div>
            <small>
              ¿Aún no tienes cuenta?{" "}
              <Link href="/registro">Registrate aquí</Link>
            </small>
          </div>
        )}
        {errors && (
          <div>
            <small style={{ color: "darksalmon" }}>
              Error al iniciar sesión: {errors}
            </small>
          </div>
        )}
      </div>
    </div>
  );
}
