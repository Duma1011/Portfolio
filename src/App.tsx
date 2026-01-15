import { useState }  from 'react';
import { makeStyles,Tab, TabList,SelectTabData} from "@fluentui/react-components";
import Home from './pages/Home';
import Profile from './pages/Profile';
import Projects from "./pages/Projects";
import Contact from './pages/Contact';

const useStyles=makeStyles({
  
  page:{
    alignItems:"flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "20px 20px",
    columnGap: "20px",
  }}
);


const App=()=>{
  const [selectedTab,setSelectedTab]=useState("home");

  const handleTabSelection=(event: React.FormEvent<HTMLElement>, data: SelectTabData)=>
    {
      setSelectedTab(data.value as string);
    }
  const styles=useStyles();
  return(
  <div>
    <TabList className={styles.page} onTabSelect={handleTabSelection} selectedValue={selectedTab} disabled={false}>
      <Tab value="home" >Home</Tab>
      <Tab value="about" >Profile</Tab> 
      <Tab value="projects">Projects</Tab>
      <Tab value="contact">Contacts</Tab>
    </TabList>

    {selectedTab==="home" && <Home/>}
    {selectedTab==="about" && <Profile/>}
    {selectedTab==="projects" && <Projects/>}
    {selectedTab==="contact" && <Contact/>}
  </div>
  );
}

export default App;
