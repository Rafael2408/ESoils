import "../assets/styles/Estilo_login-general.css";
import logov2 from "../assets/IMAGENES/Logo-version2.png";

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/soils");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (
    <>
      <div className="esp_img">
        <img src={logov2} width="230" alt="" />
        <h1>
          <b>Sign up</b>
        </h1>

        {
          registerErrors.map((error, i) => (
            <div className="warning" key={i}>
              {error}
            </div>
          ))
        }

        <form onSubmit={onSubmit}>
          <p>
            <input
              type="text"
              name="name"
              className="boxes"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            {errors.name && <span className="warning">Name is required</span>}
          </p>
          <p>
            <input
              type="text"
              name="surname"
              className="boxes"
              placeholder="Surname"
              {...register("surname", { required: true })}
            />
            {errors.surname && <span className="warning">Surname is required</span>}
          </p>
          <p>
            <input
              type="text"
              name="id_number"
              className="boxes"
              placeholder="Identification number"
              {...register("id_number", { required: true })}
            />
            {errors.id_number && <span className="warning">Identification number is required</span>}
          </p>
          <p>
            <input
              type="email"
              name="email"
              className="boxes"
              placeholder="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <span className="warning">Email is required</span>}
          </p>
          <p>
            <input
              type="password"
              name="password"
              className="boxes"
              placeholder="Password"
              {...register("password", { required: true })}
            />
            {errors.password && <span className="warning">Password is required</span>}
          </p>
          <p>
            <input
              type="password"
              name="repeatPassword"
              className="boxes"
              placeholder="Repeat password"
              {...register("repeatPassword", { required: true })}
            />
            {errors.repeatPassword && <span className="warning">Password Repeated is required</span>}
          </p>

          <div className="cont_btn_login">
            <div className="cont_aux_btn_login">
              <p id="arrow">🡢</p>
              <button type="submit" id="submit">
                Sign up
              </button>
            </div>
          </div>
        </form>

        <div id="final_txt">
          <p id="without_account">Already have an account?</p>
          <a className="btn-log-sign" >
            <b onClick={() => navigate("/login")}>Log in</b>
          </a>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
