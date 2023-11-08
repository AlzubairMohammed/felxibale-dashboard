import React from "react";
import { Button, Table } from "react-bootstrap";
import "./CutomTable.css";

export default function CutomTable() {
  return (
    <>
      <Table
        className="custom-table"
        striped
        hover
        bordered
        responsive
        size="lg"
      >
        <thead>
          <tr>
            <th>Order:No</th>
            <th>Product name</th>
            <th>Price</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mohamed</td>
            <td>200 $</td>
            <td>Labtop</td>
            <td className="">
              <Button className="m-1">Edit</Button>
              <Button className="m-1" variant="danger">
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ahmed</td>
            <td>500 $</td>
            <td>Mobile HP</td>
            <td>
              <Button className="m-1">Edit</Button>
              <Button className="m-1" variant="danger">
                Delete
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Ali</td>
            <td>2700 $</td>
            <td>TV screen</td>
            <td>
              <Button className="m-1">Edit</Button>
              <Button className="m-1" variant="danger">
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}
