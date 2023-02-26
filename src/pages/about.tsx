import Link from "next/link";

export default function About() {
    return <div className="w-full min-h-screen bg-black">
        <div className='relative z-10 w-full max-w-screen-2xl mx-auto p-12 py-24 space-y-12 md:space-y-24'>

            <div className="w-28 md:w-60">
                <Link href="/home">
                    <img src="/img/button-home.png" alt="" />
                </Link>
            </div>

            <img src="/img/about-crezno.png" alt="" />
        </div>
    </div>
}