import "./styles.css";
import axios from "axios";
import { useState } from "react";
import Form from "./Form";

export default function App() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [userId, setUserId] = useState();
  const [id, setId] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, {
        title,
        body,
        userId,
        id
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <div className="container">
        <h1>fill the form and send your data to the outer space</h1>

        <Form
          handleSubmit={handleSubmit}
          title={title}
          body={body}
          userId={userId}
          id={id}
          setTitle={setTitle}
          setBody={setBody}
          setUserId={setUserId}
          setId={setId}
        ></Form>
      </div>
    </div>
  );
}
