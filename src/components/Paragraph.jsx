import React, { useEffect, useState } from 'react'
import Text from './Text'

const Paragraph = () => {
 
    const [val, setVal] = useState("")
    const [charCount, setCharCount] = useState(0);
    const [wordCount, setWordCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [paragraphCount, setParagraphCount] = useState(0);
    const [spaceCount, setSpaceCount] = useState(0);
    const [punctuationCount, setPunctuationCount] = useState(0);

    useEffect(() => {
        setCharCount(val.length);

        const words = val.trim().split(/\s+/).filter(word => word !== "");
        setWordCount(words.length);

        const sentences = val.split(/[.!?]+/).filter(sentence => sentence.trim() !== "");
        setSentenceCount(sentences.length);

        const paragraphs = val.split('\n').filter(paragraph => paragraph.trim() !== "");
        setParagraphCount(paragraphs.length);

        setSpaceCount((val.match(/ /g) || []).length);

        setPunctuationCount((val.match(/[^\w\s]/g) || []).length);
    }, [val]);


  return (
    <div className='para-container'>
        <div className='textcomp-container'>
           <Text />
        </div>
    <div className='para-mini-container'>
       <textarea type= 'text' onChange={(e) => setVal(e.target.value)} />
    </div>
    <div className='char-counter-container'>
        <div className='char-container'>
           <p style={{backgroundColor: "white", border:"1px solid gray"}}>Characters</p>
           <p style={{backgroundColor: "#F9FAFB", border:"1px solid gray"}}>{charCount}</p>
        </div>
        <div className='words-container'>
           <p style={{backgroundColor: "white", border:"1px solid gray"}}>Words</p>
           <p style={{backgroundColor: "#F9FAFB", border:"1px solid gray"}}>{wordCount}</p>
        </div>
        <div className='words-container'>
           <p style={{backgroundColor: "white", border:"1px solid gray"}}>Sentences</p>
           <p style={{backgroundColor: "#F9FAFB", border:"1px solid gray"}}>{sentenceCount}</p>
        </div>
        <div className='words-container'>
           <p style={{backgroundColor: "white", border:"1px solid gray"}}>Paragraphs</p>
           <p style={{backgroundColor: "#F9FAFB", border:"1px solid gray"}}>{paragraphCount}</p>
        </div>
        <div className='words-container'>
           <p style={{backgroundColor: "white", border:"1px solid gray"}}>Spaces</p>
           <p style={{backgroundColor: "#F9FAFB", border:"1px solid gray"}}>{spaceCount}</p>
        </div>
        <div className='words-container'>
           <p style={{backgroundColor: "white", border:"1px solid gray"}}>Punctuations</p>
           <p style={{backgroundColor: "#F9FAFB", border:"1px solid gray"}}>{punctuationCount}</p>
        </div>
       </div>
    </div>
  )
}

export default Paragraph