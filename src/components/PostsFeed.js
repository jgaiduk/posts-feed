import React, { useState } from "react";
import {  Link  } from "react-router-dom";
import moment from "moment";
import AddPostModal from "./AddPostModal";
import { getAuthorLinkID } from "../utils";
import { fetchFeedPosts } from "../fetches";
import { usePosts } from "../hooks";


const PostsFeed = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [filter, setFilter] = useState('');
    const [posts, setPosts] = usePosts(fetchFeedPosts);

    const handleUpdateFeed = (newPost) => {
        setPosts([
            {...newPost, dateTime: moment().format('MMMM Do YYYY, h:mm:ss')}, 
            ...posts
        ]);
    }

    const filteredPosts = filter.length 
        ? posts.filter((post) => post.author.toLowerCase().includes(filter.toLowerCase())) 
        : posts;

    return(
        <div className='PostsFeed'> 
            <div className='FeedHeader'>
                <button onClick={() => setModalOpen(true)}>Add post</button>
                <div className='FilterBox'>
                    <div>Filter by user:</div>
                    <input
                        placeholder='Start typing...'
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
            </div>
            {
                filteredPosts.map((post, idx) => (
                    <div className='Card' key={idx}>
                        <div className='CardHeader'>
                            <div className='Author'>
                                <Link to={`/user/${getAuthorLinkID(post.author)}`}>
                                    {post.author}
                                </Link>
                            </div>
                            <div className='Date'>{post.dateTime}</div>
                        </div>
                        <div>{post.content}</div>
                    </div>
                    
                ))
            }
        <AddPostModal
            modalOpen={modalOpen}
            handleSendPost={handleUpdateFeed}
            handleCloseModal={() => setModalOpen(false)}
        />
      </div>
    )
}

export default PostsFeed;