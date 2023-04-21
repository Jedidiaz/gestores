import React from "react";
import { Link, useNavigate } from "react-router-dom";
// images
import logo from "../../assets/logo.png"

function Header() {
  const navegar = useNavigate()
  const styles = {
    styleLi: {
      listStyle: 'none',
      height: '100%',
      padding: '10px 0',
      width: '100%'
    },
    styleUl: {
      display: 'flex',
      gap: '20px',
      justifyContent: 'end',
      margin: '0'
    },
    styleA: {
      textDecoration: 'none',
      color: '#000',
      fontWeight: '700',
      fontSize: '20px' 
    },
    styleHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '100px',
      alignItems: 'center',
    }
  }

  return (
    <>
      <header style={styles.styleHeader} className="container">
        <div style={{"height": "100%"}}>
          <img src={logo} alt="Gestores" style={{"height": "100%", "cursor": "pointer"}} onClick={()=> navegar('/')} />
        </div>
        <div>
          <li style={styles.styleLi}>
            <ul style={styles.styleUl}>
              <Link to={'/'} style={styles.styleA} className="a_bar_main">Conócenos <div className="under_a_bar_main"></div></Link>
              <Link to={'/'} style={styles.styleA} className="a_bar_main">Comprar <div className="under_a_bar_main"></div></Link>
              <Link to={'/'} style={styles.styleA} className="a_bar_main">Terrenos <div className="under_a_bar_main"></div></Link>
              <Link to={'/'} style={styles.styleA} className="a_bar_main">Arrendos <div className="under_a_bar_main"></div></Link>
              <Link to={'/'} style={styles.styleA} className="a_bar_main">Locales <div className="under_a_bar_main"></div></Link>
              <Link to={'/'} style={styles.styleA} className="a_bar_main">Coworking <div className="under_a_bar_main"></div></Link>
            </ul>
          </li>
        </div>
      </header>
    </>
  );
}

export default Header;
