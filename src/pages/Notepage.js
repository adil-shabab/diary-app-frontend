import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { useNavigate, Link } from "react-router-dom";




const Notepage = () => {

    let { id } = useParams()
    const [note, setNote] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        return () => {
            getNote()
        };
    }, [])


    let getNote = async () => {
        if (id === 'new') return


        let response = await fetch(`/api/notes/${id}/`)
        let data = await response.json()
        setNote(data)
    }




    let updateNote = async () => {
        fetch(`/api/notes/update/${id}/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }

    // let updateNote = async () => {
    //     fetch(`/api//update/${id}`, {
    //         method: "PUT",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(note.body)
    //     })
    //     navigate('/')
    // }


    // let handleSubmit = () => {
    //     updateNote()
    //     navigate('/')
    // }



    // let deleteNote = async () => {
    //     fetch(`/api/delete/${id}`, {
    //         method: 'DELETE',
    //         'headers': {
    //             'Content-Type': 'applications/json'
    //         }
    //     })
    //     navigate('/')
    //     function refreshPage(){
    //         window.location.reload(false)
    //     }
    //     refreshPage()
    // }

    let deleteNote = async () => {
        fetch(`/api/notes/delete/${id}`, {
            method: "DELETE",
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        navigate('/')
        function refreshPage(){
            window.location.reload(false)
        }
        refreshPage()
    }



    let createNote = async () => {
        fetch('/api/notes/create/', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }




    function refreshPage() {
        window.location.reload(false);
    }


    let handleSubmit = () => {
        if(id !== 'new' && note.body ==  ''){
            deleteNote()
        }else if(id !== 'new'){
            updateNote()
        }else if(id === 'new' && note.body !== null){
            createNote()
        }
        navigate('/')

        refreshPage()
    }
    

    // let handleUpdate = () => {
    //     updateNote()
    //     navigate('/')
    // }

  return (
    <div className='note'>
        <div className="flex">
        <Link to='/'>
            <button><i className="fa-solid fa-backward"></i></button>
        </Link>
        {id == 'new' ? (
            <span></span>
            ) : (
            <button onClick={handleSubmit}>Save <i className="icon fa-solid fa-bookmark"></i></button>
            )}
        {id !== 'new' ? (
            <button onClick={deleteNote}>Delete <i className="icon fa-solid fa-trash"></i></button>
            ) : (
                <button onClick={handleSubmit}>
                    Done
                </button>
            )}
        
        </div>
        <textarea onChange={(e) => {
            setNote({...note, 'body':e.target.value})
        }} value={note?.body}></textarea>
    </div>
  )  
}

export default Notepage