import React from 'react'
import logo from '../../assets/svg/Group 48.svg'
import playMarket from '../../assets/svg/Group 50.svg'
import appStore from '../../assets/svg/Group 51.svg'

function MobileApp() {
    return (
        <section className='bg-mobileApp bg-cover bg-no-repeat bg-center h-[600px] my-5'>
            <div className='px-10'>

                <div className='backdrop-blur-2xl w-max p-5 rounded-xl'>
                    <img src={logo} alt="" />
                </div>
            </div>
            <div className='flex justify-center mt-10'>

                <div className=' flex items-center gap-10 '>
                    <div className='backdrop-blur-2xl p-10 h-full cursor-pointer'>
                        <img src={playMarket} alt="" />
                    </div>
                    <div className='backdrop-blur-2xl p-10 h-full cursor-pointer'>
                        <img src={appStore} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MobileApp