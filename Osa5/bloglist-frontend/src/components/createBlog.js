import React, { useState } from "react";
import blogService from "../services/blogs";

const NewBlogForm = ({ setMessage, setError }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const createHandler = async (event) => {
    event.preventDefault();
    const newBlogObject = {
      title: title,
      author: author,
      url: url,
    };
    try {
      await blogService.create(newBlogObject);
      setAuthor("");
      setTitle("");
      setUrl("");
      setMessage(`a new blog ${title} by ${author} was added`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    } catch {
        setAuthor("");
        setTitle("");
        setUrl("");
        setError("Blog must have author and title");
        setTimeout(() => {
            setError(null);
      }, 5000);
    }
  };

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={createHandler}>
        <div>
          title:
          <input
            type="text"
            value={title}
            name="Title"
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div>
          author:
          <input
            type="text"
            value={author}
            name="Author"
            onChange={({ target }) => setAuthor(target.value)}
          />
        </div>
        <div>
          url:
          <input
            type="text"
            value={url}
            name="Url"
            onChange={({ target }) => setUrl(target.value)}
          />
        </div>
        <button type="submit">post</button>
      </form>
    </div>
  );
};

export default NewBlogForm;
