/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import * as layoutStyles from "./layout.module.css"
import Nav from  './nav.js'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import sanj from '../images/sanj.png'
import MenuIcon from '@material-ui/icons/Menu'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';
import Link from '@material-ui/core/Link';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // var circleStyle = {
  //   // padding:10,
  //   // paddingLeft:1000,
  //   marginLeft:350,
  //   padding:10,
  //   // marginBottom:2000,
  //   position: 'fixed',
  //   // display:"inline-block",
  //   backgroundColor: '#9CAFB7',
  //   borderRadius: "50%",
  //   width:2000,
  //   height:2000,
  // };
  return (
    <div className={layoutStyles.bigDiv}>
    
    <Grid item
    container
    direction="row"
    justifyContent="flex-end"
    alignItems="baseline"
    style={{marginBottom:'5em'}} 
  >
    <Nav />
    

    </Grid>
    <Grid> 
    {/* <div style={circleStyle}>
    <img src={sanj} style={{
      height:'25em',
      marginLeft:500,
      marginTop:100,
      position:'abolsute'
    }}/>
      </div> */}
    </Grid>
    <Grid item >
    <Header />
    {/* <div style={circleStyle}>
      </div> */}
    </Grid>
      <br />
    <Grid item >
      <div >
      <Link href='/contact'>
    <Button 
    className={layoutStyles.homeButton}
    size="large"
    style={{backgroundColor: '#E07A5F', color: '#FFFFFF'}}
    >Contact Me</Button>
     </Link>
    <> </>
    
    <Button 
    className={layoutStyles.homeButton}
    size="large"
    style={{backgroundColor: '#006D77', color: '#FFFFFF'}}
    onClick={() => {window.location.href = 'https://drive.google.com/file/d/1vji76XmyFtvZLCGL1BRd-yALObf2gwoF/view?usp=sharing/'}}
    >View My Resume</Button>
   
    </div>
    </Grid>
    <br />

    <Grid 
        container
        direction="row"
        sm={12}
        justifyContent='flex-end'
                // justifyContent="cente"
        // alignItems="space-evenly"
      >
    <div className={layoutStyles.iconGrid} style={{marginTop:'3em'}} >
      <LinkedInIcon className={layoutStyles.icon} onClick={() => {window.location.href = 'https://www.linkedin.com/in/sanjanabadhya/'}}/>
      <GitHubIcon className={layoutStyles.icon} onClick={() => {window.location.href = 'https://www.github.com/sbsanjana'}}/>
      <EmailIcon className={layoutStyles.icon} onClick={() => {document.location.href = 'mailto:sbsanjana@gmail.com'}}/>
      <DescriptionIcon className={layoutStyles.icon} onClick={() => {window.location.href = 'https://drive.google.com/file/d/1vji76XmyFtvZLCGL1BRd-yALObf2gwoF/view?usp=sharing/'}}/>
      
    </div>
    </Grid>
 
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
