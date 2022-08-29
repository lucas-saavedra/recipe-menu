import { useState } from 'react';
import { Col } from 'react-bootstrap';
import SearchModal from './ItemModal';
import { FaRegEye } from "react-icons/fa";

const Item = ({ item }) => {
    const [modalShow, setModalShow] = useState(false);
    const { id, title, image } = item;

    return (
        <Col>
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className='d-flex justify-content-between align-items-center'>
                        <h5 className="h3">{title}</h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <p className="h5">
                        <button onClick={() => setModalShow(true)} className='btn btn-outline-dark'>
                            Show More <FaRegEye />
                        </button>
                    </p>
                    <SearchModal
                        id={id}
                        show={modalShow && true}
                        onHide={() => setModalShow(false)} />
                </div>
            </div>
        </Col>



    )
}
export default Item
