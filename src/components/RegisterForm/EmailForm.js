import { useForm } from "react-hook-form";

function EmailForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => props.onSubmit(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <button type="submit">
        {props.register ? "Completar datos" : "Iniciar sesión"}
      </button>
    </form>
  );
}

export default EmailForm;
