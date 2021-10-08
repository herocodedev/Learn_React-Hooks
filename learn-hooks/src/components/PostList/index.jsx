import React from 'react';
import PropTypes from 'prop-types';

PostList.propTypes = {
    posts:PropTypes.array
};

PostList.default = {
    posts:[]
}

function PostList(props) {
    const {posts} = props
    return (
        <ul className="post-list">
            <p style={{color:'aqua',fontWeight:'bold',fontSize:'1.8rem'}}>React Hooks - Postlist</p>
           
            {posts.map((post) => {
                return <li key = {post.id}>{post.title}</li>
            })}
        </ul>
    );
}

export default PostList;