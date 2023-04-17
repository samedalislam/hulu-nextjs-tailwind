import { 
    HomeIcon,
    BoltIcon,
    RectangleStackIcon,
    CheckBadgeIcon,
    MagnifyingGlassIcon,
    UserIcon
 } from '@heroicons/react/24/outline'

import Image from "next/image"
import HeaderItem from "./HeaderItem"

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title="Home" Icon={HomeIcon} />
            <HeaderItem title="TRENDING" Icon={BoltIcon} />
            <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
            <HeaderItem title="COLLECTIONS" Icon={RectangleStackIcon} />
            <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
            <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <Image
        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Hulu_Logo.svg/1200px-Hulu_Logo.svg.png'}
        width={100}
        height={0}
        />
    </header>
  )
}
export default Header