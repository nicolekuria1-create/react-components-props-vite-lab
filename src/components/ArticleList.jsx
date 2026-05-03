import Article from './Article'

// ArticleList component
// Connected to: App (parent), Article (children)
// Responsibility: map through posts and render one Article per post with a unique key.
function ArticleList({ posts }) {
    const articleItems = posts.map((post) => (
        <Article
            key={post.id}
            title={post.title}
            date={post.date}
            preview={post.preview}
        />
    ))

    return <main className="article-list">{articleItems}</main>
}

export default ArticleList
