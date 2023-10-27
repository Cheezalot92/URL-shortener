import { useState, useEffect } from "react";
import LoginForm from "../pages/LoginForm";
import { nanoid } from "nanoid";

export default function CrudCo() {
  const [title, setTitle] = useState("");
  const [urls, setUrls] = useState([]);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeUrl = (e) => {
    setUrls(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUrl = {
      title,
      longUrls: urls,
      shortUrls: nanoid(8),
      user: 1,
    };
    const backendUrl = "http://localhost:8000/urls/";
    const data = await fetch(backendUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUrl),
    }).then((response) => response.json());
    console.log("Data is", data);
  };

  return (
    <>
      <h1 className="h1">Welcome to Crud.Co</h1>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input is-link"
              type="text"
              value={title}
              name="Title"
              onChange={handleChangeTitle}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Long URL</label>
          <div className="control">
            <input
              className="input is-success"
              type="text"
              value={urls}
              name="longUrl"
              onChange={handleChangeUrl}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-danger is-focused" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      {/* <ul>
        {urls.map((url, index) => (
          <li key={index}>
            {url.title} - {url.longUrls}
          </li>
        ))}
      </ul> */}
    </>
  );
}
