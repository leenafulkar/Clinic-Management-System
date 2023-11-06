import Menus from "./components/Menus";
import Home from "./components/Home";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Register from "./components/Register";
import DoctorHome from "./doctor/DoctorHome";
import { useSelector } from "react-redux";
import WrongURL from "./components/WrongURL";
import AddReception from "./doctor/AddReception";
import ReceptionDetail from "./doctor/ReceptionDetail";
import AddPatient from "./reception/AddPatient"
import PatientDetail from "./reception/PatientDetails";
import Appointments from "./doctor/Appointments";
import UpdateReception from "./doctor/UpdateReception";

export default function App() {

  const dinfo = useSelector(state => state.dinfo.value)

  return <>
    <Menus />


    <Routes>
      {dinfo.isLogin ? <>
        <Route path="/doctorhome" element={<DoctorHome />} />
        <Route path="/addreception" element={<AddReception />} />
        <Route path="/receptiondetails" element={<ReceptionDetail />} />
        <Route path="/addpatient" element={<AddPatient />} />
        <Route path="/patientdetail" element={<PatientDetail />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/updatereception" element={<UpdateReception />} />







      </> :
        <><Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /></>
      }




      <Route path="*" element={<WrongURL />} />

    </Routes >
    {/* <Service /> */}
  </>



}