import { Post} from './Post/Index'
import './Index.css';

export function Feed(){
    return(
        <div className="feedContainer">
            <Post onlyMe text='Essa publicação está configurada no modo Privado "Somente eu" '/>
            <Post shareQuantity={3} text='kkkkk'/>
        </div>
    )
}