import React, { Component } from 'react';
import './add-form.css';

class AddForm extends Component {
    state = {
        title: '',
        imageUrl: '',
        comment: ''
    };

    handleOnTitleChanged = (event) => {
        this.setState({ title: event.target.value });
    }

    handleOnImageUrlChanged = (event) => {
        this.setState({ imageUrl: event.target.value });
    }

    handleOnCommentChanged = (event) => {
        this.setState({ comment: event.target.value });
    }

    handleOnAddMovie = () => {
        // To do: check for empty or wrong input
        this.props.onAddMovie({
            title: this.state.title,
            imageUrl: this.state.imageUrl,
            comment: this.state.comment
        });
    }

    render() {
        return <div className="add-form">
            <div className="add-form-inputs">
                <label htmlFor="title">Title</label>
                <input name="title" placeholder="Title" value={this.state.title} onChange={this.handleOnTitleChanged} />

                <label htmlFor="imageurl">Image Url</label>
                <input name="imageurl" placeholder="Image Url" value={this.state.imageUrl} onChange={this.handleOnImageUrlChanged} />

                <label htmlFor="comments">Comments</label>
                <input name="comments" placeholder="Comments" value={this.state.comment} onChange={this.handleOnCommentChanged} />
            </div>
            <button onClick={this.handleOnAddMovie}>Add</button>
        </div>
    }
}

export default AddForm;