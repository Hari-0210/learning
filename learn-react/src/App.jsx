import Navbar from "./components/Navbar";
import TicTacToe from "./screen/TicTacToe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { styled } from "@mui/system";
import ProgressBar from "./screen/ProgressBar";
import StarRating from "./screen/StarRating";
import ReactFlowComp from "./screen/ReactFlow";
import FileExplorer from "./components/FileExplorer";
import TrafficLight from "./screen/traffic";
import Debounce from "./screen/Debounce";
import InfiniteScroll from "./components/InfiniteScroll";

const StyledContent = styled("main")(() => ({
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  overflow: "auto",
  backgroundColor: "#F5F8FF",
  height: "100vh",
}));
function App() {
  return (
    <Router>
      <Navbar />
      <StyledContent>
        <div style={{ padding: "64px 0px 0px 64px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tictactoe" element={<TicTacToe />} />
            <Route path="/progress" element={<ProgressBar />} />
            <Route path="/starrating" element={<StarRating />} />
            <Route path="/reactflow" element={<ReactFlowComp />} />
            <Route path="/fileexplorer" element={<FileExplorer />} />
            <Route path="/traffic" element={<TrafficLight />} />
            <Route path="/debounce" element={<Debounce />} />
            <Route path="/infinitescroll" element={<InfiniteScroll />} />
            {/* <Route path="/querybuilder" element={<QueryBuilder />} /> */}
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </StyledContent>
    </Router>
  );
}

function Home() {
  return <div>Home Page1</div>;
}

export default App;
