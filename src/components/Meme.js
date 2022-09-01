import React from "react";
import image from "../media/image.jpg";
import "./Meme.css";

export default function Meme() {
  const [inputData, setInputData] = React.useState({
    upperText: "",
    lowerText: "",
    randomImage: image,
  });

  const [memeArray, setMemeArray] = React.useState([]);

  function handleFormChange({ target }) {
    setInputData((prevItem) => {
      return { ...prevItem, [target.name]: target.value };
    });
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemeArray(data.data.memes));
  },[]);


  function getMeme() {
    const index = Math.floor(Math.random() * memeArray.length);
    console.log(index)
    setInputData((prevItem) => {
      return { ...prevItem, randomImage: memeArray[index].url };
    });
  }

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          className="input"
          name="upperText"
          value={inputData.upperText}
          onChange={handleFormChange}
          placeholder="upper text"
        ></input>
        <input
          type="text"
          className="input"
          name="lowerText"
          value={inputData.lowerText}
          onChange={handleFormChange}
          placeholder="lower text"
        ></input>
      </div>
      <button className="meme-get-button" onClick={getMeme}>
        Get a new Meme Image
      </button>
      <div className="meme-container">
        <h2 className="upper-text">{inputData.upperText}</h2>
        <img src={inputData.randomImage} alt="meme" />
        <h2 className="lower-text">{inputData.lowerText}</h2>
      </div>
    </div>
  );
}
