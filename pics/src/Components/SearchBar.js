import React from "react";



class SearchBar extends React.Component{

    constructor(props)
    {
        super(props);
        this.onsubmitForm=this.onsubmitForm.bind(this);
    }
    state={term : ''};

    onsubmitForm(e){
        e.preventDefault();

        this.props.submit(this.state.term);
    }
    render(){
        return (
            <div className='ui segment'>
                <form className='ui form' onSubmit={this.onsubmitForm} >
                    <div className='field'>
                        <label>Image Search</label>
                        <input type='text' value={this.state.term} onChange={e => this.setState({term : e.target.value})} />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;