// About component
// Connected to: App
// Responsibility: render blog image and summary text from `image` and `about` props.
function About({ image = "https://via.placeholder.com/215", about }) {
    return (
        <aside className="blog-about">
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    )
}

export default About
