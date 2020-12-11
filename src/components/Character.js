// Write your Character component here
import React, { useState } from 'react'
import { Button, Collapse, Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap'
import styled from 'styled-components'

const StyledCard = styled.div`
     margin: 50px auto;
     box-shadow: 0px 1px 30px -2px #7cbc6c;
     border-radius: 20px;
     width: 25%;

     .card {
        border: 1px solid #62a4ab;
         font-size: 1.5rem;
         border-radius: 20px;
         background-color: #fffaf1;
     }

     .cardImg {
        
         height: 22vh;
         border-radius: 20px;
     }

     .cardBody {
         padding-bottom: 10px;
         border-radius: 20px;
         font-size: 1.0rem;
     }

     .btn {
         font-size: 1.0rem;
         background-color: #7cbc6c;
         border-radius: 5px;
         color: #fffaf1;
         width: 120px;
         height: 5vh;
         margin-bottom: 15px;
         &:hover {
             opacity:.8;
         }
     }
`;



export default function Character(props) {

    const {characters} = props

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {characters.map(character => {
                return(
                    <StyledCard>
                        <Card className='card'>
                            <CardTitle tag='h2'>{character.name}</CardTitle>
                            <CardImg className='cardImg' src={character.image} alt={character.name} style={{ marginBottom: '1rem' }} />
                            <CardBody className= 'cardBody'>
                            <Button className='btn' onClick={toggle} style={{ marginBottom: '1rem' }}> Learn More </Button>
                            <Collapse isOpen={isOpen}>
                                <CardText tag='h3'>Status: {character.status}</CardText>
                                <CardText tag='h3'>Species: {character.species}</CardText>
                                <CardText tag='h3'>Gender: {character.gender}</CardText>
                                <CardText tag='h3'>Origin: {character.origin.name}</CardText>
                            </Collapse>
                            </CardBody>
                            </Card>
                    </StyledCard>
                );
            })}
        </div>
    )
}
