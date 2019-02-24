import React, { useState, useEffect } from "react";

const ImageGallery = () => {
  const [cards, setCards] = useState([]);

  const getPics = async () => {
    await fetch(`https://randomuser.me/api/?results=20&seed=fullstackio`)
      .then(response => response.json())
      .then(data => data.results)
      .then(items => setCards(items));
  };

  useEffect(() => {
    getPics();
  }, []);

  return (
    <div className="center" style={{'background':'rgb(122,102,111)'}}>
      <span>Images from RandomUser Api</span>
      <span> (Click to Enlarge) </span>
      <div className="image-collection-container">
        {cards.map((item, index) => (
          <Layout
            key={index}
            item={item}
            index={index}
          />
        ))}
      </div>
    </div>
  );
};

const Layout = ({ item, index }) => {
  const [popup, setPopup] = useState(null);
  const [show, setShow] = useState(false)

  //call api again but use larger picture & matching index
  const handleEnlargePic = async () => {
    await fetch(`https://randomuser.me/api/?results=20&seed=fullstackio`)
      .then(response => response.json())
      .then(data => data.results)
      .then(items => setPopup(items[index].picture.large));
    setShow(!show)
  };

  const handleClosePic = () => {
    setShow(!show)
  }

  return (
    //this is llooped; extract popup image to another component
    <div onClick={handleClosePic}>
      <img
        onClick={handleEnlargePic}
        className="image-collection-card"
        src={item.picture.thumbnail}
        alt="img"
      />
      {show && <PopUp popup={popup} handleClosePic={handleClosePic} />}
    </div>
  );
};

const PopUp = ({ popup }) => {
  return (
    <div>
      {/*both are fixed positioning */}
      <div className="popup-screen-filter">
      </div>

      <div >
        <img
          className="popup-picture"
          src={popup}
          alt='Loading...'
        />
        {/* <button className="popup-button"> X </button> */}
      </div>
    </div>
  );
};

export default ImageGallery;