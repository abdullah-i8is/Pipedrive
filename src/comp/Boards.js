import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import CreateTask from './CreateTask';
import { FaRegUserCircle } from "react-icons/fa";

const Boards = () => {

    const [boards, setBoards] = useState([
        { title: "Qualified", total: 0, deals: [], },
        { title: "Contact Made", total: 0, deals: [], },
        { title: "Demo Scheduled", total: 0, deals: [], },
        { title: "Proposal Made", total: 0, deals: [], },
        { title: "Negotiations Started", total: 0, deals: [], },
    ])

    const [dealForm, setDealForm] = useState({
        contactPerson: "",
        organization: "",
        title: "",
        value: "",
    })

    const [open, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(null);

    function handleCreateDeal() {
        const createdDeal = boards.map((board, ind) => {
            if (ind === index) {
                return {
                    ...board,
                    deals: [...board.deals, dealForm]
                }
            }
            else {
                return board;
            }
        })
        setBoards(createdDeal)
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: 20
        }}>
            {boards?.map((board, i) => {
                return (
                    <div style={{
                        backgroundColor: "#f5f5f6",
                        height: '100vh',
                        width: "100%",
                        borderRadius: "10px",
                        margin: "0 10px 0 0",
                        padding: '20px 10px'
                    }}>
                        <p style={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "black",
                            marginBottom: 10
                        }}>{board.title}</p>
                        <p style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "grey",
                        }}>{"PKR " + board.total}</p>
                        <div style={{ marginTop: 20 }}>
                            {board.deals.map((deal) => {
                                return (
                                    <div style={{
                                        backgroundColor: "white",
                                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
                                        borderRadius: "6px",
                                        padding: '10px',
                                        cursor: "pointer",
                                        margin: "10px 0"
                                    }}>
                                        <p style={{ fontWeight: "600", color: "black", fontSize: 20 }}>{deal?.title} Deal</p>
                                        <p style={{ fontWeight: "600", color: "#65686F", padding: 0, margin: "10px 0" }}>{deal?.contactPerson}, {deal?.organization}</p>
                                        <div style={{ display: "flex", alignItems: "center", marginTop: 20 }}>
                                            <FaRegUserCircle color="grey" size={25} />
                                            <p style={{ fontWeight: "600", color: "#65686F", padding: 0, margin: "0 0 0 10px" }}>PKR{deal?.value}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <button
                            onClick={() => {
                                setOpen(true)
                                setIndex(i)
                            }}
                            className='add-deal-button'
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                backgroundColor: "#2d8647",
                                height: "40px",
                                borderRadius: "6px",
                                border: "none",
                                outline: "none",
                                cursor: "pointer",
                                fontSize: "20px",
                                fontWeight: "400",
                                color: "whitesmoke",
                                marginTop: 40
                            }}><FaPlus color="white" /></button>
                    </div>
                )
            })}
            <CreateTask open={open} setOpen={setOpen} handleCreateDeal={handleCreateDeal} dealForm={dealForm} setDealForm={setDealForm} />
        </div>
    );
}

export default Boards;