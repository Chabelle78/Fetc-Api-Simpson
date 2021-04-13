import React, { useState } from 'react'
import QuoteCard from './components/quoteCard';
import axios from 'axios';


const quote = {
  quote: "I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
  character: "Homer Simpson",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  characterDirection: "Right",
  };

function App() {

  const [simpson, setSimpson] = useState(quote);
  const getSimpson = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes?count=num')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        console.log(data);
        setSimpson(data[0]);
      })
      .catch(console.error)
  };

  return (
    <div className='App'>
    <QuoteCard simpson ={simpson}/>
    <button type="button" onClick={getSimpson}> Simpson Quote </button>
     </div>
  )
}

export default App
