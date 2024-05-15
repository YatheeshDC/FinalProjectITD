import React from "react"
import { Card, Container } from "react-bootstrap";


function YourProperty(){
    return(
        <Container>
            <Card style={{backgroundColor:'antiquewhite', marginBottom:'4rem', display:'flex'}}>
              <Card.Body>
              <span style={{justifyItems:'flex-start'}}>
                <Card.Title><h3>Post Your Property for <i><b>Free</b></i></h3></Card.Title>
                <Card.Text>
                  List it on Magicbricks and get genuine leads
                </Card.Text>
                </span>
                <span style={{justifyItems:'flex-end'}}>
                <Card.Text>
                  List it on Magicbricks and get genuine leads
                </Card.Text>
                </span>
              </Card.Body>
            </Card>
         </Container>
          );
        }
export default YourProperty;