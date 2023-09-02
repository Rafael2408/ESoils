import "../assets/styles/Estilo_FinalizacionDelRegistro.css";
import { jsFinish } from "../helpers/js_FinalizacionDelRegistro";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ScientificName() {
  const navigate = useNavigate();

  useEffect(() => {
    jsFinish();
  }, []);

  return (
    <>
      <div className="espacio"></div>
      <div className="contenedor_clasificacion">
        <div className="titles">
          <h1 id="titlefinish">Registration Completion</h1>
          {/* <h2>Soil Classification</h2> */}
        </div>

        {/* <div className="cuerpo">
          <div className="ordenes">
            <h3>Order</h3>
            <h3>Suborder</h3>
            <h3>Great Group</h3>
            <h3>Sub Group</h3>
          </div>

          <div className="inputs">
            <input
              className="segundo_cuadro"
              placeholder="Insert Order"
              id="none1"
            />
            <input
              className="segundo_cuadro"
              placeholder="Insert Suborder"
              id="none2"
            />
            <input
              type="text"
              id="inputBuscarGranGrupo"
              placeholder="Search"
              className="segundo_cuadro"
            />
            <input
              type="text"
              id="inputBuscarSubGrupo"
              placeholder="Search"
              className="segundo_cuadro"
            />
          </div>

          <div className="selectclass">
            <select id="opOrden" name="orden" className="opciones">
              <option value="Gelisol">Gelisol</option>
              <option value="Histosol">Histosol</option>
              <option value="Spodosol">Spodosol</option>
              <option value="Andisol">Andisol</option>
              <option value="Oxisol">Oxisol</option>
              <option value="Vertisol">Vertisol</option>
              <option value="Aridisol">Aridisol</option>
              <option value="Ultisol">Ultisol</option>
              <option value="Mollisol">Mollisol</option>
              <option value="Alfisol">Alfisol</option>
              <option value="Inceptisol">Inceptisol</option>
              <option value="Entisol">Entisol</option>
            </select>
            <select
              id="opSuborden"
              name="suborden"
              className="opciones"
            ></select>

            <div id="granGrupo">
              <select
                name="ggroup"
                id="opGranGrupo"
                className="opciones"
              ></select>
            </div>
            <div>
              <ul id="listGranGrupo"></ul>
            </div>

            <div id="subGrupo">
              <select
                name="sgroup"
                id="opSubGrupo"
                className="opciones"
              ></select>
            </div>
            <div>
              <ul id="listSubGrupo"></ul>
            </div>
          </div>

          <div className="caracteristicas">
            <h4></h4>
            <h4 id="hOrden"></h4>
            <h4 id="hSuborden"></h4>
            <h4 id="hGranGrupo"></h4>
          </div>
        </div> */}

        <table id="tbid">
          <thead>
            <tr>
              <th id="tbtitle" colSpan={3}>
                Soil Clasification
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Order</th>
              <td>
                <input
                  className="segundo_cuadro"
                  placeholder="Insert Order"
                  id="none1"
                />
              </td>
              <td>
                <select id="opOrden" name="orden" className="opciones">
                  <option value="Gelisol">Gelisol</option>
                  <option value="Histosol">Histosol</option>
                  <option value="Spodosol">Spodosol</option>
                  <option value="Andisol">Andisol</option>
                  <option value="Oxisol">Oxisol</option>
                  <option value="Vertisol">Vertisol</option>
                  <option value="Aridisol">Aridisol</option>
                  <option value="Ultisol">Ultisol</option>
                  <option value="Mollisol">Mollisol</option>
                  <option value="Alfisol">Alfisol</option>
                  <option value="Inceptisol">Inceptisol</option>
                  <option value="Entisol">Entisol</option>
                </select>
              </td>
              <td colSpan={2}>
                <h4 id="hOrden"></h4>
              </td>
            </tr>
            <tr>
              <th>Suborder</th>
              <td>
                <input
                  className="segundo_cuadro"
                  placeholder="Insert Suborder"
                  id="none2"
                />
              </td>
              <td>
                <select
                  id="opSuborden"
                  name="suborden"
                  className="opciones"
                ></select>
              </td>
              <td>
                <h4 id="hSuborden"></h4>
              </td>
            </tr>
            <tr>
              <th>Great Group</th>
              <td>
                <input
                  type="text"
                  id="inputBuscarGranGrupo"
                  placeholder="Search"
                  className="segundo_cuadro"
                />
              </td>
              <td>
                <select
                  name="ggroup"
                  id="opGranGrupo"
                  className="opciones"
                ></select>
                <div>
                  <ul id="listGranGrupo"></ul>
                </div>
              </td>
              <td>
                <h4 id="hGranGrupo"></h4>
              </td>
            </tr>
            <tr>
              <th>Sub Group</th>
              <td>
                <input
                  type="text"
                  id="inputBuscarSubGrupo"
                  placeholder="Search"
                  className="segundo_cuadro"
                />
              </td>
              <td>
                <select
                  name="sgroup"
                  id="opSubGrupo"
                  className="opciones"
                ></select>
                <div>
                  <ul id="listSubGrupo"></ul>
                </div>
              </td>
              <td>
                <h4></h4>
                <h4 id="hOrden"></h4>
                <h4 id="hSuborden"></h4>
                <h4 id="hGranGrupo"></h4>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="nombresuelo">
          <h3 id="define">Classified soil is defined as </h3>
          <h3 id="suelo"></h3>
        </div>
        <div className="Botones_sumbit">
          <a
            className="submit btn-prev"
            onClick={() => navigate("/biological-properties")}
          >
            ← Previus
          </a>
          <button
            className="submit"
            onClick={() => navigate("/scientific-name")}
          >
            Finish →
          </button>
        </div>
      </div>
    </>
  );
}

export default ScientificName;
