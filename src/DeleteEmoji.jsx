import { useState } from "react"
import {v4 as uuid} from 'uuid'

export default function DeleteEmoji(){
    function randEmoji(){
        const choices = ["😂","🤢","😴","😌","🧞‍♂️","🤪","🥳","😭","😏","🤩","😘","🥰","❤"]
        return choices[Math.floor(Math.random() * choices.length)]
    }

    const [emojis,setEmoji] = useState([ {id:uuid(), emoji:randEmoji()}])
    const handleEmoji = () =>{
        
        setEmoji((oldemoji) => [...oldemoji,{id:uuid(), emoji:randEmoji()}]);
    }
    const handleDelete = (id) =>{
     setEmoji((prevemoji)=>prevemoji.filter((em)=>{
        return (em.id !== id)
     }))
    }
    const makeHeart = () =>{
        setEmoji((emjis) => emjis.map((e)=>{
            if(e.emoji !== "❤"){
                return {...e,emoji:"💜"}
            }
            else{
                return emjis
            }
        }))
    }

    return (                                                                                                                                                                                                   
        <div>
            {emojis.map(e =>(
                <span style={{fontSize:'3rem'}} key={e.id} onClick={()=>handleDelete(e.id)}>{e.emoji}</span>
            ))}
            
            <button onClick={handleEmoji} >Add Emoji</button>
            <button onClick={makeHeart}>Make to heart</button>
        </div>
    )
}