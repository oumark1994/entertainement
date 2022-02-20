import Header from "./components/Header/Header";
import './App.css'
import SimpleBottomNavigation from "./components/MainNav";
import { BrowserRouter,Route,Routes} from "react-router-dom";
import { Container } from "@material-ui/core";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";
import Series from "./pages/Series/Series";
import Search from "./pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
    <Header></Header>
     <div className="app">
       <Container>
         <Routes>
         <Route path="/" exact element={<Trending/>}  />
         <Route path="/movies" element={<Movies/>}/>
         <Route path="/series" element={<Series/>}/>
         <Route path="/search" element={<Search/>}/>
         </Routes>
       </Container>
     </div>
     <SimpleBottomNavigation/> 
    </BrowserRouter>
   
  );
} 

export default App;
