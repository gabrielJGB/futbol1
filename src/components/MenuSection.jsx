import { getFlag } from '@/utils/images'
import { Link } from 'preact-router'
// import { BiSolidTrophy} from 'react-icons/bi'


const MenuSection = ({ league }) => {

    // const [imgUrl, setImgUrl] = useState<string | undefined>(undefined)


    const url = `https://a.espncdn.com/combiner/i?img=/i/teamlogos/countries/500/${league.slug.split(".")[0]}.png&scale=crop&cquality=40&w=40&h=40`
    const logo = getFlag(league.slug.split(".")[0], 40)
    

    return (
        <Link href={`/league/${league.slug}`} className='hover:bg-slate-700 py-2 px-1 flex flex-row items-center gap-2 '>

            {
                logo != undefined ?
                    <img src={url} width={20} height={25} />
                    :
                    <></>
            }
            <div className='text-[13px]'>{league.name}</div>

        </Link>
    )
}

export default MenuSection