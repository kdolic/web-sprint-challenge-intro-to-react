// Write your Character component here
import React from 'react'
import { Button, Card, CardBody, CardTitle, CardText, CardImg} from 'reactstrap'
import styled from 'styled-components'

const StyledCard = styled.div`
     margin: 50px auto;
     border: 1px solid #62a4ab;
     box-shadow: 0px 1px 30px -2px #7cbc6c;
     border-radius: 20px;
     width: 25%;

     .card {
         font-size: 1.8rem;
         border-radius: 20px;
         background-color: #fffaf1;
     }

     .cardImg {
         border-radius: 20px;
     }

     .cardBody {
         padding-bottom: 10px;
         border-radius: 20px;
         font-size: 1.4rem;
     }

     .btn {
         font-size: 1.5rem;
         background-color: #7cbc6c;
         border-radius: 20px;
         color: whitesmoke;
         width: 200px;
         height: 5vh;
         margin-bottom: 15px;
         &:hover {
             opacity:.8;
         }
     }
`;



export default function Character(props) {

    const {characters} = props

    return (
        <div>
            {characters.map(character => {
                return(
                    <StyledCard>
                        <Card className='card'>
                            <CardTitle tag='h2'>{character.name}</CardTitle>
                            <CardImg className='cardImg' src={character.image} alt={character.name} />
                            <CardBody className= 'cardBody'>
                                <CardText tag='h3'>Status: {character.status}</CardText>
                                <CardText tag='h3'>Species: {character.species}</CardText>
                                <CardText tag='h3'>Gender: {character.gender}</CardText>
                                <CardText tag='h3'>Origin: {character.origin.name}</CardText>
                                <Button className='btn'>
                                    Learn More
                                </Button>
                            </CardBody>
                            </Card>
                    </StyledCard>
                );
            })}
        </div>
    )
}
