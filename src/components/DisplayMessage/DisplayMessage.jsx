import { NavLink } from 'react-router-dom'
import { FaRegSadCry, FaRegSmile } from "react-icons/fa";
const DisplayMessage = ({ msg = 'Page not found', status = 'sadFace' }) => {
    return (
        <div className="text-center">
            <h1 className='display-5 pt-3'>{msg} {status === 'smileFace' ? (< FaRegSmile />) : (< FaRegSadCry />)}</h1>
            <NavLink to={'/'}>
                <button className="btn mx-1">
                    <i className="fas fa-arrow-circle-left pe-3"></i>
                    Back to the menu
                </button>
            </NavLink>
        </div>
    )
}
export default DisplayMessage
