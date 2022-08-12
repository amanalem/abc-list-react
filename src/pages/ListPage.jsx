import React, { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const ListPage = ({ user, setLists, listA, listB, listC }) => {
  useEffect(() => {
    user &&
      axios
        .get(`${process.env.REACT_APP_DB}/my-list?owner=${user._id}`)
        .then(({ data }) => {
          setLists(data.list.aList, data.list.bList, data.list.cList);
        });
  }, []);

  return <div>ListPage</div>;
};

export default ListPage;
