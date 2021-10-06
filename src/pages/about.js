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


import * as aboutStyles from './about.module.css'
const IndexPage = () => (

        // <h1>Hello.</h1>
    <div className={aboutStyles.mainDiv}>
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

<h1 className={aboutStyles.title}> about me</h1>
<br />
<Grid container spacing = {2} direction='row' justifyContent='center'>
    <Grid item
        sm={8} md={4}
        container spacing = {2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
            <div style={{margin:20}}>
            <img className={aboutStyles.mepic} src={Me2} />
            </div>

            {/* style={{height:'30%', width:'30%'}}/> */}
        </Grid>
    
    <Grid item
        sm={8} md={8}
        container spacing = {2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        >

<h3 style={{fontWeight:'150'}}>
    I'm a 4th year Computer Science (CS) major ar Georgia Tech with a minor in Industrial Design! My concentrations in CS are Intelligence (AI/ML) and People (Human-Computer Interaction). Once I graduate in December 2021, I will continue my education at GT as a part of the BS/MS program where I will earn my Master's in CS with a concentration in Human-Computer Interaction.
</h3>
<h3 style={{fontWeight:'150'}}>

    If I'm not behind a computer coding or studying, you'll likely find me reading in any aesthtically pleasing coffeeshop in Atlanta, painting, or playing video games! If you want to reach out to me, feel free to email me at sbsanjana@gmail.com, or connect with me on LinkedIn!
</h3>
    <h3 style={{fontWeight:'150'}}>

    If you want to know even more about what I've done, feel free to check out my resume or the projects section!
    </h3>

    </Grid>
    

</Grid>

 


 
    </div>
    // </Layout>
)

export default IndexPage
