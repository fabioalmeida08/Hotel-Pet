import { MenuItem, TextField } from '@mui/material';
import { StyledForm, DivButtons, DivWrapper, DivHeader, DivImgDesktop } from './styles';
import DogPaw from "../../assets/img/pata.png"
import backgroundCat from "../../assets/img/backgroundRegisterCat.png"
import * as yup from 'yup';
import { Controller, useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';



const CardRegisterPet = () => {

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

  const onSubmit = handleSubmit((data) => {

    // axios.post("https://hotelpetapi.herokuapp.com/pets", data, {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },

    // }).then((response) => console.log(response)).catch((err) => console.log(err))
    
  })

  return (
    <DivWrapper>

      <DivImgDesktop>
        <img src={backgroundCat} alt="backgroundCat"></img>
      </DivImgDesktop>

      <StyledForm onSubmit={onSubmit}>

        <DivHeader>
          <h1>Cadastro do Pet</h1>
          <span></span>
        
          <img src={DogPaw} alt="Pata de Cachorro"></img>
        </DivHeader>

        <Controller
          name='name'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              label="Nome do Pet"
              margin='none'
              id="outlined-size-small"
              size="small"
              autoFocus
              helperText={errors.name?.message}
              error={!!errors.name?.message}
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
              size="small"
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
              size="small"
              label='Idade'
              type='age'
              helperText={errors.passwordConfirm?.message}
              error={!!errors.passwordConfirm?.message}
            />)} />
        <Controller
          name='specie'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              label="Espécie"
              select
              margin="normal"
              required
              size="small"
              defaultValue=""
              {...field}
              helperText={errors.specie?.message}
              error={!!errors.specie?.message}
              sx={{ textOverflow: 'ellipsis', width: '100%' }}
            >
              <MenuItem value={'Cachorro'}>
                Cachorro
              </MenuItem>
              <MenuItem value={'Gato'}>
                Gato
              </MenuItem>
              <MenuItem value={'Aves'}>
                Aves
              </MenuItem>
              <MenuItem value={'Reptil'}>
                Reptil
              </MenuItem>
              <MenuItem value={'Alien'}>
                Alien
              </MenuItem>
              <MenuItem value={'Pré Histórico'}>
                Pré Historico
              </MenuItem>
            </TextField>
          )} />
        <Controller
          name='size'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              label="Porte"
              select
              margin="normal"
              required
              size="small"
              defaultValue=""
              {...field}
              helperText={errors.size?.message}
              error={!!errors.size?.message}
              sx={{ textOverflow: 'ellipsis', width: '100%' }}
            >
              <MenuItem value={'Pequeno'}>
                Pequeno
              </MenuItem>
              <MenuItem value={'Médio'}>
                Médio
              </MenuItem>
              <MenuItem value={'Grande'}>
                Grande
              </MenuItem>

            </TextField>
          )} />


        <DivButtons>

          <button type="submit">Cadastrar</button>
          <button className='backButton' type="submit">Voltar</button>
        </DivButtons>

      </StyledForm>
    </DivWrapper>
  )
}
export default CardRegisterPet