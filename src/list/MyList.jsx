import React from 'react'

function MyList() {
  return (
    <div className='itemlist'>
        <h1>List of names</h1>
        {listitems.map((item=>
        <h2>{item.name}</h2>
        ))} 
    </div>
  )
}

export default MyList



const listitems =[
    {id:1,name:"Rose",age:20,color:'red'},
    {id:2,name:"Favour",age:21,color:'pink'},
    {id:3,name:"Judith",age:22,color:'purple'},
    {id:4,name:"Amy",age:23,color:'yellow'}
]