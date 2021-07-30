import { useState} from 'react'

import { Button} from './Buttons/Index';
import { UserInfo} from './UserInfo/Index'
import { LikesBlock} from './LikesBlock/Index'

import './Index.css';
import girl from '../../../Assets/Image/girl.jpg';

export function Post({text,onlyMe,shareQuantity}){

    const [ liked, setLiked] = useState(false)

    function changeLikedState(){
        setLiked(!liked)
    }

    return(
        <div className="postContainer">

            <UserInfo onlyMe={onlyMe} image={girl} userName='Patricia Santos'/>

            <p className="postContainer__text">{text}</p>

            <div className="postContainer__userInteraction">

                <LikesBlock values={{shareQuantity,liked}}/>

                <div className="postContainer__buttons">

                    <Button
                    liked={liked} 
                    changeLikedState={changeLikedState}
                    text='Curtir' 
                    icon={<i className="far fa-thumbs-up"></i>}
                    />

                    <Button
                    text='Comentários' 
                    icon={<i className="far fa-comment-dots"></i>}
                    />

                    <Button 
                    text='Compartilhamento' 
                    icon={<i className="far fa-share-square"></i>}
                    />

                </div>

            </div>
        </div>

    )
}