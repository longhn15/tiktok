import { useState, useEffect, useLayoutEffect, memo } from "react";
import Paragraph from "./Paragraph";

// const tabs = ['posts', 'comments', 'albums']

// function Content() {
//     const [title, setTitle] = useState('')
//     const [posts, setPosts] = useState([])
//     const [type, setType]   = useState('posts')

//     const [showGoToTop, setShowGoToTop] = useState(false)

    
//     useEffect(() => {
//         fetch(`https://jsonplaceholder.typicode.com/${type}`)
//             .then(res => res.json())
//             .then(posts => {
//                 setPosts(posts)
//             })
//     }, [type])

//     useEffect(() => {

//         const handleScroll = () => {
//             setShowGoToTop(window.scrollY >= 200)
//         }

//         window.addEventListener('scroll', handleScroll)
        
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])


//     return (
//         <div>
//             {/* <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)}
//             /> */}
//             {tabs.map(tab => (
//                 <button
//                     key={tab}
//                     style={type===tab ? {
//                         color: '#fff',
//                         backgroundColor: '#333'
//                     } : {}}
//                     onClick={() => setType(tab)}
//                 >{tab}</button>
//             ))}

//             <ul>
//                 {
//                     posts.map(post => (
//                         <li key={post.id}>{post.title || post.name}</li>
//                     ))
//                 }
//             </ul>

//             {showGoToTop && 
//                 (
//                     <button 
//                         style={{
//                                 position: 'fixed',
//                                 right: 20,
//                                 bottom: 20
//                             }

//                         }
//                     >
//                         Go To Top
//                     </button>
//                 )
//             }
//         </div>
//     )

// }

// --------------------------

// function Content() {

//     const [width, setWidth] = useState(window.innerWidth)

//     useEffect(() => {

//         const handleRisize = () => {
//             setWidth(window.innerWidth)
//         }

//         window.addEventListener('resize', handleRisize)
        
//         return () => {
//             window.removeEventListener('resize', handleRisize)
//         }

//     }, [])

//     return (
//         <h1>{width}</h1>
//     )
// }

// ------------------------ CountDown bằng setInterval / setTimeout -----------------------
// function Content() {

//     const [countdown, setCountdown] = useState(180)

//     // useEffect này sẽ chỉ được gọi 1 lần đầu (mounted)
//     useEffect(() => {
//         // sẽ lặp lại sau 1s
//         // const timerId = setInterval(() => {
//         //     // prev luôn lấy thằng coutdown hiện tại
//         //     setCountdown(prevState => prevState - 1)
//         //     console.log('countdown');
            
//         // }, 1000);

//         // return () => clearInterval(timerId)
//         console.log('UseEffect');
        

//         const timerId = setTimeout(() => {
//             setCountdown(countdown - 1)
//         }, 1000)

//         return () => clearTimeout(timerId)
//     }, [countdown])
//     // }, [])
    
//     return (
        
//         <div>
//             <h1>{countdown}</h1>
//         </div>
//     )
    
// }

// => ------------- useEffect với chọn nhiều hình ảnh từ URL -----------------------

// function Content() {

//     const [avatar, setAvatar] = useState()

//     useEffect(() => {
//         // cleanup
//         return () => avatar && URL.revokeObjectURL(avatar.preview)

//     }, [avatar])

//     const handlePreviewAvatar = (e) => {
//         const file = e.target.files[0]

//         file.preview = URL.createObjectURL(file)

//         setAvatar(file)
//     }

//     return (
        
//         <div>
//            <input 
//                 type="file"
//                 onChange={handlePreviewAvatar}
//            />
//            {avatar && (
//                 <img src={avatar.preview} alt="" width="80%" />
//            )}
//         </div>
//     ) 
// }
// => --------- useEffect() with fake Chat App | Xử lý các chức năng thời gian thực ----

// const lessons = [
//     {
//         id: 1,
//         name: 'ReactJS là gì? Tại sao nên học ReactJS?'
//     },
//     {
//         id: 2,
//         name: 'SPA/MPA là gì?'
//     },
//     {
//         id: 3,
//         name: 'Arrow function'
//     }

// ]

// function Content() {

//     const [lessonId, setlessonId] = useState(1)

    
//     useEffect(() => {
//         const handleComment = ({detail}) => {
//             console.log(detail);
//         }

//         window.addEventListener(`lesson-${lessonId}`, handleComment)

//         return () => {
//             window.removeEventListener(`lesson-${lessonId}`, handleComment)
//         }
//     }, [lessonId])

//     return (
//         <div>
//           <ul>
//             {lessons.map(lesson => (                
//                 <li 
//                     key={lesson.id}
//                     style={{
//                         color: lessonId === lesson.id ? 'red' : '#333'
//                     }}
//                     onClick={() => setlessonId(lesson.id)}
//                 >
//                     {lesson.name}
//                 </li>
//             ))}
//           </ul>
//         </div>
//     ) 
// }


// => ---------------- useLayoutEffect ----------------

// function Content() {

//     const [count, setCount] = useState(0)

//     useLayoutEffect(() => {
//         if (count > 3) setCount(0)
//     })

//     return  (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>up</button>
//         </div>
//     )
// }

// => -------- useRef() hook | Cách sử dụng useRef() hook -----------

// function Content() {
//     const [count, setCount] = useState(60)

//     const timerId = useRef()
//     const prevCount = useRef()
//     const h1ref = useRef()

//     useEffect(() => {
//         const ref = h1ref.current.getBoundingClientRect()
//         console.log(ref);
//     })

//     useEffect(() => {
//         prevCount.current = count
//     })

//     const handleStart = () => {
//         timerId.current = setInterval(() => {
//             setCount(prev => prev - 1)
//         }, 1000);
//     }

//     const handleStop = () => { 
//         clearInterval(timerId.current)
//     }


//     return (
//         <div style={{ padding: 20}}>
//             <h1 ref={h1ref}>{count}</h1>
//             <button onClick={handleStart}>Start</button>
//             <button onClick={handleStop} >Stop</button>

//         </div>
//     )
// }

// function Content({onIncrease}) {
//     return (
//         <>
//             <h1>Hello ae F8</h1>
//             <button onClick={onIncrease}>Click me!</button>
//         </>
//     )
// }

// export default memo(Content)



// --------- useContext: giúp bỏ qua component trung gian khi truyền props và không cần truyền props -----------------------------


function Content() {
   return (
    <div>
        <Paragraph />
    </div>)
}

export default Content