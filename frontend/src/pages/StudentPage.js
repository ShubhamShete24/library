import axios from 'axios'
import React, { useEffect, useState } from 'react'

function StudentPage() {
    const [books, setBooks] = useState([])

    const getBooks = async () => {
        await axios.get('http://127.0.0.1:8000/books/allBook')
            .then(res => setBooks(res.data))
            .catch(error => console.error(error))
    }

    useEffect(() => {
        getBooks()
    }, [])
    
  return (
    <div className='container'>
        <div className='mx-3 my-3'>
                <table className=" table table-hover">
                    <thead>
                        <tr style={{align:"center"}}>
                            <th scope="col" style={{width:"6%"}}>ID</th>
                            <th scope="col" >Title</th>
                            <th scope="col" style={{width:"20%"}}>Author</th>
                            <th scope="col" style={{width:"10%"}}>Quantity</th>
                        </tr>
                    </thead>
                    <tbody >
                        {books.map((ele, index) => {
                            return (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td ><div className="row1">{ele['title']}</div></td>
                                    <td ><div className="row1">{ele['author']}</div></td>
                                    <td ><div className="row1">{ele['qty']}</div></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default StudentPage