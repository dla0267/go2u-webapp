import React, { Component } from "react";
import Table from "./common/table";
import { Link } from "react-router-dom";

class UserTable extends Component {
  column = [
    {
      path: "firstName",
      label: "First Name",
      content: user => <Link to={`/users/${user._id}`}>{user.firstName}</Link>
    },
    { path: "lastName", label: "Last Name" },
    { path: "email", label: "Email" },
    { path: "mobile", label: "Phone Number" },
    { path: "isGoer", label: "Goer" },
    {
      key: "delete",
      content: user => (
        <button
          onClick={() => this.props.onDelete(user)}
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      )
    }
  ];
  render() {
    const { onSort, sortColumn, users } = this.props;
    return (
      <Table
        columns={this.column}
        sortColumn={sortColumn}
        data={users}
        onSort={onSort}
      />
    );
  }
}

export default UserTable;