import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Badge,Col,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Nav2() {
  const [showDropdown, setShowDropdown] = useState(null);

  const handleMouseEnter = (menu) => {
    setShowDropdown(menu);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{zIndex:'2'}}>
      <Container>
        <Nav className="me-auto" onMouseLeave={handleMouseLeave}>
          <NavDropdown
            className='mx-3'
            title="Buy"
            id="buy-dropdown"
            show={showDropdown === 'buy'}
            onMouseEnter={() => handleMouseEnter('buy')}
          >

            
 <div style={{ width: '600%', padding: '20px', backgroundColor: 'white', color: 'black', position: 'absolute', boxShadow:'2px 3px 5px grey',borderRadius:'0 10 20 30'}}>
  <Row >
    <Col md={3}>
<NavDropdown.Item href="#action/3.1"> Popular Choices</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="/ready">Ready To Move</NavDropdown.Item>

<NavDropdown.Item href="#action/3.2"> Owner Properties
</NavDropdown.Item> 
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Budget Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Premium Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
   New Projects <Badge bg="warning" text="dark" style={{borderRadius:'40px'}}>New</Badge>
</Nav.Link>
</Col>
    <Col md={3}>
<NavDropdown.Item href="#action/3.1">  Property Types</NavDropdown.Item> 
<NavDropdown.Divider />

<Nav.Link href="#action/3.2"  style={{color:'black'}}> Ready To Move
</Nav.Link> 
<Nav.Link href="#action/3.4"   style={{color:'black'}}>
  House For Sale in Ban..
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Budget Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Premium Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
   Flats in bangalore
</Nav.Link>
</Col>
<Col md={2}>
<NavDropdown.Item href="#action/3.1">  Budgets</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<Nav.Item href=" #action/3.3">Ready To Move</Nav.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
</Col>
<Col md={2}>
<NavDropdown.Item href="#action/3.1">  Explore</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<Nav.Item href=" #action/3.3">Ready To Move</Nav.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
</Col>
<Col md={2}>
<NavDropdown.Item href="#action/3.1"> Buying Tools</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<Nav.Item href=" #action/3.3">Ready To Move</Nav.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
</Col>
 
</Row>
</div>

          </NavDropdown>
          
          <NavDropdown
            className='mx-3'
            title="Rent"
            id="rent-dropdown"
            show={showDropdown === 'rent'}
            onMouseEnter={() => handleMouseEnter('rent')}
          >


<div style={{ width: '600%', padding: '20px', backgroundColor: 'white', color: 'black', position: 'absolute', boxShadow:'2px 3px 5px grey',borderRadius:'0 10 20 30'}}>
  <Row >
    <Col md={3}>
<NavDropdown.Item href="#action/3.1"> Popular Choices</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="https://www.magicbricks.com/ready-to-move-flats-in-bangalore-pppfs">Ready To Move</NavDropdown.Item>

<NavDropdown.Item href="#action/3.2"> Owner Properties
</NavDropdown.Item> 
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Budget Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Premium Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
   New Projects <Badge bg="warning" text="dark" style={{borderRadius:'40px'}}>New</Badge>
</Nav.Link>
</Col>
    <Col md={3}>
<NavDropdown.Item href="#action/3.1">  Property Types</NavDropdown.Item> 
<NavDropdown.Divider />

<Nav.Link href="#action/3.2"  style={{color:'black'}}> Ready To Move
</Nav.Link> 
<Nav.Link href="#action/3.4"   style={{color:'black'}}>
  House For Sale in Ban..
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Budget Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Premium Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
   Flats in bangalore
</Nav.Link>
</Col>
<Col md={2}>
<NavDropdown.Item href="#action/3.1">  Budgets</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<Nav.Item href=" #action/3.3">Ready To Move</Nav.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
</Col>
<Col md={2}>
<NavDropdown.Item href="#action/3.1">  Explore</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<Nav.Item href=" #action/3.3">Ready To Move</Nav.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
</Col>
 
</Row>
</div>


            
          </NavDropdown>

          <NavDropdown
            className='mx-3'
            title="Sell"
            id="sell-dropdown"
            show={showDropdown === 'sell'}
            onMouseEnter={() => handleMouseEnter('sell')}
          >
           {/* <NavDropdown.Item className='navitem' href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item className='navitem' href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item className='navitem' href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item className='navitem' href="#action/3.4">Separated link</NavDropdown.Item> */}

            
<div style={{ width: '600%', padding: '20px', backgroundColor: 'white', color: 'black', position: 'absolute', boxShadow:'2px 3px 5px grey',borderRadius:'0 10 20 30'}}>
  <Row >
    <Col md={3}>
<NavDropdown.Item href="#action/3.1">For Owner</NavDropdown.Item> 
<NavDropdown.Divider />

<Link to="/Sign">
<Nav.Link  href="/Sellproperty" style={{color:'black', textDecoration:'none'}}>
    Post Property <Badge bg="warning" text="dark" style={{borderRadius:'40px'}}>New</Badge>
</Nav.Link></Link>
<NavDropdown.Item href="https://www.magicbricks.com/ready-to-move-flats-in-bangalore-pppfs">Ready To Move</NavDropdown.Item>

<NavDropdown.Item href="#action/3.2"> Owner Properties
</NavDropdown.Item> 
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Budget Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Premium Homes
</Nav.Link>
</Col>
    <Col md={3}>
<NavDropdown.Item href="#action/3.1">  For Agent & Builder</NavDropdown.Item> 
<NavDropdown.Divider />

<Nav.Link href="#action/3.2"  style={{color:'black'}}> Ready To Move
</Nav.Link> 
<Nav.Link href="#action/3.4"   style={{color:'black'}}>
  House For Sale in Ban..
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Budget Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Premium Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
   Flats in bangalore
</Nav.Link>
</Col>
<Col md={2}>
<NavDropdown.Item href="#action/3.1"> Selling Tools</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<Nav.Item href=" #action/3.3">Ready To Move</Nav.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
</Col>
 
 
</Row>
</div>

          </NavDropdown>

          <NavDropdown
            className='mx-3'
            title="Home Loans"
            id="home-loans-dropdown"
            show={showDropdown === 'home-loans'}
            onMouseEnter={() => handleMouseEnter('home-loans')}
          >
            <NavDropdown.Item className='navitem' href="#action/3.1">Home Loans</NavDropdown.Item>
            <NavDropdown.Item className='navitem' href="#action/3.2">Balance Transfer</NavDropdown.Item>
            <NavDropdown.Item className='navitem' href="#action/3.3">Loan against property</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            className='mx-3'
            title="Property Services"
            id="property-services-dropdown"
            show={showDropdown === 'property-services'}
            onMouseEnter={() => handleMouseEnter('property-services')}
          >
         <NavDropdown.Item href="#action/3.1">Rent Agreement</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Generate Rent Receipt</NavDropdown.Item>
<NavDropdown.Item href="#action/3.3">Tenant Verification</NavDropdown.Item>
</NavDropdown>

          <NavDropdown
            className='mx-3'
            title="MB Advice"
            id="mb-advice-dropdown"
            show={showDropdown === 'mb-advice'}
            onMouseEnter={() => handleMouseEnter('mb-advice')}
          >
        <NavDropdown.Item className='navitem' href="#action/3.1">Insights</NavDropdown.Item>
            <NavDropdown.Item className='navitem' href="#action/3.2">Research</NavDropdown.Item>
            <NavDropdown.Item className='navitem' href="#action/3.3">Prop Index</NavDropdown.Item>
            <NavDropdown.Item className='navitem' href="#action/3.4">Find Pincode</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            className='mx-3'
            title="Help"
            id="help-dropdown"
            show={showDropdown === 'help'}
            onMouseEnter={() => handleMouseEnter('help')}
          >
           <NavDropdown.Item className='navitem' href="#action/3.1">Help Center</NavDropdown.Item>
            <NavDropdown.Item className='navitem' href="#action/3.2">Sales Enquiry</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Nav2;
