import React from 'react';
import ItemThumbnail from '../ItemThumbnail/ItemThumbnail';
import './item-list.css';

export default function ItemList(props) {

    /* Using index as a key is not a good choice */
    const thumbnails = props.thumbnails.map((thumbnail, index) =>
        <ItemThumbnail key={index}
            title={thumbnail.title}
            imageUrl={thumbnail.imageUrl}
            comment={thumbnail.comment}
        />
    );

    return <div className="item-list">
        {thumbnails}
    </div>
}
