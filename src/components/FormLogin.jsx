import imgLogo from "../../public/logo-indestec.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const clickBotonIniciar = handleSubmit((data) => {
    console.log(data);
    navigate("/")
  });

  return (
    <div className="main-form">
      <div className="img-form-left">
        <img className="img-logo" src={imgLogo} alt="" />
      </div>
      <div className="cont-form-right">
        <form className="box-form" onSubmit={clickBotonIniciar}>
          <h1>¡Bienvenidos!</h1>

          <div className="cont-icon-input-form">
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>

            <input
              className="input-form-login"
              type="text"
              placeholder="email"
              id="email"
              name="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Por favor ingrese el correo",
                },

                pattern: {
                  value: /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/,
                  message: "Por favor ingrese un correo valido",
                },
              })}
            />
          </div>

          {errors.email && (
            <span className="text-danger-form"> {errors.email.message} </span>
          )}

          <div className="cont-icon-input-form">
            <span>
              <FontAwesomeIcon icon={faLock} />
            </span>

            <input
              className="input-form-login"
              type="password"
              placeholder="password"
              name="password"
              {...register("password", {
                required: {
                  value: true,
                  message: "Por favor ingrese una contraseña",
                },
                minLength: {
                  value: 8,
                  message: "La contraseña debe contener minimo 8 caracteres",
                },
              })}
            />
          </div>

          {errors.password && (
            <span className="text-danger-form">{errors.password.message}</span>
          )}
          <button className="button-form-login" type="submit" value="Enviar">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
