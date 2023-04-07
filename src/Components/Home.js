import React from 'react'
import ChooseStateComponents from './ChooseState'
export default function HomeComponents() {
  return (
    <>
    <div className='homeWrap'>
        <div className='weatherSection'>
            Left Components
            <div className='rightSide'>
                <ChooseStateComponents />
                2. weekinfo <br />
                3. Humidity
            </div>
        </div>
    </div>
    </>
  )
}
