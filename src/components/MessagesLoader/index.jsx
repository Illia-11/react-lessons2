import React, { Component } from 'react';

/*
  Переробити на функціональний за допомогою хуків
  useState i useEffect
*/

class MessagesLoader extends Component {
  state = {
    messages: [],
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    fetch('/message.json')
      .then((res) => res.json())
      .then((messages) => {
        console.log(messages);
        this.setState({
          messages,
        });
      })
      .catch((error) => {
        this.setState({
          error,
        });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    const { messages, isLoading, error } = this.state;

    const messagesElems = messages.map((message) => (
      <article key={message.id}>
        <h2>{message.title}</h2>
        <h3>By {message.author}</h3>
        <p>{message.text}</p>
      </article>
    ));
    
    return (
      <div>
        {isLoading && <div>LOADING ...</div>}
        {error && <div>ERROR: {error.message}</div>}
        {messagesElems}
      </div>
    );
  }
}
export default MessagesLoader;