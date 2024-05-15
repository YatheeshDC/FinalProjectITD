import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import { Container, Row ,Col,Badge} from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa6";
import { Link } from '@mui/material';
export default function BasicCard() {
  return (
    // <div>
    <Container className='advContainer'>
        <Row>
        <h2>Advice & Tools</h2>
    <Col>
    <Card className='advCards'>
      <CardContent>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        <MapsHomeWorkOutlinedIcon style={{ width: '40px', height: '50px' }}/> 
        <Badge bg="warning" text="dark" className='badge'>
        Certified
      </Badge> 
        </Typography>
        <Typography variant="h5" component="div">
          Property Valuation
        </Typography>
        <Typography variant="body2">
          Know the right value for your Property before you Buy or Sell.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <div className='read'>
        <Link  size="small" style={{color:'red'}}><b>Read more </b><FaArrowRight/></Link>
        </div>
      </CardActions>
    </Card>
    </Col>

<Col>
    <Card className='advCards'>
      <CardContent>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        <DescriptionOutlinedIcon style={{ width: '40px', height: '50px' }}/> 
        <Badge bg="warning" text="dark" className='badge'>
        GET FREE
      </Badge> 
        </Typography>
        <Typography variant="h5" component="div">
         Legal Title Check
        </Typography>
        <Typography variant="body2">
          Get Property checked for clean title and no legal claim/bank attachment.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <div className='read'>
        <Link  size="small"style={{color:'red'}}><b>Read more </b><FaArrowRight/></Link>
        </div>
      </CardActions>
    </Card>
</Col>
<Col>
    <Card className='advCards'>
      <CardContent>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        <TrendingUpOutlinedIcon style={{ width: '40px', height: '50px' }}/> 
        {/* <Badge bg="warning" text="dark">
        Warning
      </Badge> <br></br> */}
        </Typography>
        <Typography variant="h5" component="div">
          Rates & Trends
        </Typography>
        <Typography variant="body2">
          Know all about Property Rates & Trends in your city.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <div className='read'>
        <Link  size="small"style={{color:'red'}}><b>View now </b><FaArrowRight/></Link>
        </div>
      </CardActions>
    </Card>
    </Col>
    <Col>

    <Card className='advCards'>
      <CardContent>
        <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
        <CalculateOutlinedIcon style={{ width: '40px', height: '50px' }}/> 
        {/* <Badge bg="warning" text="dark">
        Warning
      </Badge> <br></br> */}
        </Typography>
        <Typography variant="h5" component="div">
          EMI Calculator
        </Typography>
        <Typography variant="body2">
          Know how much you'll have to pay every month on your loan.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <div className='read'>
        <Link  size="small"style={{color:'red'}}><b>View now </b><FaArrowRight/></Link>
        </div>
      </CardActions>
    </Card>
    </Col>
    </Row>
    </Container>
    // </div>

    );    
}

