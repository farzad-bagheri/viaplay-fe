import React from 'react';
import './item-thumbnail.css';

export default function ItemThumbnail(props) {
    return <div className="item-thumbnail">
        <img alt='movie thumbnail' src={props.imageUrl} />
        <h3>{props.title}</h3>
        <h5>{props.comment}</h5>
    </div>
}
