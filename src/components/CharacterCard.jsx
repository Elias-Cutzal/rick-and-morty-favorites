import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import FavoriteButton from "./FavoriteButton";

const CharacterCard = ({ character }) => {
    return (
        <>
            <Card style={{ width: '18rem' }} className="shadow">
                <Card.Img variant="top" src={character.image} />
                <FavoriteButton character={character}></FavoriteButton>

                <Card.Body className="text-center">
                    <Card.Title>{character.name}</Card.Title>
                    <Link to={`/character/${character.id}`} className="btn btn-outline-primary shadow ">Ver Detalles</Link>
                </Card.Body>
            </Card>
        </>
    );
}

export default CharacterCard; 