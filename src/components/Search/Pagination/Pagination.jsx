import { Col, Row, Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const PaginationCmp = ({ offset, paginate, totalRecipes }) => {
    const setOffsetPlus = (offset) => {
        const limitOffset = Math.ceil(totalRecipes / 10);
        (offset + 10) > limitOffset ? paginate(limitOffset) : paginate(offset + 10)

    }
    const setOffsetMinus = (offset) => {
        (offset - 10) <= 0 ? paginate(0) : paginate(offset - 10)
    }

    return (

        <Row className="d-flex justify-content-between">
            <Col>
                <Button onClick={() => setOffsetMinus(offset)} ><FaArrowLeft /></Button>
            </Col>
            <Col className="text-end">
                <Button onClick={() => setOffsetPlus(offset)}> <FaArrowRight /></Button>
            </Col>
        </Row>

    );
};

export default PaginationCmp;