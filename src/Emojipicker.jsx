import { useState } from "react";
import { v4 as uuid } from "uuid";
export default function Emojipicker(){
    const [emojis,setEmojis] = useState([{id:uuid(), emoji:"😍"}])
    function handleEmoji(){
        
        setEmojis((oldemojis)=>[...oldemojis,{id:uuid(), emoji:"🤗🤩"}]);
    }
    return(
        <div>
            {emojis.map(e => (
                <span key={e.id} style={{fontSize:"4rem"}}>{e.emoji}</span>
            ))}
            
            <button onClick={handleEmoji}>Add emoji</button>
        </div>
    ) 
}