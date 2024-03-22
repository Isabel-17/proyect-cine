import { Link } from 'react-router-dom';
import './routerToHome.css'
export function Home () {
    return (

        <h2><Link to="/" className='home'>Home</Link></h2>
    )
}
