
import AddtoMenuBtn from '../Buttons/AddtoMenuBtn';
import { MdOutlineAccessAlarm, MdCheckCircleOutline, MdOutlineHealthAndSafety } from "react-icons/md";
import { GiWheat } from "react-icons/gi";
import { Row } from 'react-bootstrap';
import PageNotFound from '../DisplayMessage/DisplayMessage';
const tagStyles = {
    className: "bg-warning p-1 m-1 rounded bg-opacity-75",
}
const ItemDetail = ({ item }) => {
    const {
        image,
        glutenFree,
        pricePerServing,
        title, healthScore,
        readyInMinutes,
        vegan,
        vegetarian
    } = item;

    return (

        <Row>
            {!item ? (<PageNotFound msg='An error has appeared, please try again.' />) :
                (
                    <>
                        <div className="col-md-6 col-xs-2">
                            <div className='d-flex justify-content-center align-items-center w-100 h-100'>
                                <img src={image} style={{ objectFit: 'cover' }} className="w-100 h-100 rounded" alt={title}></img>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex flex-column justify-content-between align-items-start">
                            <h3 className="h3 pt-1">{title}</h3>
                            <div className=' h-100 d-flex flex-column justify-content-between align-items-start'>
                                <div className="d-flex flex-wrap">
                                    <p {...tagStyles} ><MdOutlineHealthAndSafety /> Healthscore {healthScore}%</p>
                                    <p {...tagStyles} ><MdOutlineAccessAlarm /> Ready in {readyInMinutes} minutes</p>
                                    {vegan && true && (<p {...tagStyles}> <> <MdCheckCircleOutline /> Vegan</> </p>)}
                                    {vegetarian && true && (<p {...tagStyles}> <><MdCheckCircleOutline /> Vegetarian</> </p>)}
                                    {glutenFree && true && (<p {...tagStyles}><><GiWheat /> Gluten free</></p>)}
                                </div>
                            </div>

                            <div className='d-block'>
                                <h3 className='h3 pt-2'>$ {pricePerServing} <span className="lead">per serving</span> </h3>
                                <AddtoMenuBtn item={item} />
                            </div>
                        </div>
                    </>
                )
            }
        </Row>

    )
}

export default ItemDetail
