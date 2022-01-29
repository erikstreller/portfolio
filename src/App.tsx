import { useState } from "react"
import MenuOverlay from "./components/MenuOverlay"
import ScrollingStroke from "./components/ScrollingStroke"
import About from "./layout/About"
import Contact from "./layout/Contact"
import Header from "./layout/Header"
import Hero from "./layout/Hero"
import Skills from "./layout/Skills"

function App() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <ScrollingStroke />
      <Header open={open} setOpen={setOpen} />
      <MenuOverlay open={open} setOpen={setOpen} />
      <Hero />
      <Skills />
      <About />
      <Contact />
    </>
  )
}

export default App
