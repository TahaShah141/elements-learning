import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { LandingPage } from "./Pages/LandingPage/LandingPage"
import { Navbar } from "./components/Navbar"
import { ContactPage } from "./Pages/ContactPage"
import { AboutPage } from "./Pages/AboutPage"
import { BlogPage } from "./Pages/BlogPage"
import { WhatWeOfferPage } from "./Pages/WhatWeOfferPage/WhatWeOfferPage"
import { TabView } from "./Pages/WhatWeOfferPage/Sections/TabView"
import { sections } from "./Pages/WhatWeOfferPage/Sections/sections"

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
      <Route path="blogs" element={<BlogPage />} />
      <Route path="services" element={<WhatWeOfferPage />}/>
      <Route path="services/maths" element={<TabView {...(sections[0])} />} />
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
