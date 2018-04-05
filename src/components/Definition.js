import React from 'react';

const Definition = ({definition , tags }) => {
  console.log(tags)
  return(
  <div>
    {definition}
    {tags}
  </div>
  )
};

export default Definition;
