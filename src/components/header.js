import Logo from "../assets/images/site-logo.svg"
import Avatar from "../assets/images/avatar.svg"


function Header(){
    const navbarList = [
        {
            id:1,
            title:"Movies",
            path:"#"
        },
        {
            id:2,
            title:"Series",
            path:"#"
        },
        {
            id:3,
            title:"Channels",
            path:"#"
        },
        {
            id:4,
            title:"Music",
            path:"#"
        },
    ]
    return(
        <header className="py-5">
            <div className="container">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-[56px]">
                        <a href="#">
                            <img src={Logo} alt="site-logo" width={95} height={51}></img>
                        </a>
                        <ul className="flex items-center gap-[44px]">
                            {navbarList.map(item => (
                                <li className="py-[10px] px-[23px]" key={item.id}>
                                    <a className="font-Ubuntu font-medium text-[24px] text-white leading-[27,58px] hover:text-[#E13C52] duration-300" href={`${item.path}`}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-[20px]">
                        <input className="search-input w-[334px] h-[60px] py-[16px] pl-[52px] pr-[5px] outline-none focus:border-[2px] focus:border-[rgba(0,0,0,0.7)] rounded-lg bg-[rgba(0,0,0,0.7)] placeholder:text-[#2F2F2F] text-white text-[24px] font-Raleway font-semibold" placeholder="Search" name="Search"></input>
                        <button className="flex items-center gap-[8px]">
                            <img src={Avatar} alt="avatar-icon" width={24} height={24}></img>
                            <span className="font-Ubuntu font-medium text-[24px] leading-[28px] text-white">Profile</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header