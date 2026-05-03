// Links component (utility navigation block)
// Connected to: none by default; can be mounted by App/Header as needed.
// Key logic: loops over `links` and renders a safe default when list is empty.
function Links({ links = [] }) {
    if (links.length === 0) {
        return null
    }

    return (
        <nav aria-label="blog links">
            {links.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                    {link.label}
                </a>
            ))}
        </nav>
    )
}

export default Links
