import React, { Component } from "react";

export class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastActiveId : 0,
            navbarData: [
                {
                    id: 0,
                    name: "Home",
                    icon: "fas fa-home",
                    isActive: true,
                    activeAttribute:{
                        class:"bg-green-800",
                        style: {
                            "boxShadow":
                                "0 4px 6px -1px rgba(96, 223, 12, 0.75), 0 2px 4px -1px rgba(23, 7, 141, 0.86)",
                        }
                    }
                },
                {
                    id: 1,
                    name: "SWOT",
                    icon: "",
                    isActive: false,
                    activeAttribute:{
                        class:"",
                        style:""
                    }
                },
                {
                    id: 2,
                    name: "PEST",
                    icon: "",
                    isActive: false,
                    activeAttribute:{
                        class:"",
                        style:""
                    }
                },
                {
                    id: 3,
                    name: "TELOS",
                    icon: "",
                    isActive: false,
                    activeAttribute:{
                        class:"",
                        style:""
                    }
                },
            ],
        };
        this.navbarHandler = this.navbarHandler.bind(this)
    }
    navbarHandler(newId){
    }
    render() {
        const ifActive = [];
        this.state.navbarData.map((data) => {
            if (data.isActive) {
                ifActive.push({
                    class: "bg-green-800",
                    style: {
                        "boxShadow":
                            "0 4px 6px -1px rgba(96, 223, 12, 0.75), 0 2px 4px -1px rgba(23, 7, 141, 0.86)",
                    },
                });
            } else {
                ifActive.push({ class: "", style: {} });
            }
        });
        console.log(this.state.navbarData.isActive);
        return (
            <div id="Navigation Bar" className="w-full">
                <nav className="m-6 ml-8 bg-gray-900 p-2 shadow-md">
                    <div className="flex px-2">
                        {this.state.navbarData.map((data, index) => {
                            return (
                                <a
                                    className={
                                        "p-5 mr-1 text-white no-underline border-white uppercase tracking-wide font-bold text-xs py-3 " +
                                        ifActive[index].class
                                    }
                                    href="#"
                                    key={index}
                                    style={ifActive[index].style}
                                >
                                    <i className={data.icon + " mr-1"}></i>
                                    {data.name}
                                </a>
                            );
                        })}
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
