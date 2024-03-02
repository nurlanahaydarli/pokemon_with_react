import React, {useState} from "react";
import './styles/global.css'
import PlayerGroup from "./components/Players/PlayerGroup";
import Title from "./components/Title/Title";
import {Pokedex} from "./constants/constant";


function App() {
    const [player1, setPlayer1] = useState([])
    const [player2, setPlayer2] = useState([])

    function computerOption() {
        let shuffledPlayer1
        let shuffledPlayer2
        shuffledPlayer1 = Pokedex.slice().sort(() => Math.random() - 0.5);
        shuffledPlayer2 = Pokedex.slice().sort(() => Math.random() - 0.5);
        setPlayer1(shuffledPlayer1.slice(0, 4))
        setPlayer2(shuffledPlayer2.slice(0, 4))
    }

    function player_power(player){
        if(!player.length){
            return
        }
        let res = player?.map((item)=>{
           return item.base_experience;
        })
        return res?.reduce((a,b)=>a+b)
    }
    return (
        <div className="container">
            <Title title="Pokedex" sayHello={computerOption}/>
            {player1.length ?
            <PlayerGroup
                shuffledPlayer={player1}
                isWinner={player_power(player1) > player_power(player2)}
                power={player_power(player1)}
            />:''
            }
            {player2.length ?
            <PlayerGroup
                shuffledPlayer={player2}
                isWinner={player_power(player2) > player_power(player1)}
                power={player_power(player2)}
            /> :''
            }
        </div>
    );
}

export default App;
