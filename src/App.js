import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { Paper, TextField,Button } from "@material-ui/core";
// import Navbar from "./navBar";
import BarChart from "./barChart"
const useStyles = makeStyles((theme) => ({

  Paper: {
    width: 400,
    margin: "0 auto",
    marginTop: 50,
    textAlign: "center",
    padding: 15,
    color: "#3F51B5"
  },
  input: {
    width: "95%",
    margin: 10
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Navbar />
      <Paper elevation={3} className={classes.Paper}>
        <h1>Login</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <TextField label="Email" className={classes.input}/>
          <TextField label="Password" autoComplete="current-password" type="password" className={classes.input}/>


          <Button variant="contained" color="primary" className={classes.input}>
            Login
          </Button>
        </form>
      </Paper> */}

      <BarChart />

    </div>
  );
}

export default App;
