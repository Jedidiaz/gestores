import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
// images
import logo from "../../assets/logo.png";

function Header() {
  const navegar = useNavigate();
  const [menuNav, setMenuNav] = useState(false);
  const styles = {
    styleLi: {
      listStyle: "none",
      height: "100%",
      padding: "10px 0",
      width: "100%",
    },
    styleUl: {
      display: "flex",
      gap: "20px",
      justifyContent: "end",
      margin: "0",
    },
    styleA: {
      textDecoration: "none",
      color: "#000",
      fontWeight: "700",
      fontSize: "20px",
    },
    styleHeader: {
      display: "flex",
      justifyContent: "space-between",
      height: "100px",
      alignItems: "center",
    },
  };

  function checkedMen(meunNav) {
    const menu = document.getElementById("responsiveMenu");
    if (meunNav) {
      setMenuNav(!menuNav);
      menu.style.padding = "0";
      menu.style.height = "0px";
    } else {
      setMenuNav(!menuNav);
      menu.style.padding = "40px 30px";
      menu.style.height = "100vh";
    }
  }

  return (
    <>
      <header style={{width:'100%', position: 'fixed', background: '#fff', zIndex: '10'}} >
        <nav style={styles.styleHeader} className="container">
          <div style={{ height: "100%", display: "flex", alignItems: "center" }}>
            <img
              src={logo}
              alt="Gestores"
              style={{ cursor: "pointer", objectFit: "contain", width: 200 }}
              onClick={() => navegar("/")}
            />
          </div>
          <div>
            <span
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
            >
              <input
                type="checkbox"
                id="checkMenu"
                style={{ display: "none" }}
              />
              <label
                htmlFor="checkMenu"
                style={{ fontSize: "30px", color: "#000" }}
                className="menuResponsiveIcon"
                onClick={() => checkedMen(menuNav)}
              >
                <AiOutlineMenu />
              </label>
            </span>
            <ul className="responsiveMenu" id="responsiveMenu">
              <Link to={"/"} style={styles.styleA} className="a_bar_main">
                Conócenos <div className="under_a_bar_main"></div>
              </Link>
              <Link to={"/"} style={styles.styleA} className="a_bar_main">
                Comprar <div className="under_a_bar_main"></div>
              </Link>
              <Link to={"/"} style={styles.styleA} className="a_bar_main">
                Terrenos <div className="under_a_bar_main"></div>
              </Link>
              <Link to={"/"} style={styles.styleA} className="a_bar_main">
                Arrendos <div className="under_a_bar_main"></div>
              </Link>
              <Link to={"/"} style={styles.styleA} className="a_bar_main">
                Locales <div className="under_a_bar_main"></div>
              </Link>
              <Link to={"/"} style={styles.styleA} className="a_bar_main">
                Coworking <div className="under_a_bar_main"></div>
              </Link>
            </ul>
            {/* Normal menu */}
            <li style={styles.styleLi} className="menuNormal">
              <ul style={styles.styleUl}>
                <Link to={"/"} style={styles.styleA} className="a_bar_main">
                  Conócenos <div className="under_a_bar_main"></div>
                </Link>
                <Link to={"/"} style={styles.styleA} className="a_bar_main">
                  Comprar <div className="under_a_bar_main"></div>
                </Link>
                <Link to={"/"} style={styles.styleA} className="a_bar_main">
                  Terrenos <div className="under_a_bar_main"></div>
                </Link>
                <Link to={"/"} style={styles.styleA} className="a_bar_main">
                  Arrendos <div className="under_a_bar_main"></div>
                </Link>
                <Link to={"/"} style={styles.styleA} className="a_bar_main">
                  Locales <div className="under_a_bar_main"></div>
                </Link>
                <Link to={"/"} style={styles.styleA} className="a_bar_main">
                  Coworking <div className="under_a_bar_main"></div>
                </Link>
              </ul>
            </li>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
