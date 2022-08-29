import { NavLink } from 'react-router-dom';
import { useContext } from "react";
import { MenuContext } from '../../context/menuContext';
import { MdMenuBook } from "react-icons/md";

const MenuWidget = ({ color = 'white' }) => {
    const { menuAmount } = useContext(MenuContext);

    return (
        <>


            <NavLink to={'/'} className='pe-2'>
                <div className='col d-flex justify-content-end py-2'>
                    <button type="button" className="btn position-relative">
                        <MdMenuBook size={'2em'} color={color} />
                        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark bg-light">
                            {menuAmount()}
                        </span>
                    </button>
                </div>
            </NavLink>

        </>
    )
}

export default MenuWidget
