import React , { useState }  from "react";
import { Container ,Navbar ,Dropdown,Form,Button } from "react-bootstrap";
import HomeIcon from '@mui/icons-material/Home';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SearchIcon from '@mui/icons-material/Search';
import { InputGroup, FormControl } from 'react-bootstrap';
<style>
@import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
</style>


let Searchbar=()=>{ 
  const [searchTerm, setSearchTerm] = useState('');
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    console.log("Searching for:", event.target.value);
  };

    return(
        <div>
            <Container className="col-4 mt-5 mb-5">
            <h2>Find a home you'll<span className="diffFont"><i> love</i></span></h2>
            </Container>
            <Container className="d-flex justify-content-center">
            <Navbar.Text href="#home" className='options nav_bold text-dark ms-4'>Buy</Navbar.Text>
            <Navbar.Text href="#home" className='options nav_bold text-dark ms-4'>Rent</Navbar.Text>
            <Navbar.Text href="#home" className='options nav_bold text-dark ms-4'>New Projects</Navbar.Text>
            <Navbar.Text href="#home" className='options nav_bold text-dark ms-4'>PG</Navbar.Text>
            <Navbar.Text href="#home" className='options nav_bold text-dark ms-4'>Plot</Navbar.Text>
            <Navbar.Text href="#home" className='options nav_bold text-dark ms-4'>Commercial</Navbar.Text>
            <Navbar.Text href="#home" className='options nav_bold text-dark ms-4'>Post Free Property Ad</Navbar.Text>
            </Container>

            <div className=" searchRoundeed border  p-3 mt-3" style={{width:'60%', marginLeft:'18rem'}}>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex flex-grow-1 justify-content-center align-items-center">
            <InputGroup className="mb-3" style={{width:'55rem'}}>
      <InputGroup.Text><FmdGoodIcon style={{color:'red'}}/></InputGroup.Text>
      <FormControl
      className="borderless-input"
      placeholder="Enter city, location, projects "
      aria-describedby="basic-addon1"
      value={searchTerm}
      onChange={handleInputChange}
      />
    </InputGroup>

              <Dropdown className="me-2">
                <Dropdown.Menu>
                  <Dropdown.Item href="#">Option 1</Dropdown.Item>
                  <Dropdown.Item href="#">Option 2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="me-2">
                <Dropdown.Toggle variant="light" id="flat-dropdown">
                  <span style={{color:'red'}}><HomeIcon/> </span><b>Flat +2</b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Toggle  
                   variant="light"
                    href="#" 
                    
                     > 
                    Residentials
                    </Dropdown.Toggle>
                  <Dropdown.Item >flat</Dropdown.Item>
                  <Dropdown.Item>House/villa</Dropdown.Item>
                  <Dropdown.Item>plot</Dropdown.Item>

                  <Dropdown.Toggle variant="light" href="#">Commercial</Dropdown.Toggle>
                  <Dropdown.Toggle variant="light" href="#">Other property Types</Dropdown.Toggle>

                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="me-2">
                <Dropdown.Toggle variant="light" id="budget-dropdown">
                <span style={{color:'red'}}><CurrencyRupeeIcon/></span><b>Budget</b>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#">&#x20B9;5,000</Dropdown.Item>
                  <Dropdown.Item href="#">&#x20B9;10,000</Dropdown.Item>
                  <Dropdown.Item href="#">&#x20B9;15,000</Dropdown.Item>
                  <Dropdown.Item href="#">&#x20B9;20,000</Dropdown.Item>
                  <Dropdown.Item href="#">&#x20B9;25,000</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Container><Button variant="danger"><SearchIcon/>
                 Search
              </Button></Container>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
        </div>
    )
}
export default Searchbar;
















// import React from "react";
// import { Container, Navbar, Dropdown, Form, Button } from "react-bootstrap";

// let Header = () => {
//     return (
//         <div>
//             <Container className="col-4 mt-5 mb-5">
//                 <h3>find your perfect <i><b>Rental home</b></i></h3>
//             </Container>
//             <Container className="d-flex justify-content-center">
//                 <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Buy</Navbar.Text>
//                 <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Rent</Navbar.Text>
//                 <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>New Projects</Navbar.Text>
//                 <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>PG</Navbar.Text>
//                 <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Plot</Navbar.Text>
//                 <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Commercial</Navbar.Text>
//                 <Navbar.Text href="#home" className='nav_bold text-dark ms-4'>Post Free Property Ad</Navbar.Text>
//             </Container>

//             <div className="searchRounded border rounded p-3" style={{ borderRadius: '30px 30px 0 0' }}>
//                 <Navbar expand="lg" className="bg-body-tertiary">
//                     <Container>
//                         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                         <Navbar.Collapse id="basic-navbar-nav">
//                             <Form className="d-flex flex-grow-1 justify-content-center align-items-center">
//                                 <Dropdown className="me-2">
//                                     <Dropdown.Toggle variant="light" id="location-dropdown">
//                                         Location
//                                     </Dropdown.Toggle>
//                                     <Dropdown.Menu>
//                                         <Dropdown.Item href="#">Option 1</Dropdown.Item>
//                                         <Dropdown.Item href="#">Option 2</Dropdown.Item>
//                                     </Dropdown.Menu>
//                                 </Dropdown>
//                                 <Dropdown className="me-2">
//                                     <Dropdown.Toggle variant="light" id="flat-dropdown">
//                                         Flat +2
//                                     </Dropdown.Toggle>
//                                     <Dropdown.Menu>
//                                         <Dropdown.Item href="#">Residentials</Dropdown.Item>
//                                         <Dropdown.Item href="#">flat</Dropdown.Item>
//                                         <Dropdown.Item href="#">House/villa</Dropdown.Item>
//                                         <Dropdown.Item href="#">plot</Dropdown.Item>
//                                     </Dropdown.Menu>
//                                 </Dropdown>
//                                 <Dropdown className="me-2">
//                                     <Dropdown.Toggle variant="light" id="budget-dropdown">
//                                         Budget
//                                     </Dropdown.Toggle>
//                                     <Dropdown.Menu>
//                                         <Dropdown.Item href="#">Option 1</Dropdown.Item>
//                                         <Dropdown.Item href="#">Option 2</Dropdown.Item>
//                                     </Dropdown.Menu>
//                                 </Dropdown>
//                                 <Form.Control type="text" placeholder="Search" className="me-1" style={{ width: '150px' }} />
//                                 <Button variant="primary">Search</Button>
//                             </Form>
//                         </Navbar.Collapse>
//                     </Container>
//                 </Navbar>
//             </div>
//         </div>
//     );
// };

// export default Header;
