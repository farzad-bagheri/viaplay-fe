import React, { Component } from 'react';
import ItemThumbnail from '../ItemThumbnail/ItemThumbnail';
import './item-list.css';

export default function ItemList(props) {
    const thumbnails = props.thumbnails.map((thumbnail, index) => {
        {/* Using index as a key is not a good choice */ }
        return <ItemThumbnail key={index}
            title={thumbnail.title}
            imageUrl={thumbnail.imageUrl}
            comment={thumbnail.comment}
        />
    });
    return <div className="item-list">
        {thumbnails}
    </div>
}
