import { render, screen } from '@testing-library/react'
import App from './App'
import blog from './blog'

describe('App component', () => {
    it('renders blog content passed to child components through props', () => {
        render(<App />)

        expect(screen.getByRole('heading', { level: 1, name: blog.name })).toBeInTheDocument()
        expect(screen.getByAltText('blog logo')).toHaveAttribute('src', blog.image)
        expect(screen.getByText(blog.about)).toBeInTheDocument()

        blog.posts.forEach((post) => {
            expect(screen.getByRole('heading', { level: 3, name: post.title })).toBeInTheDocument()
            expect(screen.getByText(post.date)).toBeInTheDocument()
            expect(screen.getByText(post.preview)).toBeInTheDocument()
        })
    })
})
