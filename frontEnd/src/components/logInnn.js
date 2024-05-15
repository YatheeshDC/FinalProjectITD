import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function  LoginForm() {
  return (
    <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
    <Card style={{ width: '25rem' ,height:'85vh',border:'1px solid lightgray',backgroundColor:'ffff' }}>
    <Form>
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
        <Form.Control type="name" placeholder="Enter Name"  name='userName'/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='userEmail' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name='userPassword' />
      </Form.Group>
      <Form.Group className="mb-3 " controlId="formBasicCheckbox" style={{fontSize:'12px'}}>
          <Form.Check type="checkbox" label="I agree to Magicbricks T&C, Privacy Policy, & Cookie Policy"  />
        </Form.Group>
    
      <Button  variant='danger' style={{borderColor:'red', width:'80%'}} className='mx-2'>
           Sign Up 
                </Button>
                <Form.Group className="mb-3  mt-2 d-flex justify-content-center">
          <Form.Text>Already registered?</Form.Text> 
          <Link to='' style={{color:'red'}}>Login Now</Link>
        </Form.Group>



      </div>
    </Form>
 
    </Card>
    </div>
  );
}

export default LoginForm;