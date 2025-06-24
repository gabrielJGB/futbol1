import React from 'react'

const Selector = ({ showKeyEvents, setShowKeyEvents }) => {


    return (
        <button
            className={`${showKeyEvents?"bg-slate-700 border-gray-400 text-white":"bg-transparent text-gray-600 hover:text-gray-400"} p-2 mt-2  mb-4 rounded-lg border-[1px] border-gray-700 cursor-pointer text-sm `}
            onClick={() => setShowKeyEvents(!showKeyEvents)}
        >
            Eventos destacados
        </button>
    )
}

export default Selector