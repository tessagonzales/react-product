import React from 'react';
import Definition from './Definition'
const DefinitionList = ({ urbanDic }) => {
  if(typeof(urbanDic.list) !=='undefined'){
    let list = urbanDic.list
    console.log(list)
    let allDefinitions = list.map((def,idx) => <Definition key={idx} definition={def.definition} />)

    return (
      <div>
        {allDefinitions}
      </div>
    )
  }else{
    return <div></div>
  }

};

export default DefinitionList;
