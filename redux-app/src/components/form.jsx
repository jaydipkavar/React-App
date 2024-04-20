/** @format */

import React, { useState } from "react";
import { TextField, Button, Container, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addData } from "../action";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

const Form = () => {
  const dispatch = useDispatch();
  const { index } = useParams();
  const data = useSelector((state) => state.data);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    validateField(id, value);
  };

  const validateField = (fieldName, value) => {
    let errorMessage = "";
    switch (fieldName) {
      case "name":
        errorMessage = value.trim() === "" ? "Name is required" : "";
        break;
      case "email":
        errorMessage = /^\S+@\S+\.\S+$/.test(value)
          ? ""
          : "Invalid email address";
        break;
      case "password":
        errorMessage =
          value.length < 6 ? "Password must be at least 6 characters long" : "";
        break;
      default:
        break;
    }
    setErrors({ ...errors, [fieldName]: errorMessage });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(errors).every((val) => val === "")) {
      dispatch(addData(formData));
      setFormData({
        name: "",
        email: "",
        password: "",
      });
      navigate("/");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  data.filter((item, index) => {});

  return (
    <Container maxWidth='sm'>
      <Box mt={4}>
        <form onSubmit={handleSubmit} onKeyPress={handleKeyPress}>
          <TextField
            fullWidth
            id='name'
            label='Name'
            variant='outlined'
            margin='normal'
            autoComplete='off'
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
          />
          <TextField
            fullWidth
            id='email'
            label='Email'
            variant='outlined'
            margin='normal'
            autoComplete='off'
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            id='password'
            label='Password'
            type='password'
            variant='outlined'
            margin='normal'
            autoComplete='off'
            value={formData.password}
            onChange={handleChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            size='large'
            style={{ marginTop: 20 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
