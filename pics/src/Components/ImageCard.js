import React from 'react';

class ImageCard extends React.Component{

    constructor(props){
        super(props);
        this.state={span : 0};
        this.imageRef=React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load',()=>{
            const height=this.imageRef.current.clientHeight;
            const spans=Math.ceil(height/10);
            console.log(height, spans);

            this.setState({span : spans});
        });
    }

    render(){
        return (
            <div style={{gridRowEnd : `span ${this.state.span}`}}>
            <img ref={this.imageRef} alt={this.props.image.description} src={this.props.image.urls.regular}></img>
            </div>
        );
    }
}
export default ImageCard;