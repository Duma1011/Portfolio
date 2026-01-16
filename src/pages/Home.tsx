import React from 'react';
import { Image, makeStyles, Text } from "@fluentui/react-components";
import photo from '../assets/1000034090.jpg';


const useStyles=makeStyles({
    container: {
    gap: "400px",
    display: "flex",
    flexDirection: "row",
    alignItems: "justify",
  }
});
const Home=()=>{
    const styles=useStyles();
    return(
    <div className={styles.container}>
    <div >
        <Text size={100} align="center" style={{ padding: '20px'}}>
            Hi, I am <br />
        </Text>

        <Text size={400} style={{ padding: '20px' }}>
            Phumezile Tsitsa <br/>
        </Text>

        <Text style={{ padding: '20px' }}>
            Software Developer/Engineer <br/>
        </Text>
        
    </div>
    <Image
     src={photo}
     width={300}
     shadow
    />
</div>
    
);
}

export default Home;