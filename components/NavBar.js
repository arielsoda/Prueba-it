import Search from "./Search";
import ButtonHome from "./ButtonHome";
import MyGitHub from "./MyGitHub";

const NavBar = () => {
    return (
        <div className="flex items-center w-full shadow-lg h-28">
            <ButtonHome />
            <Search />
            <MyGitHub />
        </div>
    )
};

export default NavBar;