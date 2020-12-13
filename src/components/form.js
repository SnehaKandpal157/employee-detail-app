import React from 'react';

const Form = ({ employee, salary, age, inputRef, handleInputChange, handleSubmit, onDrop }) => {

  return (
    <div className="form-outer-wrap">
      <div className="form-inner-wrap">
        <span className="form-heading">Employee Detail Form</span>
        <div className="form-wrap">
          <label>Employee Name: </label> <input type="text" name="name" value={employee} onChange={handleInputChange} required />
          <label>Salary: </label> <input type="number" min="0" name="salary" value={salary} onChange={handleInputChange} required />
          <label>Age: </label><input type="number" min="0" name="age" value={age} onChange={handleInputChange} required />
          <label>Add Image: </label>
          <input type="file" accept="image/*" onChange={onDrop} ref={inputRef} />
        </div>
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Form;
