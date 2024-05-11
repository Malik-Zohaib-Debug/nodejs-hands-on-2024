const posts = [
    {id: 1, title: "This is post one"},
    {id: 2, title: "This is post two"},
    {id: 3, title: "This is post three"},
    {id: 4, title: "This is post four"},
]

const getPosts = () => posts;

export const getPostsLength = () => posts.length;

export default getPosts;