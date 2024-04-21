import React, { useEffect, useState } from 'react'
import Text from './Text'

const WordInput = () => {

  const [val, setVal] = useState("");
  const [characters, setCharacters] = useState(0);
  const [words, setWords] = useState(0);
  const [item, setItem] = useState(null);
  const[speech, setSpeech] = useState(null);
  const[syn, setsyn] = useState(null);
  const[anto, setanto] = useState(null);
  

  useEffect(()=> {
     setCharacters(val.length);
     setWords(val.split(' ').filter(word => word!=='').length)
  }, [val, characters, words]);

  const fetchdata = async () => {
    console.log(val);
     const url = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`);
     const res = await url.json();
     console.log(res[0].meanings[0].synonyms[0]);
     setsyn(res[0].meanings[0].synonyms[0]);
     setanto(res[0].meanings[0].antonyms[0]);
     setSpeech(res[0].meanings[0].partOfSpeech);
     setItem(res[0].meanings[0].definitions[0].definition);
  }

  return (
    <div className='workInputContainer'>
       <div className='textcomp-container'>
        <Text />
       </div>
       <div className='workInput-miniContainer'>
           <input type='text' placeholder='Enter Text' onChange={(e)=> setVal(e.target.value)}/>
           <button onClick={fetchdata}>Process Word</button>
       </div>
       <div className='char-counter-container'>
        <div className='char-container'>
           <p style={{backgroundColor: "white", border:"1px solid gray"}}>Characters</p>
           <p style={{backgroundColor: "#F9FAFB", border:"1px solid gray"}}>{characters}</p>
        </div>
        <div className='words-container'>
           <p style={{backgroundColor: "white", border:"1px solid gray"}}>Words</p>
           <p style={{backgroundColor: "#F9FAFB", border:"1px solid gray"}}>{words}</p>
        </div>
       </div>
       <div className='dictionary'>
        <p>Defination : <span>{item}</span></p>
        <p>Part of Speech: <span>{speech}</span></p>
        <p>Synonyms: <span>{syn}</span></p>
        <p>Antonyms: <span>{anto}</span></p>
       </div>
    </div>
  )
}

export default WordInput