import React from "react";
import { Link } from "react-router-dom";
// images
import tt from "../../assets/SVG/TikTok.svg";
import wp from "../../assets/SVG/whathapp.svg";
import fb from "../../assets/SVG/Facebook.svg";
import ig from "../../assets/SVG/Instagram.svg";

function Footer() {
  const styles = {
    styleVinculos: {
      display: "flex",
      gap: "10px",
      width: "100%",
      justifyContent: "space-between",
      padding: '60px 0 0 0'
    },
    styleHiperVinculos: {
      display: "flex",
      gap: "40px",
      alignItems: "center",
    },
    styleTerminos: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 0 20px 0'
    }
  };

  return (
    <>
      <footer style={{ background: "#f7f7f7" }}>
        <div className="container">
          <div style={styles.styleVinculos}>
            <div style={styles.styleHiperVinculos}>
              <ul className="hiperVinculosFooter">
                <Link to={"/"}>Sobre Gestores</Link>
                <Link to={"/"}>Vende tu propiedad</Link>
              </ul>
              <ul className="hiperVinculosFooter">
                <Link to={"/"}>En arriendo</Link>
                <Link to={"/"}>En venta</Link>
              </ul>
              <ul className="hiperVinculosFooter">
                <Link to={"/"}>Arrienda</Link>
                <Link to={"/"}>Nuestro equipo</Link>
              </ul>
            </div>
            <div className="icons_footer">
              <img src={wp} alt="whatsapp" className="iconsFooters" />
              <img src={ig} alt="instagram" className="iconsFooters" />
              <img src={fb} alt="facebook" className="iconsFooters" />
              <img src={tt} alt="tiktok" className="iconsFooters" />
            </div>
          </div>
          <hr className="separeHorizontal" />
          <div style={styles.styleTerminos}>
            <Link to={"/"} className="terminos">Gestores Inmobiliarios del casibe S.A.S.</Link>
            <div className="separe"></div>
            <Link to={"/"} className="terminos">Todos los derechos reservados.</Link>
            <div className="separe"></div>
            <Link to={"/"} className="terminos">Terminos y condiciones</Link>
            <div className="separe"></div>
            <Link to={"/"} className="terminos">Cookies</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
