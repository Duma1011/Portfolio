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
    width: "500px",
    height: "600px",
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

  cardContainer:{
    display: "flex",
    flexDirection: "row", 
    gap: "30px",
    alignItems: "center",
  },
  cardHeader: {
    fontSize: "20px",
    fontWeight: "bold",
    color:"#8E9A98"
  },
  text:{
        color:"#8E9A98"
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
    cardPreview:{
        height: "250px",
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
        

         <div className={styles.cardContainer}>
            <Card  className={styles.card} appearance="subtle"> 
                <CardHeader header={<Body1 className={styles.cardHeader}>Education</Body1>}/>
                <CardPreview className={styles.cardPreview}>
                    <Image src={educationImg}/>
                </CardPreview>
                <ul className={styles.text}>
                    <li>BSc Mathematics and Computer Science - UCT(2019-2023)</li>
                    <li>NSC(Matric) - Bardale Secondary School(2018)</li>
                </ul>
                 
            </Card>
  
           <Card  className={styles.card}>
                <CardHeader header={<Body1 className={styles.cardHeader}>Experience</Body1>}/>
                <CardPreview className={styles.cardPreview}>
                    <Image src={experienceImg}/>
                </CardPreview>
                <ul className={styles.text}>
                    <li>Feb 2025-Current: Graduate Software Developer, Advania UK</li>
                    <li>Nov 2024-Feb 2025: Artificial Intelligence (AI) Intern, Microsoft </li>
                </ul>
           </Card >

         </div>
       
          <div className={styles.cardContainer}>
               <Card appearance="subtle" className={styles.card} > 
                 <CardHeader header={<Body1 className={styles.cardHeader}>Certificates and Training</Body1>} className={styles.cardHeader}/>
                 <CardPreview className={styles.cardPreview}>
                  <Image src={certificatesImg}/>
                 </CardPreview>
                 <ul className={styles.text}>
                    <li>Developing Solutions for Microsoft Azure (AZ-204).</li>
                    <li>Azure AI Engineer Associate (AI-102).</li>
                    <li>Azure AI Fundamentals(AI-100). </li>
                    <li>Azure Fundamentals(AZ-900).</li>
                 </ul>
               </Card>

              <Card className={styles.card}>
                  <CardHeader header={<Body1 className={styles.cardHeader}>Tools of trade</Body1>}/>
                  <CardPreview className={styles.cardPreview}>
                    <Image src={toolsImg}/>
                  </CardPreview>
                  <ul className={styles.text}>
                    <li>C#</li>
                    <li>Python </li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>Java</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>.NET</li>
                    <li>ASP.NET MVC</li>
                    <li>ASP.NET Core</li>
                    <li>Entity Framework</li>
                    <li>SQL</li>
                    <li>Azure</li>
                  </ul>
              </Card>
          </div>
    </div> 
    );
}

export default Profile;