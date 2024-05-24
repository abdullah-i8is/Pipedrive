import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Signup from "../screen/signup";
import SignIn from "../screen/signin";
import UserDasboard from "../screen/userDashboard";
import Home from "../screen/home";
import UserDetails from "../screen/userDetails";
import Account from "../screen/account";
import Profile from "../screen/profile";
import ForgetPassword from "../screen/forgetpassword";
import Setting from "../adminScreens/setting";
import SystemAdminLogin from "../systemAdmin/systemAdminLogin";
import OwnerUserSignup from "../companyOwner/ownerUser";
import OwnerTeam from "../companyOwner/ownerTeam";
import Download from "../screen/download";
import CreateAccount from "../screen/createAccount";
import Layout from "../layout";
import UpdatePassword from "../screen/updatePassword";
import VerificationCode from "../screen/verificationCode";
import CaptureScreen from "../screen/captureScreen";
import OwnerReport from "../screen/owner-reports";
import OwnerUserTimeline from "../companyOwner/ownerUsersTimeline";

export default function AppRouter() {

  const token = localStorage.getItem("token")

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>

            {/* Public Routes */}

            <Route path="/download" element={<Download />} />
            <Route path="/signup" element={token === null ? <Signup /> : <Navigate to="/dashboard" />} />
            <Route path="/signin" element={token === null ? <SignIn /> : <Navigate to="/dashboard" />} />
            <Route path="/systemAdminLogin" element={<SystemAdminLogin />} />
            <Route path="/" element={<Home />} />
            <Route path="/capture-screen" element={<CaptureScreen />} />
            <Route path="/:token" element={<Home />} />
            <Route path="/create-account/:code/:email" element={<CreateAccount />} />
            <Route path="/forget-password" element={<ForgetPassword />} />
            <Route path="/update-password/:id" element={<UpdatePassword />} />
            <Route path="/verification-code" element={<VerificationCode />} />

            {/* Private Routes */}

            <Route path="/dashboard" element={token !== null ? <UserDasboard /> : <Navigate to="/" />} />
            <Route path="/timeline/:id" element={token !== null ? <UserDetails /> : <Navigate to="/" />} />
            <Route path="/account" element={token !== null ? <Account /> : <Navigate to="/" />} />
            <Route path="/effective-settings" element={token !== null ? <Setting /> : <Navigate to="/" />} />
            <Route path="/team" element={token !== null ? <OwnerTeam /> : <Navigate to="/" />} />
            <Route path="/reports" element={token !== null ? <OwnerReport /> : <Navigate to="/" />} />
            <Route path="/company-owner-user" element={token !== null ? <OwnerUserSignup /> : <Navigate to="/" />} />
            <Route path="/activity/:id" element={token !== null ? <OwnerUserTimeline /> : <Navigate to="/" />} />
            <Route path="/profile" element={token !== null ? <Profile /> : <Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/signin" />} />

          </Route>

        </Routes>
      </Router>
    </>
  )
}