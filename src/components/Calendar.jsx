import { useEffect, useState } from "preact/hooks"
import { Calendar } from "react-calendar"
import '../../src/calendar.css'
import { useLocation, useRoute } from "preact-iso"

// import { usePathname, useRouter } from 'next/navigation'


const formatDate = (param) => {
    return new Date(param.slice(0, 4), parseInt(param.slice(4, 6)) - 1, parseInt(param.slice(6, 8)))
}

const CalendarContainer = () => {

    const { params } = useRoute()
    const { route } = useLocation()
    const [date, setDate] = useState(formatDate(params.date))
    const [showCalendar, setShowCalendar] = useState(window.innerWidth < 700?false:true)

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




    return (

        <div className={`shadow shadow-black md:w-1/4 md:relative ${showCalendar ? "bottom-0" : "-bottom-[100%]"} transition-all fixed right-0`}>

            <Calendar

                className="calendar"
                locale='es-AR'
                tileClassName="text-white"
                value={date}
                next2Label={null}
                prev2Label={null}
                onClickDay={(e) => {
                    setShowCalendar(false)
                    const date = `${e.getFullYear()}${String(e.getMonth() + 1).padStart(2, "0")}${String(e.getDate()).padStart(2, "0")}`
                    setDate(date)
                    route(`/${date}`)
                }}
            />

            <button className={`shadow shadow-black md:hidden fixed bottom-1 right-1 bg-slate-900 border-[1px] border-slate-700 w-[60px] h-[60px] text-center text-lg rounded cursor-pointer`} onClick={() => { setShowCalendar(!showCalendar) }}>
                {showCalendar ? "x" : "C"}
            </button>
        </div>

    )
}

export default CalendarContainer