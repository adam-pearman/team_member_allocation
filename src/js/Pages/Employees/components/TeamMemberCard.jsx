import classNames from "../../../utils/class-names";
import femaleProfile from "../../../../images/femaleProfile.jpeg";
import maleProfile from "../../../../images/maleProfile.jpeg";
import {useContext} from "react";
import DataContext from "../../../Context/DataContext";

const TeamMemberCard = ({employee}) => {
    const {handleEmployeeCardClick, selectedTeam} = useContext(DataContext)
    return (
        <div id={employee.id}
             className={classNames(
                 employee.teamName === selectedTeam ? "outline outline-black" : "shadow",
                 "divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow w-min mx-auto border border-gray-200 cursor-pointer"
             )}
             onClick={handleEmployeeCardClick}
        >
            <div className="w-64 h-64">
                <img src={employee.gender === 'female' ? femaleProfile : maleProfile} alt="Profile" className="w-full"/>
            </div>
            <div className="px-4 py-4 sm:px-6">
                <h5 className="text-lg font-bold">Full Name: {employee.fullName}</h5>
                <p>
                    <span className="font-bold">Designation: </span>
                    {employee.designation}
                </p>
            </div>
        </div>
    )
}
export default TeamMemberCard