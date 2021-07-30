import './Index.css'

export function Pending(){

    return(

        <div className="containerPending">

            <div className="containerPending__title">
                <i class="fas fa-hourglass-start"></i>
                <span>Pendências</span>
            </div>

            <div className="containerPending__date">
                <p>Seg, 21 de Junh</p>
            </div>

            <p>Você não possui nenhuma pendência para hoje</p>

        </div>
    )
}