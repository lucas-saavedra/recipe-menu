
const Loader = () => {
    return (
        <div className="d-flex align-items-center justify-content-around m-5"
            style={{
                height: '20vh'
            }
            }>
            <div className="spinner-grow text-secondary " style={{ width: '3rem', height: ' 3rem', backgroundColor: '#009443' }} role="status">
            </div>
        </div>


    )
}

export default Loader
