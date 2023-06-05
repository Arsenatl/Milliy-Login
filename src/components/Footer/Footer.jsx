import React, { useState } from 'react'
import logo from '../../assets/svg/Group 26.svg'
import img from '../../assets/img/headerbg.png'

function Footer() {
    const [btn, setBtn] = useState(true)
    const [inpOne, setInpOne] = useState(true)
    const [inpTwo, setInpTwo] = useState(true)
    const [inpOneHover, setInpOneHover] = useState(false)
    const [inpTwoHover, setInpTwoHover] = useState(false)
    const [inpOneVal, setInpOneVal] = useState('')
    const [inpTwoVal, setInpTwoVal] = useState('')
    const [transform, setTransform] = useState('')

    const handleBtn = (e) => {
        if (inpOne) {
            setInpOneHover(true)
            setTimeout(() => {
                setInpOneHover(false)
            }, 5000);
        }
        if (inpTwo) {
            setInpTwoHover(true)
            setTimeout(() => {
                setInpTwoHover(false)
            }, 5000);
        }
        setTimeout(() => {
            setInpOneHover(false)
            setInpTwoHover(false)
        }, 5000);
        setBtn(true)
        if (e < 760) {
            setTransform('translate-x-[230%]')

        } else {
            setTransform('-translate-x-[230%]')

        }
    }
    const handleFooter = (e) => {
        setBtn(false)
    }
    const handleInpOne = (e) => {
        setInpOneVal(e)
        if (e === '') {
            setInpOne(true)
        } else {
            setInpOne(false)
            setBtn(false)
        }
    }
    const handleInpTwo = (e) => {
        setInpTwoVal(e)
        if (e === '') {
            setInpTwo(true)
        } else {
            setInpTwo(false)
            setBtn(false)
        }
    }
    return (
        <footer className='py-5 footer px-10 relative'>
            <div className='absolute z-[-1] top-0 left-0 blur-md brightness-50 w-full'>
                <img src={img} className='h-[600px] w-full' alt="" />
            </div>
            <div className=''>
                <img className='w-60' src={logo} alt="" />
            </div>
            <div className='flex justify-center mt-20'>
                <div className='w-[60%]'>
                    <form className='grid grid-cols-1 gap-5'>
                        <input onChange={(e) => handleInpOne(e.target.value)} className={`h-16 px-3  outline-none hover:border-green-400  border-2 ${inpOneHover ? 'border-red-700' : 'border-white'} transition-all duration-200 text-green-400 text-xl font-medium rounded-2xl`} type="text" placeholder='ФИО' />
                        <input onChange={(e) => handleInpTwo(e.target.value)} className={`h-16 px-3  outline-none hover:border-green-400  border-2 ${inpTwoHover ? 'border-red-700' : 'border-white'} transition-all duration-200 text-green-400 text-xl font-medium rounded-2xl`} type="number" placeholder='контактный телефон' />
                        <div className='w-full'>
                            <input className='h-16 px-3  outline-none hover:border-green-400  border-2 border-white transition-all duration-200 text-green-400 text-xl font-medium w-full rounded-2xl' type="text" placeholder=' название организации' />
                            <div className='text-end text-green-600 text-xl font-semibold'>

                                <p>*не обязательное поле</p>
                            </div>
                            <div onMouseLeave={(e) => handleFooter(e)} className={`  transition-all flex justify-center  duration-150 relative`}>

                                <button onMouseOver={(e) => handleBtn(e.nativeEvent.screenX)} className={`bg-green-500 rounded-xl ${btn && (inpOne || inpTwo) ? transform : ''} px-6 py-4 duration-500 transition-all text-white text-xl`}>подтвердить</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </footer>
    )
}

export default Footer