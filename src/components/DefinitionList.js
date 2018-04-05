import React from 'react';
import Definition from './Definition'

const DefinitionList = ({ urbanDic }) => {
  if(urbanDic.list === 'undefined'){
    console.log("UNDEFINED LIST");
  }else{
    console.log(urbanDic.list[0]);
  }
  return (
    <div>
      <li>Definition : </li>
    </div>

  )
};

export default DefinitionList;
