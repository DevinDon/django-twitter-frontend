

import React from "react";
import { useForm } from "react-hook-form";
import { TextField } from "@material-ui/core";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

interface IFormInputs {
  firstName: string
  lastName: string
  age: number
}

const schema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string().matches(/^[A-Za-z]+$/).required(),
  age: yup.number().positive().integer().required(),
});

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({
    resolver: yupResolver(schema)
  });
  const onSubmit = (data: IFormInputs) => {
    console.log(data);
    console.table(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>


      <TextField
        name="firstName"
        label="姓名"
        placeholder="请输入姓名"
        variant="outlined"
        inputRef={
          (register("firstName", {
            required: true,
            minLength: 6, maxLength: 32
          }) as any)
        }
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
      /> <br />

      <input {...register("lastName")} />
      <p>{errors.lastName?.message}</p>

      <input autoComplete="off" {...register("age")} type="number" />
      <p>{errors.age?.message}</p>

      <input type="submit" />
    </form>
  );
}
