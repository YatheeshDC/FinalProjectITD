import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

function ArrowAction(totalCards) {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex(prevIndex => (prevIndex + 1) % totalCards);
  };

  const handlePrev = () => {
    setIndex(prevIndex => (prevIndex - 1 + totalCards) % totalCards);
  };

  return { index, handleNext, handlePrev };
}

function Property22() {
  const cards = [
    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg",
      subtitle: "3 BHK Flat",
      price: "₹56,000 | 1578 sqft",
      location: "Sector 150, Pusta Road, Noida",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/04/Photo_h180_w240/70303735_8_PropertyImage170-56177385649784_180_240.jpg",
      subtitle: "2 BHK Flat",
      price: "₹45,000 | 1207 sqft",
      location: "Noida Extension, Noida",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/29/Photo_h180_w240/72074739_10_f22df317c8746eda7d323cdf71db022_180_240.jpeg",
      subtitle: "2 BHK Flat",
      price: "₹50,000 | 1578 sqft",
      location: "Sector 94, Noida Express Way, Noida",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/15/Photo_h180_w240/70924951_5_PropertyImage308-8663571011184_180_240.jpghttps://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/15/Photo_h180_w240/70924951_5_PropertyImage308-8663571011184_180_240.jpg",
      subtitle: "3 BHK Flat",
      price: "₹60,000 | 1824 sqft",
      location: "Sector 116, Noida",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/05/Photo_h180_w240/70312683_2_RWBEDROOM02_180_240.JPG",
      subtitle: "2 BHK Flat",
      price: "₹45,000 | 1578 sqft",
      location: "Blossom County, Noida",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/09/Photo_h180_w240/70312925_1_PropertyImage1702124171328_180_240.jpg",
      subtitle: "4 BHK Flat",
      price: "₹65,000 | 1578 sqft",
      location: "Pocket C Sector 34, Noida",
      link: "#",
    },
    // Other card objects...
  ];
  const { index, handleNext, handlePrev } = ArrowAction(cards.length);

  // Define the array of indices representing the positions of the cards
  const cardPositions = [0, 1, 2, 3];

  return (
    <div>
      <Container className='insideCont'>
        <Row>
          <h2>Fresh Properties in Noida</h2>
          {cardPositions.map(position => (
            <Col key={position}>
              <Card className='propertyCards' style={{ display: 'block' }}>
                {/* Use the index to dynamically change the content of the cards */}
                <Card.Img variant="top" src={cards[(index + position) % cards.length].imgUrl} height={'170rem'} />
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">{cards[(index + position) % cards.length].subtitle}</Card.Subtitle>
                  <Card.Title>{cards[(index + position) % cards.length].price}</Card.Title>
                  <Card.Text>
                    {cards[(index + position) % cards.length].location}
                  </Card.Text>
                  <Link to="/more"> 
                  <Card.Link href={cards[(index + position) % cards.length].link}style={{color:'red'}}><b>Ready to move </b><FaArrowRight/></Card.Link>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <button className='ArrowButton2' style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '720%', borderRadius:'40px', height:'40px' }} onClick={handlePrev}>
          <KeyboardDoubleArrowLeftOutlinedIcon />
        </button>
        <button className='ArrowButton' style={{ position: 'absolute', right: '130px', top: '720%', borderRadius:'20px', height:'40px' }} onClick={handleNext}>
          <KeyboardDoubleArrowRightOutlinedIcon />
        </button>
      </Container>
    </div>
  );
}

export default Property22;