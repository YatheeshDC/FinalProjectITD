// import { Container,Card } from "react-bootstrap";
// import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';

// const MoreDetails=()=>{
//     return(
//         <div>
//               <Container fluid className="mx-4 mt-3" style={{ width: "10rem", height:"35rem", marginBottom:'10rem', marginTop:'10rem' }}>
//                 <Card className="tab22">
//                     <Card.Body>
//                       <h3> <p><b> More Details</b></p></h3>
// <table>
//     <tbody>
//         <tr>
//         <td><b>Rental Value:</b></td>
//         <td>₹25,000</td>
//         </tr><br></br>

//         <tr>
//             <td><b>Address:</b></td>
//             <td>Springdale Layout, Vijaynagar Road, Whitefield, Bangalore - East, Karnataka<br></br>
//             <LocalShippingTwoToneIcon></LocalShippingTwoToneIcon> Move your household goods. Packers and Movers starting at ₹ 3900/-</td>
//         </tr><br></br>

//         <tr>
//            <td><b>Landmarks:</b></td> 
//            <td>500 meters from the main commercial shopping and entertainment area in Whitefield and also the Metro station, 2 kms from Singapore Tech ParkBangalores premier IT hub Whitefield railway station. 4 kms from Phoenix Mall, Bangalores 1</td>
//         </tr><br></br>

//         <tr>
//             <td><b>Furnishing:</b></td>
//             <td>Semi-Furnished</td>
//         </tr><br></br>

//         <tr>
//             <td><b>Flooring:</b></td>
//             <td>Vitrified</td>
//         </tr><br></br>

//         <tr>
//             <td><b>Overlooking:</b></td>
//             <td>Garden/Park</td>
//         </tr><br></br>

//         <tr>
//             <td><b>Age of Construction:</b></td>
//             <td>Less than 5 years</td>
//         </tr><br></br>

//         <tr>
//             <td><b>Description:</b></td>
//             <td>Multistorey apartment is available for rent. It covered area of 1135 sq-ft, it is a good location property. Please contact for more details.</td>
//         </tr><br></br>
//     </tbody>
// </table>

// <p><button className="btn btn-danger me-5 mt-3">Contact_Owner</button>
// <span className="report"></span></p>

        
//                     </Card.Body>
//                 </Card>
//             </Container>
//         </div>
//     )
// }
// export default MoreDetails;


import { useState ,useEffect} from 'react';
import { Container, Card, Button, Modal, Form, Row, Col } from 'react-bootstrap';
import ReportIcon from '@mui/icons-material/Report';
import LocalShippingTwoToneIcon from '@mui/icons-material/LocalShippingTwoTone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const MoreDetails = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userNumber, setUserNumber] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [countryCode, setCountryCode] = useState('91');

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
    };
    useEffect(() => {
        const storedUserName = localStorage.getItem("userName");
        const storedUserEmail = localStorage.getItem("userEmail");
        const storedUserNumber = localStorage.getItem("userNumber");
      
        if (storedUserName || storedUserEmail || storedUserNumber) {
          setIsLoggedIn(true);
          setUserName(storedUserName);
          setUserEmail(storedUserEmail);
          setUserNumber(storedUserNumber);
        } else {
          setIsLoggedIn(false);
        }
      }, []);

    return (
        <Container fluid className="mx-auto mt-3" style={{ maxWidth: "82rem" , marginBottom:'4rem'}}>
            <Card className="poo">
                <Card.Body>
                    <h3 className="text-center"><b>More Details</b></h3>
                    <div className="mb-3">
                        <span className="me-3">Rental Value:</span>
                        <span className="mon"><b>₹40,000 | ₹5,000</b> Monthly Maintenance</span>
                    </div>
                    <div className="mb-3">
                        <span className="me-3">Address:</span>
                        <span className="tu"><b>B-1601., Thanisandra Main Road, Bangalore - North, Karnataka</b></span>
                    </div>
                    <div className="mb-3">
                        <span className="mo">Move your household goods. Packers and Movers starting at ₹ 3900/-</span>
                    </div>
                    <div className="mb-3">
                        <span className="me-3">Furnishing:</span>
                        <span className="mon"><b>Semi-Furnished</b></span>
                    </div>
                    <div className="mb-3">
                        <span className="me-3">Overlooking:</span>
                        <span className="tues"><b>Main Road</b></span>
                    </div>
                    <div className="mb-3">
                        <span className="me-3">Age of Construction:</span>
                        <span className="thu"><b>New Construction</b></span>
                    </div>
                    <div className="mb-3">
                        <span className="me-3">Lift:</span>
                        <span className="fri"><b>2</b></span>
                    </div>
                    <div>
                        <Button variant="danger" className="me-3" 
                        // onClick={handleShowModal}
                        >Contact Owner</Button>
                        <span className="rip"><ReportIcon /> Report Owner</span>
    </div>
             

            {/* Modal for Contact Owner */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton className='remove-border'>
                    <Modal.Title className='tite'>
                        Enter your WhatsApp No
                        <WhatsAppIcon style={{ color: "green", marginLeft: '0.5rem' }} />
                        to get Contact Details of the Owner
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col controlId="formBasicName">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control type="text" placeholder="Your name" autoFocus  value={isLoggedIn ? userName : ''} />
                            </Col>
                        </Row>
                        <Row>
                            <Col controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value={isLoggedIn ? userEmail : '' }/>
                            </Col>
                        </Row>
                        <Row>
                            <Col controlId="formBasicPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <div className="d-flex">
                                    <Form.Select className="me-2" value={countryCode}> 
                                    {/* onChange={handleCountryCodeChange}> */}
                                        <option value="91">+91 (India)</option>
                                        <option value="1">+1 (United States)</option>
                                    </Form.Select>
                                    <Form.Control
                                        type="text"
                                        placeholder="Phone number"
                                        value={isLoggedIn ? userNumber : ''} 
                                        // onChange={handlePhoneNumberChange}
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer className="d-flex justify-content-center remove-border">
                    <Button variant="primary" className='clic' onClick={handleCloseModal} style={{ backgroundColor: 'red', borderRadius: '20px' }}>Do Contact</Button>
                </Modal.Footer>
            </Modal>
            </Card.Body>
            </Card>
        </Container>
        
    );
}
export default MoreDetails;
