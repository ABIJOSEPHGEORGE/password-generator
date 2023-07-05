'use client'

import { useState } from "react"

export default function PasswordForm(){

    const [length,setLength] = useState<number>(6);
    const [numbers,setNumbers] = useState<boolean>(true);
    const [letters,setLetters] = useState<boolean>(true);
    const [symbols,setSymbols] = useState<boolean>(false);

    return (
        <div className="w-full">
            <form className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <h4 className="text-gray-500 uppercase">Length: {length}</h4>
                    <div className="w-full bg-input rounded-lg flex gap-2 items-center justify-center px-3 py-6">
                        <p className="text-white font-light text-lg">{length}</p>
                        <input id="small-range" type="range" max={32} min={6} value={length} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setLength(parseInt(e.target.value))} className="w-4/5 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-200"/>
                        <p className="text-white font-light text-lg">{32}</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                <h4 className="text-gray-500 uppercase">Settings</h4>
                    <div className="w-full bg-input rounded-lg flex gap-2 items-center justify-between px-5 py-6">
                        <h3 className="text-white font-semibold">Include numbers</h3>
                        <label className="relative inline-flex items-center cursor-pointer">
                            {
                                numbers ? 
                                <input type="checkbox" value="" className="sr-only peer" onChange={()=>setNumbers(!numbers)} checked/>
                                :
                                <input type="checkbox" value="" className="sr-only peer" onChange={()=>setNumbers(!numbers)}/>
                            }
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="w-full bg-input rounded-lg flex gap-2 items-center justify-between px-5 py-6">
                        <h3 className="text-white font-semibold">Include letters</h3>
                        <label className="relative inline-flex items-center cursor-pointer">
                            {
                                letters ? 
                                <input type="checkbox" value="" className="sr-only peer" onChange={()=>setLetters(!letters)} checked/>
                                :
                                <input type="checkbox" value="" className="sr-only peer" onChange={()=>setLetters(!letters)}/>
                            }
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    <div className="w-full bg-input rounded-lg flex gap-2 items-center justify-between px-5 py-6">
                        <h3 className="text-white font-semibold">Include symbols</h3>
                        <label className="relative inline-flex items-center cursor-pointer">
                            {
                                symbols ? 
                                <input type="checkbox" value="" className="sr-only peer" onChange={()=>setSymbols(!symbols)} checked/>
                                :
                                <input type="checkbox" value="" className="sr-only peer" onChange={()=>setSymbols(!symbols)}/>
                            }
                            
                            <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        </label>
                    </div>
                    
                </div>
                <div className="flex justify-center align-center gap-3 mt-10">
                    <button className="text-white font-semibold text-center w-3/4 rounded-sm px-5 py-3 bg-gradient-radial from-button-primary to-button-secondary">Generate Password</button>
                </div>
            </form>
        </div>
    )
}