import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from "./components/header";
import Form from "./components/form";
import Table from "./components/table";
import localForage from 'localforage';
import Search from "./components/search";
import _isEmpty from 'lodash/isEmpty';

const App = () => {
  const [employee, setEmployee] = useState("");
  const [salary, setSalary] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    if (!_isEmpty(searchResult)) {
      setDataArray(searchResult)
    }
    else {
      localForage.getItem('data', (_error, data) => {
        setDataArray(data)
      })
    }
  }, [searchResult, dataArray])

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      setEmployee(value)
    }
    else if (name === "salary") {
      setSalary(value)
    }
    else {
      setAge(value)
    }
  }

  const handleSubmit = () => {
    const newData = { employee_name: employee, salary: salary, age: age, image: image };
    localForage.getItem('data', (_error, data) => {
      if (data) {
        const updatedData = data;
        updatedData.push(newData)
        localForage.setItem('data', updatedData);
        setDataArray(updatedData);
      }
      else {
        localForage.setItem('data', [newData]);
        setDataArray([newData])
      }
    });
    setEmployee("");
    setAge("");
    setSalary("");
    setImage("");
    inputRef.current.value = ""
  }

  const handleSearchChange = (event) => {
    const { value } = event.target;
    const filteredResult = dataArray.filter((data) => data.employee_name === value);
    setSearchResult(filteredResult)
    console.log(filteredResult)
  }

  const onDrop = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];
    reader.onloadend = () => {
      setImage(reader.result);
    }
    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="app-wrapper">
      <Header />
      <Form employee={employee} onDrop={onDrop} inputRef={inputRef} salary={salary} age={age} image={image} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />

      {!_isEmpty(dataArray) &&
        <>
          <Search handleSearchChange={handleSearchChange} />
          <Table dataArray={dataArray} />
        </>}
    </div>
  );
}

export default App;
