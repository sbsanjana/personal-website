import React, { useState , useHistory} from 'react';
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
import Me2 from '../images/sanj.png'
import { withStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
      height:250,
    //   margin: theme.spacing(0.5),
    //   padding: theme.spacing(0.8),
    // filter: 'blur(0.5px)',
    opacity:0.85,
      borderRadius: theme.spacing(0),
      "&:hover": {
        // backgroundColor: "black",
        cursor:"pointer",
        opacity:1,
        transform: "scale3d(1.1, 1.1, 1)",
        // filter: 'blur(0px)'

      }
    },
    media: {
    //   opacity:0.25,
      height: '40%',
      width: '100%',
      "&:hover": {
        // backgroundColor: "black",
        // opacity:0.85,
        // transform: "scale3d(1.1, 1.1, 1)",
        // filter: 'blur(0px)'

      }
    //   backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("image.jpg")'

    },
    overlay: {
        position: 'relative',
        top: '20px',
        left: '20px',
        color: 'Black',
        fontWeight:'200',
        
        // backdropFilter: 'blur(2px)',
        userSelect: "none"
        // backgroundColor: 'white'
     },
     notSelectable: {
        userSelect: "none"
      }
  }));



function Proj(props)  {
    const classes = useStyles();



    const [state, setState] = useState({
        raised:false,
        shadow:1,
      })

    
      return (
    
    
    
    <div style={{marginBottom:15}}>
        <Card className={classes.root} elevation={3} onClick={(event) => 
          {window.location.href = props.url}}>
           
            <CardMedia
              className={classes.media}
              image={props.pic}/>
            
            <CardContent className='disableBlur'>
                <h3 style={{fontWeight:'200', fontSize:30, marginBottom:-1}}>{props.title}</h3>
                <h3 style={{fontWeight:'200', fontSize:17, marginTop: 5}}> {props.desc}</h3>
            </CardContent>
            
        </Card>
    </div>
    
 )}

export default Proj
