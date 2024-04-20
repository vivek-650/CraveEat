import React, { useState } from 'react';
import { CDN_URL } from '../utils/Url';
import { useDispatch } from "react-redux"
import { addItem } from '../utils/cart';
import MessageDialog from './MessageDialog'; // Import the MessageDialog component

function Accordion({ accordionData }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMessage, setShowMessage] = useState(false); // State to control the display of the message dialog
  const [message, setMessage] = useState(''); // State to hold the message content

  const togglePanel = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const menuItems = accordionData;

  const dispatch = useDispatch();

  const handleEvent = (item) => {
    dispatch(addItem(item));
    setShowMessage(true); // Show the message dialog
    setMessage("Item added to cart"); // Set the message content
  }

  const handleCloseMessage = () => {
    setShowMessage(false); // Hide the message dialog
  };

  return (
    <div className="accordion-menu">
      {menuItems.map((menuItem, index) => (
        <div className="accordion-item" key={index}>
          <button className={`accordion ${activeIndex === index ? 'active' : ''}`} onClick={() => togglePanel(index)}><p><b>{menuItem?.card?.card?.title} ({menuItem?.card?.card?.itemCards?.length})</b> ↓</p></button>
          <div className={`panel ${activeIndex === index ? 'show' : ''}`}>
            {menuItem.card.card.itemCards.map((item, itemIndex) => (
              <div className='disc' key={itemIndex}>
                <div className='leftDis'>
                  <h2>{item.card.info.name}</h2><br></br>
                  <p>₹ {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</p>
                  <span>{item.card.info.description}</span>
                  <button className='btn' onClick={() => handleEvent(item)}> Add +</button>
                </div>
                <div className='rightDis'>
                  <img src={CDN_URL + item.card.info.imageId} alt={item.card.info.name} />
                </div>
              </div>
            ))}
            <hr></hr>
          </div>
        </div>
      ))}
      {showMessage && <MessageDialog message={message} onClose={handleCloseMessage} />} {/* Render the message dialog */}
    </div>
  );
}

export default Accordion;
