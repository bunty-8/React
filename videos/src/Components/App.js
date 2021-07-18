import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../APIs/Youtube';
import VideoList from './VideoList';

class App extends React.Component {

    state ={ videos : []};
    submit = async (term) => {
        const response = await Youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({videos : response.data.items});
    }

    render() {
        return (
            <div>
                <SearchBar submit={this.submit} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

export default App;