//import the react andd reactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//create a react component
const App = () => {
    let buttonText='Submit';
    return (
        <div>
            <label class="label" for="name">Enter Name :</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'black', color: 'white' }}>{buttonText}</button>
        </div>
    );
}

//take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
