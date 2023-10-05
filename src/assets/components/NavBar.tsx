export default function NavBar() {
    return (<nav className={"fixed w-full flex flex-row justify-between pr-8 pl-2 items-center h-16 bg-gradient-to-b "}>
        <span className={"util-items-row text-2xl font-raleway"}>
        <img src={'/icon.png'} className={"rounded-full"} width={48} height={48}/>
        AgentOfGrace777
        </span>
        <span className={"flex flex-row gap-8 text-xl font-lato"}>
            <span>About Me</span>
            <span>Contact Me</span>
        </span>
    </nav>)
}