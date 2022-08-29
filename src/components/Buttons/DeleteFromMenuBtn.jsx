import { useContext } from 'react'
import { MenuContext } from '../../context/menuContext';
import { FaTrash } from "react-icons/fa";
import { Button } from 'react-bootstrap';

const DeleteButton = ({ id }) => {
    const { deleteFromMenu } = useContext(MenuContext);
    return (
        <>
            <Button variant="danger" onClick={() => deleteFromMenu(id)} >
                <FaTrash color="white" />
            </Button>
        </>
    )
}

export default DeleteButton