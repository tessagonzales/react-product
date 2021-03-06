import React from 'react';
import Definition from './Definition'
const DefinitionList = ({ urbanDic , search }) => {

  if(typeof(urbanDic.list) !=='undefined'){
    let list = urbanDic.list
    let theTags = urbanDic.tags

    console.log(theTags)
    let allDefinitions = list.map((def,idx) => <Definition key={idx} definition={def.definition} />)

    let allTags = theTags.map((tag, idx) => <Definition key={idx} tags={tag} />)

    return (
      <div style={{width:'80%',marginLeft:'10%'}}>
        <h2>Search Results for <i>{search}</i>  </h2><br/>
        <b>Definitions:</b> <br />
        {allDefinitions} <br /><br />

        <b>Tags:</b><br />
        {allTags}
      </div>
    )
  }else{
    return <div></div>
  }

};

export default DefinitionList;
