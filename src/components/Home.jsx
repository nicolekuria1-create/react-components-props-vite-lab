import Header from './Header'
import About from './About'
import ArticleList from './ArticleList'

// Home component (reference composition)
// Connected to: Header, About, ArticleList
// Key logic: receives a `blog` object and passes each slice of data down to child components.
function Home({ blog }) {
    return (
        <>
            <Header name={blog.name} />
            <About image={blog.image} about={blog.about} />
            <ArticleList posts={blog.posts} />
        </>
    )
}

export default Home
