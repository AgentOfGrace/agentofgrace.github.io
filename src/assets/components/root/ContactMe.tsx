import { SiYoutube, SiRoblox, SiDiscord } from 'react-icons/si'; 

export default function ContactMe() {
    return (
    <main className={"bg-gradient-to-b from-gray-300 to-gray-400 pt-40"}>
        <section className={"flex flex-col justify-between gap-20 max-w-2xl mx-auto"}>
            <div className={"flex-1 flex justify-center"}>
            <h1 className={"font-raleway text-6xl"}>Contact Me</h1>
            </div>
            <div className={"flex-1 flex max-md:flex-col items-center text-3xl p-4 max-md:gap-4 md:justify-between"}>
            <div className={"flex-1 flex justify-center font-raleway"}>
            <a href={"https://www.youtube.com/@agentofgrace7777"} className={"util-items-row border border-black rounded-xl p-1 hover:text-red-600 transition-all w-10 hover:w-full hover:scale-105 group overflow-hidden"}>
            <SiYoutube className={"flex-grow flex-none"} /> 
            <span className={"group-hover:scale-100 scale-0 transition-all text-lg text-black flex-none group-hover:flex-shrink-0 flex-grow flex-shrink overflow-hidden"}>@AgentOfGrace777</span>
            </a>
            </div>
            <div className={"flex-1 flex justify-center font-raleway"}>
            <a href={"https://www.roblox.com/users/435769692/profile"} className={"util-items-row border border-black rounded-xl p-1 hover:text-gray-200 transition-all w-10 hover:w-full hover:scale-105 group overflow-hidden"}>
            <SiRoblox className={"flex-grow flex-none"} /> 
            <span className={"group-hover:scale-100 scale-0 transition-all text-lg text-black flex-none group-hover:flex-shrink-0 flex-grow flex-shrink overflow-hidden"}>@AgentOfGrace</span>
            </a>
            </div>
            <div className={"flex-1 flex justify-center font-raleway"}>
            <span className={"util-items-row border border-black rounded-xl p-1 hover:text-discord transition-all w-10 hover:w-full hover:scale-105 group overflow-hidden"}>
            <SiDiscord className={"flex-grow flex-none"} /> 
            <span className={"group-hover:scale-100 scale-0 transition-all text-lg text-black flex-none group-hover:flex-shrink-0 flex-grow flex-shrink overflow-hidden"}>agentofgrace</span>
            </span>
            </div>
            </div>
            
        </section>
    </main>)
}