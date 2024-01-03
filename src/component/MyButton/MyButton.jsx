import './style.css'
import Button from 'react-bootstrap/Button';

function MyButton ({name,color, onClick}){
    return(
        <div>
            <Button onClick={()=> onClick()} className='w-100 mt-4' variant={color}>{name}</Button>
        </div>
    )
} export default MyButton
 