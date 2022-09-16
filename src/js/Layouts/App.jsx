import Header from "../Components/ui/Header";
import Employees from "../Pages/Employees/Employees";
import Footer from "../Components/ui/Footer";
import {useState, useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import GroupedTeamMembers from "../Pages/GroupedTeamMembers/GroupedTeamMembers";
import Nav from "../Components/ui/Nav";
import NotFound from "../Pages/NotFound/NotFound";
import {DataProvider} from "../Context/DataContext";

function App() {
  return (
    <DataProvider>
        <BrowserRouter>
            <Nav/>
            <Header/>
            <Routes>
                <Route index element={<Employees/>}/>
                <Route path="GroupedTeamMembers" element={<GroupedTeamMembers/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </DataProvider>
  );
}
export default App;
