import React from 'react';
import {Image,makeStyles,Text, Card,CardHeader,Body1} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    gap: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  card: {
    width: "520px",
    maxWidth: "100%",
    height: "250px",
    padding: "10px",
    margin: "auto",
    outline: '0 !important',
    border: '0 !important',
    '::after': {
      borderTopColor: 'transparent !important',
      borderRightColor: 'transparent !important',
      borderBottomColor: 'transparent !important',
      borderLeftColor: 'transparent !important',
    },
  },

  cardContainer:{
    display: "flex",
    flexDirection: "row", // default, but explicit is good
    gap: "15px",
    alignItems: "center",
  },
  cardHeader: {
    paddingBottom: "0px",
    borderBottom: "none",
  },
});


const Profile=()=>{
    const styles = useStyles();

    return(
    <div className={styles.container}>

            <Text style={{ padding: '20px',maxWidth: '1000px'}} >
               I am a Software Developer with proven ability to transform complex technical challenges into practical systems that drive business 
               impact. I am eager to leverage technical expertise and analytical thinking to build impactful solutions in a production environment, while building a strong software engineer foundation.
            </Text>
        

         <div className={styles.cardContainer}>
            <Card  className={styles.card} appearance="subtle"> 
                <CardHeader header={<Body1>Education</Body1>}/>
                <ul>
                    <li>BSc Mathematics and Computer Science - UCT(2019-2023)</li>
                    <li>NSC(Matric) - Bardale Secondary School(2018)</li>
                </ul>
                 
            </Card>
  
           <Card  className={styles.card}>
                <CardHeader header={<Body1>Experience</Body1>}/>
                <ul>
                    <li>Feb 2025-Current: Graduate Software Developer, Advania UK</li>
                    <li>Nov 2024-Feb 2025: Artificial Intelligence (AI) Intern, Microsoft </li>
                </ul>
                
           </Card >

         </div>
       
          <div className={styles.cardContainer}>
               <Card appearance="subtle" className={styles.card} > 
                 <CardHeader header={<Body1>Certificates and Training</Body1>} className={styles.cardHeader}/>
                 <ul>
                    <li>Developing Solutions for Microsoft Azure (AZ-204).</li>
                    <li>Azure AI Engineer Associate (AI-102).</li>
                    <li>Azure AI Fundamentals(AI-100). </li>
                    <li>Azure Fundamentals(AZ-900).</li>
                 </ul>
               </Card>

              <Card className={styles.card}>
                  <CardHeader header={<Body1>Programing Languages</Body1>}/>
              </Card>
          </div>

          <div className={styles.cardContainer}>
                <Card className={styles.card}>
                  <CardHeader header={<Body1>Cloud and Platforms</Body1>}/> 
               </Card>

               <Card className={styles.card}>
                  <CardHeader header={<Body1>Frameworks and Libraries</Body1>}/>
               </Card>
          </div>
                  
          <div className={styles.cardContainer}>
                
          </div>
    </div>
    
    );
}

export default Profile;