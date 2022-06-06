import React, { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { TextField, Button } from "@mui/material";
import { PeopleContext } from "./../contexts/person.context";

export default function PersonForm() {
  let navigate = useNavigate();
  const { addPerson } = useContext(PeopleContext);

  const schema = yup.object().shape({
    name: yup.string().required(),
  });

  const defaultValues = {
    name: "",
  };

  const {
    reset,
    control,
    // register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
    addPerson(data);
    reset();
    navigate("/");
  };

  console.log(watch("name")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="name"
        render={({ field }) => (
          <TextField error={!!errors.name} {...field} label="Name" helperText={errors.name?.message} />
        )}
      />

      <Button type="reset" onClick={reset}>
        Reset
      </Button>
      <Button type="submit">Submit</Button>
    </form>
  );
}
