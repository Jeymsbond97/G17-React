import React from 'react'



const App = () => {
    const date = new Date();
    const currentDate = date.getHours();

    let Information = " ";
    const consStyle ={
    color: " ",
}
 
    if(currentDate <12 ){
    Information = "Good Morning";
    consStyle.color = "red"
    }
    else if(currentDate<18){
    Information = "Good afternoon";
    consStyle.color = "yellow";
    }
    else{
    Information = "Good evening";
    consStyle.color = "blue";
    }

    return (
        <div>
            <h1 style={consStyle}>{Information}</h1>
        </div>
    )
}

export default App;