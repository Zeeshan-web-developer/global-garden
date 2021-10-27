/**
 * @Author: ZEESHAN AHMAD
 * @Date:   2021-10-25 08:28:20
 * @Last Modified by:   ZEESHAN AHMAD
 * @Last Modified time: 2021-10-26 09:15:22
 */
import React, { useState, useEffect } from "react";
import { fetchData } from "./utils/index";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import DisplayHeader from "./DisplayHeader";

import Students from "./Students";
function Display() {
  const users = useSelector((state) => state.students);
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 7;
  const pageVisted = pageNumber * userPerPage;
  const pageCount = Math.ceil(users.length / userPerPage);

  useEffect(() => {
    fetchData();
  }, []);
  const PageChange = ({ selected }) => {
    setPageNumber(selected);
  };
  const displayStudents = () => (
    <Students users={users} pageVisted={pageVisted} userPerPage={userPerPage} />
  );

  return (
    <>
      <div>
        <table className="table table-bordered">
          <DisplayHeader />
          <tbody>{displayStudents()}</tbody>
        </table>
      </div>
      <Pagination pageCount={pageCount} PageChange={PageChange} />
    </>
  );
}

export default Display;
