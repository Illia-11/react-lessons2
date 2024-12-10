import React, { Component, useEffect, useState } from "react";

function MessagesLoader() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch("/message.json")
      .then((res) => res.json())
      .then((messages) => {
        setMessages(messages);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
      {isLoading && <div>LOADING ...</div>}
      {error && <div>ERROR: {error.message}</div>}
      {messages.map((message) => (
        <article key={message.id}>
          <h2>{message.title}</h2>
          <h3>By {message.author}</h3>
          <p>{message.text}</p>
        </article>
      ))}
    </div>
  );
}

export default MessagesLoader;
