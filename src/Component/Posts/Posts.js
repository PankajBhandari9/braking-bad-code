import React from 'react'
import './Posts.css'


const Posts = ({ listCharacter, loading, characterDetails, deleteChar }) => {

    if (loading) {
        return <h2 className="text-danger">Loading...</h2>
    }
    return (
        <table className="table table-hover">
            <thead>
                <tr className="table-success">
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Occupation</th>
                    <th scope="col">Date Of Birth</th>
                    <th scope="col">Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    listCharacter.map((listChar) => {
                        return (

                            <tr key={listChar.char_id} 
                                className="cursor-pointer">
                                <th scope="row">{listChar.char_id}</th>
                                <td onClick={() => characterDetails(listChar.char_id)}>{listChar.name}</td>
                                <td>{listChar.occupation.map((oc) => `${oc}, `)}</td>
                                <td>{listChar.birthday}</td>
                                <td>{listChar.status}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Posts
