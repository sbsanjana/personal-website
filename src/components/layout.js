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
import "./layout.css"
import Nav from  './nav.js'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import sanj from '../images/sanj.png'
import MenuIcon from '@material-ui/icons/Menu'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';

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
    <div style={{paddingLeft:120, paddingRight:120, paddingTop:30}}>
    
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

    <Grid 
        container
        direction="row"
        sm={12}
                // justifyContent="cente"
        // alignItems="space-evenly"
      >
    <div style={{marginTop:'3em'}} >
      <LinkedInIcon style={{color:'white', height:'45px', width:'45', marginRight:'15'}}/>
      <GitHubIcon style={{color:'white', height:'45px', width:'45px', marginRight:'15'}}/>
      <EmailIcon style={{color:'white', height:'45px', width:'45px', marginRight:'15'}}/>
      <DescriptionIcon style={{color:'white', height:'45px', width:'45px', marginRight:'15'}}/>

    </div>
    </Grid>
 
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
