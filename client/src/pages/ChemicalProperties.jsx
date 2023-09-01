import "../assets/styles/Estilo_Index.css";
import "../assets/styles/Estilo_Steps.css";
import { upDateForm } from "../helpers/fisicas";
import { useEffect } from "react";
import { NavStep31, NavStep32, NavStep33 } from "../components/navStep";
import { useNavigate } from "react-router-dom";

function ChemicalProperties() {
  const navigate = useNavigate()

  useEffect(() =>{
    upDateForm()
  }, [])

  return (
    <>
      <section className="Data">
        <div className="form">
          <h1 className="Titulo_propiedades">Chemical properties</h1>
          <div className="form-step form-step-active">
            {/* <!-- Progress bar 1--> */}
            {<NavStep31/>}

            <div className="Steps">
              <ul className="Tipo">
                <li>
                  <strong>Alkalinity or acidity</strong>
                </li>
                <li>
                  <strong>Organic material</strong>
                </li>
                <li>
                  <strong>Total phosphorus</strong>
                </li>
                <li>
                  <strong>Extractable sulfur</strong>
                </li>
                <li>
                  <strong>Interchangeable aluminum</strong>
                </li>
              </ul>

              <ul className="Values">
                <li>
                  <input
                    type="number"
                    name="alkalinity_or_acidity"
                    className="valores"
                    placeholder="0.00"
                    min="0"
                    max="14"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="organic_material"
                    className="valores"
                    placeholder="0.00"
                    min="0"
                    max="100"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="total_phosphorus"
                    className="valores"
                    placeholder="0.00"
                    min="0"
                    max="100"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="extractable_sulfur"
                    className="valores"
                    placeholder="0.00"
                    min="0"
                    max="100"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="interchangeable_aluminum"
                    className="valores"
                    placeholder="0.00"
                    min="0"
                    max="10"
                  />
                </li>
              </ul>

              <ul className="Descripcion">
                <li>
                  <strong>(0-14) pH</strong>
                </li>
                <li>
                  <strong>%MO</strong>
                </li>
                <li>
                  <strong>%P (mg/kg)</strong>
                </li>
                <li>
                  <strong>%S (mg/Kg)</strong>
                </li>
                <li>
                  <strong>(0-10) Al+H (Cmol/Kg)</strong>
                </li>
              </ul>
            </div>
            <div className="Botones_sumbit">
              <a className="submit"
                onClick={() => navigate('/physical-properties')}
              >
                ← Previus
              </a>
              <a href="#" className="submit btn-next">
                Next →
              </a>
            </div>
          </div>
          <div className="form-step">
            {/* <!-- Progress bar 2--> */}
            {<NavStep32/>}

            <div className="Steps">
              <ul className="Tipo">
                <li>
                  <strong>Electric conductivity</strong>
                </li>
                <li>
                  <strong>Exchangeable calcium</strong>
                </li>
                <li>
                  <strong>Exchangeable magnesium</strong>
                </li>
                <li>
                  <strong>Exchangeable potassium</strong>
                </li>
                <li>
                  <strong>Exchangeable sodium</strong>
                </li>
              </ul>

              <ul className="Values">
                <li>
                  <input
                    type="number"
                    name="electric_conductivity"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="exchangeable_calcium"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="exchangeable_magnesium"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="exchangeable_potassium"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="exchangeable_sodium"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
              </ul>

              <ul className="Descripcion">
                <li>
                  <strong>(0-5) CE (ds/m)</strong>
                </li>
                <li>
                  <strong>% Ca (Cmol/Kg)/(meq/100g)</strong>
                </li>
                <li>
                  <strong>% Mg (Cmol/Kg)</strong>
                </li>
                <li>
                  <strong>% K (Cmol/Kg)</strong>
                </li>
                <li>
                  <strong>% Na (Cmol/Kg)</strong>
                </li>
              </ul>
            </div>
            <div className="Botones_sumbit">
              <a href="#" className="submit btn-prev">
                ← Previus
              </a>
              <a href="#" className="submit btn-next">
                Next →
              </a>
            </div>
          </div>
          <div className="form-step">
            {/* <!-- Progress bar 3--> */}
            {<NavStep33/>}

            <div className="Steps">
              <ul className="Tipo">
                <li>
                  <strong>Extractable copper</strong>
                </li>
                <li>
                  <strong>Removable iron</strong>
                </li>
                <li>
                  <strong>Extractable manganese</strong>
                </li>
                <li>
                  <strong>Extractable zinc</strong>
                </li>
                <li>
                  <strong>Boron</strong>
                </li>
              </ul>

              <ul className="Values">
                <li>
                  <input
                    type="number"
                    name="extractable_copper"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="removable_iron"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="extractable_manganese"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="extractable_zinc"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
                <li>
                  <input
                    type="number"
                    name="boron"
                    className="valores"
                    placeholder="0.00"
                  />
                </li>
              </ul>

              <ul className="Descripcion">
                <li>
                  <strong>% Cu (mg/Kg)</strong>
                </li>
                <li>
                  <strong>% Fe (mg/Kg)</strong>
                </li>
                <li>
                  <strong>% Mn (mg/Kg)</strong>
                </li>
                <li>
                  <strong>% Zn (mg/Kg)</strong>
                </li>
                <li>
                  <strong>% B (mg/Kg)</strong>
                </li>
              </ul>
            </div>
            <div className="Botones_sumbit">
              <a href="#" className="submit btn-prev">
                ← Previus
              </a>
              <button className="submit"
                onClick={() => navigate('/biological-properties')}
              >Next →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChemicalProperties;
