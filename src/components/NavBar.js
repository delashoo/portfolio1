import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLInk = (value) => {
      setActiveLink=(value);
    }

    return (
      <Navbar expand="lg" className= {scrolled ? "scrolled":""} >
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
              <img src="" alt="Logo" />
          <Navbar.Toggle aria-controls="basic-navbar-nav"> 
              <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#Skills" className={activeLink === 'Skills' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('Skills')}>Link</Nav.Link>
              <Nav.Link href="#Blog" className={activeLink === 'Blog' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('Blog')}>Link</Nav.Link>
              <Nav.Link href="#Projects" className={activeLink === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick= {() => onUpdateActiveLink('Projects')}>Link</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                  <a href="#"><img src="" alt=""/></a>
                  <a href="#"><img src="" alt=""/></a>
                  <a href="#"><img src="" alt=""/></a>
              </div>
              <button className="vvd" onClick={() => console.log('c=onnect')}><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}