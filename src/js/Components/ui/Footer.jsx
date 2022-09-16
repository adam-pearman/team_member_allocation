const Footer = () => {
    const today = new Date()
    return (
        <footer>
            <div className="text-center mt-5 py-5 border-t">
                <h5>Team Member Allocation App - {today.getFullYear()}</h5>
            </div>
        </footer>
    )
}
export default Footer