import React, {useEffect} from 'react';
import './PuzzleBoard.scss';
import Card from './Card.js';
import {useStore} from './Store';
import Button from '@material-ui/core/Button';

function PuzzleBaord() {
  const shuffleInitialCardValuesOne = useStore(state => state.shuffleInitialCardValuesOne);
  const shuffleInitialCardValuesTwo = useStore(state => state.shuffleInitialCardValuesTwo);
  const handleFlippedCard = useStore(state => state.handleFlippedCard);
  const flippedCards = useStore(state => state.flippedCards);
  const countMoves = useStore(state => state.countMoves);
  const cardFound = useStore(state => state.cardFound);
  const isStarted = useStore(state => state.isStarted);
  const setIsStarted = useStore(state => state.setIsStarted);
  const level = useStore(state=> state.level);
  const addLevel = useStore(state=> state.addLevel);
  const subLevel = useStore(state => state.subLevel);
  useEffect(() => {
    {level == 1 ? shuffleInitialCardValuesOne():shuffleInitialCardValuesTwo() }    
  }, [level])
  const initialCardValues = useStore(state => state.initialCardValues);

   return (
    <div className='puzzle-board-main'>
      <div className="puzzle-board-header">
            <div className="puzzle-title">
                <h1>Picture Puzzle</h1>
            </div>
            <div className="sub-header">
                  <div className="count-moves">
                      <span>Clicks {countMoves}</span>
                  </div>
                  {level == 1 ? <div className="count-found-cards">
                        <span>Matched: {cardFound} / 10</span>
                  </div>:
                  <div className="count-found-cards">
                        <span>Matched: {cardFound} / 16</span>
                  </div>}
            </div>
      </div>
      
      <div className='puzzle-board-container'>
            {level == 1 && <div className="puzzle-board-main-level-one">
                {initialCardValues.map((item, index) => (
                  <Card card={item} key={index} handleClick={() => handleFlippedCard(index)}/>
                ))}
            </div>}
            {level == 2 &&<div className="puzzle-board-main-level-two">
                {initialCardValues.map((item, index) => (
                  <Card card={item} key={index} handleClick={() => handleFlippedCard(index)}/>
                ))}
            </div>}
      </div>
      <div className="puzzle-board-footer">
        {level == 1 &&  (<Button id="btn" className='btn-start' size='large' variant="outlined" onClick={addLevel}>Next</Button> )}
        {level == 2 &&  (<Button id="btn" className='btn-start' size='large' variant="outlined" onClick={subLevel}>Prev</Button>)}

      </div>
    </div>
  )
}

export default PuzzleBaord;
