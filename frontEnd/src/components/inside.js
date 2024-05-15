import React from "react";
import Container from 'react-bootstrap/Container';
import { FaArrowRight } from "react-icons/fa6";
import { Card, Col, Row } from "react-bootstrap";

function Insider(){


return(
    <div>
<Container className="insideCont">
    <Row>
    <h2>Because you searched in Hoodi</h2>
        <Col>
          <Card className='cards'>
      <Card.Body>
      <Card.Title style={{backgroundImage: 'linear-gradient(30deg, red 1%, yellow 50%)', WebkitBackgroundClip: 'text', color: 'transparent', fontSize:'2rem'}}>
    160+
</Card.Title><br></br>
        <Card.Subtitle className="mb-2">Proprties listed for You</Card.Subtitle><br></br>
        <Card.Link style={{color:'red'}} className="FaArrowRight" >Continue last search <FaArrowRight /></Card.Link>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card className='cards'>
      <Card.Body>
        <Card.Subtitle className="mb-2">Get Personalized property recommendations from us</Card.Subtitle><br></br>
        <Card.Link style={{color:'red'}} className="FaArrowRight" >See all <FaArrowRight /></Card.Link>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card className='cards'>
      <Card.Body>
        <Card.Title style={{backgroundImage: 'linear-gradient(30deg, red 1%, yellow 50%)', WebkitBackgroundClip: 'text', color: 'transparent', fontSize:'2rem'}}>100+</Card.Title><br></br>
        <Card.Subtitle className="mb-2">owner Proprties in Hoodi</Card.Subtitle><br></br>
        <Card.Link style={{color:'red'}} className="FaArrowRight" >See all <FaArrowRight/></Card.Link>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card className='cards'>
      <Card.Body>
        <Card.Title style={{backgroundImage: 'linear-gradient(30deg, red 1%, yellow 50%)', WebkitBackgroundClip: 'text', color: 'transparent', fontSize:'2rem'}}>250+</Card.Title><br></br>
        <Card.Subtitle className="mb-2">Proprties in popular localities</Card.Subtitle><br></br>
        <Card.Link style={{color:'red'}} className="FaArrowRight" >See all <FaArrowRight /></Card.Link>
      </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
          </div>
)
}

export default Insider;