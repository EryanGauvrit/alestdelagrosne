

function SpinnerLoader({ isLoad }) {
    return (
        <div className={`spinnerLoader ${isLoad && "isLoad"}`}>
            <div></div>
        </div>
    )
};

export default SpinnerLoader;