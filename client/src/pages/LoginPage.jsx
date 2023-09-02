import logov2 from "../assets/IMAGENES/Logo-version2.png";
import "../assets/styles/Estilo_login-general.css";

import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  document.body.style = "background: #090505;";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);
  });

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="esp_img">
          <img src={logov2} width="230" />
          <h1>
            <b>Log in</b>
          </h1>
          <div id="form_login">
            {signinErrors.map((error, i) => (
              <div className="warning" key={i}>
                {error}
              </div>
            ))}

            <p>
              <input
                type="email"
                name="email"
                className="boxes"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </p>
            {errors.email && <span className="warning">Email is required</span>}

            <p>
              <input
                type="password"
                name="password"
                className="boxes"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </p>
            {errors.password && (
              <span className="warning">Password is required</span>
            )}
            <div className="cont_btn_login">
              <div className="cont_aux_btn_login">
                <p id="arrow">🡢</p>
                <button id="submit" type="submit">
                  Log in
                </button>
              </div>
            </div>
            {/* <p id="cont_recover_account">
              <a href="Recover-account-general.html" id="recover_account">
                Forgot password?
              </a>
            </p> */}
          </div>
          <div id="final_txt">
            <p id="without_account">Don't have an account?</p>
            <a className="btn-log-sign">
              <b onClick={() => navigate("/register")}>Sign up</b>
            </a>
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginPage;
