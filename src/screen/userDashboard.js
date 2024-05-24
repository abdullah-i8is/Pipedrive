
import React, { useEffect, useState } from "react";
import line from "../images/line.webp";
import check from "../images/online.webp";
import screenshot from "../images/white.svg";
import setting from "../images/setting.webp";
import { Link, useNavigate } from "react-router-dom";
import UserDashboardSection from "./component/userDashboardsection";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import useLoading from "../hooks/useLoading";
import axios from "axios";
import offline from "../images/not-active.svg";
// import Pusher from 'pusher-js';
import moment from 'moment-timezone';
import { getEmployess } from "../store/adminSlice";
import { useDispatch } from "react-redux";

function UserDasboard() {

    const [lastScreenshot, setLastScreenshot] = useState(null)
    const [activeUser, setActiveUser] = useState(null)
    const { loading, setLoading } = useLoading()
    const [data, setData] = useState(null);
    const [data2, setData2] = useState([]);
    const navigate = useNavigate();
    let token = localStorage.getItem('token');
    let user = JSON.parse(localStorage.getItem('items'));
    let headers = {
        Authorization: 'Bearer ' + token,
    }
    const apiUrl = "https://ss-track.vercel.app/api/v1";
    const dispatch = useDispatch();

    const getAdminData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://ss-track.vercel.app/api/v1/superAdmin/allEmployeesworkinghour`, {
                headers: headers,
            })
            if (response.status) {
                setLoading(false)
                const onlineUsers = response.data?.onlineUsers?.length > 0 ? response.data?.onlineUsers : []
                const offlineUsers = response.data?.offlineUsers?.length > 0 ? response.data?.offlineUsers : []
                const allUsers = [...onlineUsers, ...offlineUsers];
                setData2(allUsers.filter((f) => f.isArchived === false && f.UserStatus === false))
            }
            console.log("error +==========>", response);
        } catch (error) {
            setLoading(false)
            console.log("error +==========>", error);
            console.log(error);
        }
    }

    const getManagerData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://ss-track.vercel.app/api/v1/manager/dashboard`, {
                headers: headers,
            })
            if (response.status) {
                setLoading(false)
                const onlineUsers = response.data?.onlineUsers?.length > 0 ? response.data?.onlineUsers : []
                const offlineUsers = response.data?.offlineUsers?.length > 0 ? response.data?.offlineUsers : []
                const allUsers = [...onlineUsers, ...offlineUsers];
                setData2(allUsers.filter((f) => f.isArchived === false && f.UserStatus === false))
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    const getOwnerData = async () => {
        setLoading(true)
        try {
            const response = await axios.get(`https://ss-track.vercel.app/api/v1/owner/getCompanyemployee`, {
                headers: headers,
            })
            if (response.status) {
                setLoading(false)
                const onlineUsers = response.data?.onlineUsers?.length > 0 ? response.data?.onlineUsers : []
                const offlineUsers = response.data?.offlineUsers?.length > 0 ? response.data?.offlineUsers : []
                const allUsers = [...onlineUsers, ...offlineUsers];
                console.log(response.data);
                setData2(allUsers.filter((f) => f.isArchived === false && f.UserStatus === false))
            }
        } catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    async function getUserData() {
        setLoading(true)
        try {
            const response = await axios.get(`${apiUrl}/timetrack/hours`, {
                headers,
            })
            if (response.status) {
                setData(response.data)
                setLoading(false)
                console.log(response);
            }
        }
        catch (error) {
            setLoading(false)
            console.log(error);
        }
    }

    useEffect(() => {
        if (user?.userType === "user") {
            getUserData()
        }
        if (user?.userType === "admin") {
            getAdminData()
        }
        if (user?.userType === "owner") {
            getOwnerData()
        }
        if (user?.userType === "manager") {
            getManagerData()
        }
    }, [])

    // var pusher = new Pusher('334425b3c859ed2f1d2b', {
    //     cluster: 'ap2'
    // });

    // var channel = pusher.subscribe('ss-track');

    // channel.bind('my-user', (data) => {
    //     setActiveUser(data?.data)
    //     console.log("active user ===>", data?.data);
    // });

    // useEffect(() => {
    //     var channel = pusher.subscribe('ss-track');
    //     channel.bind("new-ss", (data) => {
    //         setLastScreenshot(data?.data)
    //         console.log("new ss ===>", data);
    //     });
    //     return () => {
    //         channel.unbind("new-ss");
    //     };
    // }, [])

    // channel.bind('my-event', (data) => {
    //     console.log(JSON.stringify(data));
    // });

    const items = JSON.parse(localStorage.getItem('items'));

    const offsetInMinutes = moment.tz(items?.timezone).utcOffset();
    const offsetInHours = offsetInMinutes / 60;
    const offsetSign = offsetInHours >= 0 ? '+' : '-';
    const formattedOffset = `${offsetSign}${Math.abs(offsetInHours)}`;

    console.log(data2);
    console.log(items);

    return (
        <div>
            <div className="container">
                <div className="userHeader">
                    <div>
                        <h5>Employee Dashboard</h5>
                    </div>
                    <div className="headerTop">
                        <h6>All times are UTC {formattedOffset}</h6>
                        <img src={setting} alt="setting.png" style={{ cursor: "pointer" }} onClick={() => navigate("/account")} />
                    </div>
                </div>
                <div className="mainwrapper">
                    <div className="userDashboardContainer">
                        <div className="dashheadings">
                            <p style={{ fontSize: "18px", color: "#0D3756" }} className="dashheadingtop">Employee</p>
                            <p style={{ fontSize: "18px", color: "#0D3756" }} className="dashheadingtop textalign">Last active</p>
                            <p style={{ fontSize: "18px", color: "#0D3756" }} className="dashheadingtop textalign">Today</p>
                            <p style={{ fontSize: "18px", color: "#0D3756" }} className="dashheadingtop textalign">Yesterday</p>
                            <p style={{ fontSize: "18px", color: "#0D3756" }} className="dashheadingtop textalign">This week</p>
                            <p style={{ fontSize: "18px", color: "#0D3756" }} className="dashheadingtop textalign">This Month</p>
                        </div>
                        {loading ? (
                            <>
                                <Skeleton count={1} height="107px" style={{ margin: "0 0 10px 0" }} />
                                <Skeleton count={1} height="107px" style={{ margin: "0 0 10px 0" }} />
                                <Skeleton count={1} height="107px" style={{ margin: "0 0 10px 0" }} />
                                <Skeleton count={1} height="107px" style={{ margin: "0 0 10px 0" }} />
                                <Skeleton count={1} height="107px" style={{ margin: "0 0 10px 0" }} />
                                <Skeleton count={1} height="107px" style={{ margin: "0 0 10px 0" }} />
                            </>
                        ) : (
                            user?.userType === "user" ? (
                                <div onClick={() => navigate(`/timeline/${data?.userId}`)} className={`dashsheadings ${data?.isActive === true ? "activeColorChange" : "bgColorChange"}`} key={data?.userId}>
                                    <div className="companyNameverified">
                                        <img src={activeUser?.isActive ? check : data?.data?.isActive ? check : offline} alt="Verified" />
                                        <h5 className="dashCompanyName">{data?.data?.name}</h5>
                                    </div>
                                    <div className="companyNameverified lastActive" style={{ width: "100%" }}>
                                        <img
                                            className="screenShotPreview"
                                            src={lastScreenshot?.key ? lastScreenshot?.key : data?.data?.lastScreenshot?.key ? data?.data?.lastScreenshot?.key : screenshot}
                                            alt="Screenshot"
                                        />
                                        <p className="dashheadingtop">
                                            ({data?.data?.lastActiveTime === "0 minutes ago" ? "a minute ago" : data?.data?.lastActiveTime})
                                        </p>
                                    </div>
                                    <div className="nameVerified">
                                        <p className="dashheadingtop textalign">{data?.data?.totalHours?.daily}</p>
                                        <p className="screenShotAmount" style={{ color: data?.isActive === false && "#28659C" }}>${data?.data?.billingAmounts?.daily}</p>
                                    </div>
                                    <div className="nameVerified">
                                        <p className="dashheadingtop textalign">{data?.data?.totalHours?.yesterday}</p>
                                        <p className="screenShotAmount" style={{ color: data?.isActive === false && "#28659C" }}>${data?.data?.billingAmounts?.yesterday}</p>
                                    </div>
                                    <div className="nameVerified">
                                        <p className="dashheadingtop textalign">{data?.data?.totalHours?.weekly}</p>
                                        <p className="screenShotAmount" style={{ color: data?.isActive === false && "#28659C" }}>${data?.data?.billingAmounts?.weekly}</p>
                                    </div>
                                    <div className="nameVerified">
                                        <p className="dashheadingtop textalign">{data?.data?.totalHours?.monthly}</p>
                                        <p className="screenShotAmount" style={{ color: data?.isActive === false && "#28659C" }}>${data?.data?.billingAmounts?.monthly}</p>
                                    </div>
                                </div>
                            ) : (user?.userType === "owner" || user?.userType === "admin" || user?.userType === "manager") && (
                                data2.sort((a, b) => {
                                    // Sort by isActive
                                    if (a.isActive && !b.isActive) {
                                        return -1; // a should come before b
                                    }
                                    if (!a.isActive && b.isActive) {
                                        return 1; // b should come before a
                                    }
                                    // If both users have the same isActive status, then sort alphabetically
                                    const nameA = a.userName.toLowerCase();
                                    const nameB = b.userName.toLowerCase();
                                    if (nameA < nameB) {
                                        return -1;
                                    }
                                    if (nameA > nameB) {
                                        return 1;
                                    }
                                    return 0;
                                }).map((user, index) => {
                                    return (
                                        <div className="dashsheadings" key={user?.userId} onClick={() => navigate(`/timeline/${user?.userId}`)}>
                                            <div className="companyNameverified">
                                                <img src={user?.userId === activeUser?._id && activeUser?.isActive === true ? check : user?.isActive === true ? check : offline} alt="Verified" />
                                                <h5 className="dashCompanyName">{user?.userName}</h5>
                                            </div>
                                            <div className="companyNameverified lastActive" style={{ width: "100%" }}>
                                                <img
                                                    className="screenShotPreview"
                                                    src={lastScreenshot?.user_id === user?.userId ? lastScreenshot?.key : user?.recentScreenshot ? user?.recentScreenshot?.key : screenshot}
                                                    alt="Screenshot"
                                                />
                                                <p className="dashheadingtop">
                                                    ({user?.minutesAgo === "0 minutes ago" ? "a minute ago" : user?.minutesAgo})
                                                </p>
                                            </div>
                                            <div className="nameVerified">
                                                <p className="dashheadingtop textalign">{user?.totalHours?.daily}</p>
                                                <p className="screenShotAmount" style={{ color: user?.isActive === true && "#28659C" }}>${user?.billingAmounts?.daily}</p>
                                            </div>
                                            <div className="nameVerified">
                                                <p className="dashheadingtop textalign">{user?.totalHours?.yesterday}</p>
                                                <p className="screenShotAmount" style={{ color: user?.isActive === true && "#28659C" }}>${user?.billingAmounts?.yesterday}</p>
                                            </div>
                                            <div className="nameVerified">
                                                <p className="dashheadingtop textalign">{user?.totalHours?.weekly}</p>
                                                <p className="screenShotAmount" style={{ color: user?.isActive === true && "#28659C" }}>${user?.billingAmounts?.weekly}</p>
                                            </div>
                                            <div className="nameVerified">
                                                <p className="dashheadingtop textalign">{user?.totalHours?.monthly}</p>
                                                <p className="screenShotAmount" style={{ color: user?.isActive === true && "#28659C" }}>${user?.billingAmounts?.monthly}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            )
                        )}
                    </div>
                </div>
            </div>
            <img className="userDasboardLine" src={line} />
        </div>
    )
}

export default UserDasboard;