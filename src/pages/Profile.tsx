import { useState, useRef } from "react";
import {TabList,Tab,makeStyles,Text, Card,CardHeader,Image,Divider} from "@fluentui/react-components";
import experienceImg from '../assets/experience.jpg';
import agileImg from '../assets/Agile.jpg';

import workImg from '../assets/work.jpeg'
const useStyles = makeStyles({
  container: {
    gap: "25px",
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    padding: "20px",
  },

  card: {
    width: "900px",
    height: "320px",
    display:"flex",
    flexDirection: "row",
    gap: "16px",
    alignItems: "flex-start",
 
    '::after': {
      borderTopColor: 'transparent !important',
      borderRightColor: 'transparent !important',
      borderBottomColor: 'transparent !important',
      borderLeftColor: 'transparent !important',
      color:"#54626F"
    },
    borderRadius: "16px",
    
  },
  cardHeader: {
    fontSize: "20px",
    fontWeight: "bold",
    color:"#F0F8FF"
  },
  text:{
    color:"#F0F8FF",
    },

    titleText:{
      color:"#8E9A98",
      fontWeight: "bold",
      fontSize: "30px",
    },
    pageTitle:{
        fontSize: "40px",
        fontWeight: "bold",
        color:"#8E9A98",
        textAlign: "center"
    },

    professionDescription:{
        // padding: '20px',
        maxWidth: '1000px',
        color:"#8E9A98"
    },
    image: {
    width: "400px",
    height: "300px",
    objectFit: "cover"}
    ,
  cardContentContainer:
  {
    width:"500px"
  },
  tabListButton:{
    color:"#8E9A98",
    paddingLeft: "10px",
    paddingRight: "10px",
    fontWeight:"500",
    ":hover":{
    color:"#22c55e"
  }}
});


const Profile=()=>{
    const styles = useStyles();
    const [selectedTab, setSelectedTab] = useState("about");

     // refs for each section
    const aboutRef = useRef<HTMLDivElement>(null);
    const experienceRef = useRef<HTMLDivElement>(null);
    const educationRef = useRef<HTMLDivElement>(null);
    const trainingRef=useRef<HTMLDivElement>(null);

    const scrollToSection = (ref: React.RefObject<HTMLDivElement| null>, tab: string) => {
    setSelectedTab(tab);
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

    return(
    <div style={{flexDirection: "row",display: "flex"}}>
      <div>
        <TabList style={{ "rowGap": "20px",}} vertical>
        <Tab value="about" className={styles.tabListButton} onClick={() => scrollToSection(aboutRef, "education")} >About</Tab>
        <Tab value="education" className={styles.tabListButton} onClick={() => scrollToSection(educationRef, "education")}>Education</Tab>
        <Tab value="workExperience" className={styles.tabListButton}  onClick={() => scrollToSection(experienceRef, "experience")}>Experince</Tab>
        <Tab value="training" className={styles.tabListButton} onClick={() => scrollToSection(trainingRef, "education")}>Training</Tab>
      </TabList>
      </div>

      <div>

      {/* About Section */}
      <div className={styles.container} ref={aboutRef}>
        <Text className={styles.pageTitle} >About Me</Text>
        <Text className={styles.titleText} >A bit about me</Text>
        <Text className={styles.professionDescription}>
            I’m a Cloud and Software Engineer focused on building reliable, well-structured systems that solve real problems.
            My background in mathematics and computer science has shaped how I approach software, I care about clarity, correctness, and long-term maintainability, not just making things work.
            I enjoy working across the stack, particularly where cloud architecture, backend services, and automation intersect. I’m especially interested in systems that need to scale, handle failure gracefully, and operate in real-world constraints.
        </Text>
      
        <div style={{flexDirection: "row",display: "flex"}}>
            <Card className={styles.card} style={{backgroundColor: "#414A4C",}}>
            <div className={styles.cardContentContainer}>
            <CardHeader header={<Text>How I Approach Software</Text>} className={styles.cardHeader}/>
            <Text className={styles.text} >When I work on a project, I focus on:</Text>
            <ul className={styles.text} >
              <li>
                  Understanding the problem before the solution.
              </li>

              <li>
                Choosing tools based on trade-offs, not trends.
              </li>
              <li>
                Designing systems that are simple to reason about.
              </li>
              <li>
                Writing code that someone else can read and extend.
              </li>
            </ul>
           <Text className={styles.text} > I value clean boundaries, clear responsibilities, and predictable behaviour in systems. If something fails, I want to know why, and how it can recover safely.</Text>
            </div>
          
            <Image src={agileImg} className={styles.image}/>
          </Card>
         
        </div>
          

          <Card className={styles.card} style={{backgroundColor: "#414A4C",}}>
           <div className={styles.cardContentContainer}>
            <CardHeader header={<Text>What I’m Working On</Text>} className={styles.cardHeader}/>
           
           <Text className={styles.text} >Right now, I’m focused on:</Text> 
            <ul className={styles.text} >
                <li>Building cloud-native applications on Azure.</li>
                <li>Improving my understanding of distributed systems.</li>
                <li>Designing APIs and services that are secure and resilient.</li>
                <li>Refining how I communicate technical ideas through documentation and architecture diagrams.</li>
                <li>
                  Refining my problem solving approach and developing business acumen.
                </li>
                <li>
                   Exploring with different .NET frameworks.
                  </li>
               </ul>
                <Text className={styles.text} >I enjoy turning complex requirements into practical, working solutions.</Text>
           </div> 
            <Image src={experienceImg} className={styles. image}/>
          </Card>

          <Card className={styles.card} style={{backgroundColor: "#414A4C",}}>
          <div  className={styles.cardContentContainer}>
            <CardHeader header={<Text> How I Like to Work</Text>}className={styles.cardHeader}/>
             <Text className={styles.text} >I work best in environments where:</Text> 
            <ul className={styles.text} >
              <li>Collaboration and feedback are encouraged.</li>
              <li>Quality matters as much as delivery.</li>
              <li>Learning is continuous.</li>
              <li>Decisions are discussed openly.</li>
            </ul>
            
            </div>
            <Image src={workImg} className={styles.image}/>
          </Card>
          <Divider />
      </div>

      {/* Education Section */}
      <div ref={educationRef}>
        <Text>Education</Text>
        <Card className={styles.card} style={{backgroundColor: "#414A4C",}}>
           <div className={styles.cardContentContainer}>
            <CardHeader header={<Text>BSc Mathematics and Computer Sciences-UCT</Text>} className={styles.cardHeader}/>
           </div> 
         
        </Card>

        <Card className={styles.card} style={{backgroundColor: "#414A4C",}}>
           <div className={styles.cardContentContainer}>
            <CardHeader header={<Text>Matric-Bardale Secondary</Text>} className={styles.cardHeader}/>
           </div> 
         
        </Card>

        <Divider />
      </div>

      {/* Training Section */}
       <div ref={trainingRef}>
          <Text> Training</Text>
          <Divider />
       </div>

       {/* Work Experience Section */}
        <div ref={experienceRef}>
          <Text>Experience</Text>
          <Divider />
        </div>
      </div>
    </div> 
    );
}

export default Profile;