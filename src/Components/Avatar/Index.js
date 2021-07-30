import user from '../../Assets/Image/user.jpg'
import './Index.css';

export function Avatar(){

    return(

        <div className="avatarContainer">

            <div className="container__image">
                <img src={user} alt="user avatar" className="avatarImage" />
            </div>

            <div className="avatarContainer__avatarDetails">

               <h2>Kenedy Morais</h2>
               <span><b>@kenedymorais</b></span>
               <span>Front-end Developer</span>

            </div>

            <div className="avatarContainer__place">
                <span>Rio Branco/Acre - Brasil</span>
                <span>Incicle</span>
                <span>Uninorte</span>

            </div>
        </div>


    )
}