import React from 'react';
import {Card,CardHeader,CardPreview, makeStyles,Body1,Image,Text} from "@fluentui/react-components";
import sqlAutomationImg from '../assets/sqlAutomation.png';
import salesAnalysisImage from '../assets/Sale Analysis.png';
import diebetespredictionImg from '../assets/diebetesprediction.png';
import aiWebImg from '../assets/web_ai.jpg';

const useStyles = makeStyles({
card: {
    width: "500px",
    height: "700px",
   // padding: "10px",
    margin: "auto",
    '::after': {
      borderTopColor: 'transparent !important',
      borderRightColor: 'transparent !important',
      borderBottomColor: 'transparent !important',
      borderLeftColor: 'transparent !important',
    },
  },
  cardContainer:{
    display: "flex",
    flexDirection: "row", 
    gap: "35px",
    alignItems: "center",
  },
   cardHeader:{
        fontSize: "20px",
        fontWeight: "bold",
        color:"#F0F8FF"
    },
    container:{
        gap: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
    },
    pageTitle:{
        fontSize: "20px",
        fontWeight: "bold",
        color:"#F0F8FF"
    },
    projectImage:{
        height: "250px",
    },
    projectDescription:{
        color:"#F0F8FF"
    }
});
const Projects=()=>{
    const styles = useStyles();
    return(
    <div className={styles.container}>
        <Text className={styles.pageTitle}>Projects</Text>
        <div className={styles.cardContainer}>
            <Card className={styles.card}>
                <CardHeader header={<Body1 className={styles.cardHeader}>SQL Assignments Automation</Body1>}/> 
                <CardPreview className={styles.projectImage}><Image src={sqlAutomationImg} /></CardPreview>
                <Text className={styles.projectDescription}>
                    TESTSQL is a system to create and mark SQL assignments. It consists of a database of questions (data access requests in English) and answers (SQL SELECT statements to retrieve that data). The lecture will feed the system with question-pair and the assignment will then generate more based on the examples given. It generates a set of assignments, one for each student in the class, the assignment each student is given is derived from their student number. Each assignment consists of a fixed number of generated questions, spread equally across difficulty levels for each student. The system also stores in its database the data to be queried. Students can use the system to submit their assignment which is then marked automatically against a fixed expected output.
                </Text>
                <Text className={styles.projectDescription}>Tech Stack</Text>
                <ul className={styles.projectDescription}>
                    <li>Python</li>
                    <li>SQL</li>
                    <li>Tkinter</li>
                </ul>
            </Card>
            <Card className={styles.card}>
                <CardHeader header={<Body1 className={styles.cardHeader}>AI-WEB</Body1>}/> 
                <CardPreview className={styles.projectImage}><Image src={aiWebImg} className={styles.projectImage}/></CardPreview>
                <Text className={styles.projectDescription}>
                   AI-Web is a web application to explore and navigate the Artificial Intelligence research community in South Africa. The web application collects and organises data about South African Artificial Intelligence researchers from different publication websites across the internet such as NFR and web of science and with the data form a community of such researchers. Our application can provide answers to questions about the dominant topic within the community, publication venues where researchers in our community publish their papers, collaborations and the impact that our researchers have both locally and internationally, where the researchers are based.
                   To develop our web application we coded using JavaScript, HTML and CSS. We used
                   MongoDB, a database, to store all the AI South African researchers' data that we use to
                   make queries. We made use of PowerBI to display the data distribution of the AI South
                   African researchers.
                </Text>
            </Card>
        </div>

        <div className={styles.cardContainer}>
            <Card className={styles.card} >
                <CardHeader header={<Body1 className={styles.cardHeader}>Diabetes Prediction System</Body1>}/> 
                <CardPreview className={styles.projectImage}><Image src={diebetespredictionImg}/></CardPreview>
                <Text className={styles.projectDescription}>
                    A diagnostic tool to predict whether a patient has diabetes based on certain diagnostic measurements included. To complete the task I had to use python machine learning libraries, such as numpy, pandas, skit-learn, matplotlib and seaborn, and django ,and html to develop an interactive user interface.
                </Text>

                <Text className={styles.projectDescription}> Tech Stack</Text>
                <ul className={styles.projectDescription}>
                    <li>Python</li>
                    <li>Django</li>
                    <li>Numpy</li>
                    <li>Pandas</li>
                    <li>Scikit-learn</li>
                    <li>Seaborn</li>
                    <li>Power BI</li>
                </ul>
                
            </Card>
            <Card className={styles.card}>
                <CardHeader header={<Body1 className={styles.cardHeader}>Sales Data Analysis</Body1>}/> 
                <CardPreview className={styles.projectImage}><Image src={salesAnalysisImage}/></CardPreview>
                <Text className={styles.projectDescription}>
                    In this individual project, I utilised power BI and dived into a large sales dataset exploring sales trends over time, identifying the best-selling products, calculated revenue metrics such as total sales and profit margins, and create visualizations to present findings effectively.
                </Text>
                <Text className={styles.projectDescription}> Tech Stack</Text>
                <ul className={styles.projectDescription}>
                    <li>Power BI</li>
                </ul>
            </Card>
        </div>
    
    </div>);
}
export default Projects;
