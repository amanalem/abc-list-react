import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import listService from "../utils/listService";

const ListPage = ({ user }) => {
  const [message, setMessage] = useState({
    message: "",
  });

  const updateMessage = (msg) => {
    setMessage({ message: msg });
  };

  const [aList, setAList] = useState([]);
  const [bList, setBList] = useState([]);
  const [cList, setCList] = useState([]);

  const setLists = (a, b, c) => {
    setAList(a);
    setBList(b);
    setCList(c);
  };

  useEffect(() => {
    try {
      let list = listService.index(user._id).then(() => {
        setLists(list.aList, list.bList, list.cList);
      });
    } catch (err) {
      updateMessage(err.message);
    }
  }, []);

  //   useEffect(() => {
  //     user &&
  //       axios
  //         .get(`${process.env.REACT_APP_DB}/my-list?owner=${user._id}`)
  //         .then(({ data }) => {
  //           setLists(data.list.aList, data.list.bList, data.list.cList);
  //         });
  //   }, []);

  return <div>ListPage</div>;
};

export default ListPage;
