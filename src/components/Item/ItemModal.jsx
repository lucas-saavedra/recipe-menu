import { Modal } from "react-bootstrap";
import ItemDetailContainer from "./ItemDetailContainer";
import MenuWidget from "../MenuWidget/MenuWidget";

const SearchModal = (props) => {
    return (
        <Modal
            {...props}
            size="l"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton style={{ paddingTop: '0.25rem', paddingBottom: '0.25rem' }}>
                <MenuWidget color={'black'} />
            </Modal.Header>
            <Modal.Body>
                <ItemDetailContainer id={props.id} />
            </Modal.Body>
        </Modal>
    );
}
export default SearchModal;

