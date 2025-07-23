import { useContext, useState } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

const FavoriteButton = ({ character }) => {
    const {favorite} = useContext(FavoriteContext)
    const [color, setColor] = useState(character.favorite)
    
    return (
        <>
            <button

                className='rounded-circle border d-flex justify-content-center align-items-center shadow'
                style={
                    { width: '40px', height: '40px', position: 'absolute', top: '10px', right: '10px' }
                }
                onClick={() => favorite(character, color, setColor)}
                title="favorite"
                >
                {
                    color
                        ? <i className="bi bi-heart-fill text-danger" />
                        : <i className="bi bi-heart" />
                }
            </button>
        </>
    );
}

export default FavoriteButton; 