import React from 'react';
import { Image,makeStyles,Text,Card, CardHeader,Body1 } from "@fluentui/react-components";
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
});

const Contact=()=>{
    const styles=useStyles();
    return(
    <div className={styles.container}>
        <Text align="center" >
            Contact me<br/>
        </Text> 

        <Text align="center" >
           Our journey together starts here. Whether you have questions, ideas, or just want to say hello, I'm all ears.    
        </Text>  

        <Text align="center" > 
           I am eager to leverage technical expertise and analytical thinking to build impactful solutions in a production environment.
        </Text>

        <div className={styles.cardContainer}>
           <Card appearance="subtle" className={styles.card}>
            <div className={styles.cardIconsContainer}>
                <PersonCallRegular className={styles.phoneIcon}/>
            </div>
              
              <Text align="center"> Call or WhatsApp </Text>
              <Text align="center">0634151822</Text>
            </Card>

           <Card appearance="subtle"className={styles.card}>
              <MailRegular className={styles.mailIcon} />
              <Text align="center"> Email me </Text>
              <Text align="center">tsitsap11@gmail.com</Text>
           </Card>
        </div>
    </div>
    );
}

export default Contact;