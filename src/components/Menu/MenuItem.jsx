import { MdOutlineAccessAlarm, MdCheckCircleOutline, MdOutlineHealthAndSafety } from "react-icons/md";
import DeleteButton from "../Buttons/DeleteFromMenuBtn";

const MenuItem = ({ item }) => {
    const { id, image, pricePerServing, title, healthScore, readyInMinutes, vegan, vegetarian } = item;
    const tagStyles = {
        className: "bg-success p-1 m-1 rounded text-white bg-opacity-75"
    }
    return (
        <>
            <div className="card mb-5 bg-light " >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image} style={{ objectFit: 'cover' }} className="w-100 h-100 rounded" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h4 className="h4">{title}</h4>
                            <div className=" d-flex flex-wrap">
                                <p {...tagStyles} ><MdOutlineHealthAndSafety /> Healthscore {healthScore}%</p>
                                <p {...tagStyles}><MdOutlineAccessAlarm /> Ready in {readyInMinutes} minutes</p>
                                {vegan && (<p {...tagStyles}>  <> <MdCheckCircleOutline /> Vegan</> </p>)}
                                {vegetarian && (<p {...tagStyles}> <><MdCheckCircleOutline /> Vegetarian</></p>)}
                            </div>
                            <div className="py-2">
                                <p>Price per serving <span style={{ fontWeight: 'bold' }}>${pricePerServing}</span></p>
                            </div>
                            <div className="d-flex justify-content-end">
                                <DeleteButton id={id} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default MenuItem
