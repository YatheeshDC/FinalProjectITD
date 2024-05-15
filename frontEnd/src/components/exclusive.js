// import { Col, Container, Row } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';

// function Exclusive() {
//   return (
//     <div>
//         <Container className='insideCont'>
//             <Row>
//               <h2>Exclusive Owner Properties in Bangalore</h2>
//    <Col>
//     <Card className='propertyCards'>
//       <Card.Img variant="top" src="https://img.staticmb.com/mbimages/project/Photo_h310_w462/2023/09/04/Project-Photo-88-Sri-Garnet-Park-Bangalore-5041385_1128_2000_310_462.jpg" height={'170rem'} />
//       <Card.Body>
//       <Card.Subtitle className="mb-2 text-muted">2 BHK Flat</Card.Subtitle>
//         <Card.Title>&#x20B9;36,000  |  1203 sqft</Card.Title>
//         <Card.Text>
//           Hoodi, Bangalore
//         </Card.Text>
//         <Card.Link href="#">Ready to move</Card.Link>
//       </Card.Body>
//     </Card>
//    </Col>

//    <Col>
//     <Card className='propertyCards'>
//       <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2020/Oct/16/Photo_h300_w450/51595087_9_51595087_9_hatsAppImage2020-09-30at11_Fotor_300_450.jpg" height={'170rem'} />
//       <Card.Body>
//       <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
//         <Card.Title>&#x20B9;45,000  |  1376 sqft</Card.Title>
//         <Card.Text>
//           Mahadevapura, Bangalore
//         </Card.Text>
//         <Card.Link href="#">Ready to move</Card.Link>
//       </Card.Body>
//     </Card>
//    </Col>

//    <Col>
//     <Card className='propertyCards'>
//       <Card.Img variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2024/Apr/19/Photo_h300_w450/72255803_1_PropertyImage1713525877754_300_450.jpg" height={'170rem'} />
//       <Card.Body>
//       <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
//         <Card.Title>&#x20B9;48,000  |  1376 sqft</Card.Title>
//         <Card.Text>
//           Yashwanthapura, Bangalore
//         </Card.Text>
//         <Card.Link href="#">Ready to move</Card.Link>
//       </Card.Body>
//     </Card>
//    </Col>

//    <Col>
//     <Card className='propertyCards'>
//       <Card.Img className='ropertyImages' variant="top" src="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/13/Photo_h300_w450/70387107_10_PropertyImage1702458134032_300_450.jpg" height={'170rem'} />
//       <Card.Body>
//       <Card.Subtitle className="mb-2 text-muted">3 BHK Flat</Card.Subtitle>
//         <Card.Title>&#x20B9;30,000  |  1398 sqft</Card.Title>
//         <Card.Text>
//           Rajaji Nagar, Bangalore
//         </Card.Text>
//         <Card.Link href="#">Ready to move</Card.Link>
//       </Card.Body>
//     </Card>
//    </Col>
//     </Row>
//     </Container>
//     </div>
//   );
// }

// export default Exclusive;



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

function Exclusive() {
  const cards = [
    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jan/02/Photo_h300_w450/64878159_6_PropertyImage50-128722931918055_300_450.jpg",
      subtitle: "3 BHK Flat",
      price: "₹61,000 | 1578 sqft",
      location: "Anna Nagar, Chennai",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2018/Aug/04/Photo_h300_w450/35982217_2_IMG_20180630_160832_300_450.jpg",
      subtitle: "2 BHK Flat",
      price: "₹20,000 | 1207 sqft",
      location: "KSR Nagar, Chennai",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2019/08/23/Project-Photo-23-Asta-AVM-Chennai-5094207_667_1000_310_462.jpg",
      subtitle: "2 BHK Flat",
      price: "₹30,000 | 1680 sqft",
      location: "Vadapalani, Chennai",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/03/Photo_h300_w450/70741333_13_1704271048251-989712_300_450.jpg",
      subtitle: "3 BHK Flat",
      price: "₹70,000 | 1824 sqft",
      location: "Kovalam, Chennai",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/19/Photo_h300_w450/71935751_10_hatsAppImage20240319at15.25.29_300_450.jpeg",
      subtitle: "2 BHK Flat",
      price: "₹35,000 | 1300 sqft",
      location: "Uthandi, Chennai",
      link: "#",
    },

    {
      imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2021/Apr/21/Photo_h300_w450/54906061_13_6_300_450.jpg",
      subtitle: "1 BHK Flat",
      price: "₹25,000 | 978 sqft",
      location: "Maduravoyal, Chennai",
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
          <h2>Exclusive Owner Properties in Chennai</h2>
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
                  <Card.Link href={cards[(index + position) % cards.length].link} style={{color:'red'}}><b>Ready to move </b><FaArrowRight/></Card.Link>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <button className='ArrowButton2' style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '550%', borderRadius:'40px', height:'40px' }} onClick={handlePrev}>
          <KeyboardDoubleArrowLeftOutlinedIcon />
        </button>
        <button className='ArrowButton' style={{ position: 'absolute', right: '135px', top: '550%', borderRadius:'20px', height:'40px' }} onClick={handleNext}>
          <KeyboardDoubleArrowRightOutlinedIcon />
        </button>
      </Container>
    </div>
  );
}

export default Exclusive;




