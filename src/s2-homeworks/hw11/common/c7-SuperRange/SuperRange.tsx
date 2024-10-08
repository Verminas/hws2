import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
              color: '#00CC22',
              maxWidth: '150px',
              margin: '25px 12px',
              '& .MuiSlider-rail':{
                backgroundColor: 'black'
              },
              '& .MuiSlider-thumb': {
                border: '1px currentColor solid',
                width: '18px',
                height: '18px',
                backgroundColor: 'white',
                '&::after': {
                  border: '1px currentColor solid',
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'currentColor'
                }
              }
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
