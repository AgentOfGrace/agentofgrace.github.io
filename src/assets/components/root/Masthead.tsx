import { useMediaQuery } from 'react-responsive';
export default function Masthead() {
    const useMobile = useMediaQuery({ query: "(min-width: 720px)" });
    return (<header className={"flex max-md:flex-col w-full h-screen"}>
        <div className={"absolute w-full h-screen -z-10 opacity-50 blur-sm"}>
            <img src={'./banner.png'} className={"object-cover w-full h-[110vh]"} />
        </div>
        <section className={"flex flex-col justify-center items-center md:flex-1 max-md:py-32 max-md:text-center"}>
            <div className={"flex flex-col gap-2"}>
            <h1 className={"font-raleway text-6xl max-md:text-3xl opacity-0 animate-fadeLeft"}>AgentOfGrace777</h1>
            <p className={"font-lato text-3xl max-md:text-xl opacity-0 animate-fadeLeftDelay"}>Rhythm Addict and A Pro Gamer.</p>
            </div>
        </section>
        <section className={"flex flex-col justify-center items-center md:flex-1"}>
            
            <div className={"hover:scale-105 transition-all"}>
            <iframe src={"https://www.youtube.com/embed/xM_m1kl6k2Q"} width={useMobile ? "428" : "270"} height={useMobile ? "241" : "142"}></iframe>
            </div>
        </section>
    </header>)
}