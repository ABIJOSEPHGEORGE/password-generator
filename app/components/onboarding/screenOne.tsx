import Image from "next/image";

export default function ScreenOne(){
    return (
        <div className="flex flex-col justify-center items-center w-full p-3">
            <Image src={'/vault.png'} alt="get-started-image" width={300} height={300}/>
            <div className="flex flex-col justify-center items-center gap-5">
                <h1 className="text-3xl text-white font-bold">Your things in vault</h1>
                <p className="text-center text-gray-300 font-light leading-6 text-sm">Vault takes care of your sensitive password, Generate and manage secure passwords with us.</p>
            </div>
        </div>
    )
}