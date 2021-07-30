import './Index.css'

export function UserInfo({onlyMe,image,userName}){

    const priv = (<span> <i className='fas fa-lock'/> Somente eu</span>)
    const publ  = (<span> <i className='fas fa-globe-americas'/> Público</span>)

    return(

        <div className="postContainer__userInfo">
            <img src={image} alt="user image" className="postContainer__userImage" />

            <div>
                <h4>{userName}</h4>

                <span>
                    <i className="far fa-clock"></i> Há cerca de 8 horas 
                </span>

                {onlyMe ? priv : publ}

            </div>

            <i className="fas fa-chevron-down"></i>
            
        </div>
    )
}