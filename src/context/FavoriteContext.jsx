import axios from "axios";
import { createContext, useEffect, useState } from "react";

const FavoriteContext = createContext()


const FavoriteProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([])
    const [characters, setCharacters] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const getData = async () => {
        try {
            let data = []
            let response = (await axios.get(`https://rickandmortyapi.com/api/character`))
            response = response.data.results
            response.forEach(item => item.favorite = false)
            setCharacters(response)
        }
        catch (error) {
            console.log(error)
        }
        finally {
            setIsLoading(false)
        }
    }

    const favorite = (character, color, setColor) => {
        character.favorite = !character.favorite
        if (character.favorite) {
            let newCharacters = characters.map(item => {
                if (item.id == character.id) {
                    item.favorite = true
                }
                return item
            }) 
            setCharacters(newCharacters)
        }
        else {
            let newCharacters = characters.map(item => {
                if (item.id == character.id) {
                    item.favorite = false
                }
                return item
            })
            setCharacters(newCharacters)
        }
        setColor(!color)
        setFavorites(() => {
            let newFavorites = characters.filter(item => item.favorite)
            return newFavorites
        })
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <FavoriteContext.Provider value={{ favorites, setFavorites, characters, getData, setCharacters, favorite, isLoading }}>
            {children}
        </FavoriteContext.Provider>
    )
}
export { FavoriteContext, FavoriteProvider }