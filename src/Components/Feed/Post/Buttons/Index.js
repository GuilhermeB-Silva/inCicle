import './Index.css';

export function Button({text,icon,liked,changeLikedState}){
    return(

        <button className={`button ${liked && 'liked'}`} onClick={changeLikedState}> 
            {icon}
            {text}
        </button>
    )
}