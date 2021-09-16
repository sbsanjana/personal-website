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

import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import SchoolIcon from '@material-ui/icons/School';

const IndexPage = () => {
    const items = [{
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        
      },
      {
        title: "May 1940",
        cardTitle: "Dunkirk",
        cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
        cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
        media: {
          type: "IMAGE",
          source: {
            url: {Me}
          }
        }
      }];
    return (
        <div style={{paddingLeft:120, paddingRight:120, paddingTop:30}}>
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
<h1 style={{ color:'white', fontFamily:'Staatliches', fontWeight:'400', letterSpacing:'0.05em', fontSize:'75px'}}> Experience</h1>
<br />
<Grid item
    container 
    direction="row"
    justifyContent="center"
    alignItems="baseline"
    // xs={12} sm={6}
    // style={{marginBottom:'5em'}}
    >

<Timeline lineColor={'#ddd'}>

<TimelineItem
        key="002"
        dateText="01/2022 – 12/2022"
        dateInnerStyle={{ background: '#B3A369' }}
        bodyContainerStyle={{
          background: '#B3A369',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0.8rem 0.8rem 2rem 0 rgba(0, 0, 0, 0.2)',
        }}>   
        <h3 style={{color:"white", fontWeight:'300'}}>Georgia Institute of Technology</h3>
        <h4 style={{color:"white", fontWeight:'500'}}>M.S. Computer Science, Concentration in Human-Computer Interaction</h4>
        <br/>
        <h4 style={{color:"white", fontWeight:'300'}}>
            I am a student in the combined BS/MS program and have already taken courses towards my Master's degree. 
        </h4>
    </TimelineItem>

<TimelineItem
        key="002"
        dateText="05/2021 – 08/2021"
        dateInnerStyle={{ background: '#54b948' }}
        bodyContainerStyle={{
            background: '#54b948',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.8rem 0.8rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}>
        <h3 style={{color:"white", fontWeight:'300'}}>NCR Corportation</h3>
        <h4 style={{color:"white", fontWeight:'500'}}>Software Engineer Intern</h4>
        <br/>
        <h4 style={{color:"white", fontWeight:'300'}}>
        As a software engineer intern, I worked with other software engineers and interns on my team. I sesigned an onboarding micro-service by integrating Google APIs into existing NCR products using Angular.js, Express.js, and Loopback4. This feature will be used by each customer of NCR Silver in order to integrate their stores with Google My Business for easy synchronization of their business with these services.
        </h4>
    </TimelineItem>

    <TimelineItem
        key="002"
        dateText="01/2021 – 05/2021"
        dateInnerStyle={{ background: '#B3A369' }}
        bodyContainerStyle={{
            background: '#B3A369',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.8rem 0.8rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}>
        <h3 style={{color:"white", fontWeight:'300'}}>Georgia Tech College of Computing</h3>
        <h4 style={{color:"white", fontWeight:'500'}}>Algorithms Teaching ASsistant</h4>
        <br/>
        <h4 style={{color:"white", fontWeight:'300'}}>
        As a teaching assistant, I worked closely with the professor and fellow TAs. I held weekly office hours to teach students concepts such as dynamic programming, graph theory, and NP. I also helped create weekly homework assignments and exams, and graded these assignments for a class of over 200 students.
        </h4>
    </TimelineItem>
  
    <TimelineItem
        key="003"
        dateText="12/2019 – 06/2020"
        dateInnerStyle={{ background: '#003057' }}
        bodyContainerStyle={{
            background: '#003057',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.8rem 0.8rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}>
        <h3 style={{color:"white", fontWeight:'300'}}>Georgia Institute of Technology</h3>
        <h4 style={{color:"white", fontWeight:'500'}}>UX Research Assistant</h4>
        <br/>
        <h4 style={{color:"white", fontWeight:'300'}}>
        I worked with a fellow student to research current solutions and barriers to various food journaling methods. I also developed a prototype for a food journaling solution and a testing plan to collect qualitative data. This, however, was cut short due to the Covid-19 pandemic.
        </h4>
    </TimelineItem>

  <TimelineItem
    key="004"
    dateText="08/2019 – 12/2021"
    dateInnerStyle={{ background: '#B3A369' }}
    bodyContainerStyle={{
      background: '#B3A369',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0.8rem 0.8rem 2rem 0 rgba(0, 0, 0, 0.2)',
    }}>
    <h3 style={{color:"white", fontWeight:'300'}}>Georgia Institute of Technology</h3>
    <h4 style={{color:"white", fontWeight:'500'}}>B.S. Computer Science, Minor in Industrial Design</h4>
    <br/>
    <h4 style={{color:"white", fontWeight:'300'}}>
      I will be graduating with my Bachelor's degree in Computer Science with concentrations in Intellignece (AI/ML) and People (UI/UX) along with a minor in Industrial Design.
      I am a student in the BS/MS programs and have taken graduate level courses thoughout my undergraduate career.
     I have also studied abroad at the Technische Universität Berlin where I learned about topics such as machine learning, entrepreneurship, and advanced object oriented programming concepts. 
    </h4>
  </TimelineItem>
</Timeline>


    </Grid>
 
    </div>
    )
    // </Layout>
}

export default IndexPage
