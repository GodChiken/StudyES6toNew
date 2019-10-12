import React from 'react'

function Welcome(props){
    return <h1>Hello, {props.name}</h1>
}

function WelcomeContainer(){
    return (
        <div>
            <Welcome name="김보훈"/>
            <Welcome name="배창현"/>
            <Welcome name="황성인"/>
            <Welcome name="안정훈"/>
        </div>
    );
}

export default  WelcomeContainer;

