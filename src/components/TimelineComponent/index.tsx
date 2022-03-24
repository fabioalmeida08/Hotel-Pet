import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import neneca from '../../assets/status/status neneca.svg'
import food from '../../assets/status/status food.svg'
import play from '../../assets/status/status play.svg'

interface IPet{
  pet:{
  time: String,
  emoji: String,
  description: String,
  activity: String
  }
}


const TimelineComponent = ({pet} : IPet) => {
  return(
<TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="#FFFFFF"
        >
          {pet.time}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>  
            <img alt='' src={pet.activity === 'play' ? play : pet.activity === 'food' ? food : neneca}></img>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color: "#FFFFFF"}}>
          <Typography variant="h6" component="span" align='inherit' sx={{textAlign: 'inherit'}}>
            {pet.activity}
          </Typography>
          <Typography>{pet.description}</Typography>
        </TimelineContent>
      </TimelineItem>
  )
}

export default TimelineComponent