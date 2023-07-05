import GeneratedPassword from "../components/tools/generatedPassword";
import PasswordForm from "../components/tools/passwordForm";

const Page = () => {
    return (
        <div className="p-12 flex flex-col gap-7">
            <GeneratedPassword/>
            <PasswordForm/>
        </div>
    )
}

export default Page;