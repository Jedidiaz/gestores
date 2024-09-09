import React from "react";
import Header from "../../Shared/Header";
import Footer from "../../Shared/Footer";
import { Link } from "react-router-dom";
// style
import "./styleHome.css";
//import images
import inicio from "../../../assets/inicio.png";
import whatsapp from "../../../assets/SVG/whathapp.svg";
import phone from "../../../assets/celular-1.png";
import iconLotes from "../../../assets/SVG/lotes.svg";
import iconCasas from "../../../assets/SVG/casas.svg";
import iconArriendos from "../../../assets/SVG/arriendos.svg";
import iconLocales from "../../../assets/SVG/locales.svg";
import iconCoworking from "../../../assets/SVG/coworking.svg";
import nosotros from "../../../assets/Nosotros.png";
import Oficina from "../../../assets/visita-nuestra-oficina.png";
import beneficios from "../../../assets/porque-vender-con-gestores.png";
// icons buttons
import cash from "../../../assets/SVG/credito.svg";
import asesoria from "../../../assets/SVG/asesoria.svg";
import documentacion from "../../../assets/SVG/documentacion.svg";
import casallave from "../../../assets/SVG/casa con llave.svg";
import portafolio from "../../../assets/SVG/portafolio.svg";
import calculadora from "../../../assets/SVG/calculadora.svg";

const Home = () => {
  const styles = {
    styleCardSesion1: {
      width: "100%",
      heigth: "auto",
    },
  };

  return (
    <>
      <Header />
      <main
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: '100px'
        }}
      >
        {/* section 1 */}
        <section style={{ margin: "40px 0" }} className="container">
          <article style={styles.styleCardSesion1} className="card_sesion_1">
            {/* description */}
            <div className="descriptionSesion1">
              <p style={{ marginBottom: "2%", color: "#fff" }}>
                Llegaste al lugas que estabas buscando
              </p>
              <h1 style={{ fontWeight: "600" }}>
                Encuentra el espacio ideal para ti
              </h1>
              <p style={{ color: "#fff" }}>
                <span style={{ fontWeight: "600", color: "#fff" }}>
                  Encuentra tu espacio ideal
                </span>
                con nuestra asesoría personalizada. ¡No pierdas más tiempo y
                contáctanos ahora para que juntos encontremos la propiedad que
                estás buscando!
              </p>
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  marginTop: "20px",
                }}
              >
                <img
                  src={whatsapp}
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "#fff",
                    borderRadius: "50%",
                  }}
                />
                <h3
                  style={{
                    backgroundColor: "#fff",
                    color: "rgba(56,62,145,1)",
                    padding: "15px 20px",
                    borderRadius: "30px",
                    fontWeight: "700",
                  }}
                >
                  +57 322 648 3733
                </h3>
              </div>
            </div>
            {/* image */}
            <div className="imageSesion1">
              <img src={inicio} style={{ width: "100%" }} />
            </div>
          </article>
        </section>
        {/* Section 2 */}
        <section style={{ backgroundColor: "#f7f7f7", width: "100%" }}>
          <div
            className="container"
            style={{
              textAlign: "center",
              paddingTop: "40px",
              paddingBottom: "40px",
            }}
          >
            <p style={{ margin: "0" }}>Conoce</p>
            <h2 style={{ fontWeight: "700", fontSize: "50px" }}>
              Tipos de inmuebles
            </h2>
            <div className="infoSection2">
              <div className="imgSection2Phone">
                <img src={phone} style={{ width: "100%" }} className="PhoneAnimation" />
              </div>
              <article className="cardInfoSection2Main">
                <div className="cardInfoSection2">
                  <img src={iconLotes} className="icons_section2" />
                  <span>
                    <h4>Lotes (terrenos)</h4>
                    <p>
                      Construye el futuro que deseas en el terreno perfecto.
                    </p>
                  </span>
                </div>
                <div className="cardInfoSection2">
                  <img src={iconCasas} className="icons_section2" />
                  <span>
                    <h4>Casas o apartamentos</h4>
                    <p>Encuentra el hogar de tus sueños con nosotros.</p>
                  </span>
                </div>
                <div className="cardInfoSection2">
                  <img src={iconArriendos} className="icons_section2" />
                  <span>
                    <h4>Arriendos</h4>
                    <p>
                      Vive cómodamente sin preocuparte por comprar propiedad.
                    </p>
                  </span>
                </div>
                <div className="cardInfoSection2">
                  <img src={iconLocales} className="icons_section2" />
                  <span>
                    <h4>Locales comerciales</h4>
                    <p>
                      Encuentra el espacio ideal para hacer crecer tu negocio.
                    </p>
                  </span>
                </div>
                <div className="cardInfoSection2" style={{ border: "0" }}>
                  <img src={iconCoworking} className="icons_section2" />
                  <span>
                    <h4>Coworking u Oficina</h4>
                    <p>Trabaja en un ambiente colaborativo y dinámico.</p>
                  </span>
                </div>
              </article>
            </div>
          </div>
        </section>
        {/* section 3 */}
        <section style={{ width: "100%" }}>
          <div
            className="container"
            style={{ textAlign: "center", padding: "40px 10px" }}
          >
            <p style={{ margin: "0" }}>¿Quienes somos?</p>
            <h2 style={{ fontWeight: "700", fontSize: "50px" }}>Nosotros</h2>
            <div className="section3Nosotros">
              <div className="imgSection3">
                <img src={nosotros} style={{ width: "100%" }} />
              </div>
              <div className="descriptionSecttion3">
                <h2 style={{ fontWeight: "700", fontSize: "50px" }}>
                  Somos: Gestores Inmobiliarios del caribe
                </h2>
                <p style={{ fontWeight: "500", fontSize: "20px", margin: 0 }}>
                  Somos una empresa inmobiliaria con amplia experiencia en el
                  mercado colombiano. En Gestores Inmobiliarios del Caribe, nos
                  enfocamos en brindar un servicio personalizado y de calidad,
                  con un equipo de expertos altamente capacitados y actualizados
                  en cuanto a las tendencias y novedades del mercado. Tenemos
                  una amplia variedad de servicios, que incluyen la venta y
                  arriendo de propiedades, asesoramiento en inversiones
                  inmobiliarias y una cartera de propiedades exclusivas y
                  únicas.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* section 4 */}
        <section className="container" style={{ margin: "40px 0" }}>
          <article className="cardSection4">
            <div
              className="descriptionCardSection4"
              style={{ padding: "5%" }}
            >
              <h2 style={{ fontWeight: "700" }}>Visita nuestra oficina</h2>
              <div style={{ display: "flex", flexDirection: 'column',gap: "10px" }} className="section4Card">
                <div
                  style={{
                    height: "50px",
                    width: "50px",
                  }}
                  className="DotSection4"
                ></div>
                <h4 style={{ fontWeight: "600", maxWidth: "380px" }}>
                  Barranquilla: Coworking calle 59 barrio El Prado
                </h4>
                <Link to={"/"}>Cómo llego</Link>
              </div>
            </div>
            <div className="imgSection4">
              <img src={Oficina} style={{ width: "100%" }} />
            </div>
          </article>
        </section>
        {/* section 5 */}
        <section
          style={{
            width: "100%",
            padding: "60px 0",
            backgroundColor: "#f7f7f7",
          }}
        >
          <div className="container" style={{ textAlign: "center" }}>
            <p style={{ margin: "0" }}>Servicios</p>
            <h2 style={{ fontWeight: "700", fontSize: "50px" }}>
              Para asesorarte
            </h2>
            <div className="content_cards_Section5">
              <article className="cardSection5">
                <img src={cash} />
                <p>Si necesitas Credito para comprar tu casa o apartamento.</p>
                <Link to={"/"}>Contactanos</Link>
              </article>
              <article className="cardSection5">
                <img src={asesoria} />
                <p>Si quieres vender tu casa, apartamento o terreno.</p>
                <Link to={"/"}>Conoce más</Link>
              </article>
              <article className="cardSection5">
                <img src={documentacion} />
                <p>
                  Si quieres ayuda con la gestion de tramites inmobiliarios.
                </p>
                <Link to={"/"}>Contactanos</Link>
              </article>
              <article className="cardSection5">
                <img src={casallave} />
                <p>Si quieres asesoria para comprar un inmueble o terreno.</p>
                <Link to={"/"}>Ver inmuebles en venta</Link>
              </article>
              <article className="cardSection5">
                <img src={portafolio} />
                <p>
                  Si eres agente inmobiliario y quieres aumentar tu portafolio.
                </p>
                <Link to={"/"}>Contactanos</Link>
              </article>
              <article className="cardSection5">
                <img src={calculadora} />
                <p>Si quieres conocer el valor de tu inmueble.</p>
                <Link to={"/"}>Contactanos</Link>
              </article>
            </div>
          </div>
        </section>
        {/* section 6 */}
        <section style={{ width: "100%", padding: "40px 0" }}>
          <div className="container" style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <p style={{ margin: "0" }}>Beneficios</p>
            <h2 style={{ fontWeight: "700", fontSize: "50px", maxWidth: '850px', marginBottom: '70px' }}>
              ¿Porque vender o arrendar con Gestores?
            </h2>
            <div className="section6">
              <div className="descrioptionSection6">
                <p>
                  Vender o alquilar tu inmueble con una inmobiliaria puede ser
                  una excelente opción para quienes buscan una transacción
                  inmobiliaria segura, efectiva y conveniente.
                </p>
                <br />
                <span className="listSection6">
                  <div
                    className="DotSection4"
                    style={{ width: "50px", height: "50px" }}
                  >&nbsp;</div>
                  <p>
                    Contamos con una amplia red de{" "}
                    <span style={{ fontWeight: "700" }}>contactos</span> en el
                    mercado inmobiliario.
                  </p>
                </span>
                <span className="listSection6">
                  <div
                    className="DotSection4"
                    style={{ width: "50px", height: "50px" }}
                  >&nbsp;</div>
                  <p>
                    <span style={{ fontWeight: "700" }}>Experiencia</span> en la
                    negociación de precios y condiciones de venta.
                  </p>
                </span>
                <span className="listSection6">
                  <div
                    className="DotSection4"
                    style={{ width: "50px", height: "50px" }}
                  >&nbsp;</div>
                  <p>
                    Asesoría, manejo y{" "}
                    <span style={{ fontWeight: "700" }}>permiso legal</span> en
                    el manejo y tramite de propiedades
                  </p>
                </span>
                <span className="listSection6">
                  <div
                    className="DotSection4"
                    style={{ width: "50px", height: "50px" }}
                  >&nbsp;</div>
                  <p>
                    <span style={{ fontWeight: "700" }}>Ahorro de tiempo</span>{" "}
                    y esfuerzo en la gestión de la transacción.
                  </p>
                </span>
                <span className="listSection6">
                  <div
                    className="DotSection4"
                    style={{ width: "50px", height: "50px" }}
                  >&nbsp;</div>
                  <p>
                    Dependiendo de la disponibilidad, se realiza un{" "}
                    <span style={{ fontWeight: "700" }}>
                      mapeo 3D de la propiedad
                    </span>{" "}
                    , generando un impacto visual para los posibles compradores
                    y un recorrido digital de la casa, por ejemplo. <br />
                    <Link to={"/"}>LINK DEL MUESTRA</Link>
                  </p>
                </span>
                <span className="listSection6">
                  <div
                    className="DotSection4"
                  >&nbsp;</div>
                  <p>
                    Trabajamos junto con una agencia especializada en <span>marketing
                    y publicidad</span>, <Link to={"/"}>Sora Baq</Link>, la cual nos ayuda a aumentar el
                    alcance de posibles compradores, lo que incrementa las
                    posibilidades de venta o arrendamiento de tu inmueble.
                  </p>
                </span>
              </div>
              <div className="imgSection6">
                <img src={beneficios} style={{width: '100%'}} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
