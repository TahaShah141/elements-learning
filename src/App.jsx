import { AboutPage } from "@/Pages/AboutPage"
import { ContactPage } from "@/Pages/ContactPage"
import { LandingPage } from "@/Pages/LandingPage/LandingPage"
import { NewsPage } from "@/Pages/NewsPage"
import { NotFound } from "@/Pages/NotFound"
import { TabView } from "@/Pages/WhatWeOfferPage/Sections/TabView"
import { sections } from "@/Pages/WhatWeOfferPage/Sections/sections"
import { WhatWeOfferPage } from "@/Pages/WhatWeOfferPage/WhatWeOfferPage"
import { Navbar } from "@/components/Navbar"
import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { Blog } from "./components/blogComponents/Blog"
import { blog1 } from "./constants/Blogs/blog1"

const RootLayout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="news" element={<NewsPage />} />
      <Route path="services" element={<WhatWeOfferPage />}/>
      <Route path="blog" element={<Blog {...blog1} />}/>
      <Route path="services/maths" element={<TabView {...(sections[0])} />} />
      <Route path="services/ece" element={<TabView {...(sections[1])} />} />
      <Route path="services/language" element={<TabView {...(sections[2])} />} />
      <Route path="services/steam" element={<TabView {...(sections[3])} />} />
      <Route path="services/edtech" element={<TabView {...(sections[4])} />} />
      <Route path="services/science" element={<TabView {...(sections[5])} />} />
      <Route path="services/socialscience" element={<TabView {...(sections[6])} />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
