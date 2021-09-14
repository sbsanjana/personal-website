import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';



export default function SimpleBreadcrumbs() {
  return (
      <>
   <h2 style={{fontWeight:'200', fontSize:45, letterSpacing:'0.05em', color:'white'}}> hey, i'm </h2>
   <h1 style={{ fontFamily:'Staatliches', fontWeight:'400', letterSpacing:'0.05em',  fontSytle:'italic',fontSize:100, color:'white'}}> Sanjana Badhya </h1>
   <h2 style={{ fontWeight:'200', fontSize:45, letterSpacing:'0.05em', color:'white'}}> student. designer. programmer. </h2>
   </>
  );
}