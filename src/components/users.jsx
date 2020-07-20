import React, { Component } from "react";
class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.users.map((user) => (
            <li key={user.id}>
              id:{user.id}, first name:{user.first_name}, email:{user.email},
              country:{user.country}{" "}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
