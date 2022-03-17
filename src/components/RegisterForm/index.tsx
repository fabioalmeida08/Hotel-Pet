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
} from '@mui/material'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

interface IFormData {
  name: string
  email: string
  password: string
  passwordConfirm: string
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

  const onSubmit: SubmitHandler<IFormData> = (
    data: IFormData
  ) => {
    console.log(data)
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
              type='password'
              helperText={errors.password?.message}
              error={!!errors.password?.message}
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
              id='email'
              label='Confirmar Senha'
              type='password'
              helperText={errors.passwordConfirm?.message}
              error={!!errors.passwordConfirm?.message}
            />
          )}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button fullWidth type='submit' variant='contained'>Cadastrar</Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant='contained'>Voltar</Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  )
}

export default RegisterForm
