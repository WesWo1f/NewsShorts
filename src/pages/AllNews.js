import {useDispatch, useSelector} from 'react-redux'
import incrementCount from '../action/incrementCount'

import React, {useState, useEffect } from "react"
export default function Business() {
  const  [titleOne, setTitleOne] = useState([])
  const  [imageUrlOne, setImageUrlOne] = useState(["https://t3.ftcdn.net/jpg/03/13/47/42/360_F_313474291_fYVBZplE4eSbjyEllrnbecOBE6sBnyLJ.jpg"])
  const  [contentOne, setContentOne] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])

  const  [titleTwo, setTitleTwo] = useState([])
  const  [imageUrlTwo, setImageUrlTwo] = useState(["https://t3.ftcdn.net/jpg/03/13/47/42/360_F_313474291_fYVBZplE4eSbjyEllrnbecOBE6sBnyLJ.jpg"])
  const  [contentTwo, setContentTwo] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])

  const  [titleThree, setTitleThree] = useState([])
  const  [imageUrlThree, setImageUrlThree] = useState(["https://t3.ftcdn.net/jpg/03/13/47/42/360_F_313474291_fYVBZplE4eSbjyEllrnbecOBE6sBnyLJ.jpg"])
  const  [contentThree, setContentThree] = useState(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."])

  const dispatch = useDispatch()
  const count = useSelector(state => state.count) //this count is mapped from the global state

  useEffect(() => {
    fetch('https://inshorts.deta.dev/news?category=all')
       .then((response) => response.json())
       .then((data) => {
          setTitleOne(data.data[count].title);
          setContentOne(data.data[count].content);
          setImageUrlOne(data.data[count].imageUrl);

          setTitleTwo(data.data[count+2].title);
          setContentTwo(data.data[count+2].content);
          setImageUrlTwo(data.data[count+2].imageUrl);
          
          setTitleThree(data.data[count+3].title);
          setContentThree(data.data[count+3].content);
          setImageUrlThree(data.data[count+3].imageUrl);
       })
       .catch((err) => {
          console.log(err.message);
       });
 },[count]);
  return (
    <>
    <h1>All News</h1>
    <div className='flexbox-container'>
      <div className="flexbox-item flexbox-item-1">
        <div className='image-Container'>
          <img src={imageUrlOne} className='card-image'  alt=""></img>
        </div>
        <h3>{titleOne}</h3>
        <p>{contentOne}</p>
        </div>
      <div className="flexbox-item flexbox-item-2">
        <div className='image-Container'>
          <img src={imageUrlTwo} className='card-image' alt=""></img>
        </div>
      <h3>{titleTwo}</h3>
        <p>{contentTwo}</p>
        </div>
      <div className="flexbox-item flexbox-item-3">
      <div className='image-Container'>
      <img src={imageUrlThree} className='card-image' alt=""></img>
      </div>
      <h3>{titleThree}</h3>
        <p>{contentThree}</p>
        </div>
    </div>
    <button onClick={()=>dispatch(incrementCount(1))} >Next</button>
    </>
  );
}