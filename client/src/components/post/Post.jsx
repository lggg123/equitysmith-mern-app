import "./post.css"

export default function Post({img}) {
    return (
        <div className="post">
            <img 
                className="postImg"
                src={img}
                alt="blog-post-image"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Real Estate</span>
                    <span className="postCat">Insurance</span>
                </div>
                <span className="postTitle">
                    Lorem 
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat pariatur similique necessitatibus obcaecati odit voluptates, dicta vitae dolor in? Quidem assumenda iusto, mollitia at odio praesentium impedit eum unde.</p>
        </div>
    );
}