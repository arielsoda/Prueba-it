import NavBar from "./NavBar";

const Layout = (props) => {
    return (
        <div>
            <NavBar products={props.products} />
            <div>
                {props.children}
            </div>
        </div>
    );
};

export default Layout;