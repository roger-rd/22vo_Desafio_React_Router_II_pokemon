import Pika from '../assets/img/Pika.png'
import "../assets/css/home.css";


export default function Home() {
    return(

        <div  className="position">
            <div className='position-absolute top-50 start-50 translate-middle'>
                <h1 className='titleHome'>Bienvenidos Maestro Pokemon</h1>
            <img className='imaPika' src={Pika} alt="poke" width={300} />
            </div>
        </div>
        
    )
}