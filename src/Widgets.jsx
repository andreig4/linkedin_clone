import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Bitcoin is crashing", "Crypto - 999 readers")}
      {newsArticle(
        "Family's Rudolph decoration repeatedly attacked by real deer",
        "Funny - 808 readers"
      )}
      {newsArticle(
        "Woman wins $1 million from lottery ticket birthday gift",
        "Top News - 12222 readers"
      )}
      {newsArticle(
        "Revealed: 2021's trickiest words listed - can you pronounce them correctly?",
        "Top News - 1999 readers"
      )}
      {newsArticle(
        "Rare Pacific footballfish found on California beach",
        "Top News - 690 readers"
      )}
      {newsArticle("ALU to $2 is inevitable", "Crypto - 69 readers")}
    </div>
  );
}

export default Widgets;
