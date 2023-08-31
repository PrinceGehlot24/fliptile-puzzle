import React from 'react';
import img0 from '../images/img0.png'
import ReactCardFlip from 'react-card-flip';
import {useState} from 'react';
import { useStore } from './Store';

function Card({card,handleClick}) {
    const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className='card'>
        { ! card.complete ? (!card.isFlipped ?  
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">   
                <div
                    onClick={function(event){setIsFlipped((prev) => !prev);handleClick()}}
                    className={"CardFront"}
                    >
                        <img width="100px" src={img0} alt="" />
                </div>
                <div
                    onClick={function(event){setIsFlipped((prev) => !prev);handleClick()}}
                    className={"CardBack"}
                    >
                        <img width="100px" src={card.img} alt="" />
                </div>
            </ReactCardFlip>: 
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">   
                <div
                    onClick={function(event){setIsFlipped((prev) => !prev);handleClick()}}
                    className={"CardFront"}
                    >
                        <img width="100px" src={card.img} alt="" />
                </div>
                <div
                    onClick={function(event){setIsFlipped((prev) => !prev);handleClick()}}
                    className={"CardBack"}
                    >
                        <img width="100px" src={img0} alt="" />
                </div>
            </ReactCardFlip> 
        ): 
        <div className={"CardBack"}>
            <img width="100px" src={card.img} alt="" />
         </div>
        }
    </div>
  )
}

export default Card;