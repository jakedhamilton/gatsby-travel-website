import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {motion} from 'framer-motion';
import {pageAnimation, fade} from '../animation';
import "./layout.css"
import NavBar from "./Navbar"
import Footer from "./Footer"

const Layout = ({ children, path }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <NavBar />
      
      <motion.main key={path} exit='exit' variants={pageAnimation} initial='hidden' animate='show'>{children}</motion.main>
      
      <Footer />
       
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
