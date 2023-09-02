

function SpinnerLoader({ isLoad }) {
    // isLoad = true or false
    return (
        <div className={`spinnerLoader ${isLoad && "isLoad"}`}>
            <div></div>
        </div>
    )
};

export default SpinnerLoader;