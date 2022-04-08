// import axios from 'axios'
import React, { useState, useEffect } from 'react'
// import AuthContext from '../context/AuthContext'
import useAxios from '../utils/useAxios'
import './table.css'

const HomePage = () => {
    const [books, setBooks] = useState([])
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [qty, setQty] = useState()
    const [put, setPut] = useState(false)
    const [id, setId] = useState()
    const [refetch, setRefetch] = useState(false)

    // let { authTokens, logoutUser } = useContext(AuthContext)
    const putBook = (id, title, author, qty) => {
        setPut(true)
        setId(id)
        setTitle(title)
        setAuthor(author)
        setQty(qty)
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
    }

    let api = useAxios()

    useEffect(() => {
        getBooks()
        if (refetch) {
            getBooks()
            setRefetch(false)
        }
    }, [refetch])

    const getBooks = async () => {
        await api.get('/books/allBook')
            .then(res => setBooks(res.data))
            .catch(error => console.error(error))
    }

    const AddBook = async (e) => {
        e.preventDefault();
        await api.post('/books/create/', {
            title: title,
            author: author,
            qty: qty
        }).then(res => {
            // console.log(res)
            setTitle('')
            setAuthor('')
            setQty('')
            setRefetch(true)
        }).catch(error => console.error(error))
    }

    const clickPut = async (e) => {
        e.preventDefault();
        await api.put(`/books/update_delete/${id}`, {
            title: title,
            author: author,
            qty: qty
        })
            .then(res => {
                setPut(false)
                setTitle('')
                setAuthor('')
                setQty("")
                setRefetch(true)
            })
            .catch(error => console.log(error))
    }

    const deleteBook = async (id) => {
        await api.delete(`/books/update_delete/${id}`)
            .then(res => {
                setRefetch(true)
            })
            .catch(error => console.log(error));
    }

    return (
        <div className='container' style={{textAlign:'center'}}>
            <h1>Welcome to Library !</h1>

            <div className="input-group col-lg-4 col-xs-4">
                <div className="w-50 form-floating my-3 mb-3">
                    <input type="text" className="form-control" placeholder="Enter Title of Book" value={title}
                        onChange={e => { setTitle(e.target.value) }}
                    />
                    <label htmlFor="floatingInput">Enter Title of Book</label>
                </div>

                <div className="w-45 form-floating mx-3 my-3 mb-3">
                    <input type="text" className="form-control" placeholder="Enter Author of Book" value={author}
                        onChange={e => { setAuthor(e.target.value) }}
                    />
                    <label htmlFor="floatingPassword">Enter Author of Book</label>
                </div>

                <div className="w-45 form-floating my-3 mb-3">
                    <input type="number" className="form-control" placeholder="Enter Author of Book" value={qty}
                        onChange={e => { setQty(e.target.value) }}
                    />
                    <label htmlFor="floatingPassword">Enter Quantity</label>
                </div>
            </div>

            <div style={{textAlign:"left"}}>
                <button type="button" className={`btn btn-outline-${!put ? 'primary' : 'warning'}`} onClick={!put ? AddBook : clickPut}>{!put ? 'Add Book' : 'Edit Book'}</button>
            </div>

            <div className='mx-3 my-3'>
                <table className=" table table-hover">
                    <thead>
                        <tr style={{align:"center"}}>
                            <th scope="col" style={{width:"6%"}}>ID</th>
                            <th scope="col" >Title</th>
                            <th scope="col" style={{width:"20%"}}>Author</th>
                            <th scope="col" style={{width:"10%"}}>Quantity</th>
                            <th scope="col" style={{width:"15%"}}>Edit</th>
                            <th scope="col" style={{width:"15%"}}> Delete</th>
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
                                    <td>
                                        <button type="button" className="btn btn-outline-warning mx-3 btn-sm"
                                            onClick={() => putBook(ele['id'], ele['title'], ele['author'], ele['qty'])}>
                                            Edit Book
                                        </button>
                                    </td>
                                    <td>
                                        <button type="button" className="btn btn-outline-danger btn-sm"
                                            onClick={() => deleteBook(ele['id'])}>
                                            Delete Book
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

        </div >
    )
}

export default HomePage
