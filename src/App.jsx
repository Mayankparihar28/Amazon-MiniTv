import React from "react";
import Card from './Card';
import Sdata from './Sdata';

const App=()=>(
  <>
  <h1 className="heading_style">Top 5 Amazon mini Series in 2023</h1>
    {Sdata.map((val,index)=> {
      console.log(index)
      return(
        <Card
        key={val._id}
        Sname={val.Sname}
        imgsrc={val.imgsrc}
        title={val.title}
        link={val.link}
      />);
    })}
  </>
  )

export default App;