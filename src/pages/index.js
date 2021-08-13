import * as React from "react"
import HeroSection from "../components/HeroSection"
import ImageSection from "../components/ImageSection"
import InfoSection from "../components/InfoSection"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSection />
    <InfoSection />
    <ImageSection />
  </Layout>
)

export default IndexPage
