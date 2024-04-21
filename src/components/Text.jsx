import React from 'react';
import "../App.css"
import { NavLink } from 'react-router-dom';

const Text = () => {

  let lists=[{
    name: "Word Input",
    link:"/"
},
{
    
    name: "Paragraph",
    link:"/para"
},
]

  return (
    <div className='text-container'>
       <h1>Text Analyzer</h1>
       <p>Text Analyzer is a simple free online tool for SEO web content analysis that helps you find most frequent phrases and words, number of characters, words, sentences and paragraphs, and estimated read and speak time of your content.</p>
      <div className="navigate-btn">
      {lists.map((list)=>(
           <div className='wordinput'>
            <NavLink exact to={list.link} className={window.location.pathname === list.link ? 'active' : 'wordinput-btn'}>{list.name}
            </NavLink>
            </div>   
        ))}
        {/* <button className='wordinput-btn'>Word Input</button>
        <button className='para-btn'>Paragraph</button> */}
      </div>
    </div>
  )
}

export default Text