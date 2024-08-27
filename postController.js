const posts = [
    {id:1, title: 'Post One'},
    {id:2, title: 'Post Two'}
];

// export const getPost = () => posts;
const getPost = () => posts;
// export {getPost};

export const getPostLength = ()=>posts.length;

export default getPost;