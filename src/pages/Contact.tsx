import React from 'react';
import { makeStyles,Text,Card} from "@fluentui/react-components";
import { PersonCallRegular, MailRegular} from '@fluentui/react-icons';

const useStyles = makeStyles(
{
  container: {
    gap: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  cardContainer:{
    display: "flex",
    flexDirection: "row", // default, but explicit is good
    gap: "15px",
    alignItems: "center",
    padding: "10px",
  },
  card: {
    width: "300px",
    maxWidth: "100%",
    height: "250px",
    padding: "10px",
    alignItems: "center",
    '::after': {
      borderTopColor: 'transparent !important',
      borderRightColor: 'transparent !important',
      borderBottomColor: 'transparent !important',
      borderLeftColor: 'transparent !important',
     },
     backgroundColor: "#414A4C",
    },
    cardIconsContainer:{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
  
    },
    phoneIcon: {
        fontSize: "80px",
        alignContent: "center",
    },

    mailIcon: {
        fontSize: "80px",
        alignContent: "center",
    },

    paragraph:{
        color:"#F0F8FF"
    },
    title:{
        fontSize: "30px",
        fontWeight: "bold",
        color:"#F0F8FF"
    },
    text:{
        fontSize: "16px",
        color:"#F0F8FF"
    }
});

const Contact=()=>{
    const styles=useStyles();
    return(
    <div className={styles.container}>
        <Text align="center" className={styles.title} >
            Contact me<br/>
        </Text> 

        <Text align="center" className={styles.paragraph} >
           Our journey together starts here. Whether you have questions, ideas, or just want to say hello, I'm all ears.    
        </Text>  

        <Text align="center" className={styles.paragraph} > 
           I am eager to leverage technical expertise and analytical thinking to build impactful solutions in a production environment.
        </Text>

        <div className={styles.cardContainer}>
           <Card appearance="subtle" className={styles.card}>
            <div className={styles.cardIconsContainer}>
                <PersonCallRegular className={styles.phoneIcon}/>
            </div>
              
              <Text align="center" className={styles.text}> Call or WhatsApp </Text>
              <Text align="center" className={styles.text}>0634151822</Text>
            </Card>

           <Card appearance="subtle"className={styles.card}>
              <MailRegular className={styles.mailIcon} />
              <Text align="center" className={styles.text}> Email me </Text>
              <Text align="center" className={styles.text}>tsitsap11@gmail.com</Text>
           </Card>
        </div>
    </div>
    );
}

export default Contact;