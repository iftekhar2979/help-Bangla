import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';
const Search = ({handleSearch}) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (
        <Form onSubmit={handleSubmit(handleSearch)} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter What you Want ?" {...register('search')} />
        
      </Form.Group>
      <Button variant="info" type="submit" >
        Search
      </Button>
      </Form>
    );
};

export default Search;