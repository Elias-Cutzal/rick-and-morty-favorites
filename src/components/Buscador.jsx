import { Form } from "react-bootstrap";

const Buscador = ({ setRender, characters}) => {
    const change = (e) => {
        if(e.target.value == '') {
            setRender(characters)
        }
        else {
            let search = characters.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
            setRender(search)
        }
    }
    return (
        <>
        <Form.Control className="mx-4 " placeholder="Buscar personaje por nombre" onChange={change} /></>
    );
}

export default Buscador; 