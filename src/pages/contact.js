import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import "@fontsource/roboto-mono"
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Nav from  '../components/nav.js'
import Paper from '@material-ui/core/Paper';
import Me from '../images/SanjanaBadhya.jpeg'
import Me2 from '../images/sanj.png'
import { withStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import DescriptionIcon from '@material-ui/icons/Description';

import * as contactStyle from './contact.module.css'

const IndexPage = () => (

        // <h1>Hello.</h1>
        <div className={contactStyle.mainDiv}>
    <Grid item
    container 
    direction="row"
    justifyContent="flex-end"
    alignItems="baseline"
    // xs={12} sm={6}
    // style={{marginBottom:'5em'}}
    >

    <Nav />
</Grid>

<h1 className={contactStyle.title} style={{fontStyle:'italic'}}> contact me</h1>
<br />

<h1 className={contactStyle.supplement}style={{fontWeight:'400'}}> feel free to reach out to me via:</h1>

<Grid container justifyContent='center'>
    <Grid sm={2} xs={4} md={1}>
        <EmailIcon className={contactStyle.icon}style={{height:70, width:70, marginRight:30}} onClick={() => {document.location.href = 'mailto:sbsanjana@gmail.com'}}/>
    </Grid>

    <Grid sm={2} xs={4} md={1}>
        <LinkedInIcon  className={contactStyle.icon} style={{height:70, width:70, marginRight:30}} onClick={() => {window.location.href = 'https://www.linkedin.com/in/sanjanabadhya/'}}/>
    </Grid>
    <Grid sm={2} xs={4} md={1}>
        <DescriptionIcon  className={contactStyle.icon} style={{height:70, width:70, marginRight:30}} onClick={() => {window.location.href = 'https://drive.google.com/file/d/1vji76XmyFtvZLCGL1BRd-yALObf2gwoF/view?usp=sharing/'}}/>
    </Grid>
    {/* <h1 style={{fontWeight:'200', fontSize:55, color:'white'}}> Feel free to email me at sbsanjana@gmail.com</h1> */}

    {/* </Grid> */}
</Grid>

 
    </div>
    // </Layout>
)

export default IndexPage
