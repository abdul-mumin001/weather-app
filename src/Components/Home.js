import React from 'react'
import LeftComponents from './Left';
import ChooseStateComponents from './ChooseState';
import WeekInfoCardComponents from './WeekInfoCard';
import HumidityComponents from './Humidity';
export default function HomeComponents() {
  return (
    <>
    <div className='homeWrap'>
        <div className='weatherSection'>
           <LeftComponents />
            <div className='rightSide'>
                <ChooseStateComponents />
                <WeekInfoCardComponents /> <br />
               <HumidityComponents />
            </div>
        </div>
    </div>
    </>
  )
}
