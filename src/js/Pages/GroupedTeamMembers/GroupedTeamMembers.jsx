import {useContext, useState} from "react";
import {Disclosure} from "@headlessui/react";
import DataContext from "../../Context/DataContext";

const GroupedTeamMembers = () => {
    const {employees, selectedTeam, setSelectedTeam} = useContext(DataContext)
    const [groupedEmployees, setGroupedEmployees] = useState(groupTeamMembers())

    function groupTeamMembers() {
        const teams = []

        const teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA')
        const teamA = {team: 'TeamA', members: teamAMembers, collapsed: selectedTeam !== 'TeamA'}
        teams.push(teamA)

        const teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB')
        const teamB = {team: 'TeamB', members: teamBMembers, collapsed: selectedTeam !== 'TeamB'}
        teams.push(teamB)

        const teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC')
        const teamC = {team: 'TeamC', members: teamCMembers, collapsed: selectedTeam !== 'TeamC'}
        teams.push(teamC)

        const teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD')
        const teamD = {team: 'TeamD', members: teamDMembers, collapsed: selectedTeam !== 'TeamD'}
        teams.push(teamD)

        return teams
    }

    function handleTeamClick(event) {
        const transformedGroupedEmployees = groupedEmployees.map((groupedEmployees) =>
            groupedEmployees.team === event.currentTarget.name
                ? {...groupedEmployees, collapsed: !groupedEmployees.collapsed}
                : groupedEmployees
        )

        setGroupedEmployees(transformedGroupedEmployees)
        setSelectedTeam(event.currentTarget.name)
    }

    return (
        <main>
            {
                groupedEmployees.map((item) => {
                    return (
                        <div className=" px-4 sm:px-64 mb-4">
                            <Disclosure as="div" key={item.team} className="cursor-pointer text-center border border-gray-300 rounded-xl w-full" defaultOpen={!item.collapsed}>
                                <Disclosure.Button name={item.team} className="w-full py-4" onClick={handleTeamClick}>
                                    Team Name: {item.team}
                                </Disclosure.Button>
                                <Disclosure.Panel id={"collapse_" + item.team} className="pb-4 space-y-4">
                                    <hr/>
                                    {
                                        item.members.map(member => {
                                            return (
                                                <div key={member.fullName}>
                                                    <h5>
                                                        Full Name: {member.fullName}
                                                    </h5>
                                                    <p>
                                                        Designation: {member.designation}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    }
                                </Disclosure.Panel>
                            </Disclosure>
                        </div>
                    )
                })
            }
        </main>
    )
}
export default GroupedTeamMembers