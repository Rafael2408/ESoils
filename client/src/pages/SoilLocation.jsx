import "../assets/styles/Estilo_Formularios.css";
//import 'https://unpkg.com/dropzone@5/dist/min/dropzone.min.css'

function SoilLocation() {
  return (
    <>
      <section className="Data" id="content">
        <h1 className="Titulo_propiedades font_preview_soil">Location</h1>
        <div>
          <div className="Steps steps_preview_soil">
            <ul className="Tipo tipo_preview_soil">
              <li>
                <div>
                  <iframe
                    width="600"
                    height="400"
                    src="https://www.bing.com/maps/embed?h=400&w=600&cp=-0.3772381220231438~-78.56003736703599&lvl=7.453412996666358&typ=d&sty=r&src=SHELL&FORM=MBEDV8"
                    scrolling="no"
                    rel="preload"
                    as="font"
                  ></iframe>
                </div>
              </li>
            </ul>
          </div>

          <div className="Botones_sumbit">
            <button className="submit">← Previus</button>
            <button
              type="submit"
              className="submit"
              // onclick="PostRegistro_Suelos(); guardarIdeSuelo();"
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
