import React, { useState, useCallback, useEffect, useRef } from 'react';

const Password = () => {
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState('');

    // useRef
    const passwordRef=useRef(null);

    const generatePassword = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) {
            str += '0123456789';
        }
        if (charAllowed) {
            str += '!@#$%^&*()_+{}|:"<>?-=[]\\;\',./';
        }

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass = str.charAt(char) + pass;
        }
        setPassword(pass);

    }, [length, numberAllowed, charAllowed, setPassword]);

    const copyPassword=useCallback(()=>{
        passwordRef.current?.select();
        passwordRef.current?.setSelectionRange(0,3);
        window.navigator.clipboard.writeText(password);
    },[password])
    useEffect(() => {
        generatePassword();
    }, [length, numberAllowed, charAllowed, generatePassword]);

    return (
        <>
            <div className='w-full h-screen bg-zinc-900 text-white flex flex-col justify-center items-center'>
                <div className='w-full max-w-md shadow-md rounded-lg px-4 text-orange-600 bg-zinc-500'>
                    <h1 className='text-xl text-white text-center mb-2'>Password Generator</h1>
                    <div className='flex shadow rounded-lg overflow-hidden mb-4'>
                        <input type="text" value={password} className='outline-none w-full px-3 bg-white py-1' readOnly ref={passwordRef} />
                        <button onClick={copyPassword} className='px-2 py-0.5 bg-blue-600 outline-none shrink-0'>copy</button>
                    </div>
                    <div className='flex text-sm gap-x-2'>
                        <div className='flex items-center gap-x-1 py-2'>
                            <input type="range"
                                min={6}
                                max={100}
                                value={length}
                                className='cursor-pointer'
                                onChange={(e) => { setLength(e.target.value) }} />
                            <label className='font-semibold'>Length:{length}</label>
                        </div>
                        <div className='flex items-center gap-x-1 py-2'>
                            <input type="checkbox"
                                defaultChecked={numberAllowed}
                                id='numberInput'
                                onChange={() => {
                                    setNumberAllowed((prev) => !prev)
                                }} />
                            <label className='font-semibold'>Number</label>
                        </div>
                        <div className='flex items-center gap-x-1 py-2'>
                            <input type="checkbox"
                                defaultChecked={charAllowed}
                                id='charInput'
                                onChange={() => {
                                    setCharAllowed((prev) => !prev)
                                }} />
                            <label className='font-semibold'>Character</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Password;