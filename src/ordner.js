import React, { useState, useEffect } from "react";
import KatzeIcon from "./img/katz.svg";
import HundIcon from "./img/hund.svg";
import "./Modal.css";

const CAT_ID = "1";
const DOG_ID = "2";

const Ordner = (props) => {
  const [name, setName] = useState("ordner");
  const [num, setNum] = useState(0);
  const [listOfCatImages, setListOfCatImages] = useState([]);
  const [listOfDogImages, setListOfDogImages] = useState([]);

  const [catCount, setCatCount] = useState(props.getCatCount());
  const [dogCount, setDogCount] = useState(props.getDogCount());
  const [catOrDog, setAnimalType] = useState(CAT_ID);

  const handleClick = (event) => {
    const id = event.target.id;
    setAnimalType(id);

    if (id === CAT_ID) {
      setCatCount((prevCount) => prevCount + 1);
      setNum(getRandomInt(listOfCatImages.length));
    } else if (id === DOG_ID) {
      setDogCount((prevCount) => prevCount + 1);
      setNum(getRandomInt(listOfDogImages.length));
    }

    props.saveTierCount({ catCount, dogCount });
  };

  const importAll = (r) => {
    var test = r.keys().map(r);
    console.log(test);
    return test;
  };

  useEffect(() => {
    setListOfCatImages(
      importAll(require.context("./img/katzen/", true, /\.(png|jpe?g|svg)$/))
    );
    setListOfDogImages(
      importAll(require.context("./img/hunde/", true, /\.(png|jpe?g|svg)$/))
    );

  }, []);

  useEffect(() => {
    return () => {
      props.firstOpen(name);
    };
  }, []);

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <div className="tierFotoOrdner">
      {catOrDog === CAT_ID
        ? listOfCatImages[num] && (
            <img src={listOfCatImages[num]} alt="animal" />
          )
        : listOfDogImages[num] && (
            <img src={listOfDogImages[num]} alt="animal" />
          )}
      <div className="sideBar">
        <img className="catIcon" src={KatzeIcon} id="1" onClick={handleClick} />
        <img className="dogIcon" src={HundIcon} id="2" onClick={handleClick} />
      </div>
    </div>
  );
};

export default Ordner;
