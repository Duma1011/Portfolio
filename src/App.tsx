import { useState }  from 'react';
import { makeStyles,Tab, TabList,SelectTabData} from "@fluentui/react-components";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from "./pages/Projects";
import Contact from './pages/Contact';

const useStyles=makeStyles({
  
  tabList:{
    alignItems:"flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "20px 20px",
    columnGap: "20px",
    color: "white",

  },
  mainPage:{
    backgroundColor: "#1b1b1e",
    minHeight: '100vh', 
    textColor: 'white',
  },
  tab:{
    color:"#8E9A98"
  }
});


const App=()=>{
  const [selectedTab,setSelectedTab]=useState("home");

  const handleTabSelection=(event: React.FormEvent<HTMLElement>, data: SelectTabData)=>
    {
      setSelectedTab(data.value as string);
    }
  const styles=useStyles();
  return(
  <div className={styles.mainPage}>
    <TabList className={styles.tabList} onTabSelect={handleTabSelection} selectedValue={selectedTab} disabled={false}>
      <Tab value="home" className={styles.tab}>Home</Tab>
      <Tab value="about" className={styles.tab}>Profile</Tab> 
      <Tab value="projects" className={styles.tab}>Projects</Tab>
      <Tab value="contact" className={styles.tab}>Contacts</Tab>
    </TabList>

    {selectedTab==="home" && <Home/>}
    {selectedTab==="about" && <Profile/>}
    {selectedTab==="projects" && <Projects/>}
    {selectedTab==="contact" && <Contact/>}
  </div>
  );
}

export default App;
