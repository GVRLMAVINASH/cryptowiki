import React, { Component } from "react";
import Body from "./body";
import Side from "./side";
import "./App.css";
import $ from "jquery";
class App extends Component {
    constructor() {
        super();
        this.state = {
            data: ''
        }
    }
    handle(event) {
        this.setState({
            data: event.target.value
        });
    }
    updateState = () => {
        this.setState({ data: "" });
        var c = "Hell";
        c = document.getElementById("query").value;
        console.log(c);
        document.getElementById("query").value = null;
        $.ajax({
            url: "https://api.coingecko.com/api/v3/coins/" + c,
            type: "GET",
            async: false,
            success: function (response) {
                console.log(response);
                var coinhead = response.name;
                var e3 = response.image.large;
                var e4 = response.genesis_date;
                var e5 = response.market_cap_rank;
                var e6 = response.coingecko_rank;
                var e7 = response.coingecko_score;
                var e8 = response.developer_score;
                var e9 = response.community_score;
                var f0 = response.liquidity_score;
                var f1 = response.public_interest_score;
                var desc = response.description.en;
                document.getElementById("coinheading").innerHTML = coinhead;
                document.getElementById("bImage").src = e3;
                document.getElementById("side").innerHTML =
                    "&emsp;" + "Date of Appearance" +
                    "<br /> " + "&emsp;" + "&emsp;" +
                    e4 +
                    "<br />" +
                    "&emsp;" + "Market Cap Rank" +
                    " - " + e5 +
                    "<br />" +
                    "&emsp;" + "&emsp;" + "Coin Gecko -" +
                    "<br />" +
                    "&emsp;" + "&emsp;" + "&emsp;" + "Rank - " + e6 +
                    "<br />" +
                    "&emsp;" + "&emsp;" + "&emsp;" + "Score -" +
                    "<br />" +
                    "&emsp;" + "&emsp;" + "&emsp;" + e7 + "&emsp;" + "&emsp;" +
                    "<br />" +
                    "&emsp;" + "Developer Score -" +
                    "<br />" + "&emsp;" + "&emsp;" +
                    "&emsp;" + "&emsp;" + e8 +

                    "<br />" +
                    "&emsp;" + "Community Score -" +
                    "<br />" + "&emsp;" + "&emsp;" + "&emsp;" + e9 +
                    "<br />" +
                    "&emsp;" + "Liquidity Score -" +
                    "<br />" + "&emsp;" + "&emsp;" + "&emsp;" + f0 +
                    "<br />" +
                    "&emsp;" + "Public Interest Score -" +
                    "<br />" + "&emsp;" + "&emsp;" + "&emsp;" + f1;

                document.getElementById("bImage").style.height = "150px";
                document.getElementById("bImage").style.width = "150px";
                document.getElementById("bImage").style.margin = "15px 0 0 10px";
                document.getElementById("paragraph").innerHTML = desc;
            }
        });
    };
    render() {
        return (
            <div >

                <div>
                    <div >

                        <div align="center">
                            <h1> CryptoWiki</h1>
                            <input type="text" placeholder="Enter the CryptoCurrency Name" onChange={this.handle.bind(this)} className="dd" id="query" />
                            <button onClick={this.updateState}>Get info About Coin</button>
                            <style>{"body { background-color: #c1e1ec; }"}</style>
                            <h1
                                id="coinheading"
                                style={{
                                    background: "grey",
                                    width: "100%",
                                    fontSize: "20px",
                                    cursor: "pointer"
                                }}
                            ></h1>

                        </div>
                        <div style={{
                            borderwidth: "2px",
                            bordercolor: "black",
                        }}><img id='bImage'></img></div>
                        <Side data={this.state.data} />
                        <Body data={this.state.data} />
                    </div>
                </div>

            </div>
        )
    }
}

export default App;
