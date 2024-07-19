import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import BlogSingle from './pages/BlogSingle'

export function Router() {
    return (
        <Routes>
            <Route path='/financing-react' element={<DefaultLayout />}>
                <Route path='/financing-react' element={<Home />} />
                <Route path='/financing-react/blog' element={<Blog />} />
                <Route path='/financing-react/services' element={<Services />} />
                <Route path='/financing-react/about' element={<About />} />
                <Route path='/financing-react/contact' element={<Contact />} />
                <Route path='/financing-react/blogsingle' element={<BlogSingle />} />
            </Route>
        </Routes>
    )
}