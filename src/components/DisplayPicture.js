import React from 'react'

function DisplayPicture({heightofmainimage, heightofuserimage}) {
    return (
        <div style={{position: "relative"}}>
            <div>
                <img src="https://m.media-amazon.com/images/I/61nKGKkNHeL._SL1204_.jpg" style={{height: heightofmainimage}}/>
            </div>
            <div style={{position: "absolute", top: "27%", right: "-13px"}}>
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{height: heightofuserimage}}/>
            </div>
        </div>
    )
}

export default DisplayPicture
