import { useEffect, useState } from "react";
import "./index.css";
import { Resizable } from 'react-resizable';
// import "jquery-sortable";
import 'jquery-ui-bundle';
import $ from "jquery";
import { useDrop } from "react-dnd";
import { useSelector, useDispatch } from "react-redux";
import { removeData, duplicateData } from "../../store/slices/UserSlice";

function MainScreen() {

    const jq = () => {
        $(".sortable").sortable();
    }

    /// FOR NORMAL CARD SIZE ///

    const smallElement = (elem) => {

        $(elem).closest(".wigetCard").removeClass('col-md-4').removeClass('col-md-6').addClass("col-md-3");
        console.log("small");

    }

    const normalElement = (elem) => {
        $(elem).closest(".wigetCard").removeClass('col-md-3').removeClass('col-md-6').addClass("col-md-4");
        console.log("medium");
    }

    const largeElement = (elem) => {
        $(elem).closest(".wigetCard").removeClass('col-md-4').removeClass('col-md-3').addClass("col-md-6");
        console.log("large");
    }

    /// FOR NORMAL CARD SIZE ///


    /// FOR LARGE CARD SIZE ///

    const elementSmall = (elem) => {

        $(elem).closest(".wigetCard").removeClass('col-md-9').removeClass('col-md-12').addClass("col-md-6");
        console.log("small");

    }

    const elementNormal = (elem) => {
        $(elem).closest(".wigetCard").removeClass('col-md-6').removeClass('col-md-12').addClass("col-md-9");
        console.log("medium");
    }

    const elementLarge = (elem) => {
        $(elem).closest(".wigetCard").removeClass('col-md-6').removeClass('col-md-9').addClass("col-md-12");
        console.log("large");
    }

    /// FOR LARGE CARD SIZE ///


    /// FOR CALCULATION OF DUPLICATE ITEM \\\

    const calculateWidth = (data, i, elem) => {
        let eleWidth = $(elem).closest(".wigetCard").outerWidth(true);
        let parentWidth = $(elem).closest(".wigetCard").parent().outerWidth();
        let widthPercent = eleWidth / parentWidth * 100;
        console.log(eleWidth, parentWidth, widthPercent);
        addDuplicate(data, i, widthPercent);
    }

    /// FOR CALCULATION OF DUPLICATE ITEM \\\


    jq();


    /// GETTING DATA FROM STORE \\\

    const dispatch = useDispatch();

    const data = useSelector((state) => {
        return state.data
    });

    /// GETTING DATA FROM STORE \\\


    /// DELETE DATA FROM STORE \\\

    const deleteData = (i) => {
        dispatch(removeData(i));
    }

    /// DELETE DATA FROM STORE \\\


    /// DUPLICATE DATA \\\

    const addDuplicate = (data, i, eleWidth) => {

        dispatch(duplicateData({
            index: i + 1,
            data: { ...data, width: eleWidth }
        }));
    }

    /// DUPLICATE DATA \\\


    /// DRAG & DROP SETUP \\\

    const [{ isOver }, addToTeamRef] = useDrop({
        accept: "optionData",
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    });

    /// DRAG & DROP SETUP \\\

    return (
        <div className="main-screen">
            <div className="row sortable"
                id="1"
                ref={addToTeamRef}
            >


                {(data.length)
                    ?
                    data.map((eachData, i) => {
                        if (eachData.size == "normal") {

                            var widthClass = "col-md-4 wigetCard";

                            if (eachData.width && eachData.width < 40 && eachData.width > 30) {
                                widthClass = "col-md-4 wigetCard"
                            }

                            if (eachData.width && eachData.width < 30 && eachData.width > 20) {
                                widthClass = "col-md-3 wigetCard"
                            }

                            if (eachData.width && eachData.width < 60 && eachData.width > 40) {
                                widthClass = "col-md-6 wigetCard"
                            }

                            return (
                                <div key={i} className={widthClass}>

                                    <div className="card text-left mt-2">

                                        <div className="card-body">

                                            <button onClick={() => {
                                                deleteData(i)
                                            }}>delete</button>

                                            <button onClick={(b) => {
                                                calculateWidth(eachData, i, b.target);
                                            }}>Duplicate</button>

                                            <h5>Normal</h5>

                                            <h4 className="card-title">Name: <span>{eachData.name}</span></h4>

                                            <p className="card-text">Number: <span>{eachData.number}</span></p>

                                            <button onClick={(e) => {
                                                smallElement(e.target)
                                            }}>small</button>

                                            <button onClick={(e) => {
                                                normalElement(e.target)
                                            }}>normal</button>

                                            <button onClick={(e) => {
                                                largeElement(e.target)
                                            }}>large</button>

                                        </div>

                                    </div>

                                </div>
                            )
                        }

                        if (eachData.size == "large") {

                            var largeClass = "col-md-9 wigetCard";

                            if (eachData.width && eachData.width < 80 && eachData.width > 70) {
                                largeClass = "col-md-9 wigetCard"
                            }

                            if (eachData.width && eachData.width < 60 && eachData.width > 40) {
                                largeClass = "col-md-6 wigetCard"
                            }

                            if (eachData.width && eachData.width < 110 && eachData.width > 90) {
                                largeClass = "col-md-12 wigetCard"
                            }

                            return (
                                <div key={i} className={largeClass}>

                                    <div className="card text-left mt-2">

                                        <div className="card-body">

                                            <button onClick={() => {
                                                deleteData(i)
                                            }}>delete</button>

                                            <button onClick={(b) => {
                                                calculateWidth(eachData, i, b.target);
                                            }}>Duplicate</button>

                                            <h5>LARGE</h5>

                                            <h4 className="card-title">Name: <span>{eachData.name}</span></h4>

                                            <p className="card-text">Number: <span>{eachData.number}</span></p>

                                            <button onClick={(e) => {
                                                elementSmall(e.target)
                                            }}>small</button>

                                            <button onClick={(e) => {
                                                elementNormal(e.target)
                                            }}>normal</button>

                                            <button onClick={(e) => {
                                                elementLarge(e.target)
                                            }}>large</button>

                                        </div>

                                    </div>

                                </div>
                            )
                        }

                    })
                    :
                    null
                }

                {(isOver) ? <div className="col-md-4">
                    Drop Here
                </div>
                    :
                    null
                }
            </div>
        </div>
    );
}

export default MainScreen;