import React from 'react';
import {makeStyles,Text, Card,CardHeader,CardPreview,Body1,Image} from "@fluentui/react-components";
import educationImg from '../assets/education.jpg';
import experienceImg from '../assets/experience.jpg';
import certificatesImg from '../assets/certfication.jpg';
import toolsImg from '../assets/techtools.jpg';

const useStyles = makeStyles({
  container: {
    gap: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    width: "fit-content",
    height: "400px",
    padding: "10px",
    '::after': {
      borderTopColor: 'transparent !important',
      borderRightColor: 'transparent !important',
      borderBottomColor: 'transparent !important',
      borderLeftColor: 'transparent !important',
      color:"#8E9A98"
    },
    text:{
        color:"#8E9A98"
    },
  },

  cardHeader: {
    fontSize: "20px",
    fontWeight: "bold",
    color:"#8E9A98"
  },
  subHeading:{
        color:"#F0F8FF"
    },
    pageTitle:{
        fontSize: "20px",
        fontWeight: "bold",
        color:"#F0F8FF"
    },

    professionDescription:{
        padding: '20px',
        maxWidth: '1000px',
        color:"#8E9A98"
    },
    
    certificates:{
      display:"flex",
      flexDirection: "row",
      gap:"10px"
    },
    technologies:{
      display:"flex",
      flexDirection:"row",
      gap:"100px"
    },
    workExperience:{
      display:"flex",
      flexDirection:"column",
      gap:"20px"
    },
    education:{
      display:"flex",
      flexDirection:"column",
      gap:"20px"
    }
});


const Profile=()=>{
    const styles = useStyles();

    return(
    <div className={styles.container}>
            <Text className={styles.pageTitle}>My Profile</Text>

            <Text className={styles.professionDescription}>
               I am a Software Developer with proven ability to transform complex technical challenges into practical systems that drive business 
               impact. I am eager to leverage technical expertise and analytical thinking to build impactful solutions in a production environment, while building a strong software engineer foundation.
            </Text>
        

       
          <Text className={styles. subHeading}>Education</Text>
          <Card>
            <CardHeader  header={<Text>BSc Mathematics and Computer Sciences</Text>}/>
            <Text>University of Cape Town</Text>
            <Text>2019-2023</Text>
          </Card>

          <Card className={styles.card}>
            <CardHeader  header={<Text>Matric(2018)</Text>}/>
            <Text>Bardale Secondary School</Text>
            <ul>
              <li>
                Bardale Sec- Top Leaner
              </li>
              <li>
                Metro North District-Top learner in Quintile 3
              </li>
            </ul>
          </Card>
  
           
          <Text className={styles. subHeading}>Professional Experience</Text>
          <div className={styles.workExperience}>
            <Card className={styles.card}>
               <CardHeader  header={<Text>Graduate Software Developer </Text> }/>
               <Text>
                  Advania UK
               </Text>

               <ul>
                  <li>
                   Documentation: Created  technical documentation packages for client handovers, ensuring seamless knowledge transfer and reducing onboarding time. 
                  </li>
                  <li>
                    Feature Implementation: Implemented microservices architecture for Microsoft 365 multi-geo migrations, ensuring compliance with data residency requirements across geographic zones. 
                  </li>
                  <li>
                    Agile Development: Comunicates daily project progress to team lead and articulating any blokers or chanllenges in the development pipeline in a timely manner for client briefing.
                  </li>
                  <li>
                    Code Riews: Articulates development decision and procedures to team lead and  managers ensuring coding best practices are followed.
                  </li>
               </ul>
            </Card>

            <Card>
              <CardHeader header={<Text>
                 Artificial Intelligence (AI) Intern
              </Text>}/>
              
            </Card>
          </div>
           
  
         
       
          
            <Text className={styles. subHeading}>Certificates and Training</Text>

            <div className={styles.certificates}>
            <Card>
              Developing Solutions for Microsoft Azure (AZ-204).
            </Card>
            <Card>
              Azure AI Engineer Associate (AI-102).
            </Card>
            <Card>
                Azure AI Fundamentals(AI-100).
            </Card>
            <Card>
              Azure Fundamentals(AZ-900).
            </Card>
          </div>

            
            <Text className={styles. subHeading}>Technologies</Text>
            <div className={styles.certificates}>
               <Card>
                .NET Technologies
               </Card>

               <Card>
                Front-end Technologies
               </Card>

               <Card>
                Back-end Technologies
              </Card>
            </div>
  
    </div> 
    );
}

export default Profile;