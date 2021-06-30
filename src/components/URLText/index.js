import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      width: "50%",
    },
  },
}));

const URLText = (props) => {
  const classes = useStyles();
  const { handleChange, value, handleDownload, downloadStatus } = props;

  const handleClick = () => {
    props.handleClick();
  };
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Activation URL"
          rows={4}
          multiline
          onChange={handleChange}
          value={value}
          variant="outlined"
        />
        <div>
          <Button
            variant="contained"
            color="primary"
            disabled={value ? false : true}
            onClick={handleClick}
            style={{
              margin: "10px",
            }}
          >
            Generate QR Code
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleDownload}
            disabled={!downloadStatus}
            style={{
              margin: "10px",
            }}
          >
            Download QR Code
          </Button>
        </div>
      </div>
    </form>
  );
};

export default URLText;
