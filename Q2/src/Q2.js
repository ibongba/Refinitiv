import React,{useEffect,useState} from 'react'
import axios from 'axios'
const Q2 = () =>{

  const [cate,setCate] = useState([])
  const [text,setText] = useState('')
  useEffect(() =>{
    axios.get('https://api.publicapis.org/categories')
    .then(res => {
      const data = res.data
      setCate(data)
      // console.log(data)
    })
    .catch(err => {
      console.log(err.response || err)
    })
  },[])

  const onInputChange = e =>{
    setText(e.target.value)
  }

  const filtered = cate.filter(val => val.toLowerCase().includes(text.toLowerCase()))
  return (
    <div>
      <h1>Table</h1>
      <div style={{width:'70%',margin:'auto'}}>
        <div>
          <input type="text" onChange={onInputChange} placeholder="Search..."/>
        </div>
        
        <table style={{width : '100%',margin:'auto',border:'1px solid black',marginTop : '16px'}}>
          <thead >
            <tr>
              <th style={{textAlign:'left',border:'1px solid black'}}>Name</th>
            </tr>
          </thead>
          <tbody>
            {
            filtered.map(val => (
              <tr key={val}>
                <td style={{border:'1px solid black'}}>{val}</td>
              </tr>
            ) )
            }
          </tbody>
      
  
        </table>
      </div>  
      
    </div>
    
  )
}
export default Q2