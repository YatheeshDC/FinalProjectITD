// import React, { useState } from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
// import Card from 'react-bootstrap/Card';
// import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
// import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from "react-icons/fa6";

// function ArrowAction(totalCards) {
//   const [index, setIndex] = useState(0);

//   const handleNext = () => {
//     setIndex(prevIndex => (prevIndex + 1) % totalCards);
//   };

//   const handlePrev = () => {
//     setIndex(prevIndex => (prevIndex - 1 + totalCards) % totalCards);
//   };

//   return { index, handleNext, handlePrev };
// }

// function Property22() {
//   const cards = [
//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/06/Photo_h180_w240/70655347_1_PropertyImage1704544830015_180_240.jpg",
//       subtitle: "3 BHK Flat",
//       price: "₹56,000 | 1578 sqft",
//       location: "Sector 150, Pusta Road, Noida",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/04/Photo_h180_w240/70303735_8_PropertyImage170-56177385649784_180_240.jpg",
//       subtitle: "2 BHK Flat",
//       price: "₹45,000 | 1207 sqft",
//       location: "Noida Extension, Noida",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/29/Photo_h180_w240/72074739_10_f22df317c8746eda7d323cdf71db022_180_240.jpeg",
//       subtitle: "2 BHK Flat",
//       price: "₹50,000 | 1578 sqft",
//       location: "Sector 94, Noida Express Way, Noida",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/15/Photo_h180_w240/70924951_5_PropertyImage308-8663571011184_180_240.jpghttps://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/15/Photo_h180_w240/70924951_5_PropertyImage308-8663571011184_180_240.jpg",
//       subtitle: "3 BHK Flat",
//       price: "₹60,000 | 1824 sqft",
//       location: "Sector 116, Noida",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/05/Photo_h180_w240/70312683_2_RWBEDROOM02_180_240.JPG",
//       subtitle: "2 BHK Flat",
//       price: "₹45,000 | 1578 sqft",
//       location: "Blossom County, Noida",
//       link: "#",
//     },

//     {
//       imgUrl: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/09/Photo_h180_w240/70312925_1_PropertyImage1702124171328_180_240.jpg",
//       subtitle: "4 BHK Flat",
//       price: "₹65,000 | 1578 sqft",
//       location: "Pocket C Sector 34, Noida",
//       link: "#",
//     },
//     // Other card objects...
//   ];
//   const { index, handleNext, handlePrev } = ArrowAction(cards.length);

//   // Define the array of indices representing the positions of the cards
//   const cardPositions = [0, 1, 2, 3];

//   return (
//     <div>
//       <Container className='insideCont'>
//         <Row>
//           <h2>Fresh Properties in Noida</h2>
//           {cardPositions.map(position => (
//             <Col key={position}>
//               <Card className='propertyCards' style={{ display: 'block' }}>
//                 {/* Use the index to dynamically change the content of the cards */}
//                 <Card.Img variant="top" src={cards[(index + position) % cards.length].imgUrl} height={'170rem'} />
//                 <Card.Body>
//                   <Card.Subtitle className="mb-2 text-muted">{cards[(index + position) % cards.length].subtitle}</Card.Subtitle>
//                   <Card.Title>{cards[(index + position) % cards.length].price}</Card.Title>
//                   <Card.Text>
//                     {cards[(index + position) % cards.length].location}
//                   </Card.Text>
//                   <Link to="/more"> 
//                   <Card.Link href={cards[(index + position) % cards.length].link}style={{color:'red'}}><b>Ready to move </b><FaArrowRight/></Card.Link>
//                   </Link>
//                 </Card.Body>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//         <button className='ArrowButton2' style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '720%', borderRadius:'40px', height:'40px' }} onClick={handlePrev}>
//           <KeyboardDoubleArrowLeftOutlinedIcon />
//         </button>
//         <button className='ArrowButton' style={{ position: 'absolute', right: '130px', top: '720%', borderRadius:'20px', height:'40px' }} onClick={handleNext}>
//           <KeyboardDoubleArrowRightOutlinedIcon />
//         </button>
//       </Container>
//     </div>
//   );
// }

// export default Property22;


// import React, { useState, useEffect } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Typography, CardContent, CardMedia, CardActionArea, CardActions, Button } from '@mui/material';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// // import Arrrowaction from '../reducers/arrowAction';
// import Arrrowaction from './arrowActionextra';
// import axios from 'axios';

// function  Property22() {
//     const [hoverIndex, setHoverIndex] = useState(-1);
//     const [cards, setCards] = useState([]);
//     const cardsToShow = 4;

//     useEffect(() => {
//         axios.get('http://localhost:3002/api/properties')
//             .then(response => {
//                 setCards(response.data);
//             })
//             .catch(error => {
//                 console.error('Failed to fetch properties:', error);
//             });
//     }, []);

//     const { index, handleNext, handlePrev } = Arrrowaction(cards.length, cardsToShow);

//     const addToCart = (property, userName) => {
//         const currentCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
//         currentCart.push(property);
//         localStorage.setItem("cartItems", JSON.stringify(currentCart));
    
//         axios.post('http://localhost:3002/api/cart', {
//             userName, 
//             items: [property]
//         })
//         .then(response => {
//             console.log('Cart updated:', response.data);
//             alert("Property added to WishList");
//         })
//         .catch(error => {
//             console.error('Failed to update Wishlist:', error);
//             alert("Something went wrong");
//         });
//     };

//     return (
//         <Container fluid className='mt-3 mx-3 fresh-properties'>
//             <h2 className='sedan-sc-regular mb-2 '>
//                 Fresh Properties in Bangalore
//                 </h2> 
//             <Row className='property-grid'>
//                 {cards.slice(index, index + cardsToShow).map((card, cardIndex) => (
//                     <Col key={cardIndex} md={3}>
//                         <Card sx={{ maxWidth: 645 }} onMouseEnter={() => setHoverIndex(cardIndex)}
//                               onMouseLeave={() => setHoverIndex(-1)}>
//                             <CardActionArea>
//                                 <CardMedia 
//                                 component="img" 
//                                 height="140" 
//                                 image={card.image} 
//                                 alt={`${card.title} image  `} />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h6">
//                                         {card.title}
//                                     </Typography>
//                                     <Typography variant="body1" color="text.secondary">
//                                         <CurrencyRupeeIcon />
//                                         <strong>{`${card.price} | ${card.size}`}</strong>
//                                         <div>{card.location}</div>
//                                         <div>{card.readytomove}</div>
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 {hoverIndex === cardIndex && (
//                                     <>
//                                          {/* <Link to="/details">
//                                             <Button style={{ backgroundColor: 'red', color: 'White', border: '2px solid red', borderRadius: '30px' }}
//                                                 size="small" color="primary">
//                                                 Read Details
//                                             </Button>
//                                          </Link> */}
//                                           <Link to="/more">  <button className="ButtonStyle bg-danger" onClick={() => console.log('View Details clicked')}>
//                      View Details
//                  </button></Link>
//                                         {/* <Button variant="contained" color="info" className="cart-button"
//                                                 onClick={() => addToCart(card)}>
//                                             Add to WishList
//                                         </Button> */}

// <button   className="ButtonStyle bg-danger"
//                              onClick={() => addToCart(card)}>
//                          Add to wishlist
//                      </button>
//                                     </>
//                                 )}
//                             </CardActions>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//             {/* <nav className='pagination-controls'>
//                 {index > 0 && (
//                     <button className='ArrowButton2' 
//                     style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '377%', borderRadius: '40px', height: '40px' }} 
//                     onClick={handlePrev}>
//                         <ArrowBackIcon />
//                     </button>
//                 )}
//                 {index < cards.length - cardsToShow && (
//                     <button className='ArrowButton' style={{ position: 'absolute', right: '95px', top: '377%', borderRadius: '20px', height: '40px' }} onClick={handleNext}>
//                         <ArrowForwardIcon />
//                     </button>
//                 )}
//             </nav> */}
//             <nav className='pagination-controls'>
//                 {index > 0 && (
//                      <Button className='arrow-button prev' onClick={handlePrev}>
//                         {/* <ArrowBackIcon /> */}
//                      </Button>
//                  )}
//                  {index < cards.length - cardsToShow && (
//                      <Button className='arrow-button next' onClick={handleNext}>
//                          {/* <ArrowForwardIcon /> */}
//                      </Button>
//                  )} 
//                    {index > 0 && (
//          <button className='ArrowButton2' onClick={handlePrev}>
//            <ArrowBackIcon />
//          </button>
//         )}
//        {index < cards.length - cardsToShow && (
//          <button className='ArrowButton1' onClick={handleNext}>
//            <ArrowForwardIcon />
//          </button>
//        )}
//              </nav>
//         </Container>
//     );
// }

// export default Property22;


import React, { useState, useEffect } from 'react';
import { Row, Col, Card} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Typography, CardContent, CardMedia, CardActionArea, CardActions, Container } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import axios from 'axios';

function Property22() {
    // const [hoverIndex, setHoverIndex] = useState(-1);
    const [cards, setCards] = useState([]);
    const cardsToShow = 4;
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        axios.get('http://localhost:3002/api/properties')
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch properties:', error);
            });
    }, []);

    const handleNext = () => {
        setStartIndex(prevIndex => (prevIndex + 1) % (cards.length - cardsToShow + 1));
    };

    const handlePrev = () => {
        setStartIndex(prevIndex => (prevIndex - 1 + (cards.length - cardsToShow + 1)) % (cards.length - cardsToShow + 1));
    };

    const addToCart = (property, userName) => {
        const currentCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
        currentCart.push(property);
        localStorage.setItem("cartItems", JSON.stringify(currentCart));
    
        axios.post('http://localhost:3002/api/cart', {
            userName, 
            items: [property]
        })
        .then(response => {
            console.log('Cart updated:', response.data);
            alert("Property added to WishList");
        })
        .catch(error => {
            console.error('Failed to update Wishlist:', error);
            alert("Something went wrong");
        });
    };

    return (
        <Container className='mt-5 fresh-properties' style={{marginBottom:'4rem'}}>
        <Typography variant='h4' component="h1" className='header'>
                Fresh Properties in Bangalore
                </Typography>
            <Row className='property-grid'>
                {cards.slice(startIndex, startIndex + cardsToShow).map((card, cardIndex) => (
                    <Col key={cardIndex} md={3}>
                        <Card sx={{ maxWidth: 345 }} 
                            //   onMouseEnter={() => setHoverIndex(cardIndex)}
                            //   onMouseLeave={() => setHoverIndex(-1)}
                              >
                            <CardActionArea>
                                <CardMedia 
                                component="img" 
                                height="140" 
                                image={card.image} 
                                alt={`${card.title} image`} />
                                <CardContent>
                                    <Typography gutterBottom variant="h6">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        <CurrencyRupeeIcon />
                                        <strong>{`${card.price} | ${card.size}`}</strong>
                                        <div>{card.location}</div>
                                        <div>{card.readytomove}</div>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className="card-actions">
                                {/* {hoverIndex === cardIndex && (
                                    <> */}
                                        <Link to="/more">  
                                        <button className="action-button" onClick={() => console.log('View Details clicked')}>
                                                View Details
                                            </button>
                                        </Link>
                                        <button className="action-button" onClick={() => addToCart(card)}>
                                            Add to wishlist
                                        </button>
                                    {/* </>
                                )} */}
                            </CardActions>
                        </Card>
                    </Col>
                ))}
            </Row>
            <button className='ArrowButton2' style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '700%', borderRadius: '40px', height: '40px' }} onClick={handlePrev}>
                <KeyboardDoubleArrowLeftOutlinedIcon />
            </button>
            <button className='ArrowButton' style={{ position: 'absolute', right: '90px', top: '700%', borderRadius: '20px', height: '40px' }} onClick={handleNext}>
                <KeyboardDoubleArrowRightOutlinedIcon />
            </button>
        </Container>
    );
}

export default Property22;
