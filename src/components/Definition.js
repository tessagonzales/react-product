import React from 'react';

const Definition = ({definition , tags }) => {
  console.log(tags)
  if(tags){
    return(
    <div style={{display: 'inline-block' }}>
        <div> {tags}, &nbsp; </div>
    </div>
    )
  }else{
    return(
    <div>
        <li>{definition}</li>
    </div>
    )
  }
};

export default Definition;
