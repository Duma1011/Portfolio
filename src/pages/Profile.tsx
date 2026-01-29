import React from 'react';
import {makeStyles,Text, Card,CardHeader,CardPreview,Body1,Image} from "@fluentui/react-components";
import experienceImg from '../assets/experience.jpg';
import agileImg from '../assets/Agile.jpg';

import workImg from '../assets/work.jpeg'
const useStyles = makeStyles({
  container: {
    gap: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    width: "900px",
    height: "320px",
    display:"flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "flex-start",
 
    '::after': {
      borderTopColor: 'transparent !important',
      borderRightColor: 'transparent !important',
      borderBottomColor: 'transparent !important',
      borderLeftColor: 'transparent !important',
      color:"#8E9A98"
    },
    borderRadius: "16px",
    
  },
  cardHeader: {
    fontSize: "20px",
    fontWeight: "bold",
  },
  text:{
        color:"#F0F8FF"
    },
    pageTitle:{
        fontSize: "20px",
        fontWeight: "bold",
        color:"#8E9A98"
    },

    professionDescription:{
        padding: '20px',
        maxWidth: '1000px',
        color:"#8E9A98"
    },
    image: {
    width: "400px",
    height: "300px",
    objectFit: "cover"}
    ,
  cardContentContainer:
  {
    width:"500px"
  }
});


const Profile=()=>{
    const styles = useStyles();

    return(
    <div className={styles.container}>
            <Text className={styles.pageTitle}>My Profile</Text>

            <Text className={styles.professionDescription}>
               I’m a software engineer with a strong interest in building reliable, well-structured systems that solve real problems.
               My background in mathematics and computer science has shaped how I approach software, I care about clarity, correctness, and long-term maintainability, not just making things work.

               I enjoy working across the stack, particularly where cloud architecture, backend services, and automation intersect. I’m especially interested in systems that need to scale, handle failure gracefully, and operate in real-world constraints.
            </Text>
      
        <div style={{flexDirection: "row",display: "flex"}}>
            <Card className={styles.card} style={{backgroundColor: "#414A4C",}}>
            <div className={styles.cardContentContainer}>
            <CardHeader header={<Text>How I Approach Software</Text>} className={styles.cardHeader}/>
            <Text>When I work on a project, I focus on:</Text>
            <ul >
              <li>
                  Understanding the problem before the solution
              </li>

              <li>
                Choosing tools based on trade-offs, not trends.
              </li>
              <li>
                Designing systems that are simple to reason about
              </li>
              <li>
                Writing code that someone else can read and extend
              </li>
            </ul>
           <Text> I value clean boundaries, clear responsibilities, and predictable behaviour in systems. If something fails, I want to know why, and how it can recover safely.</Text>
            </div>
          
            <Image src={agileImg} className={styles.image}/>
          </Card>
         
        </div>
          

          <Card className={styles.card} style={{backgroundColor: "#414A4C",}}>
           <div className={styles.cardContentContainer}>
            <CardHeader header={<Text>What I’m Working On</Text>} className={styles.cardHeader}/>
           
           <Text >Right now, I’m focused on:</Text> 
            <ul >
                <li>Building cloud-native applications on Azure</li>
                <li>Improving my understanding of distributed systems</li>
                <li>Designing APIs and services that are secure and resilient</li>
                <li>Refining how I communicate technical ideas through documentation and architecture diagrams.</li>
                <li>
                  Refining my problem solving approach and developing business acumen.
                </li>
                <li>
                   Exploring with different .NET frameworks.
                  </li>
               </ul>
                <Text>I enjoy turning complex requirements into practical, working solutions.</Text>
           </div> 
            <Image src={experienceImg} className={styles. image}/>
          </Card>

          <Card className={styles.card} style={{backgroundColor: "#414A4C",}}>
          <div  className={styles.cardContentContainer}>
            <CardHeader header={<Text> How I Like to Work</Text>}className={styles.cardHeader}/>
             <Text>I work best in environments where:</Text> 
            <ul >
              <li>Collaboration and feedback are encouraged.</li>
              <li>Quality matters as much as delivery.</li>
              <li>Learning is continuous.</li>
              <li>Decisions are discussed openly.</li>
            </ul>
            
            </div>
            <Image src={workImg} className={styles.image}/>
          </Card>
          
    </div> 
    );
}

export default Profile;