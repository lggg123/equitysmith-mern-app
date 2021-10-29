import "./post.css"
import {Link} from "react-router-dom"

export default function Post({post}) {
    return (
        <div className="post">
            {post.photo && (

            <img 
                className="postImg"
                src={post.photo}
                alt="blog-post-image"
            />
            )}
            <div className="postInfo">
                <div className="postCats">
                    {
                        post.categories.map((c) => (
                            <span className="postCat">{c.name}</span>
                        ))}
                </div>
                <Link to={`/post/${post._id}`} className="link">
                    <span className="postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat pariatur similique necessitatibus obcaecati odit voluptates, dicta vitae dolor in? Quidem assumenda iusto, mollitia at odio praesentium impedit eum unde.</p>
        </div>
    );
}