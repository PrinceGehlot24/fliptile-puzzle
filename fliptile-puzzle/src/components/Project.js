import React from 'react';
import { useState } from 'react';
import Card from './CardOne';
import img1  from '../images/img1.png';
import img2  from '../images/img2.png';
import img3  from '../images/img3.png';
import img4  from '../images/img4.png';
import img5  from '../images/img5.png';
import img6  from '../images/img6.png';
import img7  from '../images/img7.png';
import img8  from '../images/img8.png';
import img9  from '../images/img9.png';
import img10  from '../images/img10.png';

const shuffle = (arra1) => {
    var ctr = arra1.length,
      temp,
      index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
    }
    return arra1;
  }

const Data = [
    {"id": 1,"key": 1, "img": img1,"status": "false", "flip":false,"complete":false},
    {"id": 2,"key": 2, "img": img2,"status": "false", "flip":false,"complete":false},
    {"id": 3,"key": 3, "img": img3,"status": "false", "flip":false,"complete":false},
    {"id": 4,"key": 4, "img": img4,"status": "false", "flip":false,"complete":true},
    {"id": 5,"key": 5, "img": img5,"status": "false", "flip":false,"complete":true},
    {"id": 6,"key": 6, "img": img6,"status": "false", "flip":false,"complete":true},
    {"id": 7,"key": 7, "img": img7,"status": "false", "flip":false,"complete":true},
    {"id": 8,"key": 8, "img": img8,"status": "false", "flip":false,"complete":true},
    {"id": 9,"key": 9, "img": img9,"status": "false", "flip":false,"complete":true},
    {"id": 10,"key": 10 ,"img": img10,"status":"false", "flip":false,"complete":true},
    {"id": 11,"key": 1 ,"img": img1,"status": "false","flip":false,"complete":false},
    {"id": 12,"key": 2,"img": img2,"status": "false","flip":false,"complete":false},
    {"id": 13,"key": 3,"img": img3,"status": "false", "flip":false,"complete":false},
    {"id": 14,"key": 4,"img": img4,"status": "false", "flip":false,"complete":true},
    {"id": 15,"key": 5,"img": img5,"status": "false", "flip":false,"complete":true},
    {"id": 16,"key": 6,"img": img6,"status": "false", "flip":false,"complete":true},
    {"id": 17,"key": 7,"img": img7,"status": "false", "flip":false,"complete":true},
    {"id": 18,"key": 8,"img": img8,"status": "false", "flip":false,"complete":true},
    {"id": 19,"key": 9,"img": img9,"status": "false", "flip":false,"complete":true},
    {"id": 20,"key": 10,"img": img10,"status": "false", "flip":false,"complete":true}  
];

const data1 = shuffle(Data);

export default function Project() {

    const [newData ,setNewData] = useState(data1);
    const [isEqual, setIsEqual] = useState([]);

    const handleNotEqual = (obj1, obj2) => {

        console.log(obj1,"obj1111 check status")
        console.log(obj2,"obj222 check status")
        console.log(obj1.flip == false && obj2.flip == false, 'expression')
        let _newData = [...newData]

        if (obj1.flip == false && obj2.flip == false){
            _newData.filter((item)=>item.id == obj1.id)[0].status = "false";
            _newData.filter((item)=>item.id == obj1.id)[0].flip = true;
            _newData.filter((item)=>item.id == obj2.id)[0].status = "false";
            _newData.filter((item)=>item.id == obj2.id)[0].flip = true;
            alert("hello1")
        } else {
            _newData.filter((item)=>item.id == obj1.id)[0].status = "false";
            _newData.filter((item)=>item.id == obj1.id)[0].flip = false;
            _newData.filter((item)=>item.id == obj2.id)[0].status = "false";
            newData.filter((item)=>item.id == obj2.id)[0].flip = false;
            alert("hello2")
        };
        setNewData([..._newData]);
        setIsEqual([]);        
    }

    const handleEqual = (obj1, obj2) => {
        let copyData = [...newData];
        copyData.filter((item)=>item.id == obj1.id)[0].status = "false";
        // copyData.filter((item)=>item.id == obj1.id)[0].flip = true;
        copyData.filter((item)=>item.id == obj1.id)[0].complete = true;


        copyData.filter((item)=>item.id == obj2.id)[0].status = "false";
        // copyData.filter((item)=>item.id == obj2.id)[0].flip = true;
        copyData.filter((item)=>item.id == obj2.id)[0].complete = true;


        setNewData(copyData);
        setIsEqual([])
        
    }
    const handleEqualInstance = (obj1,obj2) => {
        let copyData = newData;
        copyData.filter((item)=>item.id == obj1.id)[0].status = "false";
        copyData.filter((item)=>item.id == obj2.id)[0].status = "false";

        setIsEqual([]);
    }

    // const handleFlip = (obj1,obj2) => {
    //     document.getElementsByClassName("CardBack"+obj1["id"])[0].click();
    //     document.getElementsByClassName("CardBack"+obj2["id"])[0].click();
    // }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "5px",
        width: "fit-content",
      }}
      className="Projects"
    >
        
      {isEqual.length == 2 &&
        (isEqual[0].id !== isEqual[1].id && isEqual[0].flip == false
          ? isEqual[0].key === isEqual[1].key
            ? handleEqual(isEqual[0], isEqual[1])
            : handleNotEqual(isEqual["0"], isEqual["1"])
          : handleEqualInstance(isEqual[0], isEqual[1]))}
      {newData.map((item, index) => (
        <Card
          newData={newData}
          isEqual={isEqual}
          setIsEqual={setIsEqual}
          setNewData={setNewData}
          project={item}
          handleNotEqual={handleNotEqual}
          handleEqual={handleEqual}
          handleEqualInstance={handleEqualInstance}
          key={item.id}
        />
      ))}
      {console.log(newData, "NewDAta state")}
      {console.log(isEqual[0], "what is flip")}
      {console.log(isEqual, "Equal state")}
    </div>
  );
}