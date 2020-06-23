import React, { Component } from "react";
import Navbar from "./components/Navbar";

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="App">
                <Navbar />
                <div id="content" className="bg-gray-900 m-8">
                    <div id="SWOT" className="pb-10">
                        <form>
                            <div
                                id="form-title"
                                className="w-full justify-center bg-gray-900 text-white text-center text-2xl uppercase p-2"
                            >
                                <h1 className="p-2">SWOT Analysis OF</h1>
                                <input
                                    className="bg-gray-900 p-3 text-center"
                                    style={{
                                        boxShadow:
                                            "0px 0px 4px 4px rgba(96, 223, 12, 0.75)",
                                    }}
                                    value="Write The Title Here"
                                    onChange={function () {}}
                                ></input>
                            </div>
                            <div
                                id="form-cotent"
                                className="grid grid-cols-2 gap-2 bg-gray-900 p-3"
                            >
                                <div className="bg-yellow-700 text-white p-3">
                                    <span className="bg-yellow-800 p-2">
                                        Strength
                                    </span>
                                    <textarea className="bg-yellow-700 text-white h-64 w-full p-3 mt-2">
                                        Example : Things your company does well
                                    </textarea>
                                </div>
                                <div className="bg-purple-700 text-white p-3">
                                    <span className="bg-purple-800 p-2">
                                        Weaknesses
                                    </span>
                                    <textarea className="bg-purple-700 text-white h-64 w-full p-3 mt-2">
                                        Example : Things your companies lacks
                                    </textarea>
                                </div>
                                <div className="bg-green-700 text-white p-3">
                                    <span className="bg-green-800 p-2">
                                        Opportunities
                                    </span>
                                    <textarea className="bg-green-700 text-white h-64 w-full p-3 mt-2">
                                        Example : Press/media coverage of your
                                        company
                                    </textarea>
                                </div>
                                <div className="bg-red-700 text-white p-3">
                                    <span className="bg-red-800 p-2">
                                        Threats
                                    </span>
                                    <textarea className="bg-red-700 text-white h-64 w-full p-3 pt-2 mt-2">
                                        Example : Emerging Competitors
                                    </textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
