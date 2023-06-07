import React, { Component } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

interface User {
  id: number;
  name: string;
}

interface State {
  users: User[];
}

class List extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    console.log("Component create from class");

    const fetchUsers = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ users: data });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUsers();
  }

  render() {
    const { users } = this.state;

    return (
      <>
      </>
    );
  }
}

export default List;