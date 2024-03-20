import "./BlogPage.css"
import SortSection from "./SortSection/SortSection"
import BlogPostsSection from "./BlogPostsSection/BlogPostsSection"

export default function BlogPage() {
    return (
        <main className="BlogPage" id="main-page">
            <SortSection/>
            <BlogPostsSection />
        </main>
    )
}