import {
  useForm,
  SubmitHandler,
  Controller,
} from 'react-hook-form'
import {
  Container,
  Grid,
  Box,
  TextField,
  Button,
  IconButton,
} from '@mui/material'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  NavLink,
  Navigate,
  useNavigate,
} from 'react-router-dom'
import {
  MdVisibility,
  MdVisibilityOff,
} from 'react-icons/md'
import { useState } from 'react'
import HotelPetApi from '../../services/'

interface IFormData {
  name: string
  email: string
  password: string
  passwordConfirm?: string
  adress: string
  phone: string
}

const RegisterForm = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(/[a-zA-Z]+$/, 'nome não pode conter números')
      .min(3, 'minimo 3 caracteres')
      .max(18, 'maximo 18 caracteres')
      .required('Nome de usuario obrigatório'),
    email: yup
      .string()
      .required('Email obrigatório')
      .email('Email invalido'),
    adress: yup
      .string()
      .required('Campo obrigatório'),
    phone: yup
      .string()
      .required('Campo obrigatório'),
    password: yup
      .string()
      .required('Campo obrigatório')
      .matches(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
        'Minimo 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caracter especial'
      ),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas diferentes')
      .required('Campo obrigatório'),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: yupResolver(schema),
  })

  const [hide, setHide] = useState(false)
  const [hideConfirmPassword, setHideConfirmPassword] =
    useState(false)

  const handlePasswordVisibility = () => {
    setHide(!hide)
  }

  const handleConfirmPasswordVisibility = () => {
    setHideConfirmPassword(!hideConfirmPassword)
  }

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IFormData> = (
    data: IFormData
  ) => {
    delete data.passwordConfirm
    HotelPetApi.post('/register', (data))
      .then(() => {
        navigate('/login')
      })
      .catch((err) => console.log(err))
  }

  return (
    <Container maxWidth='xs'>
      <Box
        component='form'
        noValidate
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(onSubmit)}
      >
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
              id='nomeCompleto'
              label='Nome Completo'
              autoFocus
              helperText={errors.name?.message}
              error={!!errors.name?.message}
            />
          )}
        />
        <Controller
          name='email'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin='normal'
              id='email'
              label='Email'
              helperText={errors.email?.message}
              error={!!errors.email?.message}
            />
          )}
        />
         <Controller
          name='adress'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin='normal'
              id='endereco'
              label='Endereço'
              autoFocus
              helperText={errors.adress?.message}
              error={!!errors.adress?.message}
            />
          )}
        />
         <Controller
          name='phone'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin='normal'
              id='telefone'
              label='Telefone'
              autoFocus
              helperText={errors.phone?.message}
              error={!!errors.phone?.message}
            />
          )}
        />
        <Controller
          name='password'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin='normal'
              id='password'
              label='Senha'
              type={!hide ? 'password' : 'text'}
              helperText={errors.password?.message}
              error={!!errors.password?.message}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={handlePasswordVisibility}
                  >
                    {hide ? (
                      <MdVisibilityOff />
                    ) : (
                      <MdVisibility />
                    )}
                  </IconButton>
                ),
              }}
            />
          )}
        />
        <Controller
          name='passwordConfirm'
          control={control}
          defaultValue=''
          render={({ field }) => (
            <TextField
              {...field}
              required
              fullWidth
              margin='normal'
              id='passwordConfirm'
              label='Confirmar Senha'
              type={
                !hideConfirmPassword ? 'password' : 'text'
              }
              helperText={errors.passwordConfirm?.message}
              error={!!errors.passwordConfirm?.message}
              InputProps={{
                endAdornment: (
                  <IconButton
                    aria-label='toggle password visibility'
                    onClick={
                      handleConfirmPasswordVisibility
                    }
                  >
                    {hideConfirmPassword ? (
                      <MdVisibilityOff />
                    ) : (
                      <MdVisibility />
                    )}
                  </IconButton>
                ),
              }}
            />
          )}
        />
        <Grid container spacing={2} sx={{ mt: 2, mb: 5 }}>
          <Grid item xs={12} sm={6}>
            <Button
              fullWidth
              type='submit'
              variant='contained'
            >
              Cadastrar
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant='contained'>
              Voltar
            </Button>
          </Grid>
        </Grid>
        <Grid container justifyContent='flex-end'>
          <Grid item>
            <NavLink to='/login'>
              Já tem cadastro? Fazer login
            </NavLink>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default RegisterForm
