import React, {useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import axios from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send +
* 2 - дизэйблить кнопки пока идёт запрос +
* 3 - сделать стили в соответствии с дизайном +
* */

// const HW13 = () => {
//   const [code, setCode] = useState('')
//   const [text, setText] = useState('')
//   const [info, setInfo] = useState('')
//   const [image, setImage] = useState('')
//   // const [disabled, setDisabled] = useState(null)
//
//   const loading = '...loading'
//
//   const changeCommonState = (info: string = loading, code: string = '', image: string = '', text: string = '') => {
//     setInfo(info)
//     setCode(code)
//     setImage(image)
//     setText(text)
//   }
//
//   const send = (x?: boolean | null) => () => {
//     const url =
//       x === null
//         ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
//         : 'https://samurai.it-incubator.io/api/3.0/homework/test'
//
//     changeCommonState(`${x}`)
//
//     // setInfo(info)
//     // setCode(code)
//     // setImage(image)
//     // setText(text)
//
//
//     // setDisabled(true)
//     axios
//       .post<{ errorText: string, info: string }>(url, {success: x})
//       .then((res) => {
//         changeCommonState(res.data.info, `Код ${res.status}!`, success200, res.data.errorText)
//         // setDisabled(false)
//
//       })
//       .catch((e) => {
//         if (e.response?.status > 0) {
//           if (e.response?.status >= 400 && e.response?.status < 500) {
//             changeCommonState(e.response?.data?.info, `Ошибка ${e.response.status}!`, error400, e.response?.data?.errorText)
//             // setDisabled(false)
//           } else {
//             changeCommonState(e.response?.data?.info, `Ошибка ${e.response.status}!`, error500, e.response?.data?.errorText)
//             // setDisabled(false)
//           }
//
//         } else {
//           changeCommonState(e.name, 'Error!', errorUnknown, e.message)
//           // setDisabled(false)
//         }
//       })
//   }
//
//   return (
//     <div id={'hw13'} className={s2.hws}>
//       <div className={s2.hwTitle}>Homework #13</div>
//
//       <div className={s2.hw}>
//         <div className={s.buttonsContainer}>
//           <SuperButton
//             id={'hw13-send-true'}
//             onClick={send(true)}
//             xType={'secondary'}
//             // дописать
//             disabled={info === 'true'}
//
//           >
//             Send true
//           </SuperButton>
//           <SuperButton
//             id={'hw13-send-false'}
//             onClick={send(false)}
//             xType={'secondary'}
//             //
//             disabled={info === loading}
//
//           >
//             Send false
//           </SuperButton>
//           <SuperButton
//             id={'hw13-send-undefined'}
//             onClick={send(undefined)}
//             xType={'secondary'}
//             // дописать
//             disabled={info === loading}
//
//           >
//             Send undefined
//           </SuperButton>
//           <SuperButton
//             id={'hw13-send-null'}
//             onClick={send(null)} // имитация запроса на не корректный адрес
//             xType={'secondary'}
//             // дописать
//             disabled={info === loading}
//
//           >
//             Send null
//           </SuperButton>
//         </div>
//
//         <div className={s.responseContainer}>
//           <div className={s.imageContainer}>
//             {image && <img src={image} className={s.image} alt="status"/>}
//           </div>
//
//           <div className={s.textContainer}>
//             <div id={'hw13-code'} className={s.code}>
//               {code}
//             </div>
//             <div id={'hw13-text'} className={s.text}>
//               {text}
//             </div>
//             <div id={'hw13-info'} className={s.info}>
//               {code && info}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


const HW13 = () => {
  const [code, setCode] = useState('')
  const [text, setText] = useState('')
  const [info, setInfo] = useState('')
  const [image, setImage] = useState('')
  const [dis, setDis] = useState(false)

  const send = (x?: boolean | null) => () => {
    setDis(true)
    const url =
      x === null
        ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
        : 'https://samurai.it-incubator.io/api/3.0/homework/test'

    setCode('')
    setImage(errorUnknown)

    setInfo('...loading')

    axios
      .post(url, {success: x})
      .then((res) => {
        setText(res.data.errorText)
        setCode(`Код ${res.status} !!!!`)
        setImage(success200)
        setInfo(res.data.info)


      })

      .catch((e) => {

        if (e.response.data) {
          setText(e.response.data.errorText)
          setInfo(e.response.data.info)

          if (e.response.status === 400) {
            setCode(e.response.status)
            setImage(error400)
          }
          if (e.response.status === 500) {
            setCode(e.response.status)
            setImage(error500)
          }
        } else {

          setText(e.message)
          setInfo(e.name)
        }

      }).finally(() => {
      setDis(false)
    })

  }

  return (
    <div id={'hw13'}>
      <div className={s2.hwTitle}>Homework #13</div>

      <div className={s2.hw}>
        <div className={s.buttonsContainer}>
          <SuperButton
            id={'hw13-send-true'}
            onClick={send(true)}
            xType={'secondary'}
            disabled={dis}

          >
            Send true
          </SuperButton>
          <SuperButton
            id={'hw13-send-false'}
            onClick={send(false)}
            xType={'secondary'}
            disabled={dis}


          >
            Send false
          </SuperButton>

          <SuperButton
            id={'hw13-send-undefined'}
            onClick={send(undefined)}
            xType={'secondary'}
            disabled={dis}


          >
            Send undefined
          </SuperButton>
          <SuperButton
            id={'hw13-send-null'}
            onClick={send(null)} // имитация запроса на не корректный адрес
            xType={'secondary'}
            disabled={dis}


          >
            Send null
          </SuperButton>
        </div>

        <div className={s.responseContainer}>
          <div className={s.imageContainer}>
            {image && <img src={image} className={s.image} alt="status"/>}
          </div>

          <div className={s.textContainer}>
            <div id={'hw13-code'} className={s.code}>
              {code}
            </div>
            <div id={'hw13-text'} className={s.text}>
              {text}
            </div>
            <div id={'hw13-info'} className={s.info}>
              {info}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default HW13
