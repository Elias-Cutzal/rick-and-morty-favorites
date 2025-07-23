import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";
import CharacterCard from "./CharacterCard";

const FavoritePage = () => {
    const {favorites} = useContext(FavoriteContext)
    console.log(favorites)
    return (
        <>
            <h2 className="text-center">Personajes Favoritos</h2>
            <div className="d-flex flex-wrap gap-3 p-1 p-xl-5 justify-content-center">
                {
                    favorites != [] ? 
                    favorites.map(item => <CharacterCard key={item.id} character={ item } />)
                    : <h3>No hay Favoritos</h3>
                }

            </div>
        </>
    );
}

export default FavoritePage; 