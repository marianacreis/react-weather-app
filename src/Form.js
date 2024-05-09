import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <form class="search-form">
      <div class="row">
        <div class="col-9">
          <input
            type="search"
            placeholder="Type a city.."
            autoFocus="on"
            autoComplete="off"
            className="form-control shadow-sm"
          />
        </div>
        <div class="col-3">
          <input
            type="submit"
            value="Search"
            className="form-control btn btn-primary shadow-sm"
          />
        </div>
      </div>
    </form>
  );
}
