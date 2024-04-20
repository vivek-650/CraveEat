import React from 'react';
 // Import CSS file for styling

const HelpPage = () => {
  return (
    <div className="help-page">
      <h1 className="title">Partner Onboarding</h1>
      <div className="question">
        <h2 className="question-title">I want to partner my restaurant with Swiggy</h2>
        <p className="answer">
          To partner your restaurant with Swiggy, you can visit the Swiggy website and navigate to the Partner with us section. From there, you can fill out the partnership form and follow the onboarding process.
        </p>
      </div>
      <div className="question">
        <h2 className="question-title">What are the mandatory documents needed to list my restaurant on Swiggy?</h2>
        <p className="answer">
          The mandatory documents typically include your restaurant's FSSAI license, GST certificate, PAN card, cancelled cheque, and other relevant business documents. Swiggy may also require additional documents depending on your location and local regulations.
        </p>
      </div>
      {/* Add more questions and answers here */}
      {/* Example: */}
      {/* <div className="question">
        <h2 className="question-title">Question title</h2>
        <p className="answer">Answer to the question</p>
      </div> */}
    </div>
  );
}

export default HelpPage;
