import { useState } from "react";
import "./index.css";
// import { useDrop } from "react-dnd";
import { useDrag } from "react-dnd";
import Player from "./items";
import { addData } from "../../store/slices/UserSlice";
import {useDispatch} from "react-redux";

function SideBar() {

    const dispatch = useDispatch();


    const [optionData , setOptionData] = useState([
        {name: "Shariq1" , number: "03421" , size:"normal" },
        {name: "Shariq2" , number: "03422" , size:"large" },
        {name: "Shariq3" , number: "03423" , size:"normal" },
        {name: "Shariq4" , number: "03424" , size:"normal" },
        {name: "Shariq5" , number: "03425" , size:"large" },
        {name: "Shariq6" , number: "03426" , size:"large" },
        {name: "Shariq7" , number: "03427" , size:"normal" },
        {name: "Shariq8" , number: "03428" , size:"large" },
    ])

    const movePlayerToTeam = (item) => {
        dispatch(addData(item));
    };

    return (
        <div className="side-bar">
            <div className="row">
                {optionData.map((eachData,i) => (
                    <div key={i} className="col-md-12">
                        <Player
                            item={eachData}
                            key={i}
                            playerType="optionData"
                            onDropPlayer={movePlayerToTeam}
                            index={i}
                        />
                    </div>
                    
                ))}
            </div>
        </div>
    )

}

export default SideBar;