// Header component
// Connected to: App
// Responsibility: render the blog name received from App via the `name` prop.
function Header({ name }) {
    return (
        <header className="blog-header">
            <h1>{name}</h1>
        </header>
    )
}

export default Header
