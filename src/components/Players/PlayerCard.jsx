import React from "react";

const PlayerCard = (props) => {
    console.log(props.id, '')

    function returnImg() {
        let id = props.id
        let img
        if (id < 10) {

            img = `00${id}`
        } else if (id >= 10 && id < 100) {
            img = `0${id}`
        } else {

            img = `${id}`
        }
        return img
    }

    return (
        <>
            <div className="card mb-3">
                <img src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${returnImg()}.png`}
                     className="card-img-top custom_img"/>
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