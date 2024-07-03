import './NavBar.css';

function NavBar() {
    return (
        <nav className="bg-orange-200 flex justify-between items-center container mx-auto">
            <img />
            <div>Search Bar here</div>
            <ul className="flex justify-between">
                <li>Home</li>
                <li>Movies</li>
                <li>Collections</li>
                <li>
                    <button>Sign in</button>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
