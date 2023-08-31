import React, { useEffect } from 'react';
import ReactCardFlip from 'react-card-flip';
import {useState} from 'react';
import img0 from '../images/img0.png'

export default function CardOne({ isEqual, setIsEqual, newData, project , setNewData, handleEqual, handleNotEqual, handleEqualInstance}) {
    const [isFlipped, setIsFlipped] = useState(project.flip);

    const handleInstanceFront = (id) => {
        let copyData = [...newData];
        copyData.filter((item)=>item.id == id)[0].status = "true";
        // copyData.filter((item)=>item.id == id)[0].flip = "true";

        setNewData(copyData);
        setIsEqual([...isEqual, copyData.filter((item)=>item.id == id)[0]])
    }

    return (
        <div>
            {/* {isEqual.length == 2 && 
                        ((isEqual[0].id !== isEqual[1].id) ? 
                            ((isEqual[0].key === isEqual[1].key)? handleEqual(isEqual[0],isEqual[1]) : handleNotEqual(isEqual[0],isEqual[1]))
                               : handleEqualInstance(isEqual[0]) ) } */}

            {project.complete == false ?
                (project.flip == false ? 
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        
                        <div
                            onClick={function(event){setIsFlipped((prev) => !prev);handleInstanceFront(project.id)}}
                            className={"CardFrontA" + project["id"]}
                        >
                                <img width="100px" src={img0} alt="" />
                        </div>
                        <div
                            onClick={function(event){setIsFlipped((prev) => !prev);handleInstanceFront(project.id)}}
                            className={"CardBackA" + project["id"]}
                        >
                                <img width="100px" src={project.img} alt="" />
                        </div>
                    </ReactCardFlip> :
                
                    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                        
                        <div
                            onClick={function(event){setIsFlipped((prev) => !prev);handleInstanceFront(project.id)}}
                            className={"CardBackB" + project["id"]}
                        >
                            <img width="100px" src={project.img} alt="" />
                        </div>
                        <div
                            onClick={function(event){setIsFlipped((prev) => !prev);handleInstanceFront(project.id)}}
                            className={"CardFrontB" + project["id"]}
                        >
                            <img width="100px" src={img0} alt="" />
                        </div>
                    </ReactCardFlip>) :
                    <div className="CardBack" >
                        <img width="100px" src={project.img} alt="" />
                    </div>
                    
            }
        </div>
    )
    }