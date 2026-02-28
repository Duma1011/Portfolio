import { Button,makeStyles} from "@fluentui/react-components";
import Home from './pages/Home';

const useStyles=makeStyles({
  mainPage:{
    backgroundColor:"#1b1b1e",
    minHeight: '100vh', 
    backgroundImage: "url('/background.jpg')",
    width: "100%",
    alignItems: "center",
    padding:"24px 60px",
  },
  
});


const App=()=>{
  const styles=useStyles();
  return(
  <div className={styles.mainPage}>
    <Home/>
  </div>
  );
}

export default App;
