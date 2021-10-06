import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import * as headerStyles from './header.module.css'


export default function SimpleBreadcrumbs() {
  return (
      <div>
   <h2 className={headerStyles.supplement}> hi, i'm </h2>
   <h1 className={headerStyles.myName}> Sanjana Badhya </h1>
   <h2 className={headerStyles.supplement}> a passionate student, designer, and programmer. </h2>
   </div>
  );
}