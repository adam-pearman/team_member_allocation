import {useContext} from "react";
import DataContext from "../../Context/DataContext";

const Header = () => {
    const {employees, selectedTeam} = useContext(DataContext)
    const teamMemberCount = employees.filter((employee) => employee.teamName === selectedTeam).length

    return (
        <header>
            <div className="text-center mb-5 border-b py-5">
                <h1 className="text-4xl mb-5">Team Member Allocation</h1>
                <h3 className="text-2xl">{selectedTeam} has {teamMemberCount} {teamMemberCount === 1 ? "Member" : "Members"}</h3>
            </div>
        </header>
    )
}
export default Header