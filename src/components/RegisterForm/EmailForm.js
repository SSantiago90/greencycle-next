import Link from "next/link";
import { useForm } from "react-hook-form";
import earth from "../../static/images/earth.png";
import Image from "next/image";
function EmailForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => props.onSubmit(data);

  return (
    <div className="form_container">
      <div className="form_banner">
        <Image src={earth} alt="earth" />
      </div>
      <div className="form_div">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="form_saludo">Hola, bienvenido a GreenCycle!</h3>
          <input
            placeholder="Email"
            {...register("email", {
              required: true,
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            })}
          />
          {errors.email?.type === "required" && (
            <p role="alert">Ingresa tu email</p>
          )}
          {errors.email?.type === "pattern" && (
            <p role="alert">Introduzca un email válido</p>
          )}

          {props.register && (
            <>
              <input
                placeholder="Nombre de usuario"
                type="text"
                {...register("username", { required: true })}
              />
              {errors.passwordRetype?.type === "required" && (
                <p role="alert">Ingresa un nombre de usuario</p>
              )}
            </>
          )}
          <input
            placeholder="Contraseña"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password?.type === "required" && (
            <p role="alert">Ingresa una contraseña</p>
          )}

          {props.register && (
            <>
              <input
                placeholder="Repite tu contraseña"
                type="password"
                {...register("passwordRetype", { required: true })}
              />
              {errors.passwordRetype?.type === "required" && (
                <p role="alert">Ingresa una contraseña</p>
              )}
            </>
          )}

          <button type="submit" className="form_button">
            {props.register ? "Completar datos" : "Iniciar sesión"}
          </button>
          <div className="cta_div">
            {props.register ? (
              <small>
                ¿Ya tienes cuenta?&nbsp;
                <Link href="/login">Ingresa aquí</Link>
              </small>
            ) : (
              <small>
                ¿Aun no tienes cuenta?&nbsp;
                <Link href="/registro">Registrate aqui</Link>
              </small>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmailForm;
