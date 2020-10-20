import React, { useState } from "react";
import blogService from "../services/blogs";


const NewBlogForm = ({ setMessage, setError, blogs, setBlogs }) => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [formVisible, setFormVisible] = useState(false)

  const hideWhenVisible = { display: formVisible ? 'none' : '' }
  const showWhenVisible = { display: formVisible ? '' : 'none' }

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
      setBlogs(await blogService.getAll())

      setMessage(`a new blog ${title} by ${author} was added`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
      setFormVisible(false)
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
      <div style={showWhenVisible}>
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
      <button onClick={() => setFormVisible(false)}>cancel</button>
      </div>
      <div style={hideWhenVisible}>
          <button onClick={() => setFormVisible(true)}>Add new blog</button>
        </div>
    </div>
  );
};

export default NewBlogForm;
