import ScreenOne from "./screenOne";

export default function GetStarted(){
    return (
        <div className="flex justify-center align-center flex-col gap-8">
            <ScreenOne/>
            <div className="flex justify-center align-center">
                <button className="text-white font-semibold text-center w-2/4 rounded-md px-5 py-3 bg-gradient-radial from-button-primary to-button-secondary">Get Started</button>
            </div>
        </div>
    )
} 