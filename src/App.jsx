import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostDetail from "./components/PostDetail";
import PostList from "./components/PostList";

const App = () => {
  return(
    <Router>
       <div className="bg-gray-100">
         <Routes>
           <Route path="/" element={<PostList />} />
           <Route path="/post/:id" element={<PostDetail />} />
         </Routes>       
       </div>
    </Router>
  )
}

export default App;