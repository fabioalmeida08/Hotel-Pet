import { MenuItem, Select, TextField } from '@mui/material'
import BackgroundModal from '../BackgroundModal'
import StyledModalPetStatusAdmin from './StyledModalPetStatusAdmin'
import Picker from 'emoji-picker-react'
import { useState } from 'react'
import Button from '../Buttons'
import food from '../../assets/svg/status/status food.svg'
import neneca from '../../assets/svg/status/status neneca.svg'
import play from '../../assets/svg/status/status play.svg'
import { toast } from 'react-toastify'
import { GrClose } from 'react-icons/gr'
import axios from 'axios'
import { Dispatch, SetStateAction } from 'react'
import { useAuth } from '../../contexts/AuthProvider'

interface IPropsStatus {
  idPet: String
  setShowModal: Dispatch<SetStateAction<boolean>>
}

const ModalPetStatusAdmin = ({
  idPet,
  setShowModal,
}: IPropsStatus) => {
  const { authToken } = useAuth()
  const [chosenEmoji, setChosenEmoji] = useState(null)
  const [chosenActivity, setChosenActivity] = useState('')
  const [desc, setDesc] = useState('')
  const [time, setTime] = useState('')
  const onEmojiClick = (event: any, emojiObject: any) => {
    setChosenEmoji(emojiObject.emoji)
  }

  const handleChange = ({ target }: any) => {
    setChosenActivity(target.value as string)
  }

  const handleClick = async () => {
    if (
      chosenEmoji &&
      chosenActivity &&
      desc &&
      time &&
      chosenActivity !== '0'
    ) {
      const newData = {
        emoji: chosenEmoji,
        activity: chosenActivity,
        description: desc,
        time,
      }
      toast.success('Status salvo com sucesso!', {
        position: toast.POSITION.TOP_CENTER,
      })
      const pets = await axios
        .get(
          `https://hotelpetapi.herokuapp.com/pets/${idPet}`
        )
        .then((data) => data.data)

      const status = await [...pets.status, newData]

      const request = await { ...pets, status }

      const config = {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }

     await axios.put(
        `https://hotelpetapi.herokuapp.com/pets/${idPet}`,
        request,
        config
      )

      setChosenEmoji(null)
      setChosenActivity('0')
      setDesc('')
      setTime('')

      setShowModal(false)
    } else {
      toast.error('Preencha todos os campos', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
  }
  return (
    <BackgroundModal>
      <StyledModalPetStatusAdmin>
        <div
          className='close-form'
          onClick={() => setShowModal(false)}
        >
          <GrClose />
        </div>
        <h2>Controle</h2>
        <TextField
          label='Hora'
          sx={{ width: '100%', mt: 1 }}
          value={time}
          onChange={({ target }) => setTime(target.value)}
        ></TextField>
        <TextField
          label='Descrição'
          sx={{ width: '100%', mt: 1 }}
          value={desc}
          onChange={({ target }) => setDesc(target.value)}
        ></TextField>
        <Select
          onChange={handleChange}
          labelId='input-select-atividade'
          label={'-Selecione a atividade-'}
          defaultValue={0}
          placeholder='Selecione uma atividade'
          sx={{
            width: '100%',
            mt: 1,
            div: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '12px',
            },
          }}
        >
          <MenuItem value={'0'}>
            -Selecione a atividade-
          </MenuItem>
          <MenuItem
            value={'food'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '12px',
            }}
          >
            {' '}
            <img src={food} alt='comida'></img>Food
          </MenuItem>
          <MenuItem
            value={'play'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '12px',
            }}
          >
            {' '}
            <img src={play} alt='play'></img>Play
          </MenuItem>
          <MenuItem
            value={'neneca'}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '12px',
            }}
          >
            {' '}
            <img src={neneca} alt='soneca'></img>Neneca
          </MenuItem>
        </Select>
        <h2
          style={{
            marginTop: '12px',
            alignSelf: 'flex-start',
          }}
        >
          Emoji: {chosenEmoji}
        </h2>
        <Picker
          onEmojiClick={onEmojiClick}
          disableSearchBar
          disableSkinTonePicker
          native
          groupVisibility={{
            animals_nature: true,
            food_drink: false,
            travel_places: false,
            activities: false,
            objects: false,
            symbols: false,
            flags: false,
            recently_used: true,
          }}
          pickerStyle={{
            width: '100%',
            height: '150px',
            marginBottom: '24px',
          }}
        ></Picker>
        <div style={{ alignSelf: 'flex-end' }}>
          <Button fontSize='18px' onClick={handleClick}>
            Salvar
          </Button>
        </div>
      </StyledModalPetStatusAdmin>
    </BackgroundModal>
  )
}

export default ModalPetStatusAdmin
