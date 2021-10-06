import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import * as navStyles from './nav.module.css'
function handleClick(event) {
  event.preventDefault();
//   console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs className={navStyles.navbar} 
    // style={{fontFamily:"Roboto Mono÷", fontWeight:'100', fontSize: '25px',
    // color: 'black'}}
    separator="|" aria-label="breadcrumb">
      <Link color="inherit" href="/">
        home
      </Link>
      <Link color="inherit" href="/about">
        about
      </Link>
      <Link color="inherit" href="/experience">
        experience
      </Link>
      <Link color="inherit" href="/projects">
        projects
      </Link>
      <Link color="inherit" href="/contact">
        contact
      </Link>
      {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
    </Breadcrumbs>
  );
}