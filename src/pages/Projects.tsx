import React from 'react';
import {Card,CardHeader,CardPreview, makeStyles,Body1,Image,Text} from "@fluentui/react-components";
import sqlAutomationImg from '../assets/sqlAutomation.png';
import salesAnalysisImage from '../assets/Sale Analysis.png';
import diebetespredictionImg from '../assets/diebetesprediction.png';
import aiWebImg from '../assets/web_ai.jpg';

const useStyles = makeStyles({
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
    },
  },
  cardContainer:{
    display: "flex",
    flexDirection: "row", 
    gap: "15px",
    alignItems: "center",
  },
   cardHeader:{
        fontSize: "20px",
        fontWeight: "bold",
        color:"#8E9A98"
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
        color:"#8E9A98"
    },
});
const Projects=()=>{
    const styles = useStyles();
    return(
    <div className={styles.container}>
        <Text className={styles.pageTitle}>Projects</Text>
        <div className={styles.cardContainer}>
            <Card className={styles.card}>
                <CardHeader header={<Body1 className={styles.cardHeader}>SQL Assignments Automation</Body1>}/> 
                <CardPreview><Image src={sqlAutomationImg}/></CardPreview>
            </Card>
            <Card className={styles.card}>
                <CardHeader header={<Body1 className={styles.cardHeader}>AI-WEB</Body1>}/> 
                <CardPreview><Image src={aiWebImg}/></CardPreview>
            </Card>
        </div>

        <div className={styles.cardContainer}>
            <Card className={styles.card} >
                <CardHeader header={<Body1 className={styles.cardHeader}>Diabetes Prediction System</Body1>}/> 
                <CardPreview><Image src={diebetespredictionImg}/></CardPreview>
                
            </Card>
            <Card className={styles.card}>
                <CardHeader header={<Body1 className={styles.cardHeader}>Sales Data Analysis</Body1>}/> 
                <CardPreview><Image src={salesAnalysisImage}/></CardPreview>
                
            </Card>
        </div>
    
    </div>);
}
export default Projects;
