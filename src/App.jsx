import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { LandingPage } from "./Pages/LandingPage/LandingPage"
import { Navbar } from "./components/Navbar"
import { ContactPage } from "./Pages/ContactPage"
import { AboutPage } from "./Pages/AboutPage"

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
