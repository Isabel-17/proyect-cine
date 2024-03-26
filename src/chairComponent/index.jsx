import { useEffect, useState } from 'react'
import { ChairSvg } from '../chairSvg'
import { getChairFromJson } from '../getDataFromApi'
import './chairComponent.css'

export function ChairComponent () {
    const [chairs, setChairs] = useState([]);

    useEffect (()  => {
        dataChair()
    },[])



    const dataChair = async () => {
        const result = await getChairFromJson()
        const chairByColor = result.map(chair => ({...chair, color:'#FF768E'}));
        setChairs(chairByColor);
    };
    console.log(dataChair);

    const handleClick = (id) => {
        setChairs(chairs.map(chair => chair.id === id ? {...chair, color: '#FFC4CE'}: chair))
    }

    return (
        <div className='container'>
            <div className='chair'>
                {chairs.map(chair => (
                    <ChairSvg 
                        key={chair.id}
                        chair={chair}
                        color={chair.color}
                        onClick={()=> handleClick(chair.id)}
                    />
                 ))}
            </div>
            
        </div>
    )
}