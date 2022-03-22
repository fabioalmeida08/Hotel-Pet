import { useState } from "react"
import { StyledDivMimos, CardBuyMime } from "./style"
import SquareCat from "../../assets/img/SquareCat.png"
import { Controller } from "react-hook-form"
import { MenuItem, TextField } from "@mui/material"
import * as yup from 'yup';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from "../../contexts/AuthProvider"
import axios from "axios"
interface CardTypes {
  img: string,
  title: string,
  description: string
}
const CardMimos = ({ img, title, description }: CardTypes) => {
  const [isBuying, setIsBuying] = useState(false)
  const { userPets, authToken } = useAuth()
    
  
  const schema = yup.object().shape({
    petBuyMime: yup.string().required(),
  })

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    // axios.put(`https://hotelpetapi.herokuapp.com/pets/${petId}`, data , {
    //   headers: {
    //     Authorization: `Bearer ${authToken}`,
    //   },

    // }).then((response) => console.log(response)).catch((err) => console.log(err.message))
    
  })

  return (
    <>
      {isBuying === true ? <CardBuyMime>
        <img src={SquareCat} alt="CatImage"></img>
        <div className="DivCard">
          <h2>Comprar o {title}</h2>
          <Controller
            name='petBuyMime'
            control={control}
            defaultValue=''
            render={({ field }) => (
              <TextField
                label="Nome do Pet"
                select
                margin="normal"
                required
                size="small"
                defaultValue=""
                {...field}
                helperText={errors.petBuyMime?.message}
                error={!!errors.petBuyMime?.message}
                sx={{ textOverflow: 'ellipsis', width: '100%' }}
              >
                {/* {userPets.map((pet) => {return <MenuItem value={pet.name}>
              {pet.name}
              </MenuItem>})} */}
              </TextField>
            )} />
          <p>Confirmar compra do produto</p>
        </div>
        <button onClick={() => {setIsBuying(!isBuying)
        onSubmit()}}>
          Comprar
        </button>

      </CardBuyMime> : <StyledDivMimos>
        <img src={img} alt={title}></img>
        <div className="CardContainer">

          <h2>{title}</h2>
          <p>
            {description}
          </p>
          <button onClick={() => {

            setIsBuying(!isBuying)
          }}>
            Comprar
          </button>
        </div>
      </StyledDivMimos>}
    </>
  )
}
export default CardMimos

