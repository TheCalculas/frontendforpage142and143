import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
// import "font-awesome/css/font-awesome.min.css";
const rows = [
  {
    name: "Abhinav Jain",
    studentid: "2020UMT1335",
    score: 12,
    rank: 1,
  },
  {
    name: "Deepak Shukla",
    studentid: "2020UMT1335",
    score: 22,
    rank: 2,
  },
  {
    name: "Deepak Jain",
    studentid: "2020UMT1335",
    score: 42,
    rank: 3,
  },
];

export default function SelectWinner() {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  // create an onclick function

  return (
    <TableContainer style={{ width: "95%" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow
            style={{
              borderBottom: "1pt solid RGB(245, 217, 161)",
              borderWidth: "30%",
            }}
          >
            <TableCell style={{ fontWeight: "bold", border: 0 }}>
              NAME
            </TableCell>
            <TableCell style={{ fontWeight: "bold", border: 0 }}>
              STUDENT ID
            </TableCell>
            <TableCell style={{ fontWeight: "bold", border: 0 }}>
              SCORE
            </TableCell>
            <TableCell
              style={{ fontWeight: "bold", border: 0, paddingLeft: "3rem" }}
            >
              RANK
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              style={{
                padding: "1px",
                borderSpacing: "0px",
              }}
            >
              <TableCell style={{ border: 0, paddingBottom: "0px" }}>
                {row.name}
              </TableCell>
              <TableCell style={{ border: 0, paddingBottom: "0px" }}>
                {row.studentid}
              </TableCell>
              <TableCell
                style={{ border: 0, paddingBottom: "0px", paddingLeft: "2rem" }}
              >
                {row.score}
              </TableCell>
              <TableCell
                style={{
                  border: 0,
                  paddingBottom: "0px",
                  paddingLeft: "2rem",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <button
                  style={{
                    color: "RGB(158, 198, 228)",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "RGB(181, 213, 226)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setFirst(row.studentid);
                    // console.log(third);
                  }}
                >
                  1
                </button>
                <button
                  style={{
                    color: "RGB(168, 219, 195)",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "RGB(207, 235, 222)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSecond(row.studentid);
                    // console.log(third);
                  }}
                >
                  2
                </button>
                <button
                  style={{
                    color: "RGB(251, 228, 163)",
                    borderRadius: "50%",
                    border: "none",
                    backgroundColor: "RGB(253, 239, 203)",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setThird(row.studentid);
                    // console.log(third);
                  }}
                >
                  3
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
