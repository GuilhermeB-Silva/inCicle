import './Index.css'

export function LikesBlock({values}){

    const { shareQuantity,liked} = values

    return(

        <div className="likesContainer">

            <p> 
                <i className="far fa-thumbs-up"></i> {liked ? '1 Pessoa curtiu isso' : 'Seja o primeiro a curtir'}
            </p>

            <div>
                <span>0 comentários</span>
                <span>{shareQuantity ? shareQuantity : 0} compartilhamentos</span>
            </div>
    
        </div>
    )
}