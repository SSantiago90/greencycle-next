import { useForm } from "react-hook-form";
import Button from "../Button";

export default function DataForm(props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => props.onSubmit(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="Nombre"
        {...register("firstName", {
          required: true,
          minLength: 3,
          maxLength: 60,
        })}
      />
      {errors.firstName?.type === "required" && (
        <p role="alert" className="alert text-error">
          First name is required
        </p>
      )}
      {errors.firstName?.type === "maxLength" && (
        <p role="alert" className="alert text-error">
          Máximo de caracteres alcanzado
        </p>
      )}
      {errors.firstName?.type === "minLength" && (
        <p role="alert" className="alert text-error">
          Ingresá tu nombre completo
        </p>
      )}

      <br />
      <input
        placeholder="Apellido"
        {...register("lastName", { required: true, maxLength: 60 })}
      />
      {errors.lastName?.type === "required" && (
        <p role="alert" className="alert text-error">
          First name is required
        </p>
      )}
      {errors.lastName?.type === "maxLength" && (
        <p role="alert" className="alert text-error">
          Máximo de caracteres alcanzado
        </p>
      )}

      <input placeholder="Ciudad" {...register("city", { required: true })} />
      {errors.city?.type === "required" && (
        <p role="alert" className="alert text-error">
          First name is required
        </p>
      )}

      <input
        placeholder="Dirección"
        {...register("address", { required: true })}
      />
      {errors.address?.type === "required" && (
        <p role="alert" className="alert text-error">
          First name is required
        </p>
      )}

      <input
        type="number"
        placeholder="Teléfono"
        {...register("phone", { required: true, maxLength: 15 })}
      />
      {errors.phone?.type === "required" && (
        <p role="alert" className="alert text-error">
          First name is required
        </p>
      )}
      {errors.phone?.type === "maxLength" && (
        <p role="alert" className="alert text-error">
          Máximo de caracteres alcanzado
        </p>
      )}
      <div>
        <Button onClick={props.handleSubmit} size="xs" type={"borderless"}>
          Quiero completar mis datos en otro momento
        </Button>
      </div>
      <button type="submit">Registrarme</button>
    </form>
  );
}
