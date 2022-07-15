import Link from "next/link";
import { FiGithub } from "react-icons/fi";

const MyGitHub = () => {
    return (
        <div className="flex items-center justify-center w-1/5">
            <Link href="https://github.com/arielsoda">
                <button className="flex items-center">
                    <p className="">GitHub</p>
                    <FiGithub />
                </button>
            </Link>
        </div>
    );
};

export default MyGitHub;