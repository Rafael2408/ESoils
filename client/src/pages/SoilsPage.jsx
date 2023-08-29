import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "../assets/styles/Estilo_Index.css";
import "../assets/styles/Estilo_opciones_mis_registros.css";
import Photo_ver_registros from "../assets/IMAGENES/Photo_ver_registros.png";
import Photo_nuevo_registro from "../assets/IMAGENES/Photo_nuevo_registro.png";

function SoilsPage() {
  const { user } = useAuth();
  // console.log(user);
  const navigate = useNavigate();

  const myRegisters = () => {
    navigate("/my-registers");
  };
  const formPage = () => {
    navigate("/soil-location");
  };

  return (
    <>
      <section className="Data">
        <div id="cont_img">
          <h1 className="Titulo_propiedades">My records</h1>
          <div className="sec_img">
            <div className="effectRecord" onClick={myRegisters}>
              <button className="btn_op_reg" onClick={myRegisters}>
                View my records
              </button>
              <img src={Photo_ver_registros} width="400" />
            </div>

            <div className="effectRecord" onClick={formPage}>
              <button className="btn_op_reg" onClick={formPage}>
                New registration
              </button>
              <img src={Photo_nuevo_registro} width="400" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SoilsPage;
