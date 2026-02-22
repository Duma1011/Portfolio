import React from 'react';
import { tokens,Link,Image, makeStyles, Text, Card,Divider,Button } from "@fluentui/react-components";
import photo from '../assets/1000034090.jpg';
import linkedInImg from '../assets/linkedin.png';
import githubImg from '../assets/github.png';
import profile from '../assets/profile.jpg';


const useStyles=makeStyles({
    container: {
    gap: "0px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "100px",
  },

  cardContent:{
    flexDirection: "row",
    display: "flex",
    height: "fit-content",
    width: "fit-content",
    gap: "20px",
    padding: "10px",
   // backgroundColor: "#414A4C",
    
  },
  card:{
    '::after': {
      borderTopColor: 'transparent !important',
      borderRightColor: 'transparent !important',
      borderBottomColor: 'transparent !important',
      borderLeftColor: 'transparent !important',
      color:"#8E9A98"
    }
  },
  cardContainer:{
    padding: "20px",
  },
  personalInformationCard:{
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    paddingLeft: "30px",
    '::after': {
      borderTopColor: 'transparent !important',
      borderRightColor: 'transparent !important',
      borderBottomColor: 'transparent !important',
      borderLeftColor: 'transparent !important',
      color:"#8E9A98"
    }
  },
  socialAccountCard:{
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    '::after': {
      borderTopColor: 'transparent !important',
      borderRightColor: 'transparent !important',
      borderBottomColor: 'transparent !important',
      borderLeftColor: 'transparent !important',
      color:"#8E9A98"
    }
  },
  loggo:{
    height: "35px",
    width: "35px",
  }, 
    divider:{
        height: '40px',
        color: "#8E9A98"
   },
   cardLabel:{
    color:"#F0F8FF",
    fontSize: "16px",
   },
   cureerTitle:{
    color:"#00693E",
    fontSize:"30px", 
    fontWeight:"bold"
   },
   nameTitle:{
     fontSize:"20px"
    ,color:"#F0F8FF"
   },
   IamLLabel:{
    color:"#8E9A98"
   }, 

   titleSocialContainer:{
    display: "flex",
    alignItems: "flex-start",   
    flexDirection: "column",
    paddingLeft:"10px",
    justifyContent: "space-between",
    gap: "10px",
   },
   frontPicture:{
    width: "300px",
    height:"300px",
    borderRadius: "150px",
    boxShadow:"0 20px 40px rgba(0,0,0,0.4)"
  
   },
   label:{
    color:"#166534",
    fontSize: "18px",
    fontWeight: "bold"
   },
   buttonContainer:{
    display:"flex",
    flexDirection:"row",
    '::after': {
      borderTopColor: 'transparent !important',
      borderRightColor: 'transparent !important',
      borderBottomColor: 'transparent !important',
      borderLeftColor: 'transparent !important',
      color:"#8E9A98"
    }
   },
   downloadButton:{
      color:"white",
      backgroundColor:"#166534",
      width:"110px",
      height: "30px",  
      ":hover": { backgroundColor: "#14532d", color: "white" },
      ":active": { backgroundColor: "#0f3d22", color: "white" },
      ":visited": { color: "white" },
      
   }
});
const Home=()=>{
    const styles=useStyles();
    return(
    <div className={styles.container}>
    <Card className={styles.personalInformationCard}>
       <div className={styles.titleSocialContainer}> 
           <Card appearance="subtle" className={styles.card}>     
                <Text >
                <span className={styles.IamLLabel}>Hi, I am <br /></span>
                 <span className={styles.nameTitle}>Phumezile Tsitsa <br/></span>
                 <span className={styles.cureerTitle}>Cloud and Software Engineer</span> 
                </Text>
           </Card> 

           <Card className={styles.socialAccountCard}>
              <Link href=" https://www.linkedin.com/in/tsitsap11"><Image src={linkedInImg} className={styles.loggo}/></Link>
              <Link href="https://github.com/Duma1011"><Image src={githubImg} className={styles.loggo}/></Link>
           </Card>

           
       </div>
         <Card className={styles.card} style={{padding:"20px"}}>
           <Button appearance="primary" as="a"href="/resume.pdf" download className={styles.downloadButton} size="large">Download CV</Button>
         </Card>
        <Card appearance="subtle" className={styles.card}>
            <div className={styles.cardContent}>
                <Text align="center" className={styles.cardLabel}>
                   <span className={styles.label}>1.5 years </span> <br/>experience 
                </Text>

                <Divider vertical  className={styles.divider}/>
                <Text align="center" className={styles.cardLabel}>
                    <span className={styles.label}>5+ </span> <br/> Personal Projects
                </Text>
                 <Divider vertical  className={styles.divider}/>
                 <Text align="center" className={styles.cardLabel}>
                    <span className={styles.label}>AI & Cloud Developer</span> <br/>
                    Career Level
                 </Text>
                 <Divider vertical  className={styles.divider}/>
                 <Text align="center" className={styles.cardLabel}>
                    <span className={styles.label}>6 </span> <br/>
                    Azure Cirtified
                 </Text>

            </div>
        </Card>
    </Card>

    <Image
     src={profile}
     shadow={true}
     className={styles.frontPicture}
     shape="rounded"
    />
</div>
    
);
}

export default Home;