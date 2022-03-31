import React, {useState} from 'react';
import { Col, Image } from 'react-bootstrap';
function Topping({ data, totalPrice }){

const [selectedImg, setSelectedImg] = useState(false)
const checklistToggle = () => {
    if(!selectedImg){
        setSelectedImg(true);
        totalPrice(3000)
    } else{
        setSelectedImg(false)
        totalPrice(-3000)
    }
}
    return(
        <>
            <Col onClick={checklistToggle} md={3} className='text-center toping-cnt'>
            {selectedImg === true ? <Image src="/img/done-status.svg" className='done-img'></Image> : ""}
                <Image src={data.image}></Image>
                <p className='text-center'>{data.name}</p>
            </Col>
        </>
    );

    }

export default Topping;