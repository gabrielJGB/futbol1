import { useRoute } from 'preact-iso';
import { Link } from 'preact-router'
import React from 'react'
import { getDates } from '../../../utils/time';

const DateSelector = () => {

    const { params } = useRoute()
    const { selectedDate, previousDate, nextDate } = getDates(params.date);

    return (
        <div className='flex flex-row justify-between items-center  w-full shadow-none  md:shadow  md:shadow-slate-900 bg-slate-800 text-xs text-center font-bold md:rounded mb-10 mx-auto'>

            <Link href={`/${previousDate.string}`} className='active:text-white w-full  py-3 text-gray-400 cursor-pointer md:hover:text-white'>
                {previousDate.formated}
            </Link>

            <div className='w-full  py-3  border-b-[2px] border-lime-400 text-lime-400'>
                {selectedDate.formated}
            </div>

            <Link href={`/${nextDate.string}`} className='active:text-white w-full py-3 text-gray-400 md:hover:text-white hover:text--[--tw-primary]'>
                {nextDate.formated}
            </Link>

        </div>
    )

}

export default DateSelector