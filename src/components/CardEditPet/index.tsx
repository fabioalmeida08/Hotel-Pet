import { MenuItem, TextField } from '@mui/material'
import * as yup from 'yup'
import {
  Controller,
  useForm,
  SubmitHandler,
} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Container, Box, Grid } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import HotelPetApi from '../../services'
import { useAuth } from '../../contexts/AuthProvider/'
import { useState } from 'react'
import { toast } from 'react-toastify'
import {IoMdSave} from 'react-icons/io'
interface IFormData {
  name: string
  specie: string
  race: string
  age: string
  size: string
}

const CardEditPet = ({ pet, handleCloseEdit }: any) => {
  const [editBtn, setEditBtn] = useState(false)

  const handleBtnState = () => {
    setEditBtn(!editBtn)
  }

  const { id, name, specie, race, age, size } = pet
  const schema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    specie: yup.string().required('Campo obrigatório'),
    race: yup.string().required('Campo obrigatório'),
    age: yup.string().required('Campo obrigatório'),
    size: yup.string().required('Campo obrigatório'),
  })

  const { userPets, setUserPets } = useAuth()

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  })

  const onSubmit: SubmitHandler<IFormData> = async (
    formData: IFormData
  ) => {
    handleBtnState()

    const { data } = await HotelPetApi.get(`/pets/${id}`)

    const newData = { ...data, ...formData }

    await HotelPetApi.put(`/pets/${id}`, newData, {
      headers: {
        Authorization: `Bearer ${JSON.parse(
          localStorage.getItem('@hotelPet:token') || ''
        )}`,
      },
    })
      .then((response) => {
        const editedPet = response.data

        const newPets = userPets.filter(
          (pet) => pet.id !== id
        )

        setUserPets([...newPets, editedPet])
        toast.success('Informações Editadas com sucesso!')
      })
      .catch((err) => {
     
        toast.error('Algo deu errado , tente novamente! :(')
      })
    handleBtnState()
    await handleCloseEdit()
  }

  return (
    <Container
      maxWidth='xs'
      sx={{
        bgcolor: 'var(--white)',
        padding: '20px',
        borderRadius: '18px',
      }}
    >
      <Box
        component='form'
        noValidate
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          name='name'
          control={control}
          defaultValue={name}
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              label='Nome do Pet'
              margin='none'
              id='outlined-size-small'
              autoFocus
              helperText={errors.name?.message}
              error={!!errors.name?.message}
            />
          )}
        />
        <Controller
          name='race'
          control={control}
          defaultValue={race}
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
          defaultValue={age}
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin='normal'
              id='age'
              label='Idade'
              type='number'
              helperText={errors.age?.message}
              error={!!errors.age?.message}
            />
          )}
        />
        <Controller
          name='specie'
          control={control}
          defaultValue={specie}
          render={({ field }) => (
            <TextField
              label='Espécie'
              select
              margin='normal'
              required
              {...field}
              helperText={errors.specie?.message}
              error={!!errors.specie?.message}
              sx={{
                textOverflow: 'ellipsis',
                width: '100%',
              }}
            >
              <MenuItem value={'Cachorro'}>
                Cachorro
              </MenuItem>
              <MenuItem value={'Gato'}>Gato</MenuItem>
              <MenuItem value={'Aves'}>Aves</MenuItem>
              <MenuItem value={'Reptil'}>Reptil</MenuItem>
              <MenuItem value={'Alien'}>Alien</MenuItem>
              <MenuItem value={'Pré Histórico'}>
                Pré Historico
              </MenuItem>
            </TextField>
          )}
        />
        <Controller
          name='size'
          control={control}
          defaultValue={size}
          render={({ field }) => (
            <TextField
              label='Porte'
              select
              margin='normal'
              required
              defaultValue=''
              {...field}
              helperText={errors.size?.message}
              error={!!errors.size?.message}
              sx={{
                textOverflow: 'ellipsis',
                width: '100%',
              }}
            >
              <MenuItem value={'Pequeno'}>Pequeno</MenuItem>
              <MenuItem value={'Médio'}>Médio</MenuItem>
              <MenuItem value={'Grande'}>Grande</MenuItem>
            </TextField>
          )}
        />
        <Grid container spacing={2} sx={{ mt: 2, mb: 5 }}>
          <Grid item xs={12} sm={6}>
            <LoadingButton
              loading={editBtn}
              type='submit'
              variant='contained'
              loadingPosition="start"
              startIcon={<IoMdSave />}
              fullWidth
               sx={{
                bgcolor: 'var(--primary-1)',
                ':hover': {
                  bgcolor: 'var(--secundary-1)',
                },
              }}
            >
              Salvar
            </LoadingButton>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LoadingButton
              loading={editBtn}
              type='submit'
              variant='contained'
              loadingPosition="start"
              fullWidth
              onClick={() => handleCloseEdit()}
               sx={{
                bgcolor: 'var(--primary-1)',
                ':hover': {
                  bgcolor: 'var(--secundary-1)',
                },
              }}
            >
              Voltar
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}
export default CardEditPet
