import { Fragment } from "react"
import { Helmet } from "react-helmet"
import { Navbar } from "../components/components"
import { About, Header, Work } from "../containers/containers"
import Skills from "../containers/skills"

export default function App() {
  const font = [
    "https://fonts.googleapis.com/css",
    [
      ["family", "Poppins:100,200,300,400,500,600,700,800,900"].join("="),
      ["display", "swap"].join("=")
    ].join("&")
  ].join("?")

  return (
    <Fragment>
      <Helmet>
        <link href={font} rel="stylesheet" />
      </Helmet>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
    </Fragment>
  )
}
