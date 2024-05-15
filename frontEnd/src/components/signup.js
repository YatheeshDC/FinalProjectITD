import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import CombinedNavigation from './navbar';
import axios from 'axios';
import React, { useState } from 'react';

 
function  UserSignup() {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    userNumber:''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3002/register', formData);
      console.log('Registered Successfully:', response.data);
    } catch (error) {
      console.error('Registration Error:', error);
    }
  };

  return (
    <>
    <CombinedNavigation/>
    <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
    <Card style={{ width: '25rem' ,height:'85vh',border:'1px solid lightgray',backgroundColor:'ffff' }}>
    <Form onSubmit={handleSubmit}   >
        <div className='px-4'>
        <p  className='fs-5'>Sign up</p>
        <p style={{ color:'grey'}}>I am</p>
        <Form.Group className="mb-3 d-flex " controlId="formBasicRadio">
        <Form.Check type="radio" label=" Buyer/Owner/Tenant" name='role' />
        <Form.Check type="radio" label=" Agent" name='role' className='mx-3' />
        <Form.Check type="radio" label=" Builder" name='role'className='mx-3' />


      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label> Name</Form.Label>
        <Form.Control type="text"  
         name="userName"
         value={formData.userName}
         onChange={handleChange}
         placeholder="Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  
         name="userEmail"
         value={formData.userEmail}
         onChange={handleChange}
         placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" 
          name="userPassword"
          value={formData.userPassword}
          onChange={handleChange}
          placeholder="Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Number</Form.Label>
        <Form.Control type="phonenumber" 
          name="userNumber"
          value={formData.userNumber}
          onChange={handleChange}
          placeholder="enter number" />
      </Form.Group>
      
      <Form.Group className="mb-3 " controlId="formBasicCheckbox" style={{fontSize:'12px'}}>
          <Form.Check type="checkbox" label="I agree to Magicbricks T&C, Privacy Policy, & Cookie Policy"  />
        </Form.Group>
    
      <Button  type='submit'  variant='danger' style={{borderColor:'red'  ,width:'80%'}} className='mx-2'>
           Sign Up 
                </Button>
                <Form.Group className="mb-3  mt-2 d-flex justify-content-center "   >
          <Form.Text>Already registered?</Form.Text> 
          <Link to='/Login' style={{color:'red'}}>Login Now</Link>
        </Form.Group> 
      </div>
    </Form>
    </Card>
    </div>
    </>
  );
}

export default UserSignup;
 






 
// import React, { useState } from 'react';
// import axios from 'axios';

// function SignUp() {
//   const [formData, setFormData] = useState({
//     userName: '',
//     userEmail: '',
//     userPassword: ''
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/register', formData);
//       console.log('Registered Successfully:', response.data);
//     } catch (error) {
//       console.error('Registration Error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} >
//       <input
//         name="userName"
//         value={formData.userName}
//         onChange={handleChange}
//         placeholder="Name"
//       />
//       <input
//         type="email"
//         name="userEmail"
//         value={formData.userEmail}
//         onChange={handleChange}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         name="userPassword"
//         value={formData.userPassword}
//         onChange={handleChange}
//         placeholder="Password"
//       />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// }

// export default SignUp;
