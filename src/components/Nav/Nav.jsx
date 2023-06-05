import React, { useState } from 'react'
import logo from '../../assets/svg/Group 26.svg'
import close from '../../assets/svg/Group 42.svg'
function Nav() {
    const [modal, setModal] = useState(false)
    // const [transform,setTransform]=useState('tr')
    const handleModal = () => {
        setModal(true)
    }
    const handleModalClose = () => {
        setModal(false)
    }
    const handleRegister = () => {

        let scrollInter = document.querySelector(".footer");
        scrollInter.scrollIntoView({
            block: "start",
            behavior: "smooth",
        });

    }
    return (
        <>
            <nav className='bg-green-500 border-b-2  py-5 px-10 flex items-center justify-between'>
                <div>
                    <img className='w-60' src={logo} alt="" />
                </div>
                <div className='flex items-center gap-5 text-white font-bold text-2xl'>
                    <p onClick={handleRegister} className='hover:text-green-700 cursor-pointer duration-300 transition-all'>Login</p>
                    <p onClick={handleModal} className='hover:text-green-700 cursor-pointer duration-300 transition-all'>Register</p>
                </div>
                <div className='text-white font-bold text-2xl'>
                    <p>ism familiya <br /> nomer tel</p>
                </div>
            </nav>
            <div className={`w-full h-[100vh] fixed ${modal ? 'top-0' : 'top-[-100%]'} transition-all duration-700 left-0 flex justify-center items-center backdrop-blur-xl z-20`}>
                <div>
                    <form className='flex flex-col gap-5'>

                        <input className='h-16 px-3  outline-none hover:border-green-400  border-2 transition-all duration-200 text-green-400 text-xl font-medium rounded-2xl' type="text" placeholder='register' />
                        <input className='h-16 px-3  outline-none hover:border-green-400  border-2 transition-all duration-200 text-green-400 text-xl font-medium rounded-2xl' type="password" placeholder='register' />
                        <button className='bg-green-500 rounded-xl hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 px-6 py-4 duration-1000 text-white text-xl'>подтвердить</button>
                    </form>
                </div>
            </div>
            <div onClick={handleModalClose} className={`${modal ? 'top-5' : 'top-[-100%]'} transition-all duration-500 fixed right-5 z-20 cursor-pointer`}>
                <img src={close} alt="" />
            </div>
        </>
    )
}

export default Nav