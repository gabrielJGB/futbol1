import { useEffect, useState } from "preact/hooks"
import { Calendar } from "react-calendar"
import '../../src/calendar.css'
import { useLocation, useRoute } from "preact-iso"
import { CalendarDays } from "lucide-preact"

// import { usePathname, useRouter } from 'next/navigation'


const formatDate = (param) => {
    return new Date(param.slice(0, 4), parseInt(param.slice(4, 6)) - 1, parseInt(param.slice(6, 8)))
}

const CalendarContainer = () => {

    const { params } = useRoute()
    const { route } = useLocation()
    const [date, setDate] = useState(formatDate(params.date))
    const [showCalendar, setShowCalendar] = useState(window.innerWidth < 700 ? false : true)

    // const [locationPath, setLocationPath] = useState<any>(new Date(parseInt(pathname.slice(1, 5)), parseInt(pathname.slice(5, 7)) - 1, parseInt(pathname.slice(7, 9))))

    // useEffect(() => {

    //     if (pathname)
    //         setDate(new Date(parseInt(pathname.slice(1, 5)), parseInt(pathname.slice(5, 7)) - 1, parseInt(pathname.slice(7, 9))))

    // }, [pathname])

    useEffect(() => {

        if (date) {
            const date = formatDate(params.date)
            setDate(date)
        }


    }, [date])



    //  setShowCalendar(!showCalendar) 

    return (

        <div
            className={`z-10 flex justify-between flex-col md:bg-transparent bg-[rgb(0,0,0,0.7)] md:h-auto h-[100vh] md:w-full fixed md:relative ${showCalendar ? "bottom-0" : "-bottom-[150%]"} transition-all  right-0`}
            onClick={() => { setShowCalendar(!showCalendar) }}
        >

            <div></div>
            <div className="z-20 " onClick={(e) => { e.stopPropagation() }}>
                <Calendar

                    className="calendar"
                    locale='es-AR'
                    tileClassName="text-white"
                    value={date}
                    next2Label={null}
                    prev2Label={null}
                    onClickDay={(e) => {
                        setShowCalendar(window.innerWidth > 768 ? true : false)
                        const date = `${e.getFullYear()}${String(e.getMonth() + 1).padStart(2, "0")}${String(e.getDate()).padStart(2, "0")}`
                        setDate(date)
                        route(`/${date}`)
                    }}
                />
            </div>



            <button
                className={`z-1 shadow flex items-center justify-center shadow-black md:hidden fixed bottom-1 right-1 bg-lime-400 border-[0px] border-slate-700 w-[60px] h-[60px] text-lg rounded-2xl cursor-pointer`}
                onClick={() => { }}
            >
                <CalendarDays size={25} color="black" />
            </button>
        </div >

    )
}

export default CalendarContainer