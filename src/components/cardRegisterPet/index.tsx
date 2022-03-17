import {InputLabel, MenuItem, Select, TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import { StyledForm, DivForm, DivWrapper, DivHeader } from './styles';
import pata from "./images/pata.png"
import backgroundCat from "./images/backgroundRegisterCat.png"
import * as yup from 'yup';
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';



const CardRegisterPet = () => {

    interface IFormData {
    name: string
    email: string
    password: string
    passwordConfirm: string
  }
  
    const schema = yup.object().shape({
       name: yup.string().required(),
        specie: yup.string().required(),
        race: yup.string().required(),
        age: yup.number().required(),
        size: yup.string().required()
    })
    const {
      handleSubmit,
      control,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    })
  
    const token = "token"

    const onSubmit = handleSubmit((data) => {
      
        axios.post("https://hotelpetapi.herokuapp.com/pets", data, {
            headers: {
                Authorization: `Bearer ${token}`,
            },

        }).then((response) => console.log(response)).catch((err) => console.log(err))
    })

    return (
        <DivWrapper>
            <div>
                <img src={backgroundCat} alt="backgroundCat"></img>
            </div>
            <DivForm>
                <DivHeader>

                    <h1>Cadastro do Pet</h1>
                    <img src={pata} alt="pata"></img>

                </DivHeader>
                <StyledForm onSubmit={onSubmit}>
                <Controller
            name='name'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin='normal'
                id='name'
                label='Nome do Pet'
                autoFocus
                helperText={errors.name?.message}
                error={!!errors.name?.message}
              />
            )}
          />
          <Controller
            name='specie'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin='normal'
                id='specie'
                label='Espécie'
                helperText={errors.specie?.message}
                error={!!errors.specie?.message}
              />
            )}
          />
          <Controller
            name='race'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin='normal'
                id='race'
                label='Raça'
                type='text'
                helperText={errors.race?.message}
                error={!!errors.race?.message}
              />
            )}
          />
          <Controller
            name='age'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin='normal'
                id='age'
                label='Raça'
                type='age'
                helperText={errors.passwordConfirm?.message}
                error={!!errors.passwordConfirm?.message}
              /> )} />
            <Controller
            name='size'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                {...field}
                required
                fullWidth
                margin='normal'
                id='size'
                label='Porte'
                type='size'
                helperText={errors.passwordConfirm?.message}
                error={!!errors.passwordConfirm?.message}
              /> )} />
         
              





                    <button type="submit">Cadastrar</button>

                </StyledForm>
            </DivForm>


        </DivWrapper>
    )
}
export default CardRegisterPet