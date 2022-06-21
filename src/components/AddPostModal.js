import React, { useState } from "react";
import PropTypes from 'prop-types';
import HyperModal from "react-hyper-modal";

const initialState = {
    author: '', 
    content: '',
    count: 0
}

const AddPostModal = ({modalOpen, handleSendPost, handleCloseModal}) => {
    const [state, setState] = useState(initialState);
    const {author, content, count} = state;

    const handleSendClick = () => {
        if (author && content) {
            handleSendPost({author, content});
            setState(initialState);
            handleCloseModal();
        }
    }
    return(
        <HyperModal isOpen={modalOpen} requestClose={handleCloseModal}>
            <div className='AddPostModal'>
                <div className='ModalHeader'>New post</div>
                <input 
                    className='Author'
                    type='text' 
                    placeholder='Name' 
                    value={author} 
                    onChange={(e) => setState({...state, author: e.target.value})}
                >
                </input>
                <textarea 
                    className='Content'
                    value={content} 
                    maxLength={200} 
                    onChange={(e) => setState({...state, content: e.target.value, count: e.target.value.length})}
                >
                </textarea>
                <div className='charCount'>{`${count}/200`}</div>
                <div className='buttonsWrapper'>
                    <button onClick={handleCloseModal}>Close</button>
                    <button onClick={handleSendClick}>Send</button>
                </div>
            </div>
    </HyperModal>
    )
}

AddPostModal.propTypes = {
    modalOpen: PropTypes.bool,
    handleSendPost: PropTypes.func.isRequired,
    handleCloseModal: PropTypes.func.isRequired
}

export default AddPostModal;