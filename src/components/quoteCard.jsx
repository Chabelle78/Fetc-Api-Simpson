
import React from 'react';

function QuoteCard({ simpson }) {
  return (
    simpson && (
      <div className='QuoteCard'>
        <img src={simpson.image} alt={simpson.character} />
        <ul>
          <li>Who I am ? {simpson.character}</li>
          <li>
            Whats I am saying ?  {simpson.quote}
          </li>
          <li>Character Direction: {simpson.characterDirection}</li>
        </ul>
      </div>
    )
  );
};

export default QuoteCard;

//The application should include: A button to retrieve a quote,
// an area where the name of the character, the photo and the quote is displayed 
//(it is possible to reuse code from previous quests, namely the QuoteCard component)