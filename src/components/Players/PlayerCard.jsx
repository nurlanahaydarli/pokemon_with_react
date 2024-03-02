import React from "react";
// import '../../assets/img'

const PlayerCard=(props)=>{

    return(
        <>
            <div className="card mb-3">
                <img src={`../../assets/img/${props.name}.png`} className="card-img-top custom_img" />
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text">{props.exp}</p>
                        <p className="card-text">{props.type}</p>
                    </div>
            </div>
        </>
    )
}
export default PlayerCard