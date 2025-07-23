import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoriteContext } from "../context/FavoriteContext";
import { Card } from "react-bootstrap";
import FavoriteButton from "./FavoriteButton";

const CharacterDetail = () => {
    const { id } = useParams()
    const { characters } = useContext(FavoriteContext)
    let character;
    if(characters) {
        character = characters.find(char => char.id == id)
    }
    return (
        <>
            {
                character ? 
                <div className="vh-100 d-flex justify-content-center align-items-center">
                <Card style={{ width: '18rem' }} className="shadow-lg">
                    <Card.Img variant="top" src={character.image} />
                    <FavoriteButton character={character}></FavoriteButton>
                    <Card.Body>
                        <Card.Title>{character.name}</Card.Title>
                        <Card.Text><strong>Estado: </strong>{character.status}</Card.Text>
                        <Card.Text><strong>Género: </strong>{character.gender}</Card.Text>
                        <Card.Text><strong>Estado: </strong>{character.status}</Card.Text>
                        <Card.Text><strong>Especie: </strong>{character.species}</Card.Text>
                        <Card.Text><strong>Origen: </strong>{character.origin.name}</Card.Text>
                        <Card.Text><strong>Ubicación: </strong>{character.location.name}</Card.Text>
                        <Card.Text><strong>Fecha de creación: </strong>{character.created}</Card.Text>
                    </Card.Body>
                </Card>
            </div> : ''
            }
        </>
    );
}

export default CharacterDetail;