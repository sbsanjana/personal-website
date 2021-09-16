import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

function handleClick(event) {
  event.preventDefault();
//   console.info('You clicked a breadcrumb.');
}

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs className='navbar' style={{fontWeight:'100', color:'white'}}
    // style={{fontFamily:"Roboto Mono", fontWeight:'100', fontSize: '25px',
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
      <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
        contact
      </Link>
      {/* <Typography color="textPrimary">Breadcrumb</Typography> */}
    </Breadcrumbs>
  );
}