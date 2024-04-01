import { useEffect, useState } from 'react'
import { ChairSvg } from '../chairSvg'
import { getChairFromJson, markChairAsBussy } from '../getDataFromApi'
import './chairComponent.css'

export function ChairComponent ({day, hour, handleClick, colorByStatus}) {
    const [chairs, setChairs] = useState([]);

    useEffect (()  => {
        dataChair()
    },[])

    const dataChair = async () => {
        const result = await getChairFromJson()
        setChairs(result);
    };


    return (
        <div className='container'>
            <div className='chair'>
                {chairs.map(({id}) => (
                    <div 
                        key={id}
                        onClick={()=> handleClick(id)}> 
                        <ChairSvg color={colorByStatus(day, hour, id)}
                    />
                    </div>
                 ))}
            </div>
        </div>
    )
}