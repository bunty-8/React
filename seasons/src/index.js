import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
//function based component
/*const App = () => { 
      navigator.geolocation.getCurrentPosition(
        (position)=> {
            console.log(position);
        },
        (err)=>{
            console.log(err);
        }
      )
    return  <div>Hii There!</div>;
};*/

//class based component
class App extends React.Component {

  state = { lat: null, errorMessage: '' };

//this method is used for initial data loading 
componentDidMount(){
    navigator.geolocation.getCurrentPosition(
        (position) => {
          this.setState({lat: position.coords.latitude}); // every time setState is used render() is called
          console.log(position);
        },
        (err) => {
          console.log(err);
          this.setState({errorMessage: err.message});
        }
      );
}


  //this render method is compulsory in class based component
  render() {
    
    if(this.state.lat && !this.state.errorMessage)
        return <SeasonDisplay lat={this.state.lat}/>
    if(!this.state.lat && this.state.errorMessage)
        return <div>Error: {this.state.errorMessage} </div>;
    return <Spinner message="Please accept location request"/>;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
