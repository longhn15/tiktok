// import { createContext, memo, useCallback, useContext, useMemo, 
//          useReducer, useLayout, useState } from "react";
import { useEffect, useRef } from "react";
// import Content from './Content'
// import logger from "./logger";
// import './App.css'
// import {StoreContext} from './store'
// import {useStore, actions} from './store'
import Video from "./video";
import HomePage from './learn/HomePage'
import NewsPage from './learn/NewsPage'
import ContactPage from './learn/ContactPage'
import {Routes, Route, Link} from 'react-router-dom'


// -------------------------
// const gifts = [
//   '1',
//   '2',
//   '3'
// ]


// --------------------------
// const course =[
//   {
//     id: 1,
//     name: "html,css"
//   },
//   {
//     id: 2,
//     name: "js"
//   },
//   {
//     id: 3,
//     name: "reactjs"
//   }
// ]

// -----------------------------

// function App() {
  // const [counter, setCounter] = useState(1)
  // const [info, setInfo] = useState({
  //   name: 'hoang long',
  //   age: 21,
  //   address: 'hue'
  // })

  // const handleUpdate = () => {
  //   setInfo({
  //     ...info,
  //     bio: 'yêu màu hồng <3'
  //   })
  // }

// => ------ Two-way binding | Ràng buộc hai chiều | React hooks --------

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')

  // const handleSubmit = () => {
  //   console.log({
  //     name,
  //     email
  //   });
    
  // }

// => ------------------- RADIO ---------------
  // const [checked, setChecked] = useState()

  // const handleSubmit = () => {
  //   console.log({id: checked});
    
  // }

// => -------------- CHECKBOX ------------------

  // const [checked, setChecked] = useState([])

  // const handleCheck = (id) => {
  //     setChecked(prev => {
  //     const isChecked = checked.includes(id)

  //     if (isChecked) {
  //       return checked.filter(item => item !== id)
  //     }
  //     else {
  //       return [...prev, id]
  //     }
  //   })
  // }

  // const handleSubmit = () => {
  //   console.log({ids: checked});
    
  // }
  

  // return (
  //   <div className="App">
      {/* <input 
      value={name}
        onChange={e => setName(e.target.value)}
      />
      <input 
      value={email}
        onChange={e => setEmail(e.target.value)}
      /> */}
      {/* <button onClick={handleSubmit}>Register</button> */}

      {/* {
        course.map(course => (

          // ------------------- radio ---------------------------
          // <div key={course.id}>
          //   <input 
          //   type="radio" 
          //   checked={checked === course.id}
          //   onChange={() => setChecked(course.id)}
          //   />
          //   {course.name}
          // </div>

          // --------------- checkbox --------------------------
          <div key={course.id}>
            <input 
            type="checkbox" 
            checked={checked.includes(course.id)}
            onChange={() => handleCheck(course.id)}
            />
            {course.name}
          </div>
        ))
      } */}
      {/* <button onClick={handleSubmit}>Register</button>
      </div> */}


    {/* ---- todolist ----- */}
    {/* null, undefined ?? [] */}

  // );

// => ----------------------- Lưu vào LocalStorage --------------------------
      // const [job, setJob] = useState('')

      // const [jobs, setJobs] = useState(() => {
      //   const jobsLocalStorage = JSON.parse(localStorage.getItem('jobs'))
        
      //   return jobsLocalStorage ?? []
      // })

      // const hanleSubmit = () => {
      //   setJobs(prev => {
      //     const jobs = [...prev, job]

      //     const jobsJson = JSON.stringify(jobs)
      //     localStorage.setItem('jobs', jobsJson)

      //     return jobs
      //   })
      //   setJob('')
      // }

      // return (
      //   <div className="App">
      //     <input 
      //       value = {job}
      //       onChange={e => setJob(e.target.value)}
      //     />
      //     <button onClick={hanleSubmit}>ADD</button>

      //     <ul>
      //       {jobs.map((job, index) => (
      //           <li key={index}>{job}</li>
      //       ))}
      //     </ul>
      //   </div>
      // );

// => ----------- useEffect -----------

  // 1. useEffect(callback)
    // - gọi callback sau khi component re-render 
    // - gọi call back sau khi component thêm vào DOM
  // 2. useEffect(callback, [])
    // - Chỉ gọi callback 1 lần sau khi component mounted
  // 3. useEffect(callback, [deps])
    // - callback sẽ được gọi lại mỗi khi deps thay đổi


// => ----- useEffect() with timer functions | Làm việc với setInterval & setTimeout ----

    // 1. callback luôn được gọi sau khi component mounted
    // 2. cleanup function luôn được gọi trước khi component unmounted
    // 3. Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted đầu tiên)


// => ---------- so sánh giữa useEffect và useLayoutEffect -------------

  //   A. useEffect
    // 1. Cập nhật lại state
    // 2. Cập nhật lại DOM (mutate)
    // 3. Render lại UI
    // 4. Gọi clear up fuction khi deps thay đổi
    // 5. Gọi useEffect callback

  // B. useLayoutEffect
    // 1. Cập nhật lại state
    // 2. Cập nhật lại DOM (mutate)
    // 3. Gọi clear up function khi deps thay đổi (sync)
    // 4. Gọi useEffect callback (sync)
    // 5. Render lại UI

// => --------------- memo --------------------

  // export defaut memo(Content): memo thực chất là hàm và sẽ export ra thứ mà memo return ra
                      //  nó sẽ giúp ko render lại những Component ko cần thiết nếu props ko bị thay đổi
  
// => ---- useCallback() hook | Tránh tạo ra hàm mới không cần thiết với useCallback() -------------
  // Dùng như useEffect nếu có [deps] thì render lại còn [] thì ko và trả về tham chiếu trước đó 

  // const [count, setCount] = useState(0)

  // const handleIncrease = useCallback(() => {
  //   setCount(prevCount => prevCount + 1)
  // }, [])
  

  // return (
  //   <div>
  //     <Content onIncrease = {handleIncrease} />
  //     <h1>{count}</h1>
  //   </div>
  // )

// => ------- useMemo() hook | Tránh thực hiện lại 1 logic không cần thiết với useMemo() ----

// const [name, setName] = useState()
// const [price, setPrice] = useState()
// const [products, setProducts] = useState([])

// const nameRef = useRef()

// const handleSubmit = () => {
//   setProducts([...products, {
//     name,
//     price: +price // chuyển chuỗi sang số
//   }])
//   setName('')
//   setPrice('')
//   nameRef.current.focus()
// }

// const total = useMemo(() => {
//     const res = products.reduce((result, product) => {
//       console.log('tinh toan lai..');
//       return result + product.price
//     }, 0)
//     // console.log(res);

//     return res
//   }, [products])

// return (
//   <div>
//     <input 
//       value={name}
//       ref={nameRef}
//       placeholder="Nhập tên"
//       onChange={(e) => setName(e.target.value)}
//     />
//     <br />
//     <input 
//       value={price}
//       placeholder="Nhập giá"
//       onChange={(e) => setPrice(e.target.value)}
//     />
//     <br />
//     <button
//       onClick={handleSubmit}
//     >
//       Add
//     </button>
//     <br />
//     Total: 
//     {
//      total
//     }
//     <ul>
//       {products.map((product, index) => (
//         <li key={index}>{product.name} - {product.price}</li>
//       ))}
//     </ul>
//   </div>
// )


// => -------------------- useReducer() hook ------------------
// tránh việc sử dụng nhiều useState

// const initState = 0

// const DOWN_ACTION = 'down'
// const UP_ACTION = 'up'

// const reducer = (state, action) => {
//   switch(action) {
//     case UP_ACTION:
//         return state + 1
//       case DOWN_ACTION:
//         return state - 1
//     default:
//       throw new Error('Invalid action')
//   }

// }

// const [count, dispatch] = useReducer(reducer, initState)

// return (
//   <button onClick={() => dispatch(UP_ACTION)} />
// )

// --------------------------------------------------------
  // const [show, setShow] = useState(false)

  // return (
  //   <div>
  //     <button onClick={() => setShow(!show)} >Toggle</button>
  //     {show && <Content/>}
  //   </div>
  // )

// }

// => ----------- Todo App with useReducer() hook | Hiểu rõ hơn về useReducer() ----------

// // 1. initState
// const initState = {
//   job: '',
//   jobs: []
// }

// // 2. Actions
// const SET_JOB = 'set_job'
// const ADD_JOB = 'add_job'
// const DELETE_JOB = 'delete_job'


// const setJob = (payload) => {
//   return {
//     type: SET_JOB,
//     payload
//   }
// }

// const addJob = (payload) => {
//   return {
//     type: ADD_JOB,
//     payload
//   }
// }

// const deleteJob = (payload) => {
//   return {
//     type: DELETE_JOB,
//     payload
//   }
// }

// // 3. reducer
// const reducer = (state, action) => {
//   switch(action.type) {
//     case SET_JOB:
//       return {
//         ...state,
//         job: action.payload
//       }
//     case ADD_JOB:
//         return {
//           ...state,
//           jobs: [...state.jobs,action.payload]
//         }
//     case DELETE_JOB:
//       const newjobs = [...state.jobs]
      
//       newjobs.splice(action.payload, 1)

//         return {
//           ...state,
//           jobs: newjobs
//         }
//     default:
//         throw new Error('Invalid value')
//   }
// }


// function App() {

//   const [state, dispatch] = useReducer(logger(reducer) , initState)

//   const {job, jobs} = state

//   const inputRef = useRef()

//   const handleSubmit = () => {
//     dispatch(addJob(job))
//     dispatch(setJob(''))

//     inputRef.current.focus()
//   }

//   return (
//     <div>
//       <h3>Todo</h3>
//       <input 
//         ref={inputRef}
//         value={job}
//         placeholder="Enter todo"
//         onChange={e => {
//           dispatch(setJob(e.target.value))
//         }}
//       />
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//               {job} 
//               <span onClick={() => dispatch(deleteJob(index))}>&times;</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// => ----------- React Context & useContext() hook | Khái niệm useContext() -----------

// export const themeContext = createContext()


// function App() {

//   const [theme, setTheme] = useState('dark')

//   const handleTheme  = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark')
//   }

//   return (
//     <themeContext.Provider value={theme}>
//       <div> 
//         <button onClick={handleTheme} >Toggle theme</button>
//         <Content />
//       </div>
//     </themeContext.Provider>
//   )
// }


// ------------ Global State with Context + useReducer | Trạng thái toàn cục --------------

// function App() {

//   const [state, dispatch] = useStore()

//   const {todos, todoInput} = state
  
//   const handleAdd = () => {
//     dispatch(actions.addTodo(todoInput))
//     dispatch(actions.setTodoInput(''))
//     inputRef.current.focus()
//   }

//   const inputRef = useRef()


//   return (
//     <div>
//         <input 
//         ref={inputRef}
//             value={todoInput}
//             placeholder="Enter name..."
//             onChange={e => {
//               dispatch(actions.setTodoInput(e.target.value))
//             }}
//         />
//         <button onClick={handleAdd} >Add</button>

//     {
//       todos.map((todo, index) => (
//         <li key={index}>{todo}</li>
//       ))
//     }
//     </div>
//   )
// }


// => -------------- useImperativeHandle() hook | React JS ---------------

// function App() {

//   const videoRef = useRef()

//   // useEffect(() => {
//   //   console.log(videoRef.current);
//   // })  

//   const handlePlay = () => {
//     videoRef.current.play()
//   }
  

//   const handlePause = () => {
//     videoRef.current.pause()
//   } 

//   return (
//     <div>
//       <Video ref={videoRef} />
//       <button onClick={handlePlay}>play</button>
//       <button onClick={handlePause}>pause</button>
//     </div>
//   )
// }

// => --------------------- CSS module là gì? | Sử dụng CSS module như thế nào? ------------

// function App() {

//   return (
//     <globalStyle>
//       <div>
//         <Contents />
//         <Paragraphs />
//       </div>
//     </globalStyle>
//   )
// }

// // Cotents.js
// import styles from './Contents.css'

// function Contents() {
//   return (
//     <h1 className={styles.heading}>hoang ngoc long</h1> // sẽ lấy classname với tên mới: Contents_heading__mã đặc biệt
//   )

// }

// // globalStyle

// import './globalStyle.css'

// function globalStyle({children}) {
//   return children
// }
// export default globalStyle

// các tagname như h1, *, ... bị global khi build


// => ---------------- Thư viện clsx và classnames | Sử dụng nhiều class & class động trong ReactJS ------


// function sẽ nhận được props khi truyền từ file App() nên dùng destructuring đễ nhận lại
// function Button({primary}) {

//   const clases = (clsx(style.heading, {
//           [style.primary]: primary, // dùng module.css thì phải cho vào mảng như vậy
//           'd-flex': true // chuỗi thì để chuỗi như bth
//         }))
    
//   return (
//           <button 
//             className={clases}
//           >
//             Click me!
//           </button>
//         )
// }


function App() {

  return (
    <div>
      <nav>
        <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/News">News</Link>
          </li>
          <li>
              <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/News" element={<NewsPage/>}/>
      <Route path="/Contact" element={<ContactPage/>} />
    </Routes>
    </div>
  )
}


export default App;
