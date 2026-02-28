import { useState }  from 'react';
import {Button,SearchBox,Image, makeStyles, Text, TabList,SelectTabData,Card} from "@fluentui/react-components";
import profile from '../assets/profile.jpg';
import Profile from './Profile';
import Projects from "./Projects";
import Contact from './Contact';
import { EmojiLaughRegular,BuildingRegular,RibbonStarRegular,ContactCardRegular} from "@fluentui/react-icons";


const useStyles=makeStyles({
    container: {
    gap: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
    alignItems:"center",
    display: "flex",
    flexDirection: "column",
    gap: "25px",
    paddingLeft: "200px",
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
    fontSize:"40px", 
    fontWeight:"bold",
    //SpaddingLeft:"20px"
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
    justifyContent: "space-between",
    gap: "20px",
   },
   frontPicture:{
    width: "300px",
    height:"300px",
    borderRadius: "150px",
    boxShadow:"0 20px 40px rgba(0,0,0,0.4)",
  
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
   },
   tab:{
    color:"#8E9A98",
    fontWeight:"500",
    ":hover":{
    color:"#22c55e",
  }
}
   
});
const Home=()=>{
    const styles=useStyles();
    const [selectedTab,setSelectedTab]=useState("home");
    
      const handleAboutButton= () =>{
          setSelectedTab("about")
      }
    
      const handleProjectButton= () =>{
          setSelectedTab("projects")
      }
    
      const handleContactButton= () =>{
          setSelectedTab("contact")
      }

    return(
     <div className={styles.container}>
       {selectedTab === "home" &&  (  
      
               
           <div style={{"paddingLeft":"120px","flexDirection": "column","display": "flex","gap":"30px","alignItems": "center"}}>
            <Text >
                <span className={styles.IamLLabel}>Hi, I am Phumezile<br /></span>
                 
                 <span className={styles.cureerTitle}>Cloud and Software Engineer</span> 
                </Text>
           <Image
             src={profile}
             shadow={true}
             className={styles.frontPicture}
             shape="rounded"
           />

           <SearchBox size="large" style={{"backgroundColor":"white","borderRadius": "20px", "width": "400px" }}/>

           <TabList>
              <Button onClick={handleAboutButton} className={styles.tab} icon={<EmojiLaughRegular />}>Me</Button>
              <Button onClick={handleProjectButton} className={styles.tab} icon={<BuildingRegular />}>Projects </Button>
              <Button onClick={handleProjectButton} className={styles.tab} icon={<RibbonStarRegular />}>Skills</Button>
              <Button onClick={handleContactButton} className={styles.tab} icon={<ContactCardRegular />}>Contacts </Button>
           </TabList>

          </div>
        )}

  {selectedTab==="about" && <Profile/>}
  {selectedTab==="projects" && <Projects/>}
  {selectedTab==="contact" && <Contact/>}

</div>
   
    
);
}

export default Home;