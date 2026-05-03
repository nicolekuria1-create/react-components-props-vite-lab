// Article component
// Connected to: ArticleList
// Responsibility: render one post preview using title, date, and preview props.
function Article({ title, date, preview }) {
    return (
        <article className="article-card">
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article
