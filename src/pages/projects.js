import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { makeStyles } from "@material-ui/core/styles";

import Layout from "../components/layout"
import Seo from "../components/seo"
import "@fontsource/roboto-mono"
import Grid from '@material-ui/core/Grid';
import Nav from  '../components/nav.js'
import Paper from '@material-ui/core/Paper';
import Me from '../images/SanjanaBadhya.jpeg'
import Fact from '../images/factcheck.jpeg'
import CC from '../images/cc.jpeg'
import ed from '../images/ed.jpeg'
import st from '../images/smarttasking.jpeg'
import Berlin from '../images/berlin.jpeg'

import { withStyles } from '@material-ui/core/styles';
import Koble from '../images/koble.jpeg'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Project from '../components/proj'
import Proj from '../components/proj';

import * as projectStyles from './projects.module.css'

 

function Projects()  {
    return (
        <div className={projectStyles.mainDiv}>
        <Grid item
        container 
        direction="row"
        justifyContent="flex-end"
        alignItems="baseline">
    
        <Nav />
    </Grid>

    <h1 className={projectStyles.title}> projects</h1>
   
    <div className={projectStyles.cardDiv}>

    
    <Grid item container spacing={1} > 

    <Grid item
    container
    sm={6}  xs={10}  md={4} >
    <Proj
    className={projectStyles.project}
    title='FactCheck'
    desc="A machine learning model run via Flask, Python, and React in order to allow users to identify whether a news headline is true or not."
    pic={Fact}
    url='https://devpost.com/software/factcheck'
   
    />
    

    </Grid>

    <Grid item
    container
    sm={6}  xs={10}  md={4} >

        <Proj
        title='Creative Connect'
        desc="A platform for those in the arts industry to connect, interact, and share their work with their network."
        pic={CC}
        url='/404'/>
    
    </Grid>

    <Grid item
    container
    sm={6}  xs={10}  md={4}>

        <Proj
        title='Koble'
        desc="Koble is a solution built to bridge the gap between farmers with a surplus and individuals facing food insecurity via volunteers willing to transport the food."
        pic={Koble}
        url='https://devpost.com/software/koble-sz863j'/>

    </Grid>

{/* </Grid> */}


{/* <Grid item container justifyContent='center' alignItems='baseline'>  */}

    <Grid item
    container
    sm={6}  xs={10}  md={4}>
        <Proj
        title='Popcorn'
        desc="A platform build to reinvent CS education among those curious to learn, regarless of skill."
        pic={ed}/>

    </Grid>

    <Grid item
    container
    sm={6}  xs={10}   md={4} >
        <Proj
        title='TravelBerlin'
        desc="An application where users can explore various attractions in Berlin while interacting with both, these attractions, and other users."
        pic={Berlin}/>
    </Grid>

<Grid item
container
sm={6} xs={10} md={2} >
        <Proj
title='SmartTasking'
desc="Build to increase productivity with easy to organize tasks combined with a smart ranking system to maximize your time."
pic={st}/>


</Grid>

</Grid>
</div>

</div>
      )
    // </Layout>
}

export default Projects
