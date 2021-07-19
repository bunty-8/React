import React from 'react';

const VideoItem = (props) => {
    return (
        <div style={{ cursor: `pointer` }} className='item' onClick={() => { props.onVideoSelect(props.video) }} >
            <img style={{ maxWidth: `180px` }} className='ui image' src={props.video.snippet.thumbnails.medium.url}></img>
            <div className='content'>
                <div className='header'>{props.video.snippet.title}</div>  
            </div>
        </div>
    );
}

export default VideoItem;