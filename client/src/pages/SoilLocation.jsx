import { useEffect } from "react";
import "../assets/styles/Estilo_Formularios.css";
import {useNavigate} from 'react-router-dom'

function SoilLocation() {

  useEffect(() =>{
    
  }, [])

  const navigate = useNavigate()
  return (
    <>
      <section className="Data" id="content">
        <h1 className="Titulo_propiedades font_preview_soil">Location</h1>
        <div>
          <div className="Steps steps_preview_soil">
            <ul className="Tipo tipo_preview_soil">
              <li>
                <div id="myMap">
                </div>     
              </li>
            </ul>
          </div>

          <div className="Botones_sumbit">
            <button className="submit"
              onClick={() => navigate("/soils")}
            >← Previus</button>
            <button
              type="submit"
              className="submit"          
              onClick={() => navigate('/physical-properties')}
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