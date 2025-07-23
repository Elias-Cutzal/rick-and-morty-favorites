import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import { FavoriteContext } from "../context/FavoriteContext";
import { Spinner } from "react-bootstrap";
import Buscador from "./Buscador";

const CharacterList = () => {
    const { characters, isLoading } = useContext(FavoriteContext)
    const [render, setRender] = useState([])
    useEffect(() => {
        if(!isLoading) {
            setRender(characters)
        }
    }, [characters])
    
    return (
        <>
            <h1 className="text-center">Lista de Personajes</h1>
            {
                    <div className="d-flex flex-wrap gap-4 p-1 p-xl-5 justify-content-center">
                        
                        {
                            isLoading 
                            ? <Spinner animation="grow" variant="info" />
                            : <>
                                <Buscador render={render} setRender={setRender} characters={characters} />
                                {
                                    render.map((character) => <CharacterCard character={character} key={character.id} />)
                                }
                            </>
                        }
                    </div>
            }

        </>
    );
} 

export default CharacterList;