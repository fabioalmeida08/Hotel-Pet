import { MenuItem, TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import { CardBuyMime, DivWrapper } from './style'
import SquareCat from '../../assets/img/SquareCat.png'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import axios from 'axios'
import { useAuth } from '../../contexts/AuthProvider'
import { GrClose } from 'react-icons/gr'
interface CardTypes {
  service: string
  handle: Function
}
const ConfirmBuy = ({ service, handle }: CardTypes) => {
  const { userPets, authToken } = useAuth()
  const schema = yup.object().shape({
    pet: yup.string().required(),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = handleSubmit((data) => {
    data.service = service
    data.done = false
    const petMime = userPets.filter(
      (pet) => pet.name === data.pet
    )
    const petId = petMime[0].id
    const petToUse = petMime[0]
    if (petToUse.hospedado) {
      axios
        .put(
          `https://hotelpetapi.herokuapp.com/pets/${petId}`,
          {
            size: petToUse.size,
            age: petToUse.age,
            race: petToUse.race,
            specie: petToUse.specie,
            name: petToUse.name,
            hospedado: petToUse.hospedado,
            status: petToUse.status,
            mimos: [...petToUse.mimos, data],
            userId: petToUse.userId,
            id: petToUse.id,
          },
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            toast.success('Compra realizada com sucesso', {
              position: 'top-center',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            })
          }
        })
        .catch((err) => console.log(err.message))
    } else {
      toast.warn('Pet não hospedado!', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  })

  return (
    <DivWrapper>
      <CardBuyMime>
        <div
          className='close-form'
          onClick={() => handle()}
        >
          <GrClose />
        </div>
        <ToastContainer />
        <img src={SquareCat} alt='CatImage'></img>
        <div className='DivCard'>
          <h2>Comprar o {service}</h2>
          <Controller
            name='pet'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                label='Nome do Pet'
                select
                margin='normal'
                required
                size='small'
                defaultValue=''
                {...field}
                helperText={errors.petBuyMime?.message}
                error={!!errors.petBuyMime?.message}
                sx={{
                  textOverflow: 'ellipsis',
                  width: '100%',
                }}
              >
                {userPets.map((pet) => {
                  return (
                    <MenuItem value={pet.name} key={pet.id}>
                      {pet.name}
                    </MenuItem>
                  )
                })}
              </TextField>
            )}
          />
          <p>Confirmar compra do produto</p>
        </div>
        <button
          onClick={() => {
            onSubmit()
            handle()
          }}
        >
          Comprar
        </button>
      </CardBuyMime>{' '}
    </DivWrapper>
  )
}
export default ConfirmBuy
