import React from 'react';
import Definition from './Definition'

const DefinitionList = ({ urbanDic }) => {
  if(typeof(urbanDic.list) !=='undefined'){
    let definition = urbanDic.list[0].definition;
    return (
      <div>
        <li>Definition :{definition} </li>
      </div>
    )
  }else{
    return <div></div>
  }

};

export default DefinitionList;
