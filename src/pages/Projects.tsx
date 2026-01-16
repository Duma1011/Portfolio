import React from 'react';
import {Card,CardHeader, makeStyles,Body1,Image } from "@fluentui/react-components";
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
}

)
const Projects=()=>{
    const styles = useStyles();
    return(
    <div>
        <div className={styles.cardContainer}>
            <Card className={styles.card}>
                <CardHeader header={<Body1>SQL Assignments Automation
                    <Image src={sqlAutomationImg}/>
                </Body1>}/> 
            </Card>
            <Card className={styles.card}>
                 <CardHeader header={<Body1>AI-WEB</Body1>}/> 
                <Image src={aiWebImg}/>
            </Card>
        </div>

        <div className={styles.cardContainer}>
            <Card className={styles.card}>DIABETES PREDICTION SYSTEM
                <Image src={diebetespredictionImg}/>
            </Card>
            <Card className={styles.card}>Sales Data Analysis
                <Image src={salesAnalysisImage}/>
            </Card>
        </div>
    
    </div>);
}
export default Projects;
