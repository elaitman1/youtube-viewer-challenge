import React from "react";

const Attributes =(props) => {
  const { atts } = props
  return (
    <>
      <div className="attribute">
        <div className="att">
        {!atts? 'Title' : atts.snippet.title}
        </div>
      </div>

      <div className="attribute">
        <div className="att">
          {!atts? 'Description' : atts.snippet.description}
        </div>
      </div>

      <div className="attribute">
        <div className="att">
          {!atts? 'Channel' : atts.snippet.channelTitle}
        </div>
      </div>
    </>
  )
}

export default Attributes
