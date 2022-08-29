
import { useContext } from "react";
import { ProgressBar, Button, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { MenuContext } from "../../context/menuContext";
import MenuList from "./MenuList";
import { MdMenuBook } from "react-icons/md";
import { MdOutlineAccessAlarm } from "react-icons/md";
import './index.css'

const Menu = () => {
    const {
        menuTotal,
        averageMinutesReady,
        menuAmount,
        menu,
        menuHealthy,
        clearMenu } = useContext(MenuContext);

    return (
        <Container>
            {menuAmount() === 0 ?
                <>
                    <div className="col card-body text-center">
                        <h1 className="display-5">Your menu is empty</h1>
                        <NavLink to={'/search'}>
                            <button className="btn btn-primary mx-1">
                                <i className="fa fa-home pe-2"></i>
                                Search some recipes
                            </button>
                        </NavLink>
                    </div>
                </>

                :
                <Row>
                    <div className="d-flex col-12 justify-content-end align-items-center py-3" >
                        <Button onClick={() => clearMenu()}>
                            Clear Menu  <MdMenuBook size={'2em'} color={'white'} />
                        </Button>
                    </div>
                    <div className="col-md-8">
                        <MenuList recipes={menu} fromMenu={true} />
                    </div>
                    <div className="card col-md-4">
                        <div className="d-flex justify-content-between mb-3 py-3">
                            <h3 className="h3">Total:</h3>
                            <h3>${menuTotal()}</h3>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <div className="mb-3 text-center">
                                    <h5><MdOutlineAccessAlarm /> Ready in {averageMinutesReady()} minutes on average.</h5>
                                </div>
                            </li>
                            <li className="list-group-item">
                                <div className="mb-3 text-center h5">
                                    <p >HealthScore</p>
                                    <ProgressBar
                                        striped
                                        style={{ height: '2em'}}
                                        variant='info'
                                        now={menuHealthy()}
                                        label={`${menuHealthy()}%`}
                                    />
                                </div>
                            </li>

                        </ul>


                        <Button>Order</Button>
                    </div>
                </Row>

            }
        </Container>

    )
}
export default Menu
