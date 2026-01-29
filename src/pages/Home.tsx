import React from 'react';
import { Link,Image, makeStyles, Text, Card,Divider,Button } from "@fluentui/react-components";
import photo from '../assets/1000034090.jpg';
import linkedInImg from '../assets/linkedin.png';
import githubImg from '../assets/github.png';


const useStyles=makeStyles({
    container: {
    gap: "150px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: "40px",
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
    gap: "50px",
    paddingLeft: "20px",
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
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "30px",
   },
   frontPicture:{
    width: "300px",
    shape: "circular"
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
      outlineButton: {
       color:"#8E9A98"
     }

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
                 <span className={styles.cureerTitle}>Software Developer/Engineer</span> 
                </Text>
           </Card> 

           <Card className={styles.socialAccountCard}>
              <Link href=" https://www.linkedin.com/in/tsitsap11"><Image src={linkedInImg} className={styles.loggo}/></Link>
              <Link href="https://github.com/Duma1011"><Image src={githubImg} className={styles.loggo}/></Link>
           </Card>
        </div>

        <Card className={styles.buttonContainer}>
          <Button as="a"href="/resume.pdf" download className={styles.downloadButton}>Download CV</Button>
        </Card>
         
        <Card appearance="subtle" className={styles.card}>
            <div className={styles.cardContent}>
                <Text align="center" className={styles.cardLabel}>
                   <span className={styles.label}>1.5+ </span> <br/>years experience 
                </Text>

                <Divider vertical  className={styles.divider}/>
                <Text align="center" className={styles.cardLabel}>
                    <span className={styles.label}>5+ </span> <br/> Personal Projects
                </Text>
                 <Divider vertical  className={styles.divider}/>
                 <Text align="center" className={styles.cardLabel}>
                    <span className={styles.label}>Junior </span> <br/>
                    Cureer Level
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
     src={photo}
     shadow={true}
     className={styles.frontPicture}
    />
</div>
    
);
}

export default Home;