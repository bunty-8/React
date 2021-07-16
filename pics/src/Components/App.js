import React from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

class App extends React.Component {
  state = { images: [] };

  submit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID c3BOHRHB_S9wfreJJMD_Lqy_EKq1zggnPBsF7ZbafWU",
      },
    });
    console.log(response.data.results);
    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar submit={this.submit} />
        <ImageList images={this.state.images}/>
      </div>
    );
  }
}

export default App;
