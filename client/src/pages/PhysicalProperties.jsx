import "../assets/styles/Estilo_Index.css";
import "../assets/styles/Estilo_Formularios.css";
import "../assets/styles/Estilo_Steps.css";
import {upDateForm} from '../helpers/steps';
import { useEffect } from "react";
import {NavStep41, NavStep42, NavStep43, NavStep44} from '../components/navStep'
import { useNavigate } from "react-router-dom";

function PhysicalProperties() {
  const navigate = useNavigate()

  useEffect(() =>{
    upDateForm()
  }, [])

  return (
    <>
      <section>
        <div
          action="http://localhost:3000/postFisicas"
          className="form"
          method="post"
        >
          <h1 className="Titulo_propiedades">Physical Properties</h1>
          <div className="form-step form-step-active">
            {/* <!-- Progress bar 1--> */}
            {<NavStep41/>}

            <div className="Steps">
              <ul className="Tipo">
                <li>
                  <strong>Apparent density</strong>
                </li>
                <li>
                  <strong>Real density</strong>
                </li>
                <li>
                  <strong>Relative density</strong>
                </li>
                <li>
                  <strong>Maximum dry density</strong>
                </li>
                <li>
                  <strong>Compressive strength</strong>
                </li>
                <li>
                  <strong>Thermal conductivity</strong>
                </li>
              </ul>

              <ul className="Values">
                <li>
                  <input
                    name="apparent_density"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="real_density"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="relative_density"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="maximum_dry_density"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="compressive_strength"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="thermal_conductivity"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
              </ul>

              <ul className="Descripcion">
                <li>
                  <strong>gcm^-3</strong>
                </li>
                <li>
                  <strong>gcm^-3</strong>
                </li>
                <li>&nbsp</li>
                <li>
                  <strong>(Mg/m)^3</strong>
                </li>
                <li>
                  <strong>MPa</strong>
                </li>
                <li>
                  <strong>(Wm)^-1 K^-1</strong>
                </li>
              </ul>
            </div>
            <div className="Botones_sumbit">
              <a className="submit"onClick={() => navigate('/soil-location')}>
                ← Previous
              </a>
              <a className="submit btn-next"
              >
                Next →
              </a>
            </div>
          </div>

          <div className="form-step">
            {/* <!-- Progress bar 2--> */}
            {<NavStep42/>}

            <div className="Steps">
              <ul className="Tipo">
                <li>&nbsp</li>
                <li>
                  <strong>Liquid</strong>
                </li>
                <li>
                  <strong>Plastic</strong>
                </li>
                <li>&nbsp</li>
                <li>
                  <strong>Silt</strong>
                </li>
                <li>
                  <strong>Clay</strong>
                </li>
                <li>
                  <strong>Gravel</strong>
                </li>
                <li>
                  <strong>Sand</strong>
                </li>
              </ul>

              <ul className="Values">
                <li>
                  <strong>Atterberg limits</strong>
                </li>
                <li>
                  <input
                    name="liquid"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="plastic"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <strong>Granulometric distribution</strong>
                </li>
                <li>
                  <input
                    name="silt"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="clay"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="gravel"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="sand"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
              </ul>

              <ul className="Descripcion">
                <li>&nbsp</li>
                <li>
                  <strong>%</strong>
                </li>
                <li>
                  <strong>%</strong>
                </li>
                <li>&nbsp</li>
                <li>
                  <strong>mm</strong>
                </li>
                <li>
                  <strong>mm</strong>
                </li>
                <li>
                  <strong>mm</strong>
                </li>
                <li>
                  <strong>mm</strong>
                </li>
              </ul>
            </div>
            <div className="Botones_sumbit">
              <a href="#" className="submit btn-prev">
                ← Previous
              </a>
              <a href="#" className="submit btn-next">
                Next →
              </a>
            </div>
          </div>

          <div className="form-step">
            {/* <!-- Progress bar 3--> */}
            {<NavStep43/>}

            <div className="Steps">
              <ul className="Tipo">
                <li>
                  <strong>Optimum moisture content</strong>
                </li>
                <li>
                  <strong>Plasticity index</strong>
                </li>
                <li>
                  <strong>Grain size</strong>
                </li>
                <li>
                  <strong>Water content</strong>
                </li>
                <li>
                  <strong>Color</strong>
                </li>
                <li>
                  <strong>Tensile strength</strong>
                </li>
              </ul>

              <ul className="Values">
                <li>
                  <input
                    name="optimum_moisture_content"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="plasticity_index"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="grain_size"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="water_content"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input name="color" type="color" className="valores" />
                </li>
                <li>
                  <input
                    name="tensile_strength"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
              </ul>

              <ul className="Descripcion">
                <li>
                  <strong>%</strong>
                </li>
                <li>
                  <strong>%</strong>
                </li>
                <li>
                  <strong>mm</strong>
                </li>
                <li>
                  <strong>% weight/weight</strong>
                </li>
                <li>&nbsp</li>
                <li>
                  <strong>Kg/cm^2</strong>
                </li>
              </ul>
            </div>
            <div className="Botones_sumbit">
              <a href="#" className="submit btn-prev">
                ← Previous
              </a>
              <a href="#" className="submit btn-next">
                Next →
              </a>
            </div>
          </div>
          <div className="form-step">
            {/* <!-- Progress bar 4--> */}
            {<NavStep44/>}

            <div className="Steps">
              <ul className="Tipo">
                <li>
                  <strong>Porosity</strong>
                </li>
                <li>
                  <strong>Initial moisture</strong>
                </li>
                <li>
                  <strong>Earring</strong>
                </li>
                <li>
                  <strong>Ground altitude</strong>
                </li>
                <li>
                  <strong>Average temperature</strong>
                </li>
                <li>
                  <strong>Rainfall regime</strong>
                </li>
              </ul>

              <ul className="Values">
                <li>
                  <input
                    name="porosity"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="initial_moisture"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="earring"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="ground_altitude"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="average_temperature"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    name="rainfall_regime"
                    type="number"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
              </ul>

              <ul className="Descripcion">
                <li>
                  <strong>%</strong>
                </li>
                <li>
                  <strong>%</strong>
                </li>
                <li>
                  <strong>%</strong>
                </li>
                <li>
                  <strong>m.s.m</strong>
                </li>
                <li>
                  <strong>°C</strong>
                </li>
                <li>
                  <strong>mm/año</strong>
                </li>
              </ul>
            </div>
            <div className="Botones_sumbit">
              <a href="#" className="submit btn-prev">
                ← Previous
              </a>
              <button className="submit" onClick={() => navigate('/chemical-properties')}>Next →</button>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PhysicalProperties;
