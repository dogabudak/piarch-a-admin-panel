import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

export const Form= ()=> {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
      console.log(data)
      axios.post(`http://localhost:4567/coordinates`,
          {
              name:data.name,
              coordinateX: data.coordinateX,
              coordinateY: data.coordinateY
          },{
          headers:{
            'Access-Control-Allow-Origin':'"*"',
            'Content-Type': 'application/json'
          }})
          .then(res => {
              // TODO This should give feedback to the user if it is successfull
              console.log(res);
              console.log(res.data);
          })
  };

  // TODO This input types should have at least some form of validator
  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="Name" {...register("name")} />
        <input {...register("coordinateX")} />
        <input {...register("coordinateY")} />
        <input type="submit" />
      </form>
  );

}

export default Form
