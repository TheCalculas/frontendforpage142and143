import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { display } from "@mui/system";
// import "font-awesome/css/font-awesome.min.css";
const rows = [
  {
    name: "Abhinav Jain",
    studentid: "2020UMT1335",
    participation: true,
  },
  {
    name: "Deepak Shukla",
    studentid: "2020UMT1335",
    participation: true,
  },
  {
    name: "Deepak Jain",
    studentid: "2020UMT1335",
    participation: false,
  },
];

export default function PartTable() {
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
              PARTICIPATION
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              style={{ padding: "1px", borderSpacing: "0px" }}
            >
              <TableCell style={{ border: 0, paddingBottom: "0px" }}>
                {row.name}
              </TableCell>
              <TableCell style={{ border: 0, paddingBottom: "0px" }}>
                {row.studentid}
              </TableCell>
              <TableCell
                style={{ border: 0, paddingBottom: "0px", paddingLeft: "3rem" }}
              >
                {row.participation ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{ color: "RGB(244, 180, 0)" }}
                    size="lg"
                  />
                ) : (
                  ""
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
