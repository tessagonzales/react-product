import React from 'react';
import Definition from './Definition'
const DefinitionList = ({ urbanDic }) => {
  if(typeof(urbanDic.list) !=='undefined'){
    let definition = urbanDic.list[0].definition;
    return (
      <div>
        <Definition definition={definition} />
      </div>
    )
  }else{
    return <div></div>
  }

};

export default DefinitionList;
