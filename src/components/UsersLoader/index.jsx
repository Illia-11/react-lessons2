import React, { Component } from "react";

class UsersLoader extends Component {
  state = {
    users: [],
    error: null,
    isLoading: false,
    currentPage: 1,
  };

  componentDidMount() {
    const { currentPage } = this.state;

    this.setState({
      isLoading: true,
    });

    fetch(
      `https://randomuser.me/api/?seed=12345&results=10&nat=ua&page=${currentPage}`
    )
      .then((res) => res.json())
      .then(({ results: users }) => {
        // console.log(users);
        this.setState({
          users,
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      const { currentPage } = this.state;

      this.setState({
        isLoading: true,
      });

      fetch(
        `https://randomuser.me/api/?seed=12345&results=10&nat=ua&page=${currentPage}`
      )
        .then((res) => res.json())
        .then(({ results: users }) => {
          // console.log(users);
          this.setState({
            users,
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
  }

  handlePrev = () => {
    const { currentPage } = this.state;

    this.setState({
      currentPage: currentPage > 1 ? currentPage - 1 : 1,
    });
  };

  handleNext = () => {
    const { currentPage } = this.state;

    this.setState({
      currentPage: currentPage + 1,
    });
  };

  render() {
    const { users, isLoading, error, currentPage } = this.state;

    if (isLoading) {
      return <div>LOADING ...</div>;
    }

    if (error) {
      return <div>ERROR: {error.message}</div>;
    }

    const usersCards = users.map((user) => {
      return (
        <div key={user.login.uuid}>
          <pre>{JSON.stringify(user, null, 4)}</pre>
        </div>
      );
    });

    return (
      <div>
        <div>
          <button onClick={this.handlePrev}>Prev</button>
          <span>Поточка сторінка: {currentPage}</span>
          <button onClick={this.handleNext}>Next</button>
        </div>
        {usersCards}
      </div>
    );
  }
}

export default UsersLoader;
