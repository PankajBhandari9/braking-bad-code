import React from 'react'

const Details = ({ charId, currentList }) => {
    return (
        <div>
            {
                currentList.map((charDetail) => {
                    if (charId === charDetail.char_id) {
                        return (
                            <div >
                                <h3 className="text-success">Character Details</h3>
                                <div className="d-flex justify-content-center">
                                    <img src={charDetail.img} alt={charDetail.name} width="100" className="rounded-3" />
                                </div>
                                <li><b>Name:</b> {charDetail.name}</li>
                                <li><b>Date of Birth:</b> {charDetail.birthday}</li>
                                <li><b>Occupation:</b> {charDetail.occupation.map(res => `${res}, `)}</li>
                                <li><b>Dead/Alive:</b> {charDetail.status}</li>
                                <li><b>Nickname:</b> {charDetail.nickname}</li>
                                <li><b>Portrayed By:</b> {charDetail.portrayed}</li>
                                <li><b>Appearance:</b> {charDetail.appearance.map(res => `${res}, `)}</li>
                            </div >
                        )
                    }
                })
            }
        </div>
    )
}

export default Details
