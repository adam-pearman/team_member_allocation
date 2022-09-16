import {NavLink} from "react-router-dom";

const Nav = () => {
    return (
        <nav className="flex space-x-5 py-5 bg-gray-200 justify-center sm:justify-start px-8 text-xl">
            <NavLink to="" className={({isActive}) => isActive ? "underline" : "hover:opacity-50"}>Home</NavLink>
            <NavLink to="GroupedTeamMembers" className={({isActive}) => isActive ? "underline" : "hover:opacity-50"}>Grouped Team Members</NavLink>
        </nav>
    )
}
export default Nav