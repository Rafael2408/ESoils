import { useEffect, useState } from "react";
import "../assets/styles/Estilo_Formularios.css";
import { useNavigate } from "react-router-dom";
import GetMap from '../helpers/FineScriptMap'

function SoilLocation() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(GetMap, 800, null);
  }, []);

  return (
    <>
      <section className="Data" id="content">
        <h1 className="Titulo_propiedades font_preview_soil">Location</h1>
        <div>
          <div className="Steps steps_preview_soil">
            <ul className="Tipo tipo_preview_soil">
              <li>
                <div id="myMap"></div>
              </li>
            </ul>
          </div>

          <div className="Botones_sumbit">
            <button className="submit" onClick={() => navigate("/soils")}>
              ← Previous
            </button>
            <button
              type="submit"
              className="submit"
              onClick={() => navigate("/physical-properties")}
            >
              Next →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default SoilLocation;
