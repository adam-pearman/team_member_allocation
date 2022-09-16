import Teams from './components/Teams'
import TeamMembers from "./components/TeamMembers";

const Employees = () => {
    return (
        <main className="w-fit mx-auto">
            <div className="px-12 mb-5 mx-auto">
                <Teams/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                <TeamMembers/>
            </div>

        </main>
    )
}

export default Employees