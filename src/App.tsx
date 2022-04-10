import React, { useState, useEffect } from "react";
// import { Container, Typography } from "@material-ui/core";

import { StyledEngineProvider } from "@mui/material/styles";
import AppBarComponent from "./component/appBar.component";
import HeaderComponent from "./component/header.component";
import NoteComponent from "./component/note.component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

export default function App() {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [todo, setTodo] = useState<
    Array<{
      title: string;
      desc: string;
      date: string;
    }>
  >([]);

  useEffect(() => {
    console.log("list: " + todo);
  }, [todo]);

  function createNote(dates: Date) {
    const h = dates.getHours();
    const m = dates.getMinutes();
    const s = dates.getSeconds();

    const hh = h < 10 ? "0" + h : h;
    const mm = m < 10 ? "0" + m : m;
    const ss = s < 10 ? "0" + s : s;

    return (
      [dates.getDate(), months[dates.getMonth()], dates.getFullYear()].join(
        " "
      ) +
      " " +
      [hh, mm, ss].join(":")
    );
  }

  function addList() {
    if (title === "") {
      toast.warn("Please input title first!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
      });
    } else {
      const newDate = createNote(new Date());
      title &&
        setTodo((prevTodo) => [
          ...prevTodo,
          { title: title, desc: desc, date: newDate }
        ]);
      title && setTitle("");
      setDesc("");
    }
  }

  function removeList(idx) {
    console.log(idx);
    console.log(todo.filter((item, index) => index !== idx));
    setTodo(todo.filter((item, index) => index !== idx));
  }

  return (
    <StyledEngineProvider injectFirst>
      <AppBarComponent />
      <HeaderComponent
        clearAction={() => {
          setTitle("");
          setDesc("");
        }}
        addAction={addList}
        resetAction={() => setTodo([])}
        onBlurAction={() => setDesc("")}
        titleChange={(e) => setTitle(e.target.value)}
        descChange={(e) => setDesc(e.target.value)}
        titleValue={title}
        descValue={desc}
      />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NoteComponent todoList={todo} removeAction={removeList} />
    </StyledEngineProvider>

    // <Container maxWidth="sm">

    //   <Typography variant="h1">Lorem Ipsum</Typography>
    //   <Typography variant="h2">Sample Text</Typography>
    //   <Typography>
    //     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    //     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    //     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    //     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    //     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
    //     occaecat cupidatat non proident, sunt in culpa qui officia deserunt
    //     mollit anim id est laborum.
    //   </Typography>
    // </Container>
  );
}
