import { useState } from "react"

export default function ScoreKeeper(){ 
    const [scores, setScore] = useState({P1score : 0, P2score : 0})
    function addP1(){
    //    scores.P1score = scores.P1score + 1 ;
    //    setScore(scores)
    //    console.log(scores);
        // const newScore = {...scores, P1score : scores.P1score+1}
        setScore((oldScore)=>(
             {...oldScore, P1score : oldScore.P1score+1}
             ))
    }
    function addP2(){
            setScore((oldScore)=>(
                 {...oldScore, P2score : oldScore.P2score+1}
                 ))
        }

    return(
        <>
            <p>Player1 Score : {scores.P1score}</p>
            <p>Player1 Score : {scores.P2score}</p>
            <button onClick={addP1}>Player 1</button>
            <button onClick={addP2}>Player 2</button>
        </>
    )
}