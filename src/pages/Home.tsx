import { useState }  from 'react';
import {Button,SearchBox,Image, makeStyles, Text, TabList,SelectTabData,Card} from "@fluentui/react-components";
import profile from '../assets/profile.jpg';
import Profile from './Profile';
import Projects from "./Projects";
import Contact from './Contact';
import { EmojiLaughRegular,BuildingRegular,RibbonStarRegular,ContactCardRegular} from "@fluentui/react-icons";


const useStyles=makeStyles({
    mainPage: {
    gap: "10px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
   careerTitle:{
    color:"#00693E",
    fontSize:"40px", 
    fontWeight:"bold",
   },

   IamLLabel:{
    color:"#8E9A98"
   }, 
   frontPicture:{
    width: "300px",
    height:"300px",
    borderRadius: "150px",
    boxShadow:"0 20px 40px rgba(0,0,0,0.4)",
  
   },
   tabListButton:{
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
     <div className={styles. mainPage}>
       {selectedTab === "home" &&  (     
        <div style={{"paddingLeft":"120px","flexDirection": "column","display": "flex","gap":"30px","alignItems": "center"}}>
            <Text >
                <span className={styles.IamLLabel}>Hi, I am Phumezile<br /></span>
                 
                 <span className={styles.careerTitle}>Cloud and Software Engineer</span> 
                </Text>
           <Image
             src={profile}
             shadow={true}
             className={styles.frontPicture}
             shape="rounded"
           />

           <SearchBox size="large" style={{"backgroundColor":"white","borderRadius": "20px", "width": "400px" }}/>

           <TabList>
              <Button onClick={handleAboutButton} className={styles.tabListButton} icon={<EmojiLaughRegular />}>Me</Button>
              <Button onClick={handleProjectButton} className={styles.tabListButton} icon={<BuildingRegular />}>Projects </Button>
              <Button onClick={handleProjectButton} className={styles.tabListButton} icon={<RibbonStarRegular />}>Skills</Button>
              <Button onClick={handleContactButton} className={styles.tabListButton} icon={<ContactCardRegular />}>Contacts </Button>
        </TabList>

      </div>)
    }

  {selectedTab==="about" && <Profile/>}
  {selectedTab==="projects" && <Projects/>}
  {selectedTab==="contact" && <Contact/>}
</div>);}

export default Home;