import React from "react";
import Title from "../Title/Title";
import PlayerCard from "./PlayerCard";


const PlayerGroup = (props) => {
    return (
        <>
            <div className="player_status">
                <div className={`alert  ${props.isWinner? 'alert-success':'alert-danger'} text-center`}>{props.isWinner? 'Winner':'Looser'}: {props.power}</div>
            </div>
            <div className="row mb-5">
                {props.shuffledPlayer?.map((card,i) => (
                    <div className="col-lg-3">
                        <PlayerCard
                            key={i}
                            name={card.name}
                            exp={card.base_experience}
                            type={card.type}
                        />
                    </div>
                ))}

            </div>
        </>
    )
}
export default PlayerGroup