import React, { useEffect, useState } from 'react';
import DownloadProduct from '../images/ss-track-banner.svg';
import { BsWindows, BsApple } from 'react-icons/bs'
import axios from 'axios'

const Download = () => {

    const [downloadOS, setDownloadOS] = useState("mac")
    const [loading1, setLoading1] = useState(false)
    const [loading2, setLoading2] = useState(false)
    const apiUrl = "https://ss-track.vercel.app/api/v1";

    const handleDownload = async (type) => {
        console.log(type);
        setLoading1(type === "WIN" ? true : false)
        setLoading2(type === "MAC" ? true : false)
        try {
            const res = await axios.get(`${apiUrl}/timetrack/updatedFile`)
            if (res.status === 200) {
                var url = res.data.data.url;
                var anchor = document.createElement('a');
                anchor.href = url;
                anchor.download = 'screenshot-time.exe';
                setTimeout(() => {
                    setLoading1(false)
                    setLoading2(false)
                }, 1000)
                document.body.appendChild(anchor);
                anchor.click();
                document.body.removeChild(anchor);
            }
            else {
                setLoading1(false)
                setLoading2(false)
                console.log("download link error 1 =====>", res);
            }
        } catch (error) {
            setLoading1(false)
            setLoading2(false)
            console.log("download link error 2 =====>", error);
        }
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [])

    console.log(loading1);

    return (
        <>
            <div className='download-container'>
                {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <p className='download-title'>Download <span style={{ color: "#7ACB59" }}>sstrack.io</span></p>
                    <p className='download-title'>Select Your Operating System</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <BsWindows color="white" size={70} />
                        <BsApple color="white" size={70} style={{ marginLeft: 30 }} />
                    </div>
                </div> */}
                <div className='download-main-section'>
                    <div className='download-card-header'>
                        <p>Download application</p>
                    </div>
                    <div className='download-card'>
                        <div>
                            {/* <h4>Download employee deskstop application for {downloadOS === "mac" ? "mac OS" : "windows"}</h4> */}
                            <h4>Download employee desktop application for windows</h4>
                            <p>This application is <span style={{ fontWeight: "700", color: "#7ACB59" }}>for employees, managers</span></p>
                            <p>Company administrators can review the tracked hours and screenshots on this website.</p>
                            <img width={300} src={DownloadProduct} alt="" />
                            <div style={{ margin: "30px 0" }}>
                                <h4>Description</h4>
                                {/* <p>This is a {downloadOS === "mac" ? "mac OS" : "Windows"} desktop application for employess. it is started and stopped by an employee to track time and take their computer screenshot during work.</p> */}
                                <p>This is a Windows desktop application designed for employees. It allows an employee to start and stop tracking their work time and captures screenshots of their computer during work hours.</p>
                                <p>Once the stop button is activated, it ceases to take screenshots. Your work time and screenshots can be reviewed in My Home, where you also have the option to delete any screenshots.</p>
                            </div>
                            {/* <div style={{ margin: "30px 0" }}>
                                <h4>Installation Steps</h4>
                                <p>This is a Windows desktop application designed for employees. It allows an employee to start and stop tracking their work time and captures screenshots of their computer during work hours.</p>
                                <p>Once the stop button is activated, it ceases to take screenshots. Your work time and screenshots can be reviewed in My Home, where you also have the option to delete any screenshots.</p>
                            </div> */}
                            <div>
                                <h4>Post-installation</h4>
                                <p>Once the application is installed, launch it and click "Start" to begin monitoring your time and capturing screenshots.</p>
                            </div>
                        </div>
                        <div className='download-action-container'>
                            {/* {downloadOS === "windows" ? (
                                <div>
                                    <p>Need mac version ?</p>
                                    <button onClick={() => setDownloadOS("mac")}> <AiFillApple color="white" size={20} /> Download for mac </button>
                                </div>
                            ) : ( */}
                            <div>
                                <p>Choose your OS ?</p>
                                <button className={loading1 ? "disable-download-button" : "download-button"} disabled={loading1 ? true : false} onClick={() => handleDownload("WIN")}>
                                    {loading1 ? "Downloading..." : (
                                        <>
                                            <BsWindows color="white" size={18} style={{ margin: "-5px 10px 0 0" }} />
                                            Download for windows
                                        </>
                                    )}
                                </button>
                                <br />
                                <br />
                                <button className={loading2 ? "disable-download-button" : "download-button"} disabled={loading2 ? true : false} onClick={() => handleDownload("MAC")}>
                                    {loading2 ? "Downloading..." : (
                                        <>
                                            <BsApple color="white" size={18} style={{ margin: "-5px 10px 0 0" }} />
                                            Download for mac
                                        </>
                                    )}
                                </button>
                            </div>
                            {/* )} */}
                            {/* <div style={{ margin: "20px 0" }}>
                                <p>Need linux version ?</p>
                                <button> <FaUbuntu color="white" size={20} /> Download for linux </button>
                            </div>
                            <div>
                                <p>Need browser extension ?</p>
                                <button>Download extension</button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Download;