import * as React from "react";
import { useState, useEffect } from "react";

// import "font-awesome/css/font-awesome.min.css";
const rows = [
  {
    name: "Abhinav Jain",
    studentid: "2020UMT1335",
  },
  {
    name: "Deepak Shukla",
    studentid: "2020UMT1365",
  },
  {
    name: "Deepak Shukla",
    studentid: "2020UMT1368",
  },
  {
    name: "Deepak Shukla",
    studentid: "2020UMT1369",
  },
  {
    name: "Deepak Shukla",
    studentid: "2020UMT1370",
  },
];

export default function SelectWinner() {
  const [first, setFirst] = useState("");

  const [second, setSecond] = useState("");

  const [third, setThird] = useState("");

  const [array, setArray] = useState(initial);

  function filterArray() {
    const temp = rows.filter((item) => {
      return (
        item.studentid !== first.studentid &&
        item.studentid !== second.studentid &&
        item.studentid !== third.studentid
      );
    });

    setArray(temp);
  }

  function initial() {
    console.log("initial");

    const temp = rows.filter(
      (item) =>
        item.studentid !== first.studentid &&
        item.studentid !== second.studentid &&
        item.studentid !== third.studentid
    );

    console.log(temp);

    return temp;
  }
  useEffect(() => {
    setArray(initial);
  }, [first, second, third]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px 0",
      }}
    >
      <table
        style={{
          overflow: "auto",
          fontSize: "14px",
          width: "95%",
          height: "70%",
        }}
      >
        <tr
          style={{
            borderBottom: "1px solid RGB(245, 217, 161)",
            borderWidth: "50%",
            // marginBottom: "10px",
            textAlign: "left",
          }}
        >
          <th style={{ fontWeight: "bold", border: 0 }}>NAME</th>
          <th style={{ fontWeight: "bold", border: 0 }}>STUDENT ID</th>
          <th style={{ fontWeight: "bold", border: 0 }}>RANK</th>
        </tr>

        {first !== "" && (
          <tr
            style={{
              backgroundColor: "RGB(219, 229, 251)",
              borderCollapse: "inherit",
              borderSpacing: "0 1.5em",
            }}
          >
            <td style={{ margin: "10px" }}>{first.name}</td>
            <td>{first.studentid}</td>
            <td>
              <button
                style={{
                  color: "white",
                  borderRadius: "100%",
                  borderWidth: "100px",
                  border: "none",
                  marginRight: "5px",
                  padding: "5px 11px",
                  backgroundColor: "RGB(66, 133, 244)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setFirst(first);
                  // console.log(third);
                }}
              >
                1
              </button>
              <button
                style={{
                  color: "RGB(168, 219, 195)",
                  borderRadius: "100%",
                  padding: "5px 11px",
                  border: "none",
                  marginRight: "5px",
                  backgroundColor: "RGB(207, 235, 222)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSecond(first);
                  setFirst("");
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
                  padding: "5px 11px",
                  backgroundColor: "RGB(253, 239, 203)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setThird(first);
                  setFirst("");
                  // console.log(third);
                }}
              >
                3
              </button>
            </td>
          </tr>
        )}
        {second !== "" && (
          <tr style={{ backgroundColor: "RGB(212, 234, 222)" }}>
            <td>{second.name}</td>
            <td>{second.studentid}</td>
            <td>
              <button
                style={{
                  color: "RGB(158, 198, 228)",
                  borderRadius: "100%",
                  borderWidth: "100px",
                  border: "none",
                  marginRight: "5px",
                  padding: "5px 11px",
                  backgroundColor: "RGB(181, 213, 226)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setFirst(second);
                  setSecond("");
                  // console.log(third);
                }}
              >
                1
              </button>
              <button
                style={{
                  color: "white",
                  borderRadius: "100%",
                  padding: "5px 11px",
                  border: "none",
                  marginRight: "5px",
                  backgroundColor: "RGB(15, 157, 88)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSecond(second);
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
                  padding: "5px 11px",
                  backgroundColor: "RGB(253, 239, 203)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setThird(second);
                  setSecond("");
                  // console.log(third);
                }}
              >
                3
              </button>
            </td>
          </tr>
        )}
        {third !== "" && (
          <tr style={{ backgroundColor: "RGB(251, 229, 169)" }}>
            <td>{third.name}</td>
            <td>{third.studentid}</td>
            <td>
              <button
                style={{
                  color: "RGB(158, 198, 228)",
                  borderRadius: "100%",
                  borderWidth: "100px",
                  border: "none",
                  marginRight: "5px",
                  padding: "5px 11px",
                  backgroundColor: "RGB(181, 213, 226)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setFirst(third);
                  setThird("");
                  // console.log(third);
                }}
              >
                1
              </button>
              <button
                style={{
                  color: "RGB(168, 219, 195)",
                  borderRadius: "100%",
                  padding: "5px 11px",
                  border: "none",
                  marginRight: "5px",
                  backgroundColor: "RGB(207, 235, 222)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSecond(third);
                  setThird("");
                  // console.log(third);
                }}
              >
                2
              </button>
              <button
                style={{
                  color: "white",
                  borderRadius: "50%",
                  border: "none",
                  padding: "5px 11px",
                  backgroundColor: "RGB(244, 180, 0)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setThird(third);
                  // console.log(third);
                }}
              >
                3
              </button>
            </td>
          </tr>
        )}
        {array.map((row) => (
          <tr>
            <td>{row.name}</td>
            <td>{row.studentid}</td>
            <td
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "space-around",
              }}
            >
              <button
                style={{
                  color: "RGB(158, 198, 228)",
                  borderRadius: "50%",
                  border: "none",
                  padding: "5px 11px",
                  backgroundColor: "RGB(181, 213, 226)",
                  cursor: "pointer",
                  marginRight: "5px",
                }}
                onClick={() => {
                  setFirst(row);
                  // console.log(third);
                }}
              >
                1
              </button>
              <button
                style={{
                  color: "RGB(168, 219, 195)",
                  borderRadius: "100%",
                  padding: "5px 11px",
                  border: "none",
                  marginRight: "5px",
                  backgroundColor: "RGB(207, 235, 222)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setSecond(row);
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
                  padding: "5px 11px",
                  backgroundColor: "RGB(253, 239, 203)",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setThird(row);
                  // console.log(third);
                }}
              >
                3
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
