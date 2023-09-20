import "../assets/styles/Estilo_Index.css";
import "../assets/styles/Estilo_Formularios.css";
import "../assets/styles/Estilo_Steps.css";
import { upDateForm } from "../helpers/fisicas";
import { useEffect } from "react";
import {
  NavStep41,
  NavStep42,
  NavStep43,
  NavStep44,
} from "../components/navStep";
import { useNavigate } from "react-router-dom";

function BiologicalProperties() {
  const navigate = useNavigate();

  useEffect(() => {
    upDateForm();
  }, []);

  return (
    <>
      <section className="Data">
        <div id="formPrincipal">
          <h1 className="Titulo_propiedades">Biological Properties</h1>
          <div className="form-step form-step-active">
            {/* <!-- Progress bar 1--> */}
            {<NavStep41 />}

            <div className="contenedor_form">
              <table>
                <thead>
                  <tr>
                    <th colSpan={2}>Soil Organisms</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Types of organisms present</th>
                    <td>
                      <input
                        type="text"
                        name="organism"
                        className="valores txt_value_biological"
                        id="organism"
                        placeholder="(Worms, nematodes, etc.)"
                      />
                    </td>
                    <td>Quantity</td>
                    <td>
                      <input
                        type="number"
                        name="number_organism"
                        id="number_organism"
                        className="valores"
                        min="1"
                      />
                    </td>
                    <td>
                      <button
                        className="submit btn_añadir"
                        // onclick="postBiologicas1()"
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>Additional remarks</th>
                    <td colSpan={3}>
                      <textarea
                        name="organisms_description"
                        className="valores txtarea_biological"
                        placeholder="(“The organisms were mostly found on the surface....”)"
                      ></textarea>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <th></th>
                    <td colSpan={3}>
                      <textarea
                        id="txtOrganisms"
                        className="valores txtarea_biological bg_wh_txt"
                      ></textarea>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Botones_sumbit">
              <a
                href="#"
                className="submit btn-prev"
                onClick={() => navigate("/chemical-properties")}
              >
                ← Previous
              </a>
              <a href="#" className="submit btn-next">
                Next →
              </a>
            </div>
          </div>

          <div className="form-step">
            {/* <!-- Progress bar 2--> */}
            {<NavStep42 />}
            <div className="contenedor_form">
              <table>
                <thead>
                  <tr>
                    <th colSpan={2} className="subtitles">
                      Microbial activity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <th>Type of microbial activity</th>
                  <td colSpan={2}>
                    <input
                      type="text"
                      name="microbial_activity"
                      className="valores txt_value_biological_2"
                      placeholder="(Worms, nematodes, etc.)"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="td_top">Intensity of activity</th>
                  <td colSpan={2}>
                    <div className="select_box">
                      <select name="microbial_intensity" id="">
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="td_top">Additional remarks</th>
                  <td colSpan={3}>
                    <textarea
                      className="valores txtarea_biological"
                      name="microbial_description"
                      placeholder="(“A strong smell of decomposition and presence of mycelium in the soil was observed”)."
                    ></textarea>
                  </td>
                </tr>
                <tr>
                  <th colSpan={2} className="subtitles">
                    Microbial biomass
                  </th>
                  <th colSpan={2}></th>
                </tr>
                <tr>
                  <th className="td_top">Measurement method</th>
                  <td colSpan={2}>
                    <div>
                      <select
                        id=""
                        className="select_box"
                        name="biomass_method"
                      >
                        <option value="Total organic carbon method">
                          Total organic carbon method
                        </option>
                        <option value="Chlorophyll a method">
                          Chlorophyll a method
                        </option>
                        <option value="Microbial phosphorus method">
                          Microbial phosphorus method
                        </option>
                        <option value="Microbial nitrogen method">
                          Microbial nitrogen method
                        </option>
                      </select>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th className="td_top">Measurement results</th>
                  <td>
                    <input
                      name="biomass_results"
                      type="number"
                      className="valores"
                    />
                    <b className="unit_measure">mg/g soil</b>
                  </td>
                </tr>
                <tr>
                  <th className="td_top">Additional remarks</th>
                  <td colSpan={2}>
                    <textarea
                      className="valores txtarea_biological"
                      name="biomass_description"
                      placeholder="(“Values indicate moderate microbial biomass in the soil.”)."
                    ></textarea>
                  </td>
                </tr>
                </tbody>
              </table>
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
            {<NavStep43 />}
            <div className="contenedor_form">
              <table>
                <thead>
                  <tr>
                    <th colSpan={2}>Macroinvertebrates</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Types of organisms present</th>
                    <td>
                      <input
                        type="text"
                        id="macroinvertebrates"
                        name="macroinvertebrates"
                        className="valores txt_value_biological"
                        placeholder="(Beetles, mealybugs, etc.)"
                      />
                    </td>
                    <td>Quantity</td>
                    <td>
                      <input
                        type="number"
                        id="numInvertebrates"
                        name="number_macroinvertebrates"
                        className="valores"
                        min="1"
                      />
                    </td>
                    <td>
                      <button
                        // onclick="postBiologicas2()"
                        className="submit btn_añadir"
                      >
                        Add
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th>Additional remarks</th>
                    <td colSpan={3}>
                      <textarea
                        className="valores txtarea_biological"
                        name="macroinvertebrates_description"
                        placeholder="(“Macroinvertebrates were mostly found on the surface....”)"
                      ></textarea>
                    </td>
                    <td></td>
                  </tr>
                  <tr>
                    <th></th>
                    <td colSpan={3}>
                      <textarea
                        className="valores txtarea_biological bg_wh_txt"
                        id="txtMacroinvertebrates"
                      ></textarea>
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
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
            {<NavStep44 />}
            <div className="contenedor_form">
              <table>
                <thead>
                  <tr>
                    <th className="subtitles">Roots</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Average depth</th>
                    <td>
                      <input
                        type="number"
                        name="average_depth"
                        className="valores"
                      />
                      <b className="unit_measure">cm</b>
                    </td>
                  </tr>
                  <tr>
                    <th className="td_top">Measurement method</th>
                    <td>
                      <select
                        name="meassurement_method"
                        id=""
                        className="sel_bio"
                      >
                        <option value="Estado 0 (Sin raíces visibles)">
                          Status 0 (No visible roots)
                        </option>
                        <option value="Estado 1 (Raíces individuales)">
                          State 1 (Individual roots)
                        </option>
                        <option value="Estado 2 (Raíces finas)">
                          Stage 2 (Fine roots)
                        </option>
                        <option value="Estado 3 (Raíces densas)">
                          State 3 (Dense roots)
                        </option>
                      </select>
                    </td>
                  </tr>
                  <tr>
                    <th className="td_top">Additional remarks</th>
                    <td>
                      <textarea
                        className="valores txtarea_biological step4_bio"
                        name="additional_remarks"
                        placeholder="(“Values indicate moderate microbial biomass in the soil.”)."
                      ></textarea>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="Botones_sumbit">
              <a href="#" className="submit btn-prev">
                ← Previous
              </a>
              <button
                className="submit"
                onClick={() => navigate("/scientific-name")}
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BiologicalProperties;
