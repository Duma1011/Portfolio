import React from 'react';
import { makeStyles,Text,Card, CardHeader,Body1 } from "@fluentui/react-components";
const useStyles=makeStyles({
    cardContainer:{
        display: "flex",
        flexDirection: "row",
        gap: "15px",
        alignItems: "center"
    }
});

const Contact=()=>{
    const styles=useStyles();
    return(
    <div>
        <Text align="center" >
            Contact me<br/>
            I am eager to leverage technical expertise and analytical thinking to build impactful solutions in a production environment, while building a strong software engineer foundation.
        </Text>

        <div className={styles.cardContainer}>
           <Card appearance="subtle">
            <CardHeader header={<Body1>Contact me for a quick chat on whatsapp or clall</Body1>}/>
            </Card>

           <Card appearance="subtle" style={{ border: 'none',borderWidth: 0,outline: 'none',boxShadow: 'none'}}>
              <CardHeader header={<Body1>Reach out to me via email</Body1>}/>
           </Card>
        </div>
    </div>
    );
}

export default Contact;