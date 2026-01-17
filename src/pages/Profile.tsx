import React from 'react';
import {makeStyles,Text, Card,CardHeader,Body1} from "@fluentui/react-components";

const useStyles = makeStyles({
  container: {
    gap: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  card: {
    width: "500px",
    height: "300px",
    padding: "10px",
    margin: "auto",
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
    gap: "15px",
    alignItems: "center",
  },
  cardHeader: {
    paddingBottom: "0px",
    borderBottom: "none",
  },
  text:{
        color:"#8E9A98"
    },
    title:{
        fontSize: "20px",
        fontWeight: "bold",
        color:"#8E9A98"
    }
});


const Profile=()=>{
    const styles = useStyles();

    return(

     <> 
    <div className={styles.container}>

            <Text style={{ padding: '20px',maxWidth: '1000px',color:"#8E9A98"}} >
               I am a Software Developer with proven ability to transform complex technical challenges into practical systems that drive business 
               impact. I am eager to leverage technical expertise and analytical thinking to build impactful solutions in a production environment, while building a strong software engineer foundation.
            </Text>
        

         <div className={styles.cardContainer}>
            <Card  className={styles.card} appearance="subtle"> 
                <CardHeader header={<Body1 className={styles.title}>Education</Body1>}/>
                <ul className={styles.text}>
                    <li>BSc Mathematics and Computer Science - UCT(2019-2023)</li>
                    <li>NSC(Matric) - Bardale Secondary School(2018)</li>
                </ul>
                 
            </Card>
  
           <Card  className={styles.card}>
                <CardHeader header={<Body1 className={styles.title}>Experience</Body1>}/>
                <ul className={styles.text}>
                    <li>Feb 2025-Current: Graduate Software Developer, Advania UK</li>
                    <li>Nov 2024-Feb 2025: Artificial Intelligence (AI) Intern, Microsoft </li>
                </ul>
           </Card >

         </div>
       
          <div className={styles.cardContainer}>
               <Card appearance="subtle" className={styles.card} > 
                 <CardHeader header={<Body1 className={styles.title}>Certificates and Training</Body1>} className={styles.cardHeader}/>
                 <ul className={styles.text}>
                    <li>Developing Solutions for Microsoft Azure (AZ-204).</li>
                    <li>Azure AI Engineer Associate (AI-102).</li>
                    <li>Azure AI Fundamentals(AI-100). </li>
                    <li>Azure Fundamentals(AZ-900).</li>
                 </ul>
               </Card>

              <Card className={styles.card}>
                  <CardHeader header={<Body1 className={styles.title}>Tools of trade</Body1>}/>
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
                  </ul>
              </Card>
          </div>
    </div>

    <div>
      <Card className={styles.card}>
        <CardHeader header={<Body1>Cloud and Platforms</Body1>}/> 
            <ul>
              <li>Azure</li>
              </ul>
      </Card>
    </div>
  </>

    );
}

export default Profile;