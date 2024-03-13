import React from 'react';

const PostsPage = ({ params }) => {
    console.log(params.id);
    return (
        <div>
            <h1>Posts Page</h1>
        </div>
    );
};

export default PostsPage;
