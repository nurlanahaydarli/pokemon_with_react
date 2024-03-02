import React from "react";


const Title=({sayHello,title})=>{
    return(
        <>
            <div className="d-flex justify-content-center align-items-center gap-2 flex-column my-5">
                <h1 className=" text-center text-success">{title}</h1>
                <button className="btn btn-success btn-sm" type='button' onClick={sayHello}>Play Game</button>
            </div>
        </>
    )
}

export default Title