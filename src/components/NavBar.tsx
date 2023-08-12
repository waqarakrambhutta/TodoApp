import { MdDelete } from "react-icons/md";
import { GrAdd, GrUpdate } from "react-icons/gr";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div
          className="container-fluid d-flex justify-content-between align-items-center"
          style={{ width: "100%" }}
        >
          <h2>Todo List</h2>
          <div className="d-flex gap-2">
            <button type="button" className="btn btn-outline-dark">
              <GrAdd />
            </button>
            <button type="button" className="btn btn-outline-dark">
              <GrUpdate />
            </button>
            <button type="button" className="btn btn-outline-dark">
              <MdDelete />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
