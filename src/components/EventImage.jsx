import React from "react";
import { useState } from "react";
// import { Box } from "@mui/system";
import { Box } from "@mui/material";
import { FormControlLabel } from "@mui/material";
import { Switch } from "@mui/material";
import { borderRadius } from "@mui/system";
function EventImage() {
  const [date, setdate] = useState("7 Nov 2021");
  const [time, settime] = useState("10:00 AM");
  const [venue, setvenue] = useState("Vltc 201");
  const [mode, setmode] = useState("Offline");
  const [vfor, setvfor] = useState("All");

  return (
    <div>
      <Box
        style={{
          display: "Flex",
          flexDirection: "column",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src="https://static.theceomagazine.net/wp-content/uploads/2022/10/25152528/ANZ1122_Cover-Thumbnail-300-x-391px.jpg"
          alt=""
          style={{ width: "56%", borderRadius: "10px" }}
        />
        <p style={{ color: " RGB(247, 201, 71)", marginTop: 10, fontSize: 18 }}>
          Adobe Photoshop Quiz
        </p>
        <div
          style={{
            display: "flex",
            width: "55%",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "grey" }}>
            <p>DATE</p>
            <p>TIME</p>
            <p>VENUE</p>
            <p>MODE</p>
            <p>FOR</p>
          </div>
          <div>
            <p>{date}</p>
            <p>{time}</p>
            <p>{venue}</p>
            <p>{mode}</p>
            <p>{vfor}</p>
          </div>
        </div>

        <FormControlLabel
          style={{ color: "rgb(168, 167, 167)" }}
          value="Accepting Registrations"
          control={<Switch color="primary" />}
          label={
            <span style={{ fontSize: "0.8rem" }}>Accepting Registrations</span>
          }
          labelPlacement="start"
        />
      </Box>
    </div>
  );
}

export default EventImage;
