import React from 'react';
import { Image, makeStyles, Text } from "@fluentui/react-components";
import photo from '../assets/1000034090.jpg';


const useStyles=makeStyles({
    container: {
    gap: "250px",
    display: "flex",
    flexDirection: "row",
    alignItems: "justify"
  }
});
const Home=()=>{
    const styles=useStyles();
    return(
    <div className={styles.container}>
    <div >
        <Text size={100} align="center" style={{ padding: '20px',color:"#8E9A98"}}>
            Hi, I am <br />
        </Text>

        <Text size={400} style={{ padding: '20px',fontSize:"20px",color:"#8E9A98" }}>
            Phumezile Tsitsa <br/>
        </Text>

        <Text style={{ padding: '20px', color:"#166534",fontSize:"30px", fontWeight:"bold" }}>
            Software Developer/Engineer <br/>
        </Text>
        
    </div>
    <Image
     src={photo}
     width={300}
     shadow={true}
     shape="circular"
    />
</div>
    
);
}

export default Home;