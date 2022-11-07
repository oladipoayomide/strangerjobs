import { Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Header() {
  const scrollIntoFunction = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
    console.log('done')
    handleDropDown()
  }

  const [dropdownView, setDropdownView] = useState(false);
  const handleDropDown = () => {
    setDropdownView(prevState => !prevState)
    if (myIcon === faBars) {
      setMyIcon(faXmark)
    }else {setMyIcon(faBars)}
  }
 
  const [myIcon, setMyIcon] = useState(faBars)

  return (
    <div id='header' >
      <Container className='container-fluid '>
        <div className="nav d-flex align-items-center py-3 py-md-4">
          <div className="logo text fw-bold"><a href="#home">Stranger Jobs</a></div>
          <div className="nav-right align-items-center d-none d-sm-flex " >
            <a className='me-3 text-dark'  >Home</a>
            <a onClick={() => {scrollIntoFunction('#talents')}}  className='me-3 text-dark' href='#aboutus'>About Us</a>
            <a className='me-3 text-dark' href='#howitworks' onClick={() => { scrollIntoFunction('#howItWorks') }}>How it works</a>
            <Button className='button-pry' onClick={() => { scrollIntoFunction('#formPage') }}>Get Started</Button>
          </div>
          <div className="dropdown-pack d-sm-none" style={{ position: 'relative' }}>
            <FontAwesomeIcon icon={myIcon} className="faBars py-2 px-1" onClick={handleDropDown} style={{width: '2rem', borderRadius: '3px' }} />

            <div className="dropdown" style={{
              position: 'absolute',
              left: '0',
              display: `${dropdownView ? 'block' : 'none'}`
            }}>
              <div className='blur-filter py-2 text-center '>
                <li onClick={() => {scrollIntoFunction('#talents')}}>About Us</li>
                <li onClick={() => { scrollIntoFunction('#howItWorks') }}>How it Works</li>
                <li onClick={() => { scrollIntoFunction('#formPage') }}>Get Started</li>
              </div>
            </div>
          </div>
        </div>

      </Container>

    </div>
  );
}

export default Header;