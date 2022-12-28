import "./App.css";
import Grid from "@mui/material/Grid";
import Griditem from "@mui/material/Grid";
import EventImage from "./components/EventImage";
import Participents from "./components/Participents";

function App() {
  return (
    <div className="App">
      <Grid container spacing={4}>
        <Grid item>
          <EventImage />
        </Grid>
        <Grid item>
          <Participents />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
