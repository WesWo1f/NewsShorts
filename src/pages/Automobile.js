import {useDispatch, useSelector} from 'react-redux'
import incrementCount from '../action/incrementCount'

import React, {useState, useEffect } from "react"
export default function Business() {
  const  [titleOne, setTitleOne] = useState([])
  const  [imageUrlOne, setImageUrlOne] = useState([])
  const  [contentOne, setContentOne] = useState([])

  const  [titleTwo, setTitleTwo] = useState([])
  const  [imageUrlTwo, setImageUrlTwo] = useState([])
  const  [contentTwo, setContentTwo] = useState([])

  const  [titleThree, setTitleThree] = useState([])
  const  [imageUrlThree, setImageUrlThree] = useState([])
  const  [contentThree, setContentThree] = useState([])

  const dispatch = useDispatch()
  const count = useSelector(state => state.count) //this count is mapped from the global state

  useEffect(() => {
    fetch('https://inshorts.deta.dev/news?category=automobile')
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
    <h1>Automobile</h1>
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
