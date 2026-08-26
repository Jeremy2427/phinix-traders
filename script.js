let botRunning = false;
let botInterval = null;
let activeBot = "Apex";
let totalStake = 0;
let totalPayout = 0;
let contractsWon = 0;
let contractsLost = 0;
let numberRuns = 0;
let profitLoss = 0;

let journalHistory = "";
function changeWallet(){

    let choice = prompt(
`Wallet

1 = Deposit
2 = Withdraw
3 = Transfer`
    );

    const wallet = document.querySelector(".wallet-btn");

    if(choice=="1"){
        wallet.innerHTML="Deposit ▼";
    }

    if(choice=="2"){
        wallet.innerHTML="Withdraw ▼";
    }

    if(choice=="3"){
        wallet.innerHTML="Transfer ▼";
    }

}

function changeVolatility() {

    let choice = prompt(
`Choose Volatility

1 = Volatility 10
2 = Volatility 10 (1s)
3 = Volatility 25
4 = Volatility 25 (1s)
5 = Volatility 50
6 = Volatility 50 (1s)
7 = Volatility 75
8 = Volatility 75 (1s)
9 = Volatility 100
10 = Volatility 100 (1s)`
    );

    const market = document.querySelectorAll(".trade-box")[0];

    if(choice=="1") market.innerHTML="Volatility 10 Index ▼";
    if(choice=="2") market.innerHTML="Volatility 10 (1s) Index ▼";
    if(choice=="3") market.innerHTML="Volatility 25 Index ▼";
    if(choice=="4") market.innerHTML="Volatility 25 (1s) Index ▼";
    if(choice=="5") market.innerHTML="Volatility 50 Index ▼";
    if(choice=="6") market.innerHTML="Volatility 50 (1s) Index ▼";
    if(choice=="7") market.innerHTML="Volatility 75 Index ▼";
    if(choice=="8") market.innerHTML="Volatility 75 (1s) Index ▼";
    if(choice=="9") market.innerHTML="Volatility 100 Index ▼";
    if(choice=="10") market.innerHTML="Volatility 100 (1s) Index ▼";

}

function changeTicks() {

    let choice = prompt(
`Choose Number of Ticks

1
2
3
4
5
6
7`
    );

    if(choice >= 1 && choice <= 7){

        document.querySelectorAll(".trade-box")[1].innerHTML =
        "Number of ticks: " + choice + " ▼";

    }

}

function changeContract() {

    let choice = prompt(
`Choose Trade Type

1 = Over / Under
2 = Matches / Differs
3 = Even / Odd
4 = Rise / Fall`
    );

    const contract = document.querySelectorAll(".trade-box")[2];

    if(choice=="1"){
        contract.innerHTML = "Over / Under ▼";
        document.querySelector(".over").innerHTML = "OVER";
        document.querySelector(".under").innerHTML = "UNDER";
    }

    if(choice=="2"){
        contract.innerHTML = "Matches / Differs ▼";
        document.querySelector(".over").innerHTML = "MATCHES";
        document.querySelector(".under").innerHTML = "DIFFERS";
    }

    if(choice=="3"){
        contract.innerHTML = "Even / Odd ▼";
        document.querySelector(".over").innerHTML = "EVEN";
        document.querySelector(".under").innerHTML = "ODD";
    }

    if(choice=="4"){
        contract.innerHTML = "Rise / Fall ▼";
        document.querySelector(".over").innerHTML = "RISE";
        document.querySelector(".under").innerHTML = "FALL";
    }

}

function changeStake(){

    let amount = prompt("Enter stake amount (USD):");

    if(amount && !isNaN(amount)){

        document.querySelectorAll(".trade-box")[3].innerHTML =
        "Stake: " + amount + " USD";

    }

}

function openBots(){

    phinixNavigate("bots");

document.querySelector(".container").innerHTML = `

<div class="header" style="
display:flex;
justify-content:space-between;
align-items:center;
margin-top:10px;
">

<div onclick="backToManualTrader()" style="
cursor:pointer;
font-size:22px;
color:#c94fff;
">
←
</div>

<div style="
font-size:20px;
font-weight:bold;
color:#b266ff;
">
PHINIX BOTS
</div>

<div onclick="openDashboard()" style="
cursor:pointer;
font-size:22px;
">
🏠
</div>

</div>


<div style="
margin-top:20px;
">

<div class="bot-card" style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:16px;
margin:12px 0;
color:white;
box-shadow:0 0 12px rgba(122,44,255,.15);
">
<h3>🤖 Apex Bot</h3>
<p style="color:#bdbdbd;">
AI-powered precision trading
</p>
<button onclick="openApexBot()" style="
width:100%;
padding:12px;
border:none;
border-radius:12px;
background:linear-gradient(90deg,#7a2cff,#c94fff);
color:white;
font-weight:bold;
">
LOAD BOT
</button>
</div>


<div class="bot-card" style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:16px;
margin:12px 0;
color:white;
box-shadow:0 0 12px rgba(122,44,255,.15);
">
<h3>🚀 Phinix Pro Bot</h3>
<p style="color:#bdbdbd;">
Advanced trend detection
</p>
<button onclick="openPhinixProBot()" style="
width:100%;
padding:12px;
border:none;
border-radius:12px;
background:linear-gradient(90deg,#7a2cff,#c94fff);
color:white;
font-weight:bold;
">
LOAD BOT
</button>
</div>


<div class="bot-card" style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:16px;
margin:12px 0;
color:white;
box-shadow:0 0 12px rgba(122,44,255,.15);
">
<h3>⚡ Lightning Bot</h3>
<p style="color:#bdbdbd;">
High-speed scalping
</p>
<button onclick="openLightningBot()" style="
width:100%;
padding:12px;
border:none;
border-radius:12px;
background:linear-gradient(90deg,#7a2cff,#c94fff);
color:white;
font-weight:bold;
">
LOAD BOT
</button>
</div>


<div class="bot-card" style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:16px;
margin:12px 0;
color:white;
box-shadow:0 0 12px rgba(122,44,255,.15);
">
<h3>🎯 Sniper Bot</h3>
<p style="color:#bdbdbd;">
Precision entry strategy
</p>
<button onclick="openSniperBot()" style="
width:100%;
padding:12px;
border:none;
border-radius:12px;
background:linear-gradient(90deg,#7a2cff,#c94fff);
color:white;
font-weight:bold;
">
LOAD BOT
</button>
</div>


<div class="bot-card" style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:16px;
margin:12px 0;
color:white;
box-shadow:0 0 12px rgba(122,44,255,.15);
">
<h3>📈 Trend Bot</h3>
<p style="color:#bdbdbd;">
Trend-following system
</p>
<button onclick="openTrendBot()" style="
width:100%;
padding:12px;
border:none;
border-radius:12px;
background:linear-gradient(90deg,#7a2cff,#c94fff);
color:white;
font-weight:bold;
">
LOAD BOT
</button>
</div>

</div>

`;

}

let selectedDepositMethod = "M-Pesa";

function openDashboard(){

document.querySelector(".container").innerHTML = `

<div id="dashboardPage">

<!-- Welcome Banner -->
<div style="
background:linear-gradient(135deg,#5b21b6,#7c3aed,#9333ea);
padding:18px;
border-radius:20px;
margin:15px;
color:white;
display:flex;
justify-content:space-between;
align-items:center;
box-shadow:0 5px 20px rgba(0,0,0,.3);
">

<div>
<h2 style="margin:0;">👋 Hello Jeremy</h2>
<p style="margin-top:6px;">
Welcome to Phinix Traders
</p>
</div>

<div style="font-size:36px;">👤</div>

</div>

<!-- Deposit / Withdraw -->
<div style="
display:flex;
gap:10px;
padding:0 15px;
">

<button onclick="openDepositPage()" style="
flex:1;
background:#16a34a;
color:white;
padding:12px;
border:none;
border-radius:12px;
font-weight:bold;
">
💰 Deposit
</button>

<button onclick="openWithdrawPage()" style="
flex:1;
background:#dc2626;
color:white;
padding:12px;
border:none;
border-radius:12px;
font-weight:bold;
">
🏧 Withdraw
</button>

</div>

<!-- Account Balance -->
<div style="
margin:15px;
background:#1b1b2d;
padding:18px;
border-radius:18px;
text-align:center;
color:white;
">

<h3 style="color:#c084fc;">
Account Balance
</h3>

<h1 id="phinixDashboardBalance" style="margin-top:8px;">
$0.00
</h1>

</div>

<!-- Dashboard Tools -->
<div style="
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
padding:15px;
">

<button onclick="openBotBuilder()" style="
background:#151522;
color:white;
border:1px solid #29293d;
border-radius:15px;
padding:18px 10px;
font-weight:bold;
">
🛠 Bot Editor
</button>

<button onclick="openBots()" style="
background:#151522;
color:white;
border:1px solid #29293d;
border-radius:15px;
padding:18px 10px;
font-weight:bold;
">
🤖 Free Bots
</button>

<button onclick="openUploadBot()" style="
background:#151522;
color:white;
border:1px solid #29293d;
border-radius:15px;
padding:18px 10px;
font-weight:bold;
">
📤 Upload Bot
</button>

<button onclick="openQuickStrategy()" style="
background:#151522;
color:white;
border:1px solid #29293d;
border-radius:15px;
padding:18px 10px;
font-weight:bold;
">
⚡ Quick Strategy
</button>

</div>

<!-- Home Button -->
<div style="
padding:0 15px 15px;
">

<button onclick="window.location.href='dtrader.html'" style="width:100%;
background:#252536;
color:white;
border:1px solid #7a2cff;
border-radius:15px;
padding:13px;
font-weight:bold;
font-size:15px;
">
🏠 Home
</button>
</div>

</div>

`;

    updatePhinixDashboardBalance();

}




function updatePhinixDashboardBalance(){

    const selectedAccount =
        localStorage.getItem("phinixSelectedAccount") || "demo";

    let balance;

    if(selectedAccount === "real"){

        balance = Number(
            localStorage.getItem("phinixRealBalance") || "0"
        );

    }else{

        balance = Number(
            localStorage.getItem("phinixDemoBalance") || "10000"
        );

    }

    const balanceElement =
        document.getElementById("phinixDashboardBalance");

    if(balanceElement){

        balanceElement.textContent =
            "$" + balance.toFixed(2);

    }
}


function openApexBot(){
    activeBot = "Apex";
document.querySelector(".container").innerHTML = `

<div class="header">
    <div onclick="openBots()" style="cursor:pointer;">←</div>
    <div class="logo">APEX BOT</div>
    <div>🏠</div>
</div>

<div style="
background:linear-gradient(180deg,#8a3cff,#6d28d9);
border-radius:16px;
padding:12px;
margin-top:10px;
box-shadow:0 0 12px rgba(122,44,255,.35);
">

<div style="
background:linear-gradient(90deg,#7a2cff,#b84dff,#ffd700);
padding:16px;
border-radius:16px;
text-align:center;
font-size:28px;
font-weight:bold;
margin-bottom:18px;
box-shadow:0 0 20px rgba(255,215,0,.35);
color:white;
">
⚡ QUICK STRATEGY
</div>

<h3 style="
font-size:18px;
margin-bottom:12px;
color:white;
">
1. Trade Parameters
</h3>

<h3 style="
text-align:center;
color:#ffd700;
font-size:20px;
margin:18px 0 12px 0;
">
📊 TRADE PARAMETERS
</h3>

<label style="
font-size:12px;
font-weight:bold;
color:#ffffff;
">
Market
</label>

<select id="marketSelect" style="
width:100%;
padding:8px;
margin-bottom:8px;
border-radius:10px;
border:none;
">

<option>Derived</option>
<option>Forex</option>
<option>Synthetic</option>

</select>

<label style="
font-size:12px;
font-weight:bold;
color:#ffffff;
">
Index
</label>

<select id="indexSelect" style="
width:100%;
padding:12px;
margin-bottom:12px;
border-radius:14px;
border:1px solid #b84dff;
background:#1b1b2d;
color:#ffffff;
font-size:15px;
font-weight:bold;
outline:none;
">

<option>Volatility 10</option>
<option>Volatility 10 (1s)</option>
<option>Volatility 25</option>
<option>Volatility 25 (1s)</option>
<option>Volatility 50</option>
<option>Volatility 50 (1s)</option>
<option>Volatility 75</option>
<option>Volatility 75 (1s)</option>
<option selected>Volatility 100 (1s)</option>

</select>

<h3 style="
font-size:18px;
margin-top:18px;
margin-bottom:12px;
text-align:center;
color:white;
">
⚙ Run Once At Start
</h3>

<label style="font-size:13px;">Stake</label>

<input id="stakeInput"
type="number"
value="2"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:8px;
">

<label style="font-size:13px;">Target Profit</label>

<input id="profitInput"
type="number"
value="5"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:8px;
">

<label style="font-size:13px;">Stop Loss</label>

<input id="lossInput"
type="number"
value="10"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:8px;
">

<label style="font-size:13px;">Martingale</label>

<select id="martingaleSelect"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:14px;
">

<option>OFF</option>
<option>2</option>
<option>2.5</option>
<option>3</option>
<option>4</option>

</select>

<h3 style="
font-size:18px;
margin-top:18px;
margin-bottom:12px;
color:white;
">
2. Trade Options
</h3>

<label style="font-size:13px;">Trade Type</label>

<select id="tradeType"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:8px;
">

<option>Over / Under</option>
<option>Even / Odd</option>
<option>Matches / Differs</option>
<option>Rise / Fall</option>

</select>

<label style="font-size:13px;">Duration Type</label>

<select id="durationType"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:8px;
">

<option selected>Ticks</option>
<option>Seconds</option>
<option>Minutes</option>

</select>

<label style="font-size:13px;">Duration Value</label>

<select id="durationValue"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:8px;
">

<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>10</option>

</select>

<label style="font-size:13px;">Prediction</label>

<select id="prediction"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:14px;
">

<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option selected>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>

</select>

<h3 style="
font-size:18px;
margin-top:18px;
margin-bottom:12px;
color:white;
">
3. Purchase Conditions
</h3>

<label style="font-size:13px;">Purchase</label>

<select id="purchaseType"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:8px;
">

<option>Odd</option>
<option>Even</option>
<option>Over</option>
<option>Under</option>
<option>Matches</option>
<option>Differs</option>
<option>Rise</option>
<option>Fall</option>

</select>

<label style="font-size:13px;">Allow Bulk Purchase</label>

<select id="bulkPurchase"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:8px;
">

<option>No</option>
<option>Yes</option>

</select>

<label style="font-size:13px;">Number of Trades</label>

<select id="tradeCount"
style="
width:100%;
padding:8px;
border:none;
border-radius:10px;
margin-bottom:16px;
">

<option>1</option>
<option>2</option>
<option>5</option>
<option>10</option>

</select>

<button
id="runBotBtn"
onclick="openBotRunningScreen()"
style="
width:100%;
padding:14px;
background:#00b050;
color:white;
font-size:18px;
font-weight:bold;
border:none;
border-radius:12px;
cursor:pointer;
">
▶ RUN
</button>

</div>

`;
}





function toggleApexBot(){

    const runBtn = document.getElementById("runBotBtn");
    const status = document.getElementById("botStatus");

    if(!runBtn || !status) return;

    // STOP
    if(botRunning){

        botRunning = false;

        if(botInterval){
            clearInterval(botInterval);
            botInterval = null;
        }

        runBtn.innerHTML = "▶ RUN";
        runBtn.style.background = "#00b050";

        status.innerHTML = "STOPPED";

        return;
    }

    // RUN
    botRunning = true;

    runBtn.innerHTML = "■ STOP";
    runBtn.style.background = "#d62828";

    status.innerHTML = "RUNNING";

    // Open the first trade immediately
    addFakeTrade();

    // Continue opening trades every 2.5 seconds
    botInterval = setInterval(function(){

        if(botRunning){
            addFakeTrade();
        }

    }, 2500);
            }




    

function addFakeTrade(){

    const table=document.getElementById("transactionsTable")
    .getElementsByTagName("tbody")[0];

    const row=table.insertRow();

    const win=Math.random()>0.35;

    const entry=(735+Math.random()).toFixed(2);

    const stake=5;

    let payout=0;
    let pnl=0;

    if(win){

        payout=8.70;
        pnl=3.70;

        contractsWon++;

    }else{

        payout=0;
        pnl=-5;

        contractsLost++;

    }

    totalStake+=stake;
    totalPayout+=payout;
    profitLoss+=pnl;
    numberRuns++;

row.innerHTML=`
    <td>${win ? "📈" : "📉"}</td>
    <td>${entry}</td>
    <td style="color:${win ? "#00ff88" : "#ff4444"};">
        ${pnl.toFixed(2)} USD
    </td>
`;

    document.getElementById("totalStake").innerHTML=
    totalStake.toFixed(2)+" USD";

    document.getElementById("totalPayout").innerHTML=
    totalPayout.toFixed(2)+" USD";

    document.getElementById("contractsWon").innerHTML=
    contractsWon;

    document.getElementById("contractsLost").innerHTML=
    contractsLost;

    document.getElementById("numberRuns").innerHTML=
    numberRuns;

    document.getElementById("profitLoss").innerHTML=
    profitLoss.toFixed(2)+" USD";

    document.getElementById("profitLoss").style.color=
    profitLoss>=0 ? "#00ff88" : "#ff4444";

    const container=document.getElementById("transactionContainer");

    container.scrollTop=container.scrollHeight;

let message = win
? `💰 Contract Won (+${pnl.toFixed(2)} USD)`
: `❌ Contract Lost (${pnl.toFixed(2)} USD)`;

journalHistory += `
🎯 Signal Found<br>
${message}<br>
📈 Monitoring Market...<br>
`;

const journal = document.getElementById("journalLogs");

if(journal){
    journal.innerHTML = journalHistory;
    journal.scrollTop = journal.scrollHeight;
}
    
}

function openBotRunningScreen(){

    // Keep existing results if they already exist.
    // Only start a fresh session when no trades have been made yet.
    if(numberRuns === 0){
        totalStake = 0;
        totalPayout = 0;
        contractsWon = 0;
        contractsLost = 0;
        profitLoss = 0;
        journalHistory = "";
    }

    document.querySelector(".container").innerHTML = `

    <div class="header">
        <div onclick="openApexBot()" style="cursor:pointer;">←</div>

        <div class="logo">APEX BOT</div>

        <div id="botStatus"
             style="color:#00ff88;font-weight:bold;">
            RUNNING
        </div>
    </div>

    <div style="
        background:#161625;
        border:1px solid #7a2cff;
        border-radius:18px;
        padding:10px;
        margin-top:12px;
        display:flex;
        justify-content:space-between;
        gap:8px;
    ">

        <button
            onclick="showSummary()"
            style="
            flex:1;
            padding:12px;
            background:#111;
            color:white;
            border:none;
            border-radius:12px;
            font-weight:bold;
            cursor:pointer;
        ">
            Summary
        </button>

        <button
            onclick="showTransactions()"
            style="
            flex:1;
            padding:12px;
            background:linear-gradient(90deg,#7a2cff,#c94fff);
            color:white;
            border:none;
            border-radius:12px;
            font-weight:bold;
            cursor:pointer;
        ">
            Transactions
        </button>

        <button
            onclick="showJournal()"
            style="
            flex:1;
            padding:12px;
            background:#111;
            color:white;
            border:none;
            border-radius:12px;
            font-weight:bold;
            cursor:pointer;
        ">
            Journal
        </button>

    </div>

    <div id="transactionContainer"
         style="
         background:#161625;
         border:1px solid #7a2cff;
         border-radius:16px;
         padding:12px;
         margin-top:12px;
         height:260px;
         overflow-y:auto;
         overflow-x:hidden;
         ">

        <table
            id="transactionsTable"
            style="
            width:100%;
            border-collapse:collapse;
            color:white;
            font-size:13px;
            ">

            <thead>
                <tr style="color:#c94fff;">
                    <th>Type</th>
                    <th>Entry</th>
                    <th>P/L</th>
                </tr>
            </thead>

            <tbody>
            </tbody>

        </table>

    </div>

    <div style="
        margin-top:14px;
        background:#161625;
        border:1px solid #7a2cff;
        border-radius:16px;
        padding:14px;
    ">

        <div style="
            display:grid;
            grid-template-columns:1fr 1fr;
            gap:12px;
            text-align:center;
        ">

            <div>
                <b>Total Stake</b><br>
                <span id="totalStake">
                    ${totalStake.toFixed(2)} USD
                </span>
            </div>

            <div>
                <b>Total Payout</b><br>
                <span id="totalPayout">
                    ${totalPayout.toFixed(2)} USD
                </span>
            </div>

            <div>
                <b>Contracts Won</b><br>
                <span id="contractsWon">
                    ${contractsWon}
                </span>
            </div>

            <div>
                <b>Contracts Lost</b><br>
                <span id="contractsLost">
                    ${contractsLost}
                </span>
            </div>

            <div>
                <b>No. of Runs</b><br>
                <span id="numberRuns">
                    ${numberRuns}
                </span>
            </div>

            <div>
                <b>Total Profit</b><br>

                <span id="profitLoss"
                      style="
                      color:${profitLoss >= 0 ? "#00ff88" : "#ff4444"};
                      ">
                    ${profitLoss.toFixed(2)} USD
                </span>

            </div>

        </div>

        <button
            id="runBotBtn"
            onclick="toggleApexBot()"
            style="
            width:100%;
            margin-top:16px;
            padding:14px;
            background:#d62828;
            border:none;
            border-radius:12px;
            color:white;
            font-size:18px;
            font-weight:bold;
            cursor:pointer;
            ">
            ■ STOP
        </button>

    </div>

    `;

    botRunning = true;

    // Start generating trades only if the bot isn't already running.
    if(!botInterval){
        botInterval = setInterval(addFakeTrade,2500);
    }

}


function showSummary(){

    const container = document.querySelector(".container");

    if (!container) return;

    container.innerHTML = `

        <div class="header">
            <div onclick="openBotRunningScreen()" style="cursor:pointer;">←</div>

            <div class="logo">APEX BOT</div>

            <div style="color:#00ff88;font-weight:bold;">
                SUMMARY
            </div>
        </div>

        <div style="
            background:#161625;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:14px;
            margin-top:12px;
        ">

            <div style="
                display:grid;
                grid-template-columns:1fr 1fr;
                gap:12px;
                text-align:center;
            ">

                <div>
                    <b>Total Stake</b><br>
                    <span>${Number(totalStake || 0).toFixed(2)} USD</span>
                </div>

                <div>
                    <b>Total Payout</b><br>
                    <span>${Number(totalPayout || 0).toFixed(2)} USD</span>
                </div>

                <div>
                    <b>Contracts Won</b><br>
                    <span>${Number(contractsWon || 0)}</span>
                </div>

                <div>
                    <b>Contracts Lost</b><br>
                    <span>${Number(contractsLost || 0)}</span>
                </div>

                <div>
                    <b>No. of Runs</b><br>
                    <span>${Number(numberRuns || 0)}</span>
                </div>

                <div>
                    <b>Total Profit</b><br>
                    <span style="
                        color:${Number(profitLoss || 0) >= 0 ? "#00ff88" : "#ff4444"};
                    ">
                        ${Number(profitLoss || 0).toFixed(2)} USD
                    </span>
                </div>

            </div>

        </div>

        <div style="
            background:#161625;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:12px;
            margin-top:12px;
            display:flex;
            gap:8px;
        ">

            <button
                onclick="showSummary()"
                style="
                    flex:1;
                    padding:11px;
                    background:linear-gradient(90deg,#7a2cff,#c94fff);
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Summary
            </button>

            <button
                onclick="showTransactions()"
                style="
                    flex:1;
                    padding:11px;
                    background:#111;
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Transactions
            </button>

            <button
                onclick="showJournal()"
                style="
                    flex:1;
                    padding:11px;
                    background:#111;
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Journal
            </button>

        </div>

    `;

}


function showJournal(){

    const container = document.querySelector(".container");

    if (!container) return;

    container.innerHTML = `

        <div class="header">
            <div onclick="openBotRunningScreen()" style="cursor:pointer;">←</div>

            <div class="logo">APEX BOT</div>

            <div style="color:#00ff88;font-weight:bold;">
                JOURNAL
            </div>
        </div>

        <div style="
            background:#161625;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:14px;
            margin-top:12px;
            min-height:260px;
        ">

            <div style="
                color:#aaa;
                font-size:13px;
                margin-bottom:12px;
            ">
                Trading Journal
            </div>

            <div id="journalContent"
                 style="
                 color:white;
                 line-height:1.7;
                 white-space:pre-wrap;
                 word-break:break-word;
                 ">
                ${journalHistory || "No journal entries yet."}
            </div>

        </div>

        <div style="
            background:#161625;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:12px;
            margin-top:12px;
            display:flex;
            gap:8px;
        ">

            <button
                onclick="showSummary()"
                style="
                    flex:1;
                    padding:11px;
                    background:#111;
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Summary
            </button>

            <button
                onclick="showTransactions()"
                style="
                    flex:1;
                    padding:11px;
                    background:#111;
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Transactions
            </button>

            <button
                onclick="showJournal()"
                style="
                    flex:1;
                    padding:11px;
                    background:linear-gradient(90deg,#7a2cff,#c94fff);
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Journal
            </button>

        </div>

    `;

}












function showTransactions(){
    // Already on Transactions screen
}
// ===============================
// PHINIX PRO BOT
// ===============================

let phBotRunning = false;
let phInterval = null;

let phStake = 0;
let phPayout = 0;
let phWon = 0;
let phLost = 0;
let phRuns = 0;
let phProfit = 0;
let phJournal = "";
let phTransactions = [];

/* PHINIX MARTINGALE */
let phBaseStake = 5;
let phCurrentStake = 5;
let phMartingale = 0;

let phNumberOfTrades = 1;
let phTradesCompleted = 0;


function openPhinixProBot(){
activeBot = "Phinix Pro";

    const botWasRunning =
    phBotRunning;

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openBots()" style="cursor:pointer;">←</div>
<div class="logo">PHINIX PRO BOT</div>
<div>🏠</div>
</div>

<div style="
background:linear-gradient(180deg,#7a2cff,#9d4edd,#ffd700);
padding:16px;
border-radius:18px;
margin-top:12px;
">

<h2 style="
text-align:center;
color:white;
font-size:28px;
margin-bottom:20px;
">
⚡ QUICK STRATEGY
</h2>

<h3 style="color:#ffd700;">
📊 Trade Parameters
</h3>

<label style="font-size:12px;font-weight:bold;color:#ffffff;">
Market
</label>

<select id="marketSelect"
style="
width:100%;
padding:8px;
margin-bottom:8px;
border-radius:10px;
border:none;
">
<option>Derived</option>
<option>Forex</option>
<option>Synthetic</option>
</select>

<label style="font-size:12px;font-weight:bold;color:#ffffff;">
Index
</label>

<select id="indexSelect"
style="
width:100%;
padding:12px;
margin-bottom:12px;
border-radius:14px;
border:1px solid #b84dff;
background:#1b1b2d;
color:#ffffff;
font-size:15px;
font-weight:bold;
outline:none;
">
<option>Volatility 10</option>
<option>Volatility 10 (1s)</option>
<option>Volatility 25</option>
<option>Volatility 25 (1s)</option>
<option>Volatility 50</option>
<option>Volatility 50 (1s)</option>
<option>Volatility 75</option>
<option>Volatility 75 (1s)</option>
<option selected>Volatility 100 (1s)</option>
</select>
<h3 style="color:#ffd700;margin-top:20px;">
⚙ Run Once At Start
</h3>

<label>Stake</label>

<input
    id="phStakeInput"
    type="number"
    value="2"
    min="0.35"
    step="0.01"
    style="
        width:100%;
        padding:12px;
        border-radius:12px;
        margin-bottom:12px;
        box-sizing:border-box;
    "
>

<label>Target Profit</label>
<input type="number" value="5"
style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">

<label>Stop Loss</label>
<input type="number" value="10"
style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">

<label>Martingale</label>
<select style="width:100%;padding:12px;border-radius:12px;margin-bottom:20px;">
<option>OFF</option>
<option>2</option>
<option>2.5</option>
<option>3</option>
<option>4</option>
</select>
<h3 style="color:#ffd700;margin-top:20px;">
📊 Trade Options
</h3>

<label>Trade Type</label>
<select style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">
<option>Over / Under</option>
<option>Matches / Differs</option>
<option>Even / Odd</option>
<option>Rise / Fall</option>
</select>

<label>Duration Type</label>
<select style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">
<option>Ticks</option>
<option>Seconds</option>
<option>Minutes</option>
</select>

<label>Duration Value</label>
<select style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>10</option>
</select>

<label>Prediction</label>
<select style="width:100%;padding:12px;border-radius:12px;margin-bottom:20px;">
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option selected>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
</select>
<h3 style="color:#ffd700;margin-top:20px;">
🛒 Purchase Conditions
</h3>

<label>Purchase</label>
<select style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">
<option>Odd</option>
<option>Even</option>
<option>Over</option>
<option>Under</option>
<option>Matches</option>
<option>Differs</option>
<option>Rise</option>
<option>Fall</option>
</select>

<label>Allow Bulk Purchase</label>
<select style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">
<option>No</option>
<option>Yes</option>
</select>

<label>Number of Trades</label>
<select
    id="numberTradesSelect"
    style="width:100%;padding:12px;border-radius:12px;margin-bottom:20px;"
>
<option value="0">0 — Continuous</option>
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
</select>
<button
    id="phBotRunButton"
    onclick="openPhinixRunningScreen()"
    style="
        width:100%;
        padding:16px;
        background:#00b050;
        color:white;
        font-size:20px;
        font-weight:bold;
        border:none;
        border-radius:14px;
        cursor:pointer;
    "
>
    ▶ RUN
</button>

<!-- BOT PAGE CHEVRON -->
<div style="
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:6px;
    padding:2px 0 10px;
">

    <button
        onclick="openPhinixRunningScreen()"
        style="
            width:70px;
            height:42px;
            border:none;
            background:transparent;
            color:white;
            font-size:40px;
            line-height:35px;
            cursor:pointer;
        "
    >
        ⌄
    </button>

</div>

</div>

`;

if(botWasRunning){

    updatePhinixBotRunButton();

}

}

function updatePhinixBotRunButton(){

    const button =
        document.getElementById(
            "phBotRunButton"
        );

    if(!button){
        return;
    }


    if(phBotRunning){

        button.innerHTML =
            "■ STOP";

        button.style.background =
            "#d8243f";

        button.onclick =
            stopPhinixBot;

    }

    else{

        button.innerHTML =
            "▶ RUN";

        button.style.background =
            "#00b050";

        button.onclick =
            openPhinixRunningScreen;

    }

}

function openPhinixRunningScreen(){

        /* GET STAKE */

        const stakeInput =
        document.getElementById("phStakeInput");

    const martingaleSelect =
        document.getElementById("martingaleSelect");

    const numberTradesSelect =
    document.getElementById("numberTradesSelect");

const numberOfTrades =
    numberTradesSelect
        ? Number(numberTradesSelect.value)
        : 1;

phNumberOfTrades = numberOfTrades;


    /* GET BASE STAKE */

    if(stakeInput){

        const selectedStake =
            Number(stakeInput.value);

        if(selectedStake > 0){

            phBaseStake =
                selectedStake;

        }

    }


 /* READ MARTINGALE SETTING */

phMartingale = 0;

if(martingaleSelect){

    const selectedMartingale =
        martingaleSelect.value;

    if(
        selectedMartingale &&
        selectedMartingale !== "OFF"
    ){

        phMartingale =
            Number(selectedMartingale);

    }

}


    /* START THIS RUN AT BASE STAKE */

    phCurrentStake =
        phBaseStake;
    




    document.querySelector(".container").innerHTML = `

    <div id="phinixProRunning" style="
        min-height:100vh;
        background:#071326;
        color:white;
        font-family:Arial,sans-serif;
        box-sizing:border-box;
        width:100%;
        overflow:hidden;
        display:flex;
        flex-direction:column;
    ">


    <!-- TOP HEADER -->
<div style="
    height:78px;
    background:#0b1b38;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:0 16px;
    box-sizing:border-box;
    flex-shrink:0;
">

    <!-- ACCOUNT SELECTOR -->
    <div
        onclick="openAccountMenu()"
        style="
            display:flex;
            align-items:center;
            gap:10px;
            cursor:pointer;
            min-width:0;
        "
    >

        <!-- ACCOUNT ICON -->
        <div style="
            width:42px;
            height:42px;
            border-radius:50%;
            background:linear-gradient(
                135deg,
                #7a2cff,
                #9d4edd
            );
            display:flex;
            align-items:center;
            justify-content:center;
            color:white;
            font-size:21px;
            font-weight:bold;
            flex-shrink:0;
        ">
            ₿
        </div>


        <!-- ACCOUNT INFORMATION -->
        <div style="
            display:flex;
            flex-direction:column;
            min-width:0;
        ">

            <span id="phRunningAccountLabel"
                style="
                    color:#ffd700;
                    font-size:12px;
                    font-weight:bold;
                    white-space:nowrap;
                "
            >
                DEMO BALANCE
            </span>

            <span id="phRunningAccountBalance"
                style="
                    color:#00d9a5;
                    font-size:18px;
                    font-weight:bold;
                    margin-top:2px;
                    white-space:nowrap;
                "
            >
                $10,000.00
            </span>

        </div>

    </div>


    <!-- RUNNING STATUS -->
    <div style="
        display:flex;
        align-items:center;
        gap:7px;
    ">

        <span id="phRunningStatusDot"
            style="
                width:9px;
                height:9px;
                border-radius:50%;
                background:#00d9a5;
                box-shadow:0 0 8px #00d9a5;
            "
        >
        </span>

        <span id="phRunningStatusText"
            style="
                color:#00d9a5;
                font-size:12px;
                font-weight:bold;
            "
        >
            RUNNING
        </span>

    </div>

</div>





                

                

        <!-- CHEVRON + RESET ROW -->
        <div style="
            height:62px;
            background:#071326;
            display:flex;
            align-items:center;
            justify-content:center;
            position:relative;
            flex-shrink:0;
        ">

            <button
                onclick="togglePhinixResultsPanel()"
                style="
                    width:60px;
                    height:42px;
                    border:none;
                    background:transparent;
                    color:white;
                    font-size:42px;
                    line-height:30px;
                    cursor:pointer;
                "
            >
                ⌄
            </button>


            <button
                onclick="resetPhinixResults()"
                style="
                    position:absolute;
                    right:14px;
                    top:9px;
                    height:44px;
                    padding:0 25px;
                    border:1px solid #34445e;
                    border-radius:7px;
                    background:#09172d;
                    color:#7b8798;
                    font-size:15px;
                    font-weight:bold;
                "
            >
                Reset
            </button>

        </div>


        


        <!-- RESULTS AREA -->
        <div id="phResultsArea"
            style="
                flex:1;
                min-height:0;
                display:flex;
                flex-direction:column;
                overflow:hidden;
            "
        >


            <!-- TABS -->
            <div style="
                height:68px;
                background:#071326;
                display:grid;
                grid-template-columns:1fr 1.25fr 1fr;
                flex-shrink:0;
            ">

                <button
                    onclick="showPhinixPanelTab('summary')"
                    class="phPanelTab active"
                    style="
                        border:none;
                        border-bottom:3px solid #1b7cff;
                        background:transparent;
                        color:white;
                        font-size:17px;
                        font-weight:bold;
                    "
                >
                    Summary
                </button>

                <button
                    onclick="showPhinixPanelTab('transactions')"
                    class="phPanelTab"
                    style="
                        border:none;
                        border-bottom:3px solid transparent;
                        background:transparent;
                        color:#d7dfed;
                        font-size:17px;
                    "
                >
                    Transactions
                </button>

                <button
                    onclick="showPhinixPanelTab('journal')"
                    class="phPanelTab"
                    style="
                        border:none;
                        border-bottom:3px solid transparent;
                        background:transparent;
                        color:#d7dfed;
                        font-size:17px;
                    "
                >
                    Journal
                </button>

            </div>


            <!-- TAB CONTENT -->
            <div id="phTabContent"
                style="
                    flex:1;
                    min-height:0;
                    overflow-y:auto;
                    background:#071326;
                "
            >


            <!-- SUMMARY TAB -->
<div id="phSummaryTab"
    class="phPanelContent"
    style="
        padding:18px 16px 25px;
        box-sizing:border-box;
    "
>

    <!-- PERFORMANCE HEADER -->
    <div style="
        text-align:center;
        margin-bottom:22px;
    ">

        <div style="
            color:#8795a9;
            font-size:14px;
            margin-bottom:7px;
        ">
            Trading Summary
        </div>

        <div id="phSummaryProfitMain"
            style="
                color:#00d9a5;
                font-size:28px;
                font-weight:bold;
            "
        >
            +0.00 USD
        </div>

    </div>


    <!-- WIN / LOSS CARDS -->
    <div style="
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:12px;
        margin-bottom:16px;
    ">

        <!-- WON -->
        <div style="
            background:#0b1b38;
            border:1px solid #183050;
            border-radius:8px;
            padding:16px 12px;
            box-sizing:border-box;
        ">

            <div style="
                color:#8795a9;
                font-size:13px;
                margin-bottom:8px;
            ">
                Contracts won
            </div>

            <div id="phSummaryWonCard"
                style="
                    color:#00d9a5;
                    font-size:22px;
                    font-weight:bold;
                "
            >
                0
            </div>

        </div>


        <!-- LOST -->
        <div style="
            background:#0b1b38;
            border:1px solid #183050;
            border-radius:8px;
            padding:16px 12px;
            box-sizing:border-box;
        ">

            <div style="
                color:#8795a9;
                font-size:13px;
                margin-bottom:8px;
            ">
                Contracts lost
            </div>

            <div id="phSummaryLostCard"
                style="
                    color:#ff526b;
                    font-size:22px;
                    font-weight:bold;
                "
            >
                0
            </div>

        </div>

    </div>


    <!-- TRADING DETAILS -->
    <div style="
        background:#0b1b38;
        border:1px solid #183050;
        border-radius:8px;
        overflow:hidden;
    ">

        <!-- TOTAL STAKE -->
        <div style="
            min-height:58px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding:0 16px;
            border-bottom:1px solid #183050;
            box-sizing:border-box;
        ">

            <span style="
                color:#aab6c8;
                font-size:14px;
            ">
                Total stake
            </span>

            <span id="phSummaryStakeCard"
                style="
                    color:white;
                    font-size:15px;
                    font-weight:bold;
                "
            >
                0.00 USD
            </span>

        </div>


        <!-- TOTAL PAYOUT -->
        <div style="
            min-height:58px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding:0 16px;
            border-bottom:1px solid #183050;
            box-sizing:border-box;
        ">

            <span style="
                color:#aab6c8;
                font-size:14px;
            ">
                Total payout
            </span>

            <span id="phSummaryPayoutCard"
                style="
                    color:white;
                    font-size:15px;
                    font-weight:bold;
                "
            >
                0.00 USD
            </span>

        </div>


        <!-- NUMBER OF RUNS -->
        <div style="
            min-height:58px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding:0 16px;
            border-bottom:1px solid #183050;
            box-sizing:border-box;
        ">

            <span style="
                color:#aab6c8;
                font-size:14px;
            ">
                Number of runs
            </span>

            <span id="phSummaryRunsCard"
                style="
                    color:white;
                    font-size:15px;
                    font-weight:bold;
                "
            >
                0
            </span>

        </div>


        <!-- PROFIT / LOSS -->
        <div style="
            min-height:58px;
            display:flex;
            align-items:center;
            justify-content:space-between;
            padding:0 16px;
            box-sizing:border-box;
        ">

            <span style="
                color:#aab6c8;
                font-size:14px;
            ">
                Total profit/loss
            </span>

            <span id="phSummaryProfitCard"
                style="
                    color:#00d9a5;
                    font-size:15px;
                    font-weight:bold;
                "
            >
                0.00 USD
            </span>

        </div>

    </div>


    <!-- BOT STATUS -->
    <div style="
        text-align:center;
        margin-top:20px;
        padding:14px;
        border-radius:8px;
        background:#09172d;
        border:1px solid #183050;
    ">

        <span style="
            color:#8795a9;
            font-size:13px;
        ">
            Bot status
        </span>

        <div id="phSummaryBotStatus"
            style="
                margin-top:6px;
                color:#00d9a5;
                font-size:15px;
                font-weight:bold;
            "
        >
            RUNNING
        </div>

    </div>

</div>


                


                <!-- TRANSACTIONS TAB -->
                <div id="phTransactionsTab"
    class="phPanelContent"
    style="
        display:none;
        padding:18px 18px 25px;
        box-sizing:border-box;
        overflow:hidden;
    "
>
                    <!-- ACTION BUTTONS -->
                    <div style="
                        display:flex;
                        gap:10px;
                        margin-bottom:35px;
                    ">

                        <button
                            style="
                                flex:0 0 175px;
                                height:56px;
                                border:1px solid #263a57;
                                border-radius:7px;
                                background:#08172e;
                                color:#66758a;
                                font-size:17px;
                                font-weight:bold;
                            "
                        >
                            Download
                        </button>

                        <button
                            style="
                                flex:0 0 190px;
                                height:56px;
                                border:1px solid #63728a;
                                border-radius:7px;
                                background:#08172e;
                                color:white;
                                font-size:17px;
                                font-weight:bold;
                            "
                        >
                            View Detail
                        </button>

                    </div>


                    <!-- TRANSACTIONS TABLE -->
                    <div id="phTransactionContainer"
    style="
        width:100%;
        flex:1;
        min-height:0;
        overflow-y:auto;
        overflow-x:hidden;
        -webkit-overflow-scrolling:touch;
        overscroll-behavior:contain;
        touch-action:pan-y;
        box-sizing:border-box;
        padding-bottom:10px;
    "
>

                        <table id="phTransactionsTable"
                            style="
                                width:100%;
                                border-collapse:collapse;
                                table-layout:fixed;
                                color:white;
                            "
                        >

                            <thead>
                                <tr>

                                    <th style="
                                        width:28%;
                                        text-align:left;
                                        padding-bottom:18px;
                                        color:#d7dfed;
                                        font-size:15px;
                                    ">
                                        Type
                                    </th>

                                    <th style="
                                        width:35%;
                                        text-align:left;
                                        padding-bottom:18px;
                                        color:#d7dfed;
                                        font-size:15px;
                                    ">
                                        Entry/Exit spot
                                    </th>

                                    <th style="
                                        width:37%;
                                        text-align:right;
                                        padding-bottom:18px;
                                        color:#d7dfed;
                                        font-size:15px;
                                    ">
                                        Buy price and P/L
                                    </th>

                                </tr>
                            </thead>

                            <tbody></tbody>

                        </table>

                    </div>

                </div>


                <!-- JOURNAL TAB -->
                <div id="phJournalTab"
                    class="phPanelContent"
                    style="
                        display:none;
                        padding:18px;
                        box-sizing:border-box;
                    "
                >

                    <div id="phJournalList">

                        <div class="phEmpty">
                            No journal entries yet
                        </div>

                    </div>

                </div>

            </div>


            <!-- SUMMARY STATISTICS -->
            <div id="phStatsArea"
                style="
                    background:#071326;
                    padding:22px 18px 12px;
                    flex-shrink:0;
                    box-sizing:border-box;
                "
            >

                <!-- ROW 1 -->
                <div style="
                    display:grid;
                    grid-template-columns:1fr 1fr 1fr;
                    text-align:center;
                    gap:8px;
                ">

                    <div>
                        <div style="
                            color:#d7dfed;
                            font-size:14px;
                            font-weight:bold;
                        ">
                            Total stake
                        </div>

                        <div id="phSummaryStake"
                            style="
                                margin-top:12px;
                                color:white;
                                font-size:16px;
                            ">
                            0.00 USD
                        </div>
                    </div>


                    <div>
                        <div style="
                            color:#d7dfed;
                            font-size:14px;
                            font-weight:bold;
                        ">
                            Total payout
                        </div>

                        <div id="phSummaryPayout"
                            style="
                                margin-top:12px;
                                color:white;
                                font-size:16px;
                            ">
                            0.00 USD
                        </div>
                    </div>


                    <div>
                        <div style="
                            color:#d7dfed;
                            font-size:14px;
                            font-weight:bold;
                        ">
                            No. of runs
                        </div>

                        <div id="phSummaryRuns"
                            style="
                                margin-top:12px;
                                color:white;
                                font-size:16px;
                            ">
                            0
                        </div>
                    </div>

                </div>


                <!-- ROW 2 -->
                <div style="
                    display:grid;
                    grid-template-columns:1fr 1fr 1fr;
                    text-align:center;
                    gap:8px;
                    margin-top:28px;
                ">

                    <div>
                        <div style="
                            color:#d7dfed;
                            font-size:14px;
                            font-weight:bold;
                        ">
                            Contracts lost
                        </div>

                        <div id="phSummaryLost"
                            style="
                                margin-top:12px;
                                color:white;
                                font-size:16px;
                            ">
                            0
                        </div>
                    </div>


                    <div>
                        <div style="
                            color:#d7dfed;
                            font-size:14px;
                            font-weight:bold;
                        ">
                            Contracts won
                        </div>

                        <div id="phSummaryWon"
                            style="
                                margin-top:12px;
                                color:white;
                                font-size:16px;
                            ">
                            0
                        </div>
                    </div>


                    <div>
                        <div style="
                            color:#d7dfed;
                            font-size:14px;
                            font-weight:bold;
                        ">
                            Total profit/loss
                        </div>

                        <div id="phSummaryProfit"
                            style="
                                margin-top:12px;
                                color:#00d9a5;
                                font-size:16px;
                                font-weight:bold;
                            ">
                            0.00 USD
                        </div>
                    </div>

                </div>

            </div>


            <!-- STOP AREA -->
            <div style="
                height:72px;
                background:#071326;
                padding:8px 42px;
                box-sizing:border-box;
                flex-shrink:0;
            ">

                <button
                    onclick="stopPhinixBot()"
                    style="
                        width:155px;
                        height:56px;
                        border:none;
                        border-radius:5px;
                        background:#d8243f;
                        color:white;
                        font-size:19px;
                        font-weight:bold;
                    "
                >
                    ■ Stop
                </button>

            </div>

        </div>

    </div>

    `;


    /* BOT IS RUNNING */

    phBotRunning = true;

updatePhinixBotRunButton();


    const status =
        document.getElementById("phStatus");

    if(status){

        status.innerHTML = "RUNNING";
        status.style.color = "#00d9a5";

    }


/* START PHINIX PRO BOT ENGINE */

if(typeof startPhinixBot === "function"){

    startPhinixBot();

}

    /* INITIAL DATA */

    updatePhinixResultsPanel();

    renderPhinixTransactions();

    renderPhinixJournal();

    updatePhinixRunningAccount();

}
    

  function updatePhinixRunningAccount(){

    const label =
        document.getElementById(
            "phRunningAccountLabel"
        );

    const balance =
        document.getElementById(
            "phRunningAccountBalance"
        );


    if(!label || !balance){
        return;
    }


    const selected =
        localStorage.getItem(
            "phinixSelectedAccount"
        ) || "demo";


    if(selected === "real"){

        const realBalance =
            Number(
                localStorage.getItem(
                    "phinixRealBalance"
                ) || "0"
            );

        label.textContent =
            "REAL ACCOUNT";

        balance.textContent =
            "$" +
            realBalance.toFixed(2);

    }

    else{

        const demoBalance =
            Number(
                localStorage.getItem(
                    "phinixDemoBalance"
                ) || "10000"
            );

        label.textContent =
            "DEMO BALANCE";

        balance.textContent =
            "$" +
            demoBalance.toFixed(2);

    }

  }          

            


            
                


    

        
 
function togglePhinixBot(){

    if(phBotRunning){

        // STOP the bot but keep all results
        phBotRunning = false;

        if(phInterval){
            clearInterval(phInterval);
            phInterval = null;
        }

        const status = document.getElementById("phStatus");

        if(status){
            status.innerHTML = "STOPPED";
            status.style.color = "#ff4444";
        }

        const button = document.getElementById("phRunBtn");

        if(button){
            button.innerHTML = "▶ START";
            button.style.background = "#7a2cff";
        }

    }else{

        // START again without clearing previous results
        phBotRunning = true;

        if(!phInterval){
            phInterval = setInterval(addPhinixTrade,2500);
        }

        const status = document.getElementById("phStatus");

        if(status){
            status.innerHTML = "RUNNING";
            status.style.color = "#00ff88";
        }

        const button = document.getElementById("phRunBtn");

        if(button){
            button.innerHTML = "■ STOP";
            button.style.background = "#d62828";
        }

    }

}


function togglePhinixResultsPanel(){

    /*
     * The old floating results panel has been removed.
     * The running screen now contains its own
     * Summary / Transactions / Journal interface.
     */

    openPhinixProBot();

}

    
            
                
function showPhinixPanelTab(tab){

    const summary =
        document.getElementById("phSummaryTab");

    const transactions =
        document.getElementById("phTransactionsTab");

    const journal =
        document.getElementById("phJournalTab");

    const tabs =
        document.querySelectorAll(".phPanelTab");

    if(!summary || !transactions || !journal){
        return;
    }

    summary.style.display = "none";
    transactions.style.display = "none";
    journal.style.display = "none";

    tabs.forEach(function(button){
        button.classList.remove("active");
    });

    if(tab === "summary"){

        summary.style.display = "block";

        if(tabs[0]){
            tabs[0].classList.add("active");
        }

        updatePhinixResultsPanel();

    }

    else if(tab === "transactions"){

        transactions.style.display = "block";

        if(tabs[1]){
            tabs[1].classList.add("active");
        }

        renderPhinixTransactions();

    }

    else if(tab === "journal"){

        journal.style.display = "block";

        if(tabs[2]){
            tabs[2].classList.add("active");
        }

        renderPhinixJournal();

    }

}


function updatePhinixResultsPanel(){

    /* ORIGINAL SUMMARY VALUES */

    const runs =
        document.getElementById("phSummaryRuns");

    const won =
        document.getElementById("phSummaryWon");

    const lost =
        document.getElementById("phSummaryLost");

    const stake =
        document.getElementById("phSummaryStake");

    const payout =
        document.getElementById("phSummaryPayout");

    const profit =
        document.getElementById("phSummaryProfit");


    /* NEW SUMMARY CARD VALUES */

    const runsCard =
        document.getElementById("phSummaryRunsCard");

    const wonCard =
        document.getElementById("phSummaryWonCard");

    const lostCard =
        document.getElementById("phSummaryLostCard");

    const stakeCard =
        document.getElementById("phSummaryStakeCard");

    const payoutCard =
        document.getElementById("phSummaryPayoutCard");

    const profitCard =
        document.getElementById("phSummaryProfitCard");

    const profitMain =
        document.getElementById("phSummaryProfitMain");

    const botStatus =
        document.getElementById("phSummaryBotStatus");


    /* RUNS */

    if(runs){
        runs.innerHTML = phRuns;
    }

    if(runsCard){
        runsCard.innerHTML = phRuns;
    }


    /* WON */

    if(won){
        won.innerHTML = phWon;
    }

    if(wonCard){
        wonCard.innerHTML = phWon;
    }


    /* LOST */

    if(lost){
        lost.innerHTML = phLost;
    }

    if(lostCard){
        lostCard.innerHTML = phLost;
    }


    /* TOTAL STAKE */

    if(stake){

        stake.innerHTML =
            phStake.toFixed(2) + " USD";

    }

    if(stakeCard){

        stakeCard.innerHTML =
            phStake.toFixed(2) + " USD";

    }


    /* TOTAL PAYOUT */

    if(payout){

        payout.innerHTML =
            phPayout.toFixed(2) + " USD";

    }

    if(payoutCard){

        payoutCard.innerHTML =
            phPayout.toFixed(2) + " USD";

    }


    /* PROFIT / LOSS */

    const profitText =
        phProfit.toFixed(2) + " USD";


    if(profit){

        profit.innerHTML =
            profitText;

        profit.style.color =
            phProfit >= 0
            ? "#c94fff"
            : "#ff4444";

    }


    if(profitCard){

        profitCard.innerHTML =
            profitText;

        profitCard.style.color =
            phProfit >= 0
            ? "#00d9a5"
            : "#ff4444";

    }


    /* MAIN PROFIT NUMBER */

    if(profitMain){

        profitMain.innerHTML =
            (phProfit >= 0 ? "+" : "") +
            phProfit.toFixed(2) +
            " USD";

        profitMain.style.color =
            phProfit >= 0
            ? "#00d9a5"
            : "#ff4444";

    }


    /* BOT STATUS */

    if(botStatus){

        botStatus.innerHTML =
            phBotRunning
            ? "RUNNING"
            : "STOPPED";

        botStatus.style.color =
            phBotRunning
            ? "#00d9a5"
            : "#ff4444";

    }

}



function renderPhinixTransactions(){

    const table =
        document.getElementById(
            "phTransactionsTable"
        );

    if(!table){
        return;
    }

    const tbody =
        table.querySelector("tbody");

    if(!tbody){
        return;
    }


    tbody.innerHTML = "";


    if(
        !phTransactions ||
        phTransactions.length === 0
    ){

        tbody.innerHTML = `
            <tr>

                <td
                    colspan="3"
                    style="
                        padding:35px 10px;
                        color:#8e789f;
                        text-align:center;
                    "
                >
                    No transactions yet
                </td>

            </tr>
        `;

        return;
    }


    phTransactions.forEach(function(trade){

        const row =
            document.createElement("tr");


        /* USE THE SAVED TRADE TYPE */

        const tradeType =
            trade.type || "📉";


        const isWin =
            tradeType === "📈";


        row.innerHTML = `

            <!-- TYPE -->

            <td style="
                text-align:center;
                padding:12px 4px;
                border-bottom:
                    1px solid #17101f;
                font-size:17px;
            ">
                ${tradeType}
            </td>


            <!-- ENTRY / EXIT SPOT -->

            <td style="
                text-align:center;
                padding:12px 4px;
                border-bottom:
                    1px solid #17101f;
                color:#d7dfed;
                font-size:13px;
            ">
                ${trade.entry}
            </td>


            <!-- BUY PRICE / P&L -->

            <td style="
                text-align:center;
                padding:12px 4px;
                border-bottom:
                    1px solid #17101f;
                color:${isWin
                    ? "#00d9a5"
                    : "#ff4444"};
                font-size:13px;
                font-weight:bold;
            ">
                ${trade.pnl.toFixed(2)} USD
            </td>

        `;


        tbody.appendChild(row);

    });


    /*
        ALWAYS KEEP THE VIEW
        AT THE MOST RECENT TRADE
        WHEN A NEW TRADE ARRIVES.
    */

    const container =
        document.getElementById(
            "phTransactionContainer"
        );

    if(container){

        container.scrollTop =
            container.scrollHeight;

    }

}
    
        



    

    


function renderPhinixJournal(){

    const container =
        document.getElementById("phJournalList");

    if(!container){
        return;
    }

    if(!phJournal || phJournal.trim() === ""){

        container.innerHTML = `
            <div class="phEmpty">
                No journal entries yet
            </div>
        `;

        return;
    }

    container.innerHTML = `
        <div style="
            padding:14px;
            border:1px solid #6f2cff;
            border-radius:12px;
            background:#0d0716;
            color:white;
            font-size:13px;
            line-height:1.7;
        ">
            ${phJournal}
        </div>
    `;

}


function resetPhinixResults(){

    /* STOP CURRENT TRADING */

    if(phInterval){

        clearInterval(phInterval);
        phInterval = null;

    }

    phBotRunning = false;


    /* RESET TRADE STATE */

    phTradesCompleted = 0;

phCurrentStake = phBaseStake;

    /* RESET STATISTICS */

    phStake = 0;
    phPayout = 0;
    phWon = 0;
    phLost = 0;
    phRuns = 0;
    phProfit = 0;


    /* CLEAR ALL TRANSACTIONS */

    phTransactions.length = 0;


    /* CLEAR JOURNAL */

    phJournal = "";


    /* CLEAR TRANSACTION TABLE */

    const table =
        document.getElementById("phTransactionsTable");

    if(table){

        const tbody =
            table.querySelector("tbody");

        if(tbody){

            tbody.innerHTML = `
                <tr>
                    <td colspan="3"
                        style="
                            padding:35px 10px;
                            color:#8e789f;
                            text-align:center;
                        ">
                        No transactions yet
                    </td>
                </tr>
            `;

        }

    }


    /* CLEAR JOURNAL DISPLAY */

    const journal =
        document.getElementById("phJournalList");

    if(journal){

        journal.innerHTML = `
            <div class="phEmpty">
                No journal entries yet
            </div>
        `;

    }


    /* RESET ALL SUMMARY DATA */

    updatePhinixResultsPanel();


    /* RESET STATISTICS DISPLAY */

    updatePhinixStats();


    /* REFRESH EMPTY TRANSACTIONS */

    renderPhinixTransactions();


    /* REFRESH EMPTY JOURNAL */

    renderPhinixJournal();


    /* UPDATE BOT STATUS */

    const status =
        document.getElementById("phStatus");

    if(status){

        status.innerHTML = "STOPPED";

        status.style.color = "#ff4444";

    }


    /* UPDATE RUNNING SCREEN STATUS */

    const runningStatus =
        document.getElementById("phRunningStatusText");

    if(runningStatus){

        runningStatus.innerHTML = "STOPPED";
        runningStatus.style.color = "#ff4444";

    }


    /* RESET RUNNING SCREEN BUTTON */

    const buttons =
        document.querySelectorAll("button");

    buttons.forEach(function(button){

        if(
            button.innerText.includes("Stop") ||
            button.innerText.includes("Start")
        ){

            if(
                button.innerText.includes("Stop") ||
                button.innerText.includes("Start")
            ){

                button.innerHTML = "▶ Start";

                button.style.background =
                    "#00b050";

                button.onclick =
                    startPhinixBot;

            }

        }

    });

        }

            

function stopPhinixBot(){

    /* PAUSE TRADING */

    if(phInterval){

        clearInterval(phInterval);

        phInterval = null;

    }

    phBotRunning = false;


    /* CHANGE STATUS */

    const status =
        document.getElementById("phStatus");

    if(status){

        status.innerHTML = "PAUSED";
        status.style.color = "#ff4444";

    }


    /* CHANGE STOP BUTTON TO START */

    const buttons =
        document.querySelectorAll("button");

    buttons.forEach(function(button){

        if(
            button.innerText.includes("Stop") ||
            button.innerText.includes("■ Stop")
        ){

            button.innerHTML = "▶ Start";

            button.style.background =
                "#00b050";

            button.onclick =
                startPhinixBot;

        }

    });

}

function startPhinixBot(){

    /* READ ALL BOT SETTINGS */

    if(typeof readPhinixProSettings === "function"){

        readPhinixProSettings();

    }


    /* START BOT */

    phBotRunning = true;


    /* RESET TRADE COUNTER FOR THIS RUN */

    phTradesCompleted = 0;


    /* START WITH BASE STAKE */

    phCurrentStake = phBaseStake;


    /* UPDATE RUNNING STATUS */

    const status =
        document.getElementById("phStatus");

    if(status){

        status.innerHTML = "RUNNING";
        status.style.color = "#00d9a5";

    }


    /* UPDATE RUNNING SCREEN BUTTONS */

const buttons =
    document.querySelectorAll("button");

buttons.forEach(function(button){

    if(
        button.innerText.includes("Start") ||
        button.innerText.includes("▶ Start")
    ){

        button.innerHTML = "■ Stop";

        button.style.background =
            "#d8243f";

        button.onclick =
            stopPhinixBot;

    }

});


    /* CANCEL OLD TIMER */

    if(phInterval){

        clearInterval(phInterval);

        phInterval = null;

    }


    /* START FIRST TRADE IMMEDIATELY */

if(
    phBotRunning &&
    phTradesCompleted < phNumberOfTrades &&
    typeof addPhinixTrade === "function"
){

    addPhinixTrade();

}




/* CONTINUE TRADING */

if(
    phBotRunning &&
    phTradesCompleted < phNumberOfTrades
){

    phInterval = setInterval(function(){

        if(!phBotRunning){

            clearInterval(phInterval);
            phInterval = null;
            return;

        }

        if(
            phTradesCompleted >=
            phNumberOfTrades
        ){

            clearInterval(phInterval);
            phInterval = null;

            return;

        }

        addPhinixTrade();

    }, 2500);

}
    
}




    
 function addPhinixTrade(){

    /* STOP IF BOT IS NOT RUNNING */

if(!phBotRunning){
    return;
}

/*
   NUMBER OF TRADES

   0 = CONTINUOUS
   1-10 = STOP AFTER SELECTED NUMBER
*/

if(
    phNumberOfTrades > 0 &&
    phTradesCompleted >= phNumberOfTrades
){

    phBotRunning = false;

    if(phInterval){
        clearInterval(phInterval);
        phInterval = null;
    }

    stopPhinixBot();

    return;
}


    /* CURRENT TRADE STAKE */

    const tradeStake =
        Number(phCurrentStake);


    /* SIMULATED RESULT */

    const win =
        Math.random() > 0.35;


    /* SIMULATED ENTRY */

    const entry =
        (735 + Math.random()).toFixed(2);


    /* PROFIT / LOSS */

    const pnl =
        win
        ? tradeStake * 0.74
        : -tradeStake;


    /* UPDATE TOTALS */

    phStake += tradeStake;

    phPayout +=
        win
        ? tradeStake + pnl
        : 0;

    phRuns++;

     phTradesCompleted++;


    if(win){

        phWon++;

    }else{

        phLost++;

    }


    phProfit += pnl;


    /* SAVE TRANSACTION */

    phTransactions.push({

        type:
            win
            ? "📈"
            : "📉",

        entry:
            entry,

        pnl:
            pnl,

        stake:
            tradeStake,

        win:
            win

    });


    /* JOURNAL */

    phJournal += `
🎯 Signal Found
${win ? "💰 Contract Won" : "❌ Contract Lost"} (${pnl.toFixed(2)} USD)
Stake: ${tradeStake.toFixed(2)} USD
📈 Monitoring Market...
`;


/* =========================
   MARTINGALE
   ========================= */

/*
    WIN:
    Return to the original stake.
*/

if(win){

    phCurrentStake =
        phBaseStake;

}

/*
    LOSS + MARTINGALE ON:
    Multiply the current trade stake
    for the NEXT trade.
*/

else if(
    !win &&
    phMartingale > 0
){

    phCurrentStake =
        Number(tradeStake) *
        Number(phMartingale);

}

/*
    LOSS + MARTINGALE OFF:
    Keep the normal base stake.
*/

else{

    phCurrentStake =
        phBaseStake;

}


    /* UPDATE SCREEN */

    renderPhinixTransactions();

    renderPhinixJournal();

    updatePhinixStats();

    updatePhinixResultsPanel();

 }
    


    

    



    
        




function renderPhinixTransactions(){

    const table = document.getElementById("phTransactionsTable");

    if(!table) return;

    const tbody = table.getElementsByTagName("tbody")[0];

    if(!tbody) return;

    tbody.innerHTML = "";

    phTransactions.forEach(trade => {

        const row = tbody.insertRow();

        row.innerHTML = `
            <td style="text-align:center;">
                ${trade.type}
            </td>

            <td style="text-align:center;">
                ${trade.entry}
            </td>

            <td style="
                text-align:center;
                color:${trade.pnl >= 0 ? "#00ff88" : "#ff4444"};
            ">
                ${trade.pnl.toFixed(2)} USD
            </td>
        `;

    });

    const container =
        document.getElementById("phTransactionContainer");

    if(container){
        container.scrollTop = container.scrollHeight;
    }

}

function updatePhinixStats(){

    const stake =
        document.getElementById("phStakeDisplay");

    const payout =
        document.getElementById("phPayoutDisplay");

    const won =
        document.getElementById("phWonDisplay");

    const lost =
        document.getElementById("phLostDisplay");

    const runs =
        document.getElementById("phRunsDisplay");

    const profit =
        document.getElementById("phProfitDisplay");

    if(stake){
        stake.innerHTML =
            phStake.toFixed(2) + " USD";
    }

    if(payout){
        payout.innerHTML =
            phPayout.toFixed(2) + " USD";
    }

    if(won){
        won.innerHTML = phWon;
    }

    if(lost){
        lost.innerHTML = phLost;
    }

    if(runs){
        runs.innerHTML = phRuns;
    }

    if(profit){
        profit.innerHTML =
            phProfit.toFixed(2) + " USD";

        profit.style.color =
            phProfit >= 0 ? "#00ff88" : "#ff4444";
    }

}

    
 function showPhinixTransactions(){

    const container = document.querySelector(".container");

    if (!container) return;

    container.innerHTML = `

        <div class="header">
            <div onclick="openPhinixRunningScreen()" style="cursor:pointer;">←</div>

            <div class="logo">PHINIX PRO BOT</div>

            <div style="color:#00ff88;font-weight:bold;">
                TRANSACTIONS
            </div>
        </div>

        <div style="
            background:#161625;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:12px;
            margin-top:12px;
            height:300px;
            overflow-y:auto;
        " id="phTransactionContainer">

            <table id="phTransactionsTable"
                   style="
                   width:100%;
                   border-collapse:collapse;
                   color:white;
                   table-layout:fixed;
                   ">

                <thead>
                    <tr style="color:#c94fff;">
                        <th style="width:20%;">Type</th>
                        <th style="width:40%;">Entry</th>
                        <th style="width:40%;">P/L</th>
                    </tr>
                </thead>

                <tbody></tbody>

            </table>

            ${
                phTransactions.length === 0
                ? `
                <div style="
                    text-align:center;
                    color:#888;
                    padding:30px 10px;
                ">
                    No transactions yet.
                </div>
                `
                : ""
            }

        </div>

        <div style="
            background:#161625;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:12px;
            margin-top:12px;
            display:flex;
            gap:8px;
        ">

            <button
                onclick="showPhinixSummary()"
                style="
                flex:1;
                padding:11px;
                background:#111;
                color:white;
                border:none;
                border-radius:10px;
                font-weight:bold;
                ">
                Summary
            </button>

            <button
                onclick="showPhinixTransactions()"
                style="
                flex:1;
                padding:11px;
                background:linear-gradient(90deg,#7a2cff,#c94fff);
                color:white;
                border:none;
                border-radius:10px;
                font-weight:bold;
                ">
                Transactions
            </button>

            <button
                onclick="showPhinixJournal()"
                style="
                flex:1;
                padding:11px;
                background:#111;
                color:white;
                border:none;
                border-radius:10px;
                font-weight:bold;
                ">
                Journal
            </button>

            <button
    onclick="resetPhinixResults()"
    style="
        flex:1;
        padding:11px;
        background:#d62828;
        color:white;
        border:none;
        border-radius:10px;
        font-weight:bold;
    ">
    Reset
</button>

<button
    onclick="togglePhinixBot()"
    style="
        flex:1;
        padding:11px;
        background:#d62828;
        color:white;
        border:none;
        border-radius:10px;
        font-weight:bold;
    ">
    Stop
</button>

        </div>

    `;

    // Rebuild the table from saved trades.
    renderPhinixTransactions();

 }   

    

    
function showPhinixSummary(){

    const container = document.querySelector(".container");

    if (!container) return;

    container.innerHTML = `

        <div class="header">
            <div onclick="openPhinixRunningScreen()" style="cursor:pointer;">←</div>

            <div class="logo">PHINIX PRO BOT</div>

            <div style="color:#00ff88;font-weight:bold;">
                SUMMARY
            </div>
        </div>

        <div style="
            background:#161625;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:14px;
            margin-top:12px;
        ">

            <div style="
                display:grid;
                grid-template-columns:1fr 1fr;
                gap:12px;
                text-align:center;
                color:white;
            ">

                <div>
                    <b>Total Stake</b><br>
                    <span>${Number(phStake || 0).toFixed(2)} USD</span>
                </div>

                <div>
                    <b>Total Payout</b><br>
                    <span>${Number(phPayout || 0).toFixed(2)} USD</span>
                </div>

                <div>
                    <b>Contracts Won</b><br>
                    <span>${Number(phWon || 0)}</span>
                </div>

                <div>
                    <b>Contracts Lost</b><br>
                    <span>${Number(phLost || 0)}</span>
                </div>

                <div>
                    <b>No. of Runs</b><br>
                    <span>${Number(phRuns || 0)}</span>
                </div>

                <div>
                    <b>Total Profit</b><br>
                    <span style="
                        color:${Number(phProfit || 0) >= 0
                            ? "#00ff88"
                            : "#ff4444"};
                    ">
                        ${Number(phProfit || 0).toFixed(2)} USD
                    </span>
                </div>

            </div>

        </div>

        <div style="
            background:#161625;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:12px;
            margin-top:12px;
            display:flex;
            gap:8px;
        ">

            <button
                onclick="showPhinixSummary()"
                style="
                    flex:1;
                    padding:11px;
                    background:linear-gradient(90deg,#7a2cff,#c94fff);
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Summary
            </button>

            <button
                onclick="showPhinixTransactions()"
                style="
                    flex:1;
                    padding:11px;
                    background:#111;
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Transactions
            </button>

            <button
                onclick="showPhinixJournal()"
                style="
                    flex:1;
                    padding:11px;
                    background:#111;
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Journal
            </button>
            
            <button
    onclick="resetPhinixResults()"
    style="
        flex:1;
        padding:11px;
        background:#d62828;
        color:white;
        border:none;
        border-radius:10px;
        font-weight:bold;
    ">
    Reset
</button>

<button
    onclick="togglePhinixBot()"
    style="
        flex:1;
        padding:11px;
        background:#d62828;
        color:white;
        border:none;
        border-radius:10px;
        font-weight:bold;
    ">
    Stop
</button>

        </div>

    `;

}

function showPhinixJournal(){

    const container = document.querySelector(".container");

    if (!container) return;

    container.innerHTML = `

        <div class="header">
            <div onclick="openPhinixRunningScreen()" style="cursor:pointer;">←</div>

            <div class="logo">PHINIX PRO BOT</div>

            <div style="color:#00ff88;font-weight:bold;">
                JOURNAL
            </div>
        </div>

        <div style="
            background:#161625;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:14px;
            margin-top:12px;
            min-height:260px;
        ">

            <div style="
                color:#aaa;
                font-size:13px;
                margin-bottom:12px;
            ">
                Trading Journal
            </div>

            <div id="phJournalContent"
                 style="
                 color:white;
                 line-height:1.7;
                 white-space:pre-wrap;
                 word-break:break-word;
                 ">
                ${phJournal || "No journal entries yet."}
            </div>

        </div>

        <div style="
            background:#161625;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:12px;
            margin-top:12px;
            display:flex;
            gap:8px;
        ">

            <button
                onclick="showPhinixSummary()"
                style="
                    flex:1;
                    padding:11px;
                    background:#111;
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Summary
            </button>

            <button
                onclick="showPhinixTransactions()"
                style="
                    flex:1;
                    padding:11px;
                    background:#111;
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Transactions
            </button>

            <button
                onclick="showPhinixJournal()"
                style="
                    flex:1;
                    padding:11px;
                    background:linear-gradient(90deg,#7a2cff,#c94fff);
                    color:white;
                    border:none;
                    border-radius:10px;
                    font-weight:bold;
                ">
                Journal
            </button>

            <button
    onclick="resetPhinixResults()"
    style="
        flex:1;
        padding:11px;
        background:#d62828;
        color:white;
        border:none;
        border-radius:10px;
        font-weight:bold;
    ">
    Reset
</button>

<button
    onclick="togglePhinixBot()"
    style="
        flex:1;
        padding:11px;
        background:#d62828;
        color:white;
        border:none;
        border-radius:10px;
        font-weight:bold;
    ">
    Stop
</button>

        </div>

    `;

}

function resetPhinixResults(){

    // Stop the current bot
    if(phInterval){
        clearInterval(phInterval);
        phInterval = null;
    }

    phBotRunning = false;

    // Clear all results
    phStake = 0;
    phPayout = 0;
    phWon = 0;
    phLost = 0;
    phRuns = 0;
    phProfit = 0;
    phJournal = "";
    phTransactions = [];

    // Show the fresh results screen without starting the bot
    openPhinixRunningScreen();

    // Immediately stop the running state created by the screen
    phBotRunning = false;

    if(phInterval){
        clearInterval(phInterval);
        phInterval = null;
    }

    const status = document.getElementById("phStatus");
    if(status){
        status.innerHTML = "READY";
        status.style.color = "#aaa";
    }

    const button = document.getElementById("phRunBtn");
    if(button){
        button.innerHTML = "▶ START";
        button.style.background = "#7a2cff";
    }

}

    







function openLightningBot() {
    activeBot = "Lightning Bot";

    document.querySelector(".container").innerHTML = `

<div class="header">
    <div onclick="backToManualTrader()" style="cursor:pointer;">←</div>
    <div class="logo">⚡ LIGHTNING BOT</div>
    <div>🏠</div>
</div>

<div style="
background:#5f22b6;
padding:16px;
border-radius:18px;
margin-top:12px;
">

<h2 style="
text-align:center;
color:white;
font-size:28px;
margin-bottom:20px;
">
⚡ HIGH SPEED SCALPING
</h2>

<h3 style="color:#ffd700;">📊 Trade Parameters</h3>

<label>Market</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option selected>Derived</option>
<option>Forex</option>
<option>Synthetic</option>
</select>

<label>Index</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>Volatility 10</option>
<option>Volatility 25</option>
<option>Volatility 50</option>
<option>Volatility 75</option>
<option selected>Volatility 100 (1s)</option>
</select>

<label>Stake</label>
<input
type="number"
value="2"
style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">

<label>Target Profit</label>
<input
type="number"
value="5"
style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">

<label>Stop Loss</label>
<input
type="number"
value="10"
style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">

<label>Martingale</label>
<select
style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:20px;
">
<option selected>OFF</option>
<option>2</option>
<option>2.5</option>
<option>3</option>
<option>4</option>
</select>

<h3 style="color:#ffd700;">⚙ Trade Options</h3>

<label>Trade Type</label>
<select
style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option selected>Over / Under</option>
<option>Matches / Differs</option>
<option>Even / Odd</option>
<option>Rise / Fall</option>
</select>

<label>Duration</label>
<select
style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>1 Tick</option>
<option>2 Ticks</option>
<option>3 Ticks</option>
<option selected>5 Ticks</option>
<option>10 Ticks</option>
</select>

<label>Prediction</label>
<select
style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:20px;
">
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option selected>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
</select>


<h3 style="color:#ffd700;margin-top:20px;">
🛒 Purchase Conditions
</h3>

<label>Purchase</label>

<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>Odd</option>
<option>Even</option>
<option>Over</option>
<option>Under</option>
<option>Matches</option>
<option>Differs</option>
<option>Rise</option>
<option>Fall</option>
</select>


<label>Allow Bulk Purchase</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>No</option>
<option>Yes</option>
</select>

<label>Number of Trades</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:20px;
">
<option>1</option>
<option>2</option>
<option>5</option>
<option selected>10</option>
<option>20</option>
</select>
<button
onclick="openLightningRunningScreen()"
style="
width:100%;
padding:16px;
background:#00b050;
color:white;
font-size:20px;
font-weight:bold;
border:none;
border-radius:14px;
cursor:pointer;
">
▶ RUN
</button>

</div>

`;
}

function openLightningBotBuilder() {

    openLightningBot();

    const logo = document.querySelector(".logo");

    if (logo) {
        logo.innerHTML = "🛠 BOT BUILDER";
    }

}

function openLightningRunningScreen(){
document.querySelector(".container").innerHTML = `

<div class="header">
    <div onclick="openLightningBot()" style="cursor:pointer;">←</div>
    <div class="logo">⚡ LIGHTNING BOT</div>
    <div id="lightStatus" style="color:#00ff88;font-weight:bold;">
        RUNNING
    </div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:10px;
margin-top:12px;
display:flex;
gap:8px;
">

<button onclick="showLightningSummary()"
style="
flex:1;
padding:12px;
border:none;
border-radius:12px;
">
Summary
</button>

<button onclick="showLightningTransactions()"
style="
flex:1;
padding:12px;
border:none;
border-radius:12px;
background:#7a2cff;
color:white;
">
Transactions
</button>

<button onclick="showLightningJournal()"
style="
flex:1;
padding:12px;
border:none;
border-radius:12px;
">
Journal
</button>

</div>

<div id="lightTransactionContainer"
style="
background:#161625;
border:1px solid #7a2cff;
border-radius:16px;
padding:12px;
margin-top:12px;
height:250px;
overflow-y:auto;
">

<table id="lightTransactionsTable"
style="
width:100%;
border-collapse:collapse;
table-layout:fixed;
color:white;
text-align:center;
">

<thead>
<tr>
<th style="width:20%;">Type</th>
<th style="width:40%;">Entry</th>
<th style="width:40%;">P/L</th>
</tr>
</thead>

<tbody id="lightningTransactions">
</tbody>

</table>

</div>
<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:16px;
padding:14px;
margin-top:12px;
">

<div style="
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
text-align:center;
">

<div>
<b>Total Stake</b><br>
<span id="lightStakeDisplay">0 USD</span>
</div>

<div>
<b>Total Payout</b><br>
<span id="lightPayoutDisplay">0 USD</span>
</div>

<div>
<b>Won</b><br>
<span id="lightWonDisplay">0</span>
</div>

<div>
<b>Lost</b><br>
<span id="lightLostDisplay">0</span>
</div>

<div>
<b>Runs</b><br>
<span id="lightRunsDisplay">0</span>
</div>

<div>
<b>Profit</b><br>
<span id="lightProfitDisplay">0 USD</span>
</div>

</div>

<button
id="lightRunBtn"
onclick="toggleLightningBot()"
style="
width:100%;
margin-top:16px;
padding:14px;
background:#d62828;
color:white;
border:none;
border-radius:12px;
font-size:18px;
font-weight:bold;
">
■ STOP
</button>

</div>

`;

lightBotRunning = true;

lightStake = 0;
lightPayout = 0;
lightWon = 0;
lightLost = 0;
lightRuns = 0;
lightProfit = 0;
lightJournal = "";

lightInterval = setInterval(addLightningTrade, 2500);

}
function addLightningTrade(){

const table =
document.getElementById("lightningTransactions");

const win = Math.random() > 0.35;

const entry = (735 + Math.random()).toFixed(2);

const pnl = win ? 3.70 : -5.00;

lightStake += 5;
lightPayout += win ? 8.70 : 0;
lightRuns++;

if(win){
    lightWon++;
}else{
    lightLost++;
}

lightProfit += pnl;

table.innerHTML += `
<tr>
<td style="text-align:center;">${win ? "📈" : "📉"}</td>
<td style="text-align:center;">${entry}</td>
<td style="text-align:center;color:${win ? "#00ff88" : "#ff4444"};">
${pnl.toFixed(2)} USD
</td>
</tr>
`;

document.getElementById("lightStakeDisplay").innerHTML =
lightStake.toFixed(2)+" USD";

document.getElementById("lightPayoutDisplay").innerHTML =
lightPayout.toFixed(2)+" USD";

document.getElementById("lightWonDisplay").innerHTML =
lightWon;

document.getElementById("lightLostDisplay").innerHTML =
lightLost;

document.getElementById("lightRunsDisplay").innerHTML =
lightRuns;

document.getElementById("lightProfitDisplay").innerHTML =
lightProfit.toFixed(2)+" USD";

document.getElementById("lightProfitDisplay").style.color =
lightProfit >= 0 ? "#00ff88" : "#ff4444";

const container =
document.getElementById("lightTransactionContainer");

container.scrollTop = container.scrollHeight;

lightJournal += `
🎯 Signal Found<br>
${win ? "💰 Contract Won" : "❌ Contract Lost"} (${pnl.toFixed(2)} USD)<br>
📈 Monitoring Market...<br>
`;

}
function showLightningSummary(){

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openLightningRunningScreen()" style="cursor:pointer;">←</div>
<div class="logo">SUMMARY</div>
<div>📊</div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:18px;
margin-top:14px;
color:white;
line-height:2;
">

<h2 style="text-align:center;color:#ffd700;">
LIGHTNING BOT PERFORMANCE
</h2>

<b>Contracts Won:</b> ${lightWon}<br>
<b>Contracts Lost:</b> ${lightLost}<br>
<b>Total Stake:</b> ${lightStake.toFixed(2)} USD<br>
<b>Total Payout:</b> ${lightPayout.toFixed(2)} USD<br>

<b>Total Profit:</b>
<span style="color:${lightProfit>=0 ? "#00ff88" : "#ff4444"};">
${lightProfit.toFixed(2)} USD
</span>

</div>

`;

}
function showLightningJournal(){

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openLightningRunningScreen()" style="cursor:pointer;">←</div>
<div class="logo">JOURNAL</div>
<div>📖</div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:18px;
margin-top:14px;
color:white;
line-height:2;
">

<h2 style="
text-align:center;
color:#ffd700;
margin-bottom:18px;
">
LIGHTNING BOT ACTIVITY
</h2>

${lightJournal}

</div>

`;

}

function showLightningTransactions(){
    openLightningRunningScreen();
}
function toggleLightningBot(){

    if(lightBotRunning){

        clearInterval(lightInterval);
        lightBotRunning = false;

        document.getElementById("lightRunBtn").innerHTML = "▶ RUN";
        document.getElementById("lightRunBtn").style.background = "#00b050";

        document.getElementById("lightStatus").innerHTML = "STOPPED";

        return;

    }

    lightBotRunning = true;

    document.getElementById("lightRunBtn").innerHTML = "■ STOP";
    document.getElementById("lightRunBtn").style.background = "#d62828";

    document.getElementById("lightStatus").innerHTML = "RUNNING";

    lightInterval = setInterval(addLightningTrade, 2500);

}
function openSniperBot(){

activeBot = "Sniper";

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openBots()" style="cursor:pointer;">←</div>
<div class="logo">🎯 SNIPER BOT</div>
<div>🏠</div>
</div>

<div style="
background:linear-gradient(180deg,#7a2cff,#9d4edd,#ffd700);
padding:16px;
border-radius:18px;
margin-top:12px;
">

<h2 style="
text-align:center;
color:white;
font-size:28px;
margin-bottom:20px;
">
⚡ QUICK STRATEGY
</h2>
<h3 style="color:#ffd700;">📊 Trade Parameters</h3>

<label>Market</label>
<select style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">
<option>Derived</option>
</select>

<label>Index</label>
<select style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">
<option selected>Volatility 100 (1s)</option>
</select>

<label>Stake</label>
<input type="number" value="2"
style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">

<label>Target Profit</label>
<input type="number" value="5"
style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">

<label>Stop Loss</label>
<input type="number" value="10"
style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">

<h3 style="color:#ffd700;margin-top:20px;">
⚙ Run Once At Start
</h3>

<label>Martingale</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:20px;
">
<option>OFF</option>
<option>2</option>
<option>2.5</option>
<option>3</option>
<option>4</option>
</select>

<h3 style="color:#ffd700;margin-top:20px;">
📊 Trade Options
</h3>

<label>Trade Type</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>Over / Under</option>
<option>Matches / Differs</option>
<option>Even / Odd</option>
<option>Rise / Fall</option>
</select>

<label>Duration Type</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>Ticks</option>
<option>Seconds</option>
<option>Minutes</option>
</select>

<label>Duration Value</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>10</option>
</select>

<label>Prediction</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:20px;
">
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option selected>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
</select>

<h3 style="color:#ffd700;margin-top:20px;">
🛒 Purchase Conditions
</h3>

<label>Purchase</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>Odd</option>
<option>Even</option>
<option>Over</option>
<option>Under</option>
<option>Matches</option>
<option>Differs</option>
<option>Rise</option>
<option>Fall</option>
</select>

<label>Allow Bulk Purchase</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>No</option>
<option>Yes</option>
</select>

<label>Number of Trades</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:20px;
">
<option>1</option>
<option>2</option>
<option>5</option>
<option selected>10</option>
<option>20</option>
</select>

<button
onclick="openSniperRunningScreen()"
style="
width:100%;
padding:16px;
background:#00b050;
color:white;
font-size:20px;
font-weight:bold;
border:none;
border-radius:14px;
">
▶ RUN
</button>

</div>

`;

}
function openSniperRunningScreen(){

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openSniperBot()" style="cursor:pointer;">←</div>
<div class="logo">🎯 SNIPER BOT</div>
<div id="sniperStatus" style="color:#00ff88;font-weight:bold;">
RUNNING
</div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:10px;
margin-top:12px;
display:flex;
gap:8px;
">

<button onclick="showSniperSummary()"
style="flex:1;padding:12px;border:none;border-radius:12px;">
Summary
</button>

<button onclick="showSniperTransactions()"
style="flex:1;padding:12px;border:none;border-radius:12px;background:#7a2cff;color:white;">
Transactions
</button>

<button onclick="showSniperJournal()"
style="flex:1;padding:12px;border:none;border-radius:12px;">
Journal
</button>

</div>

<div id="sniperTransactionContainer"
style="
background:#161625;
border:1px solid #7a2cff;
border-radius:16px;
padding:12px;
margin-top:12px;
height:250px;
overflow-y:auto;
">

<table id="sniperTransactionsTable"
style="
width:100%;
border-collapse:collapse;
table-layout:fixed;
color:white;
text-align:center;
">

<thead>
<tr>
<th style="width:20%;">Type</th>
<th style="width:40%;">Entry</th>
<th style="width:40%;">P/L</th>
</tr>
</thead>

<tbody id="sniperTransactions"></tbody>

</table>

</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:16px;
padding:14px;
margin-top:12px;
">

<div style="
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
text-align:center;
">

<div><b>Total Stake</b><br><span id="sniperStakeDisplay">0 USD</span></div>

<div><b>Total Payout</b><br><span id="sniperPayoutDisplay">0 USD</span></div>

<div><b>Won</b><br><span id="sniperWonDisplay">0</span></div>

<div><b>Lost</b><br><span id="sniperLostDisplay">0</span></div>

<div><b>Runs</b><br><span id="sniperRunsDisplay">0</span></div>

<div><b>Profit</b><br><span id="sniperProfitDisplay">0 USD</span></div>

</div>

<button
id="sniperRunBtn"
onclick="toggleSniperBot()"
style="
width:100%;
margin-top:16px;
padding:14px;
background:#d62828;
color:white;
border:none;
border-radius:12px;
font-size:18px;
font-weight:bold;
">
■ STOP
</button>

</div>

`;

sniperBotRunning = true;

sniperStake = 0;
sniperPayout = 0;
sniperWon = 0;
sniperLost = 0;
sniperRuns = 0;
sniperProfit = 0;
sniperJournal = "";

sniperInterval = setInterval(addSniperTrade,2500);

}

function addSniperTrade(){

const table =
document.getElementById("sniperTransactions");

const win = Math.random() > 0.30; // Sniper wins slightly more often

const entry = (735 + Math.random()).toFixed(2);

const pnl = win ? 3.70 : -5.00;

sniperStake += 5;
sniperPayout += win ? 8.70 : 0;
sniperRuns++;

if(win){
    sniperWon++;
}else{
    sniperLost++;
}

sniperProfit += pnl;

table.innerHTML += `
<tr>
<td style="text-align:center;">${win ? "📈" : "📉"}</td>
<td style="text-align:center;">${entry}</td>
<td style="text-align:center;color:${win ? "#00ff88" : "#ff4444"};">
${pnl.toFixed(2)} USD
</td>
</tr>
`;

document.getElementById("sniperStakeDisplay").innerHTML =
sniperStake.toFixed(2)+" USD";

document.getElementById("sniperPayoutDisplay").innerHTML =
sniperPayout.toFixed(2)+" USD";

document.getElementById("sniperWonDisplay").innerHTML =
sniperWon;

document.getElementById("sniperLostDisplay").innerHTML =
sniperLost;

document.getElementById("sniperRunsDisplay").innerHTML =
sniperRuns;

document.getElementById("sniperProfitDisplay").innerHTML =
sniperProfit.toFixed(2)+" USD";

document.getElementById("sniperProfitDisplay").style.color =
sniperProfit >= 0 ? "#00ff88" : "#ff4444";

const container =
document.getElementById("sniperTransactionContainer");

container.scrollTop = container.scrollHeight;

sniperJournal += `
🎯 Sniper signal detected<br>
${win ? "💰 Contract Won" : "❌ Contract Lost"} (${pnl.toFixed(2)} USD)<br>
🎯 Waiting for next precision entry...<br>
`;

}
function toggleSniperBot(){

    if(sniperBotRunning){

        clearInterval(sniperInterval);
        sniperBotRunning = false;

        document.getElementById("sniperRunBtn").innerHTML = "▶ RUN";
        document.getElementById("sniperRunBtn").style.background = "#00b050";

        document.getElementById("sniperStatus").innerHTML = "STOPPED";

        return;
    }

    sniperBotRunning = true;

    document.getElementById("sniperRunBtn").innerHTML = "■ STOP";
    document.getElementById("sniperRunBtn").style.background = "#d62828";

    document.getElementById("sniperStatus").innerHTML = "RUNNING";

    sniperInterval = setInterval(addSniperTrade,2500);

}

function showSniperSummary(){

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openSniperRunningScreen()">←</div>
<div class="logo">SUMMARY</div>
<div>📊</div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:18px;
margin-top:14px;
color:white;
line-height:2;
">

<h2 style="text-align:center;color:#ffd700;">
SNIPER BOT PERFORMANCE
</h2>

<b>Contracts Won:</b> ${sniperWon}<br>
<b>Contracts Lost:</b> ${sniperLost}<br>
<b>Total Stake:</b> ${sniperStake.toFixed(2)} USD<br>
<b>Total Payout:</b> ${sniperPayout.toFixed(2)} USD<br>

<b>Total Profit:</b>
<span style="color:${sniperProfit>=0?"#00ff88":"#ff4444"};">
${sniperProfit.toFixed(2)} USD
</span>

</div>

`;

}

function showSniperJournal(){

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openSniperRunningScreen()">←</div>
<div class="logo">JOURNAL</div>
<div>📖</div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:18px;
margin-top:14px;
color:white;
line-height:2;
">

${sniperJournal}

</div>

`;

}

function showSniperTransactions(){
    openSniperRunningScreen();
}

function openTrendBot(){

activeBot = "Trend Bot";

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openBots()" style="cursor:pointer;">←</div>
<div class="logo">📈 TREND BOT</div>
<div>🏠</div>
</div>

<div style="
background:linear-gradient(180deg,#7a2cff,#9d4edd,#ffd700);
padding:16px;
border-radius:18px;
margin-top:12px;
">

<h2 style="
text-align:center;
color:white;
font-size:28px;
margin-bottom:20px;
">
📈 TREND FOLLOWING STRATEGY
</h2>

<h3 style="color:#ffd700;">
📊 Trade Parameters
</h3>

<label style="font-size:12px;font-weight:bold;color:#ffffff;">
Market
</label>

<select id="trendMarketSelect"
style="
width:100%;
padding:8px;
margin-bottom:8px;
border-radius:10px;
border:none;
">
<option>Derived</option>
<option>Forex</option>
<option>Synthetic</option>
</select>

<label style="font-size:12px;font-weight:bold;color:#ffffff;">
Index
</label>

<select id="trendIndexSelect"
style="
width:100%;
padding:12px;
margin-bottom:12px;
border-radius:14px;
border:1px solid #b84dff;
background:#1b1b2d;
color:#ffffff;
font-size:15px;
font-weight:bold;
outline:none;
">
<option>Volatility 10</option>
<option>Volatility 10 (1s)</option>
<option>Volatility 25</option>
<option>Volatility 25 (1s)</option>
<option>Volatility 50</option>
<option>Volatility 50 (1s)</option>
<option>Volatility 75</option>
<option>Volatility 75 (1s)</option>
<option selected>Volatility 100 (1s)</option>
</select>

<label>Stake</label>
<input type="number" value="2"
style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">

<label>Target Profit</label>
<input type="number" value="5"
style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">

<label>Stop Loss</label>
<input type="number" value="10"
style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">
<h3 style="color:#ffd700;margin-top:20px;">
⚙ Run Once At Start
</h3>

<label>Martingale</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:20px;
">
<option>OFF</option>
<option>2</option>
<option>2.5</option>
<option>3</option>
<option>4</option>
</select>

<h3 style="color:#ffd700;margin-top:20px;">
📊 Trade Options
</h3>

<label>Trade Type</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>Over / Under</option>
<option>Matches / Differs</option>
<option>Even / Odd</option>
<option>Rise / Fall</option>
</select>

<label>Duration Type</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>Ticks</option>
<option>Seconds</option>
<option>Minutes</option>
</select>

<label>Duration Value</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>1</option>
<option>2</option>
<option>3</option>
<option>4</option>
<option>5</option>
<option>10</option>
</select>

<label>Prediction</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:20px;
">
<option>0</option>
<option>1</option>
<option>2</option>
<option>3</option>
<option selected>4</option>
<option>5</option>
<option>6</option>
<option>7</option>
<option>8</option>
<option>9</option>
</select>

<h3 style="color:#ffd700;margin-top:20px;">
🛒 Purchase Conditions
</h3>

<label>Purchase</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>Odd</option>
<option>Even</option>
<option>Over</option>
<option>Under</option>
<option>Matches</option>
<option>Differs</option>
<option>Rise</option>
<option>Fall</option>
</select>

<label>Allow Bulk Purchase</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:12px;
">
<option>No</option>
<option>Yes</option>
</select>

<label>Number of Trades</label>
<select style="
width:100%;
padding:12px;
border-radius:12px;
margin-bottom:20px;
">
<option>1</option>
<option>2</option>
<option>5</option>
<option selected>10</option>
<option>20</option>
</select>

<button
onclick="
openTrendRunningScreen();
setTimeout(toggleTrendBot,200);
"
style="
width:100%;
padding:16px;
background:#00b050;
color:white;
font-size:20px;
font-weight:bold;
border:none;
border-radius:14px;
cursor:pointer;
">
▶ RUN
</button>

</div>

`;
}

function openTrendRunningScreen(){

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openTrendBot()" style="cursor:pointer;">←</div>
<div class="logo">📈 TREND BOT</div>
<div id="trendStatus" style="color:#00ff88;font-weight:bold;">
RUNNING
</div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:10px;
margin-top:12px;
display:flex;
gap:8px;
">

<button onclick="showTrendSummary()"
style="flex:1;padding:12px;border:none;border-radius:12px;">
Summary
</button>

<button onclick="showTrendTransactions()"
style="flex:1;padding:12px;border:none;border-radius:12px;background:#7a2cff;color:white;">
Transactions
</button>

<button onclick="showTrendJournal()"
style="flex:1;padding:12px;border:none;border-radius:12px;">
Journal
</button>

</div>
<div id="trendTransactionContainer"
style="
background:#161625;
border:1px solid #7a2cff;
border-radius:16px;
padding:12px;
margin-top:12px;
height:250px;
overflow-y:auto;
">

<table id="trendTransactionsTable"
style="
width:100%;
border-collapse:collapse;
table-layout:fixed;
color:white;
text-align:center;
">

<thead>
<tr>
<th style="width:20%;">Type</th>
<th style="width:40%;">Entry</th>
<th style="width:40%;">P/L</th>
</tr>
</thead>

<tbody></tbody>

</table>

</div>
<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:16px;
padding:14px;
margin-top:12px;
">

<div style="
display:grid;
grid-template-columns:1fr 1fr;
gap:12px;
text-align:center;
">

<div><b>Total Stake</b><br><span id="trendStakeDisplay">0 USD</span></div>

<div><b>Total Payout</b><br><span id="trendPayoutDisplay">0 USD</span></div>

<div><b>Won</b><br><span id="trendWonDisplay">0</span></div>

<div><b>Lost</b><br><span id="trendLostDisplay">0</span></div>

<div><b>Runs</b><br><span id="trendRunsDisplay">0</span></div>

<div><b>Profit</b><br><span id="trendProfitDisplay">0 USD</span></div>

</div>

<button
id="trendRunBtn"
onclick="toggleTrendBot()"
style="
width:100%;
margin-top:16px;
padding:14px;
background:#d62828;
color:white;
border:none;
border-radius:12px;
font-size:18px;
font-weight:bold;
">
■ STOP
</button>

</div>

`;
}

let trendBotRunning = false;
let trendInterval = null;

let trendStake = 0;
let trendPayout = 0;
let trendWon = 0;
let trendLost = 0;
let trendRuns = 0;
let trendProfit = 0;
let trendJournal = "";

function toggleTrendBot(){

    if(trendBotRunning){

        clearInterval(trendInterval);
        trendInterval = null;
        trendBotRunning = false;

        document.getElementById("trendRunBtn").innerHTML = "▶ RUN";
        document.getElementById("trendRunBtn").style.background = "#00b050";

        document.getElementById("trendStatus").innerHTML = "STOPPED";

        return;
    }

    trendBotRunning = true;

    document.getElementById("trendRunBtn").innerHTML = "■ STOP";
    document.getElementById("trendRunBtn").style.background = "#d62828";

    document.getElementById("trendStatus").innerHTML = "RUNNING";

    trendInterval = setInterval(addTrendTrade,2500);

}

function addTrendTrade(){

const table =
document.getElementById("trendTransactionsTable")
.getElementsByTagName("tbody")[0];

const row = table.insertRow();

const win = Math.random() > 0.40; // Trend Bot win rate

const entry = (735 + Math.random()).toFixed(2);

const pnl = win ? 3.70 : -5.00;

trendStake += 5;
trendPayout += win ? 8.70 : 0;
trendRuns++;

if(win){
    trendWon++;
}else{
    trendLost++;
}

trendProfit += pnl;

row.innerHTML = `
<td style="text-align:center;">${win ? "📈" : "📉"}</td>
<td style="text-align:center;">${entry}</td>
<td style="text-align:center;color:${win ? "#00ff88" : "#ff4444"};">
${pnl.toFixed(2)} USD
</td>
`;

document.getElementById("trendStakeDisplay").innerHTML =
trendStake.toFixed(2)+" USD";

document.getElementById("trendPayoutDisplay").innerHTML =
trendPayout.toFixed(2)+" USD";

document.getElementById("trendWonDisplay").innerHTML =
trendWon;

document.getElementById("trendLostDisplay").innerHTML =
trendLost;

document.getElementById("trendRunsDisplay").innerHTML =
trendRuns;

document.getElementById("trendProfitDisplay").innerHTML =
trendProfit.toFixed(2)+" USD";

document.getElementById("trendProfitDisplay").style.color =
trendProfit >= 0 ? "#00ff88" : "#ff4444";

trendJournal += `
📈 Trend detected<br>
${win ? "💰 Contract Won" : "❌ Contract Lost"} (${pnl.toFixed(2)} USD)<br>
📊 Monitoring next trend...<br>
`;

const container =
document.getElementById("trendTransactionContainer");

container.scrollTop = container.scrollHeight;

}

function showTrendSummary(){

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openTrendRunningScreen()">←</div>
<div class="logo">SUMMARY</div>
<div>📊</div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:18px;
margin-top:14px;
color:white;
line-height:2;
">

<h2 style="text-align:center;color:#ffd700;">
TREND BOT PERFORMANCE
</h2>

<b>Contracts Won:</b> ${trendWon}<br>
<b>Contracts Lost:</b> ${trendLost}<br>
<b>Total Stake:</b> ${trendStake.toFixed(2)} USD<br>
<b>Total Payout:</b> ${trendPayout.toFixed(2)} USD<br>

<b>Total Profit:</b>
<span style="color:${trendProfit>=0?"#00ff88":"#ff4444"};">
${trendProfit.toFixed(2)} USD
</span>

</div>

`;

}

function showTrendJournal(){

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openTrendRunningScreen()">←</div>
<div class="logo">JOURNAL</div>
<div>📖</div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:18px;
margin-top:14px;
color:white;
line-height:2;
">

${trendJournal}

</div>

`;

}

function showTrendTransactions(){
    openTrendRunningScreen();
}

function openManualTrader(){
    window.location.href = "dtrader.html";
}

function backToManualTrader(){
    window.location.href = "dtrader.html";
}

function openPhinixBots(){
    alert("Phinix Bots coming next...");
}

function openBulkTrader(){
    alert("Bulk Trader coming next...");
}

function openAnalysisTool(){
    alert("Analysis Tool coming next...");
}

function openRiskCalculator(){

    document.querySelector(".container").innerHTML = `

    <div style="
        min-height:100vh;
        background:#05020b;
        color:white;
        padding:12px;
        padding-bottom:110px;
        font-family:Arial,sans-serif;
    ">

        <!-- HEADER -->
        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:12px;
        ">

            <div onclick="backToManualTrader()" style="
                cursor:pointer;
                font-size:25px;
                color:#c94fff;
            ">
                ←
            </div>

            <div style="
                font-size:20px;
                font-weight:bold;
                color:#c94fff;
            ">
                🧮 RISK CALCULATOR
            </div>

            <div onclick="openDashboard()" style="
                cursor:pointer;
                font-size:22px;
            ">
                🏠
            </div>

        </div>


        <!-- MAIN CALCULATOR -->
        <div style="
            background:#080510;
            border:1px solid #6f2cff;
            border-radius:20px;
            overflow:hidden;
            box-shadow:0 5px 20px rgba(122,44,255,.18);
        ">

            <!-- TITLE -->
            <div style="
                text-align:center;
                padding:25px 15px;
                background:#0d0716;
            ">

                <h1 style="
                    font-size:27px;
                    margin:0;
                ">
                    Deriv Risk Management
                    <br>
                    Calculator 🧮
                </h1>

                <p style="
                    color:#bda8d0;
                    margin-top:12px;
                    font-size:14px;
                ">
                    Calculate optimal stakes and manage risk effectively
                </p>

            </div>


            <!-- AMOUNT DISPLAY -->
            <div style="padding:18px;">

                <div style="
                    display:flex;
                    align-items:center;
                    justify-content:space-between;
                    background:#120b1d;
                    border:2px solid #743cff;
                    border-radius:17px;
                    padding:15px;
                    margin-bottom:15px;
                ">

                    <span style="
                        font-size:32px;
                        color:#c94fff;
                    ">
                        $
                    </span>

                    <input
                        id="riskCapital"
                        type="number"
                        value="30"
                        min="1"
                        step="0.01"
                        oninput="calculatePhinixRisk()"
                        style="
                            width:80%;
                            background:transparent;
                            border:none;
                            outline:none;
                            color:white;
                            text-align:right;
                            font-size:38px;
                            font-weight:bold;
                        "
                    >

                </div>


                <!-- RISK SETTINGS -->

                <div style="
                    display:grid;
                    grid-template-columns:1fr 1fr;
                    gap:10px;
                    margin-bottom:18px;
                ">

                    <div>
                        <label style="font-size:12px;color:#bda8d0;">
                            Risk %
                        </label>

                        <input
                            id="riskPercent"
                            type="number"
                            value="2"
                            min="0.1"
                            step="0.1"
                            oninput="calculatePhinixRisk()"
                            style="
                                width:100%;
                                padding:12px;
                                margin-top:5px;
                                border-radius:12px;
                                border:1px solid #743cff;
                                background:#120b1d;
                                color:white;
                                box-sizing:border-box;
                            "
                        >
                    </div>


                    <div>
                        <label style="font-size:12px;color:#bda8d0;">
                            Martingale
                        </label>

                        <select
                            id="riskMartingale"
                            onchange="calculatePhinixRisk()"
                            style="
                                width:100%;
                                padding:12px;
                                margin-top:5px;
                                border-radius:12px;
                                border:1px solid #743cff;
                                background:#120b1d;
                                color:white;
                                box-sizing:border-box;
                            "
                        >
                            <option value="1">OFF</option>
                            <option value="1.5">x1.5</option>
                            <option value="2" selected>x2</option>
                            <option value="2.5">x2.5</option>
                            <option value="3">x3</option>
                        </select>
                    </div>


                    <div>
                        <label style="font-size:12px;color:#bda8d0;">
                            Take Profit %
                        </label>

                        <input
                            id="riskTakeProfit"
                            type="number"
                            value="10"
                            min="0.1"
                            step="0.1"
                            oninput="calculatePhinixRisk()"
                            style="
                                width:100%;
                                padding:12px;
                                margin-top:5px;
                                border-radius:12px;
                                border:1px solid #743cff;
                                background:#120b1d;
                                color:white;
                                box-sizing:border-box;
                            "
                        >
                    </div>


                    <div>
                        <label style="font-size:12px;color:#bda8d0;">
                            Stop Loss %
                        </label>

                        <input
                            id="riskStopLoss"
                            type="number"
                            value="30"
                            min="0.1"
                            step="0.1"
                            oninput="calculatePhinixRisk()"
                            style="
                                width:100%;
                                padding:12px;
                                margin-top:5px;
                                border-radius:12px;
                                border:1px solid #743cff;
                                background:#120b1d;
                                color:white;
                                box-sizing:border-box;
                            "
                        >
                    </div>

                </div>


                <!-- RESULT CARD -->
                <div style="
                    background:#120b1d;
                    border-radius:18px;
                    padding:18px;
                ">

                    <div style="
                        display:flex;
                        justify-content:space-between;
                        padding:12px 0;
                        border-bottom:1px solid #2d1645;
                    ">
                        <span>🪙 Stake:</span>
                        <strong id="riskStake" style="color:#00d995;">
                            $0.60
                        </strong>
                    </div>


                    <div style="
                        display:flex;
                        justify-content:space-between;
                        padding:12px 0;
                        border-bottom:1px solid #2d1645;
                    ">
                        <span>📈 Martingale Size:</span>
                        <strong id="riskMartingaleResult">
                            x2
                        </strong>
                    </div>


                    <div style="
                        display:flex;
                        justify-content:space-between;
                        padding:12px 0;
                        border-bottom:1px solid #2d1645;
                    ">
                        <span>⬆️ Take Profit:</span>
                        <strong id="riskTP" style="color:#00d995;">
                            $3.00
                        </strong>
                    </div>


                    <div style="
                        display:flex;
                        justify-content:space-between;
                        padding:12px 0;
                    ">
                        <span>⬇️ Stop Loss:</span>
                        <strong id="riskSL" style="color:#ff4d5e;">
                            $9.00
                        </strong>
                    </div>

                </div>


                <!-- LOSSES -->
                <div style="
                    margin-top:15px;
                    background:#120b1d;
                    border-radius:16px;
                    padding:16px;
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                ">

                    <span>
                        ⚠️ Consecutive Losses:
                    </span>

                    <select
                        id="riskLosses"
                        onchange="calculatePhinixRisk()"
                        style="
                            background:#120b1d;
                            color:white;
                            border:1px solid #743cff;
                            border-radius:10px;
                            padding:10px;
                        "
                    >
                        <option>1</option>
                        <option>2</option>
                        <option selected>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>

                </div>


                <!-- STAKE SEQUENCE -->
                <div style="
                    margin-top:15px;
                    background:#120b1d;
                    border-radius:16px;
                    padding:16px;
                ">

                    <h3 style="
                        margin-bottom:15px;
                        color:#c94fff;
                    ">
                        📋 Stake Sequence
                    </h3>

                    <div id="riskSequence"
                         style="
                            display:flex;
                            flex-wrap:wrap;
                            gap:10px;
                         ">
                    </div>

                </div>


                <!-- REQUIRED CAPITAL -->
                <div style="
                    margin-top:15px;
                    padding:15px 5px;
                    display:flex;
                    justify-content:space-between;
                    font-size:16px;
                ">

                    <span>
                        🛡 Required Capital:
                    </span>

                    <strong id="riskRequiredCapital"
                            style="color:#ffb000;">
                        $9.00
                    </strong>

                </div>


                <!-- BOT SETTINGS -->
                <div style="
                    margin-top:10px;
                    background:#120b1d;
                    border-radius:16px;
                    padding:16px;
                ">

                    <h3 style="
                        color:#c94fff;
                        margin-bottom:8px;
                    ">
                        🤖 Bot Risk Settings
                    </h3>

                    <p style="
                        color:#bda8d0;
                        font-size:13px;
                        line-height:1.5;
                    ">
                        These calculated values can be used when configuring
                        Phinix Bots, Lightning Bot, Bulk Trader and other
                        automated strategies.
                    </p>

                </div>

            </div>

        </div>

    </div>

    `;

    calculatePhinixRisk();
}

    

                    





function calculatePhinixRisk(){

    const capital =
        Number(document.getElementById("riskCapital")?.value || 0);

    const riskPercent =
        Number(document.getElementById("riskPercent")?.value || 0);

    const martingale =
        Number(document.getElementById("riskMartingale")?.value || 1);

    const takeProfitPercent =
        Number(document.getElementById("riskTakeProfit")?.value || 0);

    const stopLossPercent =
        Number(document.getElementById("riskStopLoss")?.value || 0);

    const losses =
        Number(document.getElementById("riskLosses")?.value || 3);


    if(capital <= 0){
        return;
    }


    // Base stake
    const stake =
        capital * (riskPercent / 100);


    // Take profit
    const takeProfit =
        capital * (takeProfitPercent / 100);


    // Stop loss
    const stopLoss =
        capital * (stopLossPercent / 100);


    // Stake sequence
    const sequence = [];

    let currentStake = stake;

    for(let i = 0; i <= losses; i++){

        sequence.push(currentStake);

        currentStake =
            currentStake * martingale;
    }


    // Required capital
    const requiredCapital =
        sequence.reduce(
            (total,value) => total + value,
            0
        );


    // Update results
    const stakeElement =
        document.getElementById("riskStake");

    const tpElement =
        document.getElementById("riskTP");

    const slElement =
        document.getElementById("riskSL");

    const martingaleElement =
        document.getElementById("riskMartingaleResult");

    const requiredElement =
        document.getElementById("riskRequiredCapital");

    const sequenceElement =
        document.getElementById("riskSequence");


    if(stakeElement){
        stakeElement.textContent =
            "$" + stake.toFixed(2);
    }

    if(tpElement){
        tpElement.textContent =
            "$" + takeProfit.toFixed(2);
    }

    if(slElement){
        slElement.textContent =
            "$" + stopLoss.toFixed(2);
    }

    if(martingaleElement){

        martingaleElement.textContent =
            martingale === 1
                ? "OFF"
                : "x" + martingale;

    }

    if(requiredElement){

        requiredElement.textContent =
            "$" + requiredCapital.toFixed(2);

    }


    if(sequenceElement){

        sequenceElement.innerHTML =
            sequence.map(function(value){

                return `
                    <div style="
                        background:#2768e8;
                        color:white;
                        padding:10px 14px;
                        border-radius:20px;
                        font-weight:bold;
                    ">
                        $${value.toFixed(2)}
                    </div>
                `;

            }).join("");

    }

            }
        

function openOldManualTrader(){
    document.querySelector(".container").innerHTML = `

<div class="header">
    <div onclick="openDashboard()" style="cursor:pointer;">☰</div>
    <div class="logo">PHINIX TRADERS</div>
    <div>🔔</div>
</div>

<!-- BALANCE / WALLET -->
<div style="
margin:15px 20px;
background:#0d0d18;
border:1px solid #7a2cff;
border-radius:22px;
padding:18px;
box-shadow:0 0 15px rgba(122,44,255,.25);
">

<div style="font-size:14px;color:white;">
Demo Balance
</div>

<div style="
display:flex;
align-items:center;
justify-content:space-between;
gap:10px;
">

<div style="
font-size:42px;
font-weight:bold;
color:white;
">
$10,000
</div>

<button
onclick="changeWallet()"
class="wallet-btn"
style="
background:linear-gradient(90deg,#7a2cff,#c94fff);
color:white;
border:none;
border-radius:18px;
padding:14px 20px;
font-size:17px;
font-weight:bold;
">
Wallet ▼
</button>

</div>

<div style="
display:flex;
gap:8px;
margin-top:15px;
">

<button
onclick="alert('Deposit selected')"
style="
flex:1;
background:#00a878;
color:white;
border:none;
border-radius:12px;
padding:11px;
font-weight:bold;
">
💰 Deposit
</button>

<button
onclick="alert('Withdraw selected')"
style="
flex:1;
background:#c0003c;
color:white;
border:none;
border-radius:12px;
padding:11px;
font-weight:bold;
">
🏧 Withdraw
</button>

</div>

</div>

<!-- SWIPEABLE TABS -->
<div style="
display:flex;
gap:8px;
overflow-x:auto;
white-space:nowrap;
padding:8px 20px 15px;
scrollbar-width:none;
">

<button onclick="openDashboard()" style="
flex:0 0 auto;
padding:12px 18px;
border-radius:18px;
border:1px solid #292936;
background:#11111b;
color:white;
font-size:15px;
">
🏠 Dashboard
</button>

<button onclick="window.location.href='dtrader.html'" style="
flex:0 0 auto;
padding:12px 18px;
border-radius:18px;
border:1px solid #9d4edd;
background:#17101f;
color:#c94fff;
font-size:15px;
">
📈 Manual Trader
</button>

<button onclick="openBots()" style="
flex:0 0 auto;
padding:12px 18px;
border-radius:18px;
border:1px solid #292936;
background:#11111b;
color:white;
font-size:15px;
">
🤖 Phinix Bots
</button>

<button onclick="openLightningBotBuilder()" style="
flex:0 0 auto;
padding:12px 18px;
border-radius:18px;
border:1px solid #292936;
background:#11111b;
color:white;
font-size:15px;
">
🛠 Bot Builder
</button>

<button onclick="openBulkTrader()" style="
flex:0 0 auto;
padding:12px 18px;
border-radius:18px;
border:1px solid #292936;
background:#11111b;
color:white;
font-size:15px;
">
📦 Bulk Trader
</button>

<button onclick="openAnalysisTool()" style="
flex:0 0 auto;
padding:12px 18px;
border-radius:18px;
border:1px solid #292936;
background:#11111b;
color:white;
font-size:15px;
">
📊 Analysis
</button>

</div>

<!-- MARKET -->
<div style="
margin:10px 20px;
background:#0d0d18;
border-radius:20px;
padding:18px;
">

<div
class="trade-box"
onclick="changeVolatility()"
style="
border:1px solid #222232;
border-radius:15px;
padding:16px;
color:white;
font-size:17px;
cursor:pointer;
">
Volatility 100 (1s) Index ▼
</div>

<div style="
margin-top:18px;
font-size:28px;
font-weight:bold;
color:#00ff88;
">
6,719.71 ▲
<span style="font-size:18px;">
0.42%
</span>
</div>

</div>

<!-- DIGITS -->
<div style="
display:grid;
grid-template-columns:repeat(5,1fr);
gap:14px;
padding:10px 20px;
">

${[0,1,2,3,4,5,6,7,8,9].map(n => `

<div style="
height:82px;
border:2px solid #292929;
border-radius:50%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
color:white;
font-size:28px;
font-weight:bold;
">

${n}

<span style="
font-size:13px;
color:#00ff88;
margin-top:4px;
">
10%
</span>

</div>

`).join("")}

</div>

<!-- TRADE SETTINGS -->
<div style="padding:5px 20px;">

<div
class="trade-box"
onclick="changeTicks()"
style="
background:#0d0d18;
border:1px solid #222232;
border-radius:15px;
padding:16px;
margin-top:12px;
color:white;
font-size:16px;
cursor:pointer;
">
Number of ticks: 1 ▼
</div>

<div
class="trade-box"
onclick="changeContract()"
style="
background:#0d0d18;
border:1px solid #222232;
border-radius:15px;
padding:16px;
margin-top:12px;
color:white;
font-size:16px;
cursor:pointer;
">
Over / Under ▼
</div>

<div
class="trade-box"
onclick="changeStake()"
style="
background:#0d0d18;
border:1px solid #222232;
border-radius:15px;
padding:16px;
margin-top:12px;
color:white;
font-size:16px;
cursor:pointer;
">
Stake: 5 USD
</div>

</div>

<!-- TRADE BUTTONS -->
<div style="
display:flex;
gap:16px;
padding:25px 20px 20px;
">

<button
class="over"
onclick="alert('OVER trade selected')"
style="
flex:1;
padding:18px;
background:#008f7a;
color:white;
border:none;
border-radius:18px 18px 0 0;
font-size:20px;
font-weight:bold;
">
OVER
</button>

<button
class="under"
onclick="alert('UNDER trade selected')"
style="
flex:1;
padding:18px;
background:#c0003c;
color:white;
border:none;
border-radius:18px 18px 0 0;
font-size:20px;
font-weight:bold;
">
UNDER
</button>

</div>

`;
}

function openWalletMenu(){

    document.querySelector(".container").innerHTML = `

    <div style="
        min-height:100vh;
        background:#05050b;
        color:white;
        padding:15px;
    ">

        <!-- HEADER -->
        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:22px;
        ">

            <div onclick="backToManualTrader()" style="
    cursor:pointer;
    font-size:25px;
    color:#c94fff;
">
    ←
</div>

            <div style="
                font-size:21px;
                font-weight:bold;
                color:#b266ff;
            ">
                💰 WALLET
            </div>

            <div onclick="openDashboard()" style="
                cursor:pointer;
                font-size:22px;
            ">
                🏠
            </div>

        </div>


        <!-- BALANCE -->
        <div style="
            background:#11111b;
            border:1px solid #7a2cff;
            border-radius:20px;
            padding:20px;
            text-align:center;
            margin-bottom:20px;
            box-shadow:0 0 18px rgba(122,44,255,.25);
        ">

            <div style="
    color:#c084fc;
    font-weight:bold;
    font-size:14px;
">
    REAL ACCOUNT BALANCE
</div>

<div style="
    font-size:38px;
    font-weight:bold;
    margin-top:8px;
">
    <span id="phinixWalletBalance">$0.00</span>
</div>

<div style="
    color:#888;
    font-size:12px;
    margin-top:5px;
">
    Real Account
</div>

        </div>


        <!-- DEPOSIT -->
        <button onclick="openDepositPage()" style="
            width:100%;
            padding:17px;
            margin-bottom:12px;
            border:none;
            border-radius:16px;
            background:linear-gradient(90deg,#16a34a,#22c55e);
            color:white;
            font-size:17px;
            font-weight:bold;
        ">
            💰 DEPOSIT FUNDS
        </button>


        <!-- WITHDRAW -->
        <button onclick="openWithdrawPage()" style="
            width:100%;
            padding:17px;
            margin-bottom:20px;
            border:none;
            border-radius:16px;
            background:linear-gradient(90deg,#dc2626,#ef4444);
            color:white;
            font-size:17px;
            font-weight:bold;
        ">
            🏧 WITHDRAW FUNDS
        </button>


        <!-- PAYMENT METHODS -->
        <div style="
            background:#11111b;
            border:1px solid #29293d;
            border-radius:18px;
            padding:16px;
        ">

            <h3 style="
                color:#c084fc;
                margin-bottom:15px;
            ">
                💳 PAYMENT METHODS
            </h3>

            <div style="
                background:#080814;
                padding:15px;
                border-radius:13px;
                margin-bottom:10px;
            ">
                🇰🇪 <b>M-Pesa</b>
                <div style="font-size:12px;color:#888;margin-top:4px;">
                    Mobile money
                </div>
            </div>

            <div style="
                background:#080814;
                padding:15px;
                border-radius:13px;
                margin-bottom:10px;
            ">
                📱 <b>Airtel Money</b>
                <div style="font-size:12px;color:#888;margin-top:4px;">
                    Mobile money
                </div>
            </div>

            <div style="
                background:#080814;
                padding:15px;
                border-radius:13px;
                margin-bottom:10px;
            ">
                💳 <b>Visa / Mastercard</b>
                <div style="font-size:12px;color:#888;margin-top:4px;">
                    Card payment
                </div>
            </div>

            <div style="
                background:#080814;
                padding:15px;
                border-radius:13px;
            ">
                🏦 <b>Bank Transfer</b>
                <div style="font-size:12px;color:#888;margin-top:4px;">
                    Coming soon
                </div>
            </div>

        </div>

    </div>

        `;

localStorage.setItem("phinixRealBalance", "0.00");

updatePhinixWalletBalance();

}

function openDepositPage(){

    document.querySelector(".container").innerHTML = `

    <div style="
        min-height:100vh;
        background:#05050b;
        color:white;
        padding:15px;
    ">

        <!-- HEADER -->
        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:22px;
        ">

            <div onclick="openWalletMenu()" style="
                cursor:pointer;
                font-size:25px;
                color:#c94fff;
            ">
                ←
            </div>

            <div style="
                font-size:21px;
                font-weight:bold;
                color:#b266ff;
            ">
                💰 DEPOSIT FUNDS
            </div>

            <div onclick="openDashboard()" style="
                cursor:pointer;
                font-size:22px;
            ">
                🏠
            </div>

        </div>


        <!-- AMOUNT -->
        <div style="
            background:#11111b;
            border:1px solid #7a2cff;
            border-radius:18px;
            padding:18px;
            margin-bottom:15px;
        ">

            <div style="
                color:#c084fc;
                font-weight:bold;
                margin-bottom:10px;
            ">
                Deposit Amount
            </div>

            <input
                id="depositAmount"
                type="number"
                min="1"
                placeholder="Enter amount in USD"
                style="
                    width:100%;
                    padding:15px;
                    background:#080814;
                    border:1px solid #353545;
                    border-radius:12px;
                    color:white;
                    font-size:16px;
                    outline:none;
                "
            >

        </div>


        <!-- PAYMENT METHOD -->
        <div style="
            background:#11111b;
            border:1px solid #29293d;
            border-radius:18px;
            padding:18px;
            margin-bottom:15px;
        ">

            <div style="
                color:#c084fc;
                font-weight:bold;
                margin-bottom:12px;
            ">
                Payment Method
            </div>

            <button
                onclick="selectDepositMethod(this,'M-Pesa')"
                style="
                    width:100%;
                    padding:15px;
                    background:#17101f;
                    border:1px solid #7a2cff;
                    border-radius:13px;
                    color:white;
                    text-align:left;
                    font-size:15px;
                    margin-bottom:10px;
                "
            >
                🇰🇪 <b>M-Pesa</b>
                <div style="font-size:12px;color:#888;margin-top:4px;">
                    Mobile money
                </div>
            </button>

            <button
                onclick="selectDepositMethod(this,'Airtel Money')"
                style="
                    width:100%;
                    padding:15px;
                    background:#080814;
                    border:1px solid #29293d;
                    border-radius:13px;
                    color:white;
                    text-align:left;
                    font-size:15px;
                    margin-bottom:10px;
                "
            >
                📱 <b>Airtel Money</b>
                <div style="font-size:12px;color:#888;margin-top:4px;">
                    Mobile money
                </div>
            </button>

            <button
                onclick="selectDepositMethod(this,'Card')"
                style="
                    width:100%;
                    padding:15px;
                    background:#080814;
                    border:1px solid #29293d;
                    border-radius:13px;
                    color:white;
                    text-align:left;
                    font-size:15px;
                "
            >
                💳 <b>Visa / Mastercard</b>
                <div style="font-size:12px;color:#888;margin-top:4px;">
                    Card payment
                </div>
            </button>

        </div>


        <!-- M-PESA PHONE -->
        <div id="depositPhoneBox" style="
            background:#11111b;
            border:1px solid #29293d;
            border-radius:18px;
            padding:18px;
            margin-bottom:15px;
        ">

            <div style="
                color:#c084fc;
                font-weight:bold;
                margin-bottom:10px;
            ">
                M-Pesa Phone Number
            </div>

            <input
                id="depositPhone"
                type="tel"
                placeholder="07XXXXXXXX"
                style="
                    width:100%;
                    padding:15px;
                    background:#080814;
                    border:1px solid #353545;
                    border-radius:12px;
                    color:white;
                    font-size:16px;
                    outline:none;
                "
            >

            <div style="
                color:#777;
                font-size:12px;
                margin-top:8px;
            ">
                Example: 0712345678
            </div>

        </div>


        <!-- CONTINUE -->
        <button
            onclick="startDepositTest()"
            style="
                width:100%;
                padding:17px;
                background:linear-gradient(90deg,#7a2cff,#c94fff);
                border:none;
                border-radius:15px;
                color:white;
                font-size:17px;
                font-weight:bold;
            "
        >
            CONTINUE
        </button>


        <div style="
            text-align:center;
            color:#777;
            font-size:11px;
            margin-top:15px;
        ">
            Test interface — no real payment is processed yet.
        </div>

    </div>

    `;
}

function selectDepositMethod(button, method){

    selectedDepositMethod = method;

    const buttons = button.parentElement.querySelectorAll("button");

    buttons.forEach(function(btn){
        btn.style.border = "1px solid #29293d";
        btn.style.background = "#080814";
    });

    button.style.border = "1px solid #7a2cff";
    button.style.background = "#17101f";

    const phoneBox = document.getElementById("depositPhoneBox");

    if(phoneBox){

        if(method === "M-Pesa" || method === "Airtel Money"){
            phoneBox.style.display = "block";
        }else{
            phoneBox.style.display = "none";
        }

    }
}


function startDepositTest(){

    const amount = document.getElementById("depositAmount")?.value;
    const phone = document.getElementById("depositPhone")?.value;

    if(!amount || Number(amount) <= 0){
        alert("Please enter a valid deposit amount.");
        return;
    }

    if(!phone){
        alert("Please enter your M-PESA phone number.");
        return;
    }

    // Show the payment-processing screen.
    // Do NOT change the balance yet.
    document.querySelector(".container").innerHTML = `

    <div style="
        min-height:100vh;
        background:#05050b;
        color:white;
        padding:20px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;
    ">

        <div style="
            font-size:65px;
            margin-bottom:18px;
        ">
            📱
        </div>

        <h2 style="
            color:#c94fff;
            margin-bottom:12px;
        ">
            M-PESA PAYMENT
        </h2>

        <p style="
            color:#aaa;
            line-height:1.5;
        ">
            Payment request prepared for
            <b style="color:white;">
                $${Number(amount).toFixed(2)}
            </b>
        </p>

        <div style="
            background:#11111b;
            border:1px solid #29293d;
            border-radius:16px;
            padding:18px;
            margin-top:20px;
            text-align:left;
        ">

            <div style="color:#aaa;font-size:13px;">
                Mobile number
            </div>

            <div style="
                color:white;
                font-size:18px;
                font-weight:bold;
                margin-top:5px;
            ">
                ${phone}
            </div>

        </div>

        <div style="
            background:#11111b;
            border:1px solid #29293d;
            border-radius:16px;
            padding:18px;
            margin-top:12px;
            color:#aaa;
            line-height:1.5;
            font-size:14px;
        ">
            🧪 Test mode<br><br>
            When real M-PESA integration is connected,
            an official payment prompt will be sent to your phone.
            You will enter your M-PESA PIN there.
        </div>

        <button
            onclick="openDashboard()"
            style="
                width:100%;
                padding:16px;
                margin-top:20px;
                background:linear-gradient(90deg,#7a2cff,#c94fff);
                border:none;
                border-radius:15px;
                color:white;
                font-size:17px;
                font-weight:bold;
            "
        >
            ← BACK TO DASHBOARD
        </button>

    </div>

    `;
}
            
                    

        


function confirmDepositTest(amount){

    document.querySelector(".container").innerHTML = `

    <div style="
        min-height:100vh;
        background:#05050b;
        color:white;
        padding:15px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        text-align:center;
    ">

        <div style="
            font-size:70px;
            margin-bottom:20px;
        ">
            ⏳
        </div>

        <h2 style="
            color:#c94fff;
            margin-bottom:12px;
        ">
            PAYMENT PENDING
        </h2>

        <p style="
            color:#aaa;
            line-height:1.5;
        ">
            Your deposit request for
            <b style="color:white;">$${amount}</b>
            has been created.
        </p>

        <div style="
            background:#11111b;
            border:1px solid #29293d;
            border-radius:16px;
            padding:18px;
            margin-top:20px;
            color:#999;
            font-size:13px;
        ">
            Test mode: no real payment has been processed.
        </div>

        <button
            onclick="openDashboard()"
            style="
                width:100%;
                padding:16px;
                margin-top:20px;
                background:linear-gradient(90deg,#7a2cff,#c94fff);
                border:none;
                border-radius:15px;
                color:white;
                font-size:17px;
                font-weight:bold;
            "
        >
            🏠 RETURN TO PHINIX TRADERS
        </button>

    </div>

    `;
}

function updatePhinixWalletBalance(){

    const balanceElement =
        document.getElementById("phinixWalletBalance");

    if(balanceElement){
        balanceElement.textContent =
            "$" + balance.toFixed(2);
    }
}

function resetTestRealWallet(){

    localStorage.setItem("phinixRealBalance", "0.00");

    alert("Real test wallet reset to $0.00");

    openWalletMenu();
}

function openWithdrawPage(){

    const balance = Number(
        localStorage.getItem("phinixRealBalance") || "0"
    );

    document.querySelector(".container").innerHTML = `

    <div style="
        min-height:100vh;
        background:#05050b;
        color:white;
        padding:15px;
    ">

        <!-- HEADER -->
        <div style="
            display:flex;
            justify-content:space-between;
            align-items:center;
            margin-bottom:25px;
        ">

            <div onclick="openWalletMenu()" style="
                cursor:pointer;
                font-size:25px;
                color:#c94fff;
            ">
                ←
            </div>

            <div style="
                font-size:21px;
                font-weight:bold;
                color:#b266ff;
            ">
                🏧 WITHDRAW
            </div>

            <div onclick="openDashboard()" style="
                cursor:pointer;
                font-size:22px;
            ">
                🏠
            </div>

        </div>


        <!-- AVAILABLE BALANCE -->
        <div style="
            background:#11111b;
            border:1px solid #7a2cff;
            border-radius:20px;
            padding:20px;
            text-align:center;
            margin-bottom:20px;
        ">

            <div style="
                color:#c084fc;
                font-weight:bold;
                font-size:14px;
            ">
                AVAILABLE REAL BALANCE
            </div>

            <div style="
                font-size:38px;
                font-weight:bold;
                margin-top:8px;
            ">
                $${balance.toFixed(2)}
            </div>

        </div>


        <!-- WITHDRAW AMOUNT -->
        <div style="
            background:#11111b;
            border:1px solid #29293d;
            border-radius:18px;
            padding:18px;
            margin-bottom:15px;
        ">

            <label style="
                color:#c084fc;
                font-weight:bold;
                display:block;
                margin-bottom:10px;
            ">
                Withdrawal Amount
            </label>

            <input
                id="withdrawAmount"
                type="number"
                placeholder="Enter amount"
                min="1"
                style="
                    width:100%;
                    padding:15px;
                    background:#080814;
                    border:1px solid #353545;
                    border-radius:12px;
                    color:white;
                    font-size:17px;
                    outline:none;
                "
            >

        </div>


        <!-- PAYMENT METHOD -->
        <div style="
            background:#11111b;
            border:1px solid #29293d;
            border-radius:18px;
            padding:18px;
            margin-bottom:20px;
        ">

            <div style="
                color:#c084fc;
                font-weight:bold;
                margin-bottom:12px;
            ">
                Withdrawal Method
            </div>

            <select
                id="withdrawMethod"
                style="
                    width:100%;
                    padding:15px;
                    background:#080814;
                    border:1px solid #353545;
                    border-radius:12px;
                    color:white;
                    font-size:16px;
                "
            >
                <option value="mpesa">🇰🇪 M-Pesa</option>
                <option value="airtel">📱 Airtel Money</option>
                <option value="bank">🏦 Bank Transfer</option>
            </select>

        </div>


        <!-- CONTINUE -->
        <button
            onclick="startWithdrawalTest()"
            style="
                width:100%;
                padding:17px;
                background:linear-gradient(90deg,#dc2626,#ef4444);
                border:none;
                border-radius:15px;
                color:white;
                font-size:17px;
                font-weight:bold;
            "
        >
            🏧 CONTINUE WITHDRAWAL
        </button>

    </div>

    `;
}

function startWithdrawalTest(){

    const amount = Number(
        document.getElementById("withdrawAmount")?.value || "0"
    );

    const balance = Number(
        localStorage.getItem("phinixRealBalance") || "0"
    );

    if(amount <= 0){
        alert("Please enter a valid withdrawal amount.");
        return;
    }

    if(amount > balance){
        alert("Insufficient real account balance.");
        return;
    }

    const method =
        document.getElementById("withdrawMethod")?.value || "mpesa";

    document.querySelector(".container").innerHTML = `

        <div style="
            min-height:100vh;
            background:#05050b;
            color:white;
            padding:15px;
            display:flex;
            flex-direction:column;
            justify-content:center;
            text-align:center;
        ">

            <div style="
                font-size:65px;
                margin-bottom:20px;
            ">
                ⏳
            </div>

            <h2 style="
                color:#c94fff;
                margin-bottom:12px;
            ">
                WITHDRAWAL PENDING
            </h2>

            <p style="
                color:#aaa;
                line-height:1.5;
            ">
                Your withdrawal request for
                <b style="color:white;">$${amount.toFixed(2)}</b>
                has been prepared.
            </p>

            <div style="
                background:#11111b;
                border:1px solid #29293d;
                border-radius:16px;
                padding:18px;
                margin-top:20px;
                color:#999;
                font-size:13px;
            ">
                Test mode: no real withdrawal has been processed.<br><br>
                Payment method:
                <b style="color:white;">
                    ${method === "mpesa" ? "M-Pesa" :
                      method === "airtel" ? "Airtel Money" :
                      "Bank Transfer"}
                </b>
            </div>

            <button
                onclick="openWalletMenu()"
                style="
                    width:100%;
                    padding:16px;
                    margin-top:20px;
                    background:linear-gradient(90deg,#7a2cff,#c94fff);
                    border:none;
                    border-radius:15px;
                    color:white;
                    font-size:17px;
                    font-weight:bold;
                "
            >
                💰 RETURN TO WALLET
            </button>

        </div>

    `;
}

function getPhinixBalance() {
    return Number(localStorage.getItem("phinixBalance") || "0");
}

function setPhinixBalance(amount) {
    localStorage.setItem("phinixBalance", Number(amount).toFixed(2));
}

function addPhinixBalance(amount) {
    const currentBalance = getPhinixBalance();
    const newBalance = currentBalance + Number(amount);

    setPhinixBalance(newBalance);

    return newBalance;
}

function openAccountMenu(){

    const menu = document.createElement("div");

    menu.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(5,5,11,.85);
        z-index:9999;
        display:flex;
        align-items:flex-start;
        justify-content:center;
        padding:80px 20px 20px;
    `;

    menu.innerHTML = `
        <div style="
            width:100%;
            max-width:390px;
            background:#11111d;
            border:1px solid #7a2cff;
            border-radius:20px;
            padding:20px;
            box-shadow:0 0 30px rgba(122,44,255,.4);
        ">

            <h2 style="
                color:#c084fc;
                margin-bottom:20px;
                text-align:center;
            ">
                💰 Account
            </h2>

            <button onclick="selectDemoAccount(this)"
            style="
                width:100%;
                padding:18px;
                margin-bottom:12px;
                background:#151522;
                color:white;
                border:1px solid #7a2cff;
                border-radius:15px;
                font-size:17px;
                font-weight:bold;
            ">
                🎮 Demo Balance
            </button>

            <button onclick="selectRealAccount(this)"
            style="
                width:100%;
                padding:18px;
                background:#151522;
                color:white;
                border:1px solid #7a2cff;
                border-radius:15px;
                font-size:17px;
                font-weight:bold;
            ">
                💵 Real Account
            </button>

            <button onclick="this.closest('.account-menu-overlay').remove()"
            style="
                width:100%;
                padding:14px;
                margin-top:12px;
                background:#252536;
                color:white;
                border:1px solid #7a2cff;
                border-radius:15px;
                font-size:16px;
                font-weight:bold;
            ">
                ✕ Close
            </button>

        </div>
    `;

    menu.className = "account-menu-overlay";

    document.body.appendChild(menu);
}

function selectDemoAccount(button) {

    const menu = button.closest(".account-menu-overlay");

    if (menu) {
        menu.remove();
    }

    /* Select DEMO account */
    localStorage.setItem(
        "phinixSelectedAccount",
        "demo"
    );

    /* Get existing practice balance */
    const demoBalance = Number(
        localStorage.getItem("phinixDemoBalance") || "10000"
    );

    /* Make sure the balance exists */
    localStorage.setItem(
        "phinixDemoBalance",
        demoBalance.toString()
    );

    /* Update normal balance display */
    const balance = document.querySelector(".balance");

    if (balance) {
        balance.innerHTML = `
            Demo Balance
            <h1>$${demoBalance.toFixed(2)}</h1>
        `;
    }

    /* Update Bulk Trader account display */
    const bulkLabel =
        document.getElementById("bulkAccountLabel");

    const bulkBalance =
        document.getElementById("bulkAccountBalance");

    if (bulkLabel) {
        bulkLabel.textContent = "DEMO BALANCE";
    }

    if (bulkBalance) {
        bulkBalance.textContent =
            "$" + demoBalance.toFixed(2);
    }
    updatePhinixRunningAccount();
}



function selectRealAccount(button) {

    const menu = button.closest(".account-menu-overlay");

    if (menu) {
        menu.remove();
    }

    // Remember that the REAL account is selected
    localStorage.setItem(
        "phinixSelectedAccount",
        "real"
    );

    // Get the REAL account balance
    const realBalance = Number(
        localStorage.getItem("phinixRealBalance") || "0"
    );

    const balance = document.querySelector(".balance");

    if (balance) {
        balance.innerHTML = `
            Real Account
            <h1>$${realBalance.toFixed(2)}</h1>
        `;
    }
    updatePhinixRunningAccount();
}

function openBotBuilder(){

document.querySelector(".container").innerHTML = `

<div style="
min-height:100vh;
background:#05050b;
color:white;
padding:15px;
">

<!-- HEADER -->
<div style="
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
">

<div onclick="backToManualTrader()" style="
cursor:pointer;
font-size:24px;
color:#c94fff;
">
←
</div>

<div style="
font-size:20px;
font-weight:bold;
color:#b266ff;
">
🛠 BOT EDITOR
</div>

<div onclick="openDashboard()" style="
cursor:pointer;
font-size:22px;
">
🏠
</div>

</div>


<!-- BOT NAME -->
<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:16px;
margin-bottom:14px;
">

<div style="
color:#c084fc;
font-weight:bold;
margin-bottom:10px;
">
Bot Name
</div>

<input
placeholder="My Phinix Bot"
style="
width:100%;
background:#0b0b15;
border:1px solid #353545;
border-radius:12px;
padding:14px;
color:white;
font-size:16px;
outline:none;
"
>

</div>


<!-- STRATEGY -->
<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:16px;
margin-bottom:14px;
">

<div style="
color:#c084fc;
font-weight:bold;
margin-bottom:12px;
">
Strategy
</div>

<button onclick="alert('Matches strategy selected')" style="
width:100%;
padding:14px;
margin-bottom:8px;
background:#101018;
border:1px solid #29293d;
border-radius:12px;
color:white;
text-align:left;
">
🎯 Matches / Differs
</button>

<button onclick="alert('Over/Under strategy selected')" style="
width:100%;
padding:14px;
margin-bottom:8px;
background:#101018;
border:1px solid #29293d;
border-radius:12px;
color:white;
text-align:left;
">
📊 Over / Under
</button>

<button onclick="alert('Even/Odd strategy selected')" style="
width:100%;
padding:14px;
background:#101018;
border:1px solid #29293d;
border-radius:12px;
color:white;
text-align:left;
">
🔢 Even / Odd
</button>

</div>


<!-- SAVE BUTTON -->
<button onclick="alert('Bot saved successfully!')" style="
width:100%;
padding:16px;
background:linear-gradient(90deg,#7a2cff,#c94fff);
border:none;
border-radius:15px;
color:white;
font-size:17px;
font-weight:bold;
box-shadow:0 0 15px rgba(122,44,255,.4);
">
💾 SAVE BOT
</button>

</div>

`;

}

function openUploadBot(){

document.querySelector(".container").innerHTML = `

<div style="
min-height:100vh;
background:#05050b;
color:white;
padding:15px;
">

<div style="
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
">

<div onclick="openDashboard()" style="
cursor:pointer;
font-size:24px;
color:#c94fff;
">
←
</div>

<div style="
font-size:20px;
font-weight:bold;
color:#b266ff;
">
📤 UPLOAD BOT
</div>

<div onclick="openDashboard()" style="
cursor:pointer;
font-size:22px;
">
🏠
</div>

</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:20px;
">

<h3 style="color:#c084fc;">
Upload your bot
</h3>

<p style="color:#aaa;">
Choose a bot file from your device.
</p>

<input
id="botFileInput"
type="file"
accept=".xml,.json,.txt"
style="
width:100%;
padding:15px;
background:#0b0b15;
color:white;
border:1px solid #353545;
border-radius:12px;
"
>

<button onclick="loadSelectedBot()" style="
width:100%;
margin-top:15px;
padding:15px;
background:linear-gradient(90deg,#7a2cff,#c94fff);
border:none;
border-radius:15px;
color:white;
font-size:16px;
font-weight:bold;
">
📤 LOAD BOT
</button>

<div id="uploadStatus" style="
margin-top:15px;
text-align:center;
color:#aaa;
font-size:14px;
">
No bot loaded yet.
</div>

</div>

</div>

`;

}


function loadSelectedBot(){

const fileInput = document.getElementById("botFileInput");
const status = document.getElementById("uploadStatus");

if(!fileInput || !fileInput.files.length){

status.innerHTML = "⚠️ Please choose a bot file first.";
status.style.color = "#ffcc00";

return;

}

const file = fileInput.files[0];

status.innerHTML = "✅ Bot loaded: " + file.name;
status.style.color = "#00ff99";

}

function openQuickStrategy(){

document.querySelector(".container").innerHTML = `

<div style="
min-height:100vh;
background:#05050b;
color:white;
padding:15px;
">

<div style="
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:20px;
">

<div onclick="openDashboard()" style="
cursor:pointer;
font-size:24px;
color:#c94fff;
">←</div>

<div style="
font-size:20px;
font-weight:bold;
color:#b266ff;
">
⚡ QUICK STRATEGY
</div>

<div onclick="openDashboard()" style="
cursor:pointer;
font-size:22px;
">
🏠
</div>

</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:20px;
padding:18px;
">

<h3 style="color:#c084fc;">
Trade Parameters
</h3>

<label>Market</label>

<select id="quickMarket" onchange="updateQuickIndexes()" style="
width:100%;
background:#0b0b15;
color:white;
border:1px solid #29293d;
border-radius:12px;
padding:14px;
margin:7px 0 15px;
">

<option selected>Volatility Indices</option>
<option>Derived</option>
<option>Continuous Indices</option>
<option>Crash/Boom Indices</option>
<option>Forex</option>
<option>Commodities</option>

</select>

<label>Index</label>

<select id="quickIndex" style="
width:100%;
background:#0b0b15;
color:white;
border:1px solid #29293d;
border-radius:12px;
padding:14px;
margin:7px 0 15px;
">

<option>Volatility 100 (1s)</option>

</select>

<label>Trade Type</label>

<select id="quickTradeType" style="
width:100%;
background:#0b0b15;
color:white;
border:1px solid #29293d;
border-radius:12px;
padding:14px;
margin:7px 0 15px;
">

<option>Over / Under</option>
<option>Matches / Differs</option>
<option>Even / Odd</option>

</select>

<label>Contract Type</label>

<select style="
width:100%;
background:#0b0b15;
color:white;
border:1px solid #29293d;
border-radius:12px;
padding:14px;
margin:7px 0 15px;
">

<option>Both</option>
<option>Matches</option>
<option>Differs</option>

</select>

<label>Stake</label>

<input id="quickStake"
type="number"
value="1"
min="0.01"
style="
width:100%;
background:#0b0b15;
color:white;
border:1px solid #29293d;
border-radius:12px;
padding:14px;
margin:7px 0 15px;
box-sizing:border-box;
">

<label>Number of Trades</label>

<input id="quickTrades"
type="number"
value="10"
min="1"
style="
width:100%;
background:#0b0b15;
color:white;
border:1px solid #29293d;
border-radius:12px;
padding:14px;
margin:7px 0 15px;
box-sizing:border-box;
">

<label>Stop Loss</label>

<input id="quickStopLoss"
type="number"
value="5"
min="0"
style="
width:100%;
background:#0b0b15;
color:white;
border:1px solid #29293d;
border-radius:12px;
padding:14px;
margin:7px 0 15px;
box-sizing:border-box;
">

<label>Take Profit</label>

<input id="quickTakeProfit"
type="number"
value="10"
min="0"
style="
width:100%;
background:#0b0b15;
color:white;
border:1px solid #29293d;
border-radius:12px;
padding:14px;
margin:7px 0 18px;
box-sizing:border-box;
">

<button onclick="startQuickStrategy()" style="
width:100%;
padding:16px;
background:linear-gradient(90deg,#7a2cff,#c94fff);
border:none;
border-radius:15px;
color:white;
font-size:16px;
font-weight:bold;
">
🚀 START STRATEGY
</button>

<div id="quickStrategyStatus" style="
text-align:center;
margin-top:15px;
color:#aaa;
font-size:14px;
">
Strategy ready.
</div>

</div>

</div>

`;

updateQuickIndexes();

}






function updateQuickIndexes(){

const market = document.getElementById("quickMarket");
const index = document.getElementById("quickIndex");

if(!market || !index) return;

let options = [];

if(market.value === "Derived"){

options = ["Derived"];

}

else if(market.value === "Continuous Indices"){

options = [
"Continuous Indices"
];

}

else if(market.value === "Volatility Indices"){

options = [
"Volatility 10",
"Volatility 10 (1s)",
"Volatility 25",
"Volatility 25 (1s)",
"Volatility 50",
"Volatility 50 (1s)",
"Volatility 75",
"Volatility 75 (1s)",
"Volatility 100",
"Volatility 100 (1s)"
];

}

else if(market.value === "Crash/Boom Indices"){

options = [
"Crash 300",
"Crash 500",
"Crash 1000",
"Boom 300",
"Boom 500",
"Boom 1000"
];

}

else if(market.value === "Forex"){

options = [
"EUR/USD",
"GBP/USD",
"USD/JPY",
"USD/CHF",
"AUD/USD",
"USD/CAD"
];

}

else if(market.value === "Commodities"){

options = [
"Gold",
"Silver",
"Oil"
];

}

index.innerHTML = "";

options.forEach(function(item){

const option = document.createElement("option");

option.textContent = item;
option.value = item;

index.appendChild(option);

});

}


function startQuickStrategy(){

const market = document.getElementById("quickMarket").value;
const index = document.getElementById("quickIndex").value;
const stake = document.getElementById("quickStake").value;
const trades = document.getElementById("quickTrades").value;
const stopLoss = document.getElementById("quickStopLoss").value;
const takeProfit = document.getElementById("quickTakeProfit").value;

const status = document.getElementById("quickStrategyStatus");

status.innerHTML =
"⚡ Strategy configured: " +
market +
" → " +
index +
" | " +
trades +
" trades × $" +
stake +
" | SL $" +
stopLoss +
" | TP $" +
takeProfit;

status.style.color = "#00ff99";

    }

window.addEventListener("DOMContentLoaded", function() {
    if (window.location.pathname.toLowerCase().endsWith("dtrader.html")) {
        return;
    }

    openDashboard();
});

function phinixNavigate(page) {

    history.pushState(
        { phinixPage: page },
        "",
        "#" + page
    );

}

function phinixBack() {

    if (history.state && history.state.phinixPage) {
        history.back();
    } else {
        openDashboard();
    }

}

window.addEventListener("popstate", function () {

    const page = history.state?.phinixPage;

    if (!page) {
        openDashboard();
        return;
    }

    if (page === "bots") {
        openBots();
        return;
    }

    if (page === "manual") {
        openManualTrader();
        return;
    }

    if (page === "wallet") {
        openWalletMenu();
        return;
    }

    if (page === "deposit") {
        openDepositPage();
        return;
    }

    if (page === "withdraw") {
        openWithdrawPage();
        return;
    }

    if (page === "botbuilder") {
        openBotBuilder();
        return;
    }

    // Default
    openDashboard();
});


function openBulkTrader(){

    document.querySelector(".container").innerHTML = `

    <div id="phinixBulkTrader" style="
        min-height:100vh;
        background:#05020b;
        color:white;
        padding:8px;
        padding-bottom:20px;
        font-family:Arial,sans-serif;
        box-sizing:border-box;
        width:100%;
        overflow-x:hidden;
    ">

        <!-- BACK ARROW -->
        <div style="
            height:28px;
            position:relative;
            margin-bottom:4px;
        ">
            <div onclick="backToManualTrader()" style="
                position:absolute;
                left:2px;
                top:0;
                cursor:pointer;
                font-size:28px;
                line-height:28px;
                color:#c94fff;
                font-weight:bold;
            ">
                ←
            </div>
        </div>


        <!-- ACCOUNT SELECTOR -->
        <div
            onclick="openAccountMenu()"
            style="
                width:100%;
                height:44px;
                box-sizing:border-box;
                margin:0 0 8px 0;
                padding:0 13px;
                border:1px solid #6f2cff;
                border-radius:14px;
                background:#0d0716;
                display:flex;
                align-items:center;
                justify-content:space-between;
                cursor:pointer;
                box-shadow:0 0 10px rgba(122,44,255,.12);
            "
        >

            <div style="
                display:flex;
                align-items:center;
                gap:7px;
                min-width:0;
            ">
                <span style="font-size:17px;">💰</span>

                <span id="bulkAccountLabel" style="
                    color:#c084fc;
                    font-size:13px;
                    font-weight:bold;
                    white-space:nowrap;
                    overflow:hidden;
                    text-overflow:ellipsis;
                ">
                    DEMO BALANCE
                </span>
            </div>

            <div style="
                display:flex;
                align-items:center;
                gap:6px;
                white-space:nowrap;
            ">
                <span id="bulkAccountBalance" style="
                    color:white;
                    font-size:14px;
                    font-weight:bold;
                ">
                    $10,000.00
                </span>

                <span style="
                    color:#c94fff;
                    font-size:15px;
                ">
                    ▼
                </span>
            </div>

        </div>


        <!-- MAIN TRADING AREA -->
        <div style="
            background:#080510;
            border:1px solid #6f2cff;
            border-radius:20px;
            padding:10px;
            box-shadow:0 0 20px rgba(122,44,255,.18);
            box-sizing:border-box;
            width:100%;
        ">


<!-- MARKET + TRADE TYPE -->
<div style="
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:10px;
">

    <!-- MARKET -->
    <div>
        <label style="
            font-size:13px;
            color:#bda8d0;
        ">
            MARKET
        </label>

        <select id="bulkMarket" style="
            width:100%;
            height:44px;
            margin-top:5px;
            padding:0 10px;
            border-radius:11px;
            border:1px solid #743cff;
            background:#120b1d;
            color:white;
            font-size:14px;
            font-weight:bold;
            box-sizing:border-box;
        ">
            <option>Volatility 10 (1s) Index</option>
            <option>Volatility 25 (1s) Index</option>
            <option>Volatility 50 (1s) Index</option>
            <option>Volatility 75 (1s) Index</option>
            <option>Volatility 100 (1s) Index</option>

            <option>Volatility 10 Index</option>
            <option>Volatility 25 Index</option>
            <option>Volatility 50 Index</option>
            <option>Volatility 75 Index</option>
            <option>Volatility 100 Index</option>

            <option>Range Break 200 Index</option>
            <option>Bear Market Index</option>
            <option>Bull Market Index</option>

            <option>Step Index 100</option>
            <option>Step Index 200</option>
            <option>Step Index 300</option>
            <option>Step Index 400</option>
            <option>Step Index 500</option>
        </select>
    </div>


    <!-- TRADE TYPE -->
    <div>
        <label style="
            font-size:13px;
            color:#bda8d0;
        ">
            TRADE TYPE
        </label>

        <select id="bulkTradeType"
            onchange="bulkTradeTypeChanged()"
            style="
            width:100%;
            height:44px;
            margin-top:5px;
            padding:0 10px;
            border-radius:11px;
            border:1px solid #743cff;
            background:#120b1d;
            color:white;
            font-size:14px;
            font-weight:bold;
            box-sizing:border-box;
        ">
            <option value="evenodd">Even/Odd</option>
            <option value="matches">Matches/Differs</option>
            <option value="overunder">Over/Under</option>
        </select>
    </div>
    
    </div>


    <!-- NUMBER OF TICKS -->
    <div style="
        margin-top:4px;
    ">

        <label style="
            font-size:13px;
            color:#bda8d0;
        ">
            NUMBER OF TICKS
        </label>

        <input id="bulkTicks"
            type="number"
            value="1000"
            min="1"
            style="
            width:100%;
            height:44px;
            margin-top:5px;
            padding:0 13px;
            border-radius:11px;
            border:1px solid #743cff;
            background:#120b1d;
            color:white;
            text-align:center;
            font-size:16px;
            font-weight:bold;
            box-sizing:border-box;
        ">
    </div>

<!-- PREDICTION -->
<div style="
    margin-top:4px;
">

    <label style="
        font-size:13px;
        color:#bda8d0;
    ">
        PREDICTION
    </label>

    <select id="bulkPrediction"
        style="
        width:100%;
        height:44px;
        margin-top:5px;
        padding:0 13px;
        border-radius:11px;
        border:1px solid #743cff;
        background:#120b1d;
        color:white;
        text-align:center;
        font-size:16px;
        font-weight:bold;
        box-sizing:border-box;
    ">
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
    </select>

</div>
 






            
            <!-- CURRENT TICK -->
            <div style="
                text-align:center;
                margin-top:18px;
            ">

                <div style="
                    font-size:13px;
                    color:#bda8d0;
                    letter-spacing:1px;
                    font-weight:bold;
                ">
                    CURRENT TICK
                </div>

                <div id="bulkCurrentTick"
                    style="
                    margin-top:4px;
                    color:#ff4d5e;
                    font-size:32px;
                    line-height:36px;
                    font-weight:bold;
                ">
                    Loading...
                </div>

            </div>


            <!-- DIGITS -->
            <div id="bulkDigits"
                style="
                display:grid;
                grid-template-columns:repeat(5,minmax(0,1fr));
                gap:10px;
                margin-top:16px;
                width:100%;
            ">
            </div>


            <!-- DIGIT HISTORY -->
            <div id="bulkDigitHistory"
                style="
                display:flex;
                justify-content:center;
                align-items:center;
                gap:7px;
                margin-top:16px;
                min-height:30px;
                overflow:hidden;
                width:100%;
            ">
            </div>


            <!-- SETTINGS -->
            <div style="
                display:grid;
                grid-template-columns:repeat(3,minmax(0,1fr));
                gap:8px;
                margin-top:18px;
            ">

                <!-- TICKS -->
                <div style="min-width:0;">

                    <div style="
                        text-align:center;
                        color:#bda8d0;
                        font-size:11px;
                    ">
                        TICKS
                    </div>

                    <input id="bulkTradeTicks"
                        value="1"
                        type="number"
                        min="1"
                        style="
                        width:100%;
                        height:42px;
                        margin-top:5px;
                        padding:0 5px;
                        border-radius:10px;
                        border:1px solid #743cff;
                        background:#120b1d;
                        color:white;
                        text-align:center;
                        font-size:15px;
                        box-sizing:border-box;
                    ">

                </div>


                <!-- STAKE -->
                <div style="min-width:0;">

                    <div style="
                        text-align:center;
                        color:#bda8d0;
                        font-size:11px;
                    ">
                        STAKE
                    </div>

                    <input id="bulkStake"
                        value="0.50"
                        type="number"
                        min="0.35"
                        step="0.01"
                        style="
                        width:100%;
                        height:42px;
                        margin-top:5px;
                        padding:0 5px;
                        border-radius:10px;
                        border:1px solid #743cff;
                        background:#120b1d;
                        color:white;
                        text-align:center;
                        font-size:15px;
                        box-sizing:border-box;
                    ">

                </div>


                <!-- NUMBER OF TRADES -->
                <div style="min-width:0;">

                    <div style="
                        text-align:center;
                        color:#bda8d0;
                        font-size:11px;
                    ">
                        NO. OF TRADES
                    </div>

                    <input id="bulkNumberTrades"
                        value="1"
                        type="number"
                        min="1"
                        style="
                        width:100%;
                        height:42px;
                        margin-top:5px;
                        padding:0 5px;
                        border-radius:10px;
                        border:1px solid #743cff;
                        background:#120b1d;
                        color:white;
                        text-align:center;
                        font-size:15px;
                        box-sizing:border-box;
                    ">

                </div>

            </div>


            <!-- TRADE BUTTONS -->
            <div id="bulkTradeButtons"
                style="
                display:grid;
                grid-template-columns:minmax(0,1fr) minmax(0,1fr);
                gap:10px;
                margin-top:14px;
            ">
            </div>


            <!-- CHEVRON / RESULTS BUTTON -->
            <div style="
                display:flex;
                justify-content:center;
                margin-top:5px;
            ">

                <button
                    onclick="toggleBulkResultsPanel()"
                    style="
                        width:52px;
                        height:28px;
                        border:none;
                        border-radius:16px 16px 0 0;
                        background:#17101f;
                        color:#c94fff;
                        font-size:20px;
                        font-weight:bold;
                        line-height:20px;
                        box-shadow:0 -3px 12px rgba(122,44,255,.25);
                        cursor:pointer;
                    "
                >
                    ⌃
                </button>

            </div>


    </div>

</div>

    `;

    initializeBulkTrader();

        }

let phinixBulkTimer = null;
let phinixBulkRunning = false;
let phinixBulkFast = false;
let phinixBulkTransactions = [];
let phinixBulkJournal = [];

let phinixBulkStats = {
    stake: 0,
    payout: 0,
    runs: 0,
    won: 0,
    lost: 0,
    profit: 0
};

            
function initializeBulkTrader(){

    bulkTradeTypeChanged();
    createBulkDigits();
    updateBulkTick();

    if(phinixBulkTimer){
        clearInterval(phinixBulkTimer);
    }

    phinixBulkTimer = setInterval(
        updateBulkTick,
        1200
    );

}

function bulkTradeTypeChanged(){

    const type =
        document.getElementById("bulkTradeType")?.value;

    const buttons =
        document.getElementById("bulkTradeButtons");

    if(!buttons) return;


    let contractButtons = "";


    /* EVEN / ODD */

    if(type === "evenodd"){

        contractButtons = `

            <button
                onclick="startBulkTrade('Even')"
                style="
                    padding:17px;
                    border:none;
                    border-radius:12px;
                    background:#00a99d;
                    color:white;
                    font-weight:bold;
                    font-size:16px;
                "
            >
                Even
            </button>

            <button
                onclick="startBulkTrade('Odd')"
                style="
                    padding:17px;
                    border:none;
                    border-radius:12px;
                    background:#d5223a;
                    color:white;
                    font-weight:bold;
                    font-size:16px;
                "
            >
                Odd
            </button>

        `;

    }


    /* MATCHES / DIFFERS */

    else if(type === "matches"){

        contractButtons = `

            <button
                onclick="startBulkTrade('Differs')"
                style="
                    padding:17px;
                    border:none;
                    border-radius:12px;
                    background:#00a99d;
                    color:white;
                    font-weight:bold;
                    font-size:16px;
                "
            >
                Differs
            </button>

            <button
                onclick="startBulkTrade('Matches')"
                style="
                    padding:17px;
                    border:none;
                    border-radius:12px;
                    background:#d5223a;
                    color:white;
                    font-weight:bold;
                    font-size:16px;
                "
            >
                Matches
            </button>

        `;

    }


    /* OVER / UNDER */

    else if(type === "overunder"){

        contractButtons = `

            <button
                onclick="startBulkTrade('Over')"
                style="
                    padding:17px;
                    border:none;
                    border-radius:12px;
                    background:#00a99d;
                    color:white;
                    font-weight:bold;
                    font-size:16px;
                "
            >
                Over
            </button>

            <button
                onclick="startBulkTrade('Under')"
                style="
                    padding:17px;
                    border:none;
                    border-radius:12px;
                    background:#d5223a;
                    color:white;
                    font-weight:bold;
                    font-size:16px;
                "
            >
                Under
            </button>

        `;

    }


    buttons.innerHTML = `

        ${contractButtons}


        

    `;

}
    








    

            

    

function createBulkDigits(){

    const container = document.getElementById("bulkDigits");

    if(!container) return;

    container.innerHTML = "";

    container.style.cssText = `
        position:relative !important;
        display:grid !important;
        grid-template-columns:repeat(5, 1fr) !important;
        grid-template-rows:70px 70px !important;
        gap:12px 6px !important;
        width:100% !important;
        max-width:none !important;
        min-width:0 !important;
        margin:18px 0 0 0 !important;
        padding:0 !important;
        box-sizing:border-box !important;
        justify-items:center !important;
        align-items:center !important;
        overflow:visible !important;
        float:none !important;
        clear:both !important;
    `;

    const arcColors = [
        "#ff3b4d",
        "#ffd000",
        "#315cff",
        "#35c9c9"
    ];

    for(let i = 0; i < 10; i++){

        const wrapper = document.createElement("div");

        wrapper.id = "bulkDigitWrap" + i;

        wrapper.style.cssText = `
            position:relative !important;
            width:58px !important;
            height:58px !important;
            min-width:58px !important;
            max-width:58px !important;
            min-height:58px !important;
            max-height:58px !important;
            margin:0 !important;
            padding:0 !important;
            display:flex !important;
            justify-content:center !important;
            align-items:center !important;
            box-sizing:border-box !important;
            flex:none !important;
            float:none !important;
        `;

        const digit = document.createElement("div");

        digit.id = "bulkDigit" + i;

        digit.style.cssText = `
            position:relative !important;
            width:58px !important;
            height:58px !important;
            min-width:58px !important;
            max-width:58px !important;
            min-height:58px !important;
            max-height:58px !important;
            border-radius:50% !important;
            border:2px solid #173967 !important;
            background:#0d1b31 !important;
            display:flex !important;
            flex-direction:column !important;
            justify-content:center !important;
            align-items:center !important;
            box-sizing:border-box !important;
            flex:none !important;
            overflow:visible !important;
            margin:0 !important;
            padding:0 !important;
            transition:.2s ease;
            box-shadow:0 0 8px rgba(46,125,255,.10);
        `;

        const digitNumber = document.createElement("div");

        digitNumber.textContent = i;

        digitNumber.style.cssText = `
            position:relative !important;
            z-index:3 !important;
            font-size:17px !important;
            font-weight:bold !important;
            color:white !important;
            line-height:1 !important;
            margin:0 !important;
            padding:0 !important;
        `;

        digit.appendChild(digitNumber);

        const percentage = document.createElement("div");

        percentage.id = "bulkPercent" + i;

        percentage.textContent = "0.00%";

        percentage.style.cssText = `
            position:relative !important;
            z-index:3 !important;
            font-size:10px !important;
            color:#bda8d0 !important;
            margin-top:4px !important;
            line-height:1 !important;
            font-weight:bold !important;
        `;

        digit.appendChild(percentage);

        const svg = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "svg"
        );

        svg.setAttribute("width","68");
        svg.setAttribute("height","68");
        svg.setAttribute("viewBox","0 0 68 68");

        svg.style.cssText = `
            position:absolute !important;
            top:-5px !important;
            left:-5px !important;
            width:68px !important;
            height:68px !important;
            pointer-events:none !important;
            overflow:visible !important;
            transform:rotate(-90deg) !important;
            z-index:2 !important;
        `;

        const circle = document.createElementNS(
            "http://www.w3.org/2000/svg",
            "circle"
        );

        circle.setAttribute("cx","34");
        circle.setAttribute("cy","34");
        circle.setAttribute("r","28");
        circle.setAttribute(
            "stroke",
            arcColors[i % 4]
        );

        circle.setAttribute("stroke-width","4");
        circle.setAttribute("fill","none");
        circle.setAttribute("stroke-linecap","round");
        circle.setAttribute("stroke-dasharray","48 141");
        circle.setAttribute("stroke-dashoffset","0");

        circle.style.opacity = "0";

        svg.appendChild(circle);

        digit.appendChild(svg);

        digit._bulkArc = circle;

        wrapper.appendChild(digit);

        container.appendChild(wrapper);
    }

    const triangle = document.createElement("div");

    triangle.id = "bulkMovingTriangle";

    triangle.style.cssText = `
        position:absolute !important;
        width:0 !important;
        height:0 !important;
        border-left:7px solid transparent !important;
        border-right:7px solid transparent !important;
        border-bottom:10px solid #ff4d5e !important;
        left:50% !important;
        top:145px !important;
        transform:translateX(-50%) !important;
        transition:
            left .35s ease,
            border-bottom-color .2s ease;
        z-index:10 !important;
        pointer-events:none !important;
    `;

    container.appendChild(triangle);
}

    



        
    



    

        

        

        


            

        

function updateBulkTick(){

    const tick =
        (Math.random() * 9000 + 100).toFixed(2);

    const tickElement =
        document.getElementById("bulkCurrentTick");

    if(tickElement){
        tickElement.textContent = tick;
        tickElement.style.color = "#ff4d5e";
    }


    /* Generate probabilities */

    let values = [];

    for(let i = 0; i < 10; i++){
        values.push(Math.random() * 10 + 5);
    }

    const total =
        values.reduce((a,b) => a + b, 0);

    const probabilities =
        values.map(
            value => (value / total) * 100
        );


    /* Current digit */

    const lastDigit =
        Number(
            tick.replace(".", "").slice(-1)
        );


    /* Reset digits */

    for(let i = 0; i < 10; i++){

        const percentage =
            document.getElementById(
                "bulkPercent" + i
            );

        const circle =
            document.getElementById(
                "bulkDigit" + i
            );

        if(percentage){

            percentage.textContent =
                probabilities[i].toFixed(2) + "%";
        }

        if(circle){

            circle.style.borderColor =
                "#173967";

            circle.style.boxShadow =
                "0 0 7px rgba(46,125,255,.08)";

            circle.style.transform =
                "scale(1)";
        }
    }

/* TRADING INDICATOR ARCS
   Four strongest digits receive
   the trading indicators.
*/

const digitScores = [];

for(let i = 0; i < 10; i++){

    const digit =
        document.getElementById(
            "bulkDigit" + i
        );

    if(!digit || !digit._bulkArc) continue;

    const percent =
        document.getElementById(
            "bulkPercent" + i
        );

    const value =
        percent
            ? parseFloat(
                percent.textContent
                  .replace("%","")
              ) || 0
            : 0;

    digitScores.push({
        digit:i,
        value:value
    });
}


/* Highest percentages first */

digitScores.sort(
    (a,b) => b.value - a.value
);


/* Only four digits receive indicators */

const activeIndicators =
    digitScores.slice(0,4);


/* DBTraders-style indicator colours */

const indicatorColours = [
    "#ff3b4d",  // RED
    "#ffd000",  // YELLOW
    "#315cff",  // BLUE
    "#22c55e"   // CYAN
];


/* First hide every indicator */

for(let i = 0; i < 10; i++){

    const digit =
        document.getElementById(
            "bulkDigit" + i
        );

    if(!digit || !digit._bulkArc)
        continue;

    digit._bulkArc.style.opacity = "0";
}


/* Show indicators on the four
   strongest digits */

activeIndicators.forEach(
    (item,index) => {

        const digit =
            document.getElementById(
                "bulkDigit" + item.digit
            );

        if(!digit || !digit._bulkArc)
            return;

        digit._bulkArc.style.stroke =
            indicatorColours[index];

        digit._bulkArc.style.opacity =
            "0.9";
    }
);


    /* ONE moving triangle */

    const triangle =
        document.getElementById(
            "bulkMovingTriangle"
        );

    if(triangle){

        const activeWrapper =
    document.getElementById(
        "bulkDigitWrap" + lastDigit
    );

const digitsContainer =
    document.getElementById(
        "bulkDigits"
    );

if(activeWrapper && digitsContainer){

    const containerRect =
        digitsContainer.getBoundingClientRect();

    const wrapperRect =
        activeWrapper.getBoundingClientRect();

    const center =
        wrapperRect.left -
        containerRect.left +
        (wrapperRect.width / 2);

    triangle.style.left =
        center + "px";
}

        /*
           Match triangle colour
           with the active indicator.
        */

        triangle.style.borderBottomColor = "#ff3f55";
    }


    /* Digit history */

    const history =
        document.getElementById(
            "bulkDigitHistory"
        );

    if(history){

        const mark =
            document.createElement("div");

        mark.textContent =
            lastDigit;

        mark.style.cssText = `
            width:28px;
            height:28px;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            background:#17101f;
            border:1px solid #743cff;
            color:white;
            font-weight:bold;
            font-size:12px;
        `;

        history.appendChild(mark);


        while(
            history.children.length > 8
        ){

            history.removeChild(
                history.firstChild
            );
        }
    }

                }    

        

function selectBulkContract(contract){

    window.phinixBulkSelectedContract =
        contract;

    const status =
        document.getElementById("bulkBotStatus");

    if(status){

        status.textContent =
            contract + " selected";
    }

}

function startBulkTrade(contract){

    // Remember which contract was selected
    window.phinixBulkSelectedContract = contract;

    // Don't start another run while one is already running
    if(phinixBulkRunning){
        return;
    }

    // Start the existing demo trader
    runPhinixBulkTrader();

}


function runPhinixBulkTrader(){

    if(!window.phinixBulkSelectedContract){

    alert("Please select a contract first.");

    return;
    }

    if(phinixBulkRunning){
        return;
    }

    phinixBulkRunning = true;

    const status =
        document.getElementById("bulkBotStatus");

    const progress =
        document.getElementById("bulkProgress");

    if(status){
        status.textContent =
            "Bot is running...";
        status.style.color =
            "#c94fff";
    }


    const numberTrades =
        Number(
            document.getElementById(
                "bulkNumberTrades"
            )?.value || 1
        );

    const stake =
        Number(
            document.getElementById(
                "bulkStake"
            )?.value || 0.5
        );


    let completed = 0;


    const speed =
        phinixBulkFast
            ? 350
            : 1000;


    const timer =
        setInterval(function(){

            completed++;

            const won =
                Math.random() > 0.5;

            const payout =
                won
                    ? stake * 1.95
                    : 0;

            const profit =
                payout - stake;


            phinixBulkTransactions.unshift({

                id:
                    "PHX-" +
                    Date.now().toString().slice(-8),

                time:
                    new Date().toLocaleTimeString(),

                contract:
                    window.phinixBulkSelectedContract ||
                    "Even",

                stake:
                    stake,

                payout:
                    payout,

                profit:
                    profit,

                result:
                    won
                        ? "Won"
                        : "Lost"
            });


            phinixBulkStats.stake += stake;
            phinixBulkStats.payout += payout;
            phinixBulkStats.runs++;
            phinixBulkStats.profit += profit;

            if(won){
                phinixBulkStats.won++;
            }else{
                phinixBulkStats.lost++;
            }


            phinixBulkJournal.unshift(
                `${new Date().toLocaleTimeString()} — ${
                    won ? "WIN" : "LOSS"
                } — ${(
                    profit
                ).toFixed(2)} USD`
            );


            if(progress){

                progress.style.width =
                    ((completed /
                        numberTrades) *
                        100) + "%";
            }


            updateBulkResultsSummary();
updateBulkResultsTransactions();
updateBulkResultsJournal();


            if(completed >= numberTrades){

                clearInterval(timer);

                phinixBulkRunning =
                    false;

                if(status){

                    status.textContent =
                        "Bot finished";

                    status.style.color =
                        "#00d995";
                }

            }

        }, speed);

}


function toggleBulkSpeed(){

    phinixBulkFast =
        !phinixBulkFast;

    const button =
        document.getElementById(
            "bulkSpeedButton"
        );

    if(button){

        button.textContent =
            phinixBulkFast
                ? "⚡"
                : "●";

        button.style.color =
            phinixBulkFast
                ? "#00d995"
                : "#c94fff";
    }

}


function showBulkSection(section){

    const results =
        document.getElementById(
            "bulkResults"
        );

    if(!results) return;


    if(section === "summary"){

        results.innerHTML = `

            <div style="
                text-align:center;
                padding:40px 10px;
            ">

                ${
                    phinixBulkStats.runs === 0
                    ? `
                    <div style="
                        color:#c5cad5;
                        line-height:1.6;
                        font-size:16px;
                    ">
                        When you're ready to trade,
                        hit <b>Run</b>.<br>
                        You'll be able to track
                        your bot's performance here.
                    </div>
                    `
                    : `
                    <div style="
                        display:grid;
                        grid-template-columns:repeat(3,1fr);
                        gap:18px 8px;
                        margin-top:20px;
                    ">

                        <div>
                            <b>Total stake</b>
                            <div style="margin-top:8px;">
                                ${phinixBulkStats.stake.toFixed(2)}
                                USD
                            </div>
                        </div>

                        <div>
                            <b>Total payout</b>
                            <div style="margin-top:8px;">
                                ${phinixBulkStats.payout.toFixed(2)}
                                USD
                            </div>
                        </div>

                        <div>
                            <b>No. of runs</b>
                            <div style="margin-top:8px;">
                                ${phinixBulkStats.runs}
                            </div>
                        </div>

                        <div>
                            <b>Contracts lost</b>
                            <div style="
                                margin-top:8px;
                                color:#ff4d5e;
                            ">
                                ${phinixBulkStats.lost}
                            </div>
                        </div>

                        <div>
                            <b>Contracts won</b>
                            <div style="
                                margin-top:8px;
                                color:#00d995;
                            ">
                                ${phinixBulkStats.won}
                            </div>
                        </div>

                        <div>
                            <b>Total profit/loss</b>
                            <div style="
                                margin-top:8px;
                                color:${
                                    phinixBulkStats.profit >= 0
                                    ? "#00d995"
                                    : "#ff4d5e"
                                };
                            ">
                                ${
                                    phinixBulkStats.profit >= 0
                                    ? "+"
                                    : ""
                                }${
                                    phinixBulkStats.profit.toFixed(2)
                                } USD
                            </div>
                        </div>

                    </div>
                    `
                }

            </div>

        `;

    }


    else if(section === "transactions"){

        results.innerHTML = `

            <div>

                ${
                    phinixBulkTransactions.length === 0

                    ? `
                    <div style="
                        text-align:center;
                        color:#9d9da8;
                        padding:50px 10px;
                    ">
                        No transactions yet.
                    </div>
                    `

                    :

                    phinixBulkTransactions.map(
                        function(tx){

                            return `
                                <div style="
                                    background:#0d0815;
                                    border:1px solid #321650;
                                    border-radius:14px;
                                    padding:15px;
                                    margin-bottom:10px;
                                ">

                                    <div style="
                                        display:flex;
                                        justify-content:space-between;
                                    ">

                                        <b>
                                            ${tx.contract}
                                        </b>

                                        <span style="
                                            color:${
                                                tx.result === "Won"
                                                ? "#00d995"
                                                : "#ff4d5e"
                                            };
                                            font-weight:bold;
                                        ">
                                            ${tx.result}
                                        </span>

                                    </div>

                                    <div style="
                                        color:#aaa;
                                        font-size:12px;
                                        margin-top:8px;
                                    ">
                                        ${tx.id}
                                        •
                                        ${tx.time}
                                    </div>

                                    <div style="
                                        display:flex;
                                        justify-content:space-between;
                                        margin-top:12px;
                                    ">

                                        <span>
                                            Stake
                                            <br>
                                            $${tx.stake.toFixed(2)}
                                        </span>

                                        <span>
                                            Payout
                                            <br>
                                            $${tx.payout.toFixed(2)}
                                        </span>

                                        <span style="
                                            color:${
                                                tx.profit >= 0
                                                ? "#00d995"
                                                : "#ff4d5e"
                                            };
                                        ">
                                            P/L
                                            <br>
                                            ${
                                                tx.profit >= 0
                                                ? "+"
                                                : ""
                                            }$${tx.profit.toFixed(2)}
                                        </span>

                                    </div>

                                </div>
                            `;

                        }
                    ).join("")
                }

            </div>

        `;

    }


    else if(section === "journal"){

        results.innerHTML = `

            <div>

                ${
                    phinixBulkJournal.length === 0

                    ? `
                    <div style="
                        text-align:center;
                        color:#9d9da8;
                        padding:50px 10px;
                    ">
                        Journal is empty.
                    </div>
                    `

                    :

                    phinixBulkJournal.map(
                        item => `
                            <div style="
                                padding:12px;
                                border-bottom:1px solid #241331;
                                color:#c9c9d2;
                                font-size:13px;
                            ">
                                ${item}
                            </div>
                        `
                    ).join("")
                }

            </div>

        `;

    }

        }

const bulkTriangleStyle = document.createElement("style");

bulkTriangleStyle.textContent = `
@keyframes bulkTrianglePulse {
    from {
        transform: translateX(-50%) translateY(0);
    }

    to {
        transform: translateX(-50%) translateY(4px);
    }
}
`;

document.head.appendChild(bulkTriangleStyle);


function toggleBulkResultsPanel(){

    let panel = document.getElementById("bulkResultsPanel");

    /* CREATE PANEL THE FIRST TIME */
    if(!panel){

        panel = document.createElement("div");

        panel.id = "bulkResultsPanel";

        panel.innerHTML = `

            <!-- PANEL HANDLE -->
<div style="
    height:30px;
    display:flex;
    align-items:center;
    justify-content:center;
    border-bottom:1px solid #2b183d;
">

    <button
        onclick="toggleBulkResultsPanel()"
        style="
            width:52px;
            height:24px;
            border:none;
            border-radius:14px 14px 0 0;
            background:#17101f;
            color:#c94fff;
            font-size:20px;
            font-weight:bold;
            line-height:18px;
        "
    >
        ⌃
    </button>

</div>
            

<!-- TABS -->
<div style="
    display:flex;
    gap:8px;
    padding:10px;
    overflow-x:auto;
    box-sizing:border-box;
">

    <button
        onclick="showBulkPanelTab('summary')"
        class="bulkPanelTab active"
    >
        SUMMARY
    </button>

    <button
        onclick="showBulkPanelTab('transactions')"
        class="bulkPanelTab"
    >
        TRANSACTIONS
    </button>

    <button
        onclick="showBulkPanelTab('journal')"
        class="bulkPanelTab"
    >
        JOURNAL
    </button>

    <button
        onclick="resetBulkResults()"
        class="bulkPanelTab"
        style="
            color:#ff5c7a;
        "
    >
        ↻ RESET
    </button>

</div>
            
            

            <!-- SUMMARY -->
            <div id="bulkSummaryTab"
    class="bulkPanelContent"
>

    <!-- PERFORMANCE -->
    <div style="
        color:#bda8d0;
        font-size:11px;
        font-weight:bold;
        letter-spacing:1px;
        margin-bottom:8px;
    ">
        PERFORMANCE
    </div>

    <div style="
        display:grid;
        grid-template-columns:repeat(3,minmax(0,1fr));
        gap:8px;
        margin-bottom:18px;
    ">

        <div class="bulkSummaryCard">
            <span>TRADES</span>
            <strong id="bulkSummaryRuns">0</strong>
        </div>

        <div class="bulkSummaryCard">
            <span>WON</span>
            <strong id="bulkSummaryWon">0</strong>
        </div>

        <div class="bulkSummaryCard">
            <span>LOST</span>
            <strong id="bulkSummaryLost">0</strong>
        </div>

    </div>


    <!-- MONEY -->
    <div style="
        color:#bda8d0;
        font-size:11px;
        font-weight:bold;
        letter-spacing:1px;
        margin-bottom:8px;
    ">
        MONEY
    </div>

    <div style="
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:8px;
        margin-bottom:18px;
    ">

        <div class="bulkSummaryCard">
            <span>STAKE</span>
            <strong id="bulkSummaryStake">$0.00</strong>
        </div>

        <div class="bulkSummaryCard">
            <span>PAYOUT</span>
            <strong id="bulkSummaryPayout">$0.00</strong>
        </div>

    </div>


    <!-- RESULT -->
    <div style="
        color:#bda8d0;
        font-size:11px;
        font-weight:bold;
        letter-spacing:1px;
        margin-bottom:8px;
    ">
        RESULT
    </div>

    <div class="bulkProfitCard">

        <span>PROFIT</span>

        <strong id="bulkSummaryProfit">
            $0.00
        </strong>

    </div>

</div>

                


            <!-- TRANSACTIONS -->
            <div id="bulkTransactionsTab"
                class="bulkPanelContent"
                style="display:none;"
            >

                <div id="bulkTransactionsList">

                    <div class="bulkEmpty">
                        No transactions yet
                    </div>

                </div>

            </div>


            <!-- JOURNAL -->
            <div id="bulkJournalTab"
                class="bulkPanelContent"
                style="display:none;"
            >

                <div id="bulkJournalList">

                    <div class="bulkEmpty">
                        No journal entries yet
                    </div>

                </div>

            </div>

                        

            

        `;


        document.body.appendChild(panel);


        /* PANEL STYLES */
        if(!document.getElementById("bulkResultsPanelStyles")){

            const style =
                document.createElement("style");

            style.id =
                "bulkResultsPanelStyles";

            style.textContent = `

                #bulkResultsPanel{

    position:fixed;

    top:105px;
    left:0;
    right:0;
    bottom:0;

    height:auto;

    background:#080510;

                    color:white;

                    border-top:
                        1px solid #6f2cff;

                    border-radius:
                        22px 22px 0 0;

                    box-shadow:
                        0 -8px 35px
                        rgba(0,0,0,.65);

                    z-index:9999;

                    overflow:hidden;

                    transform:
                        translateY(100%);

                    opacity:0;

                    transition:
                        transform .3s ease,
                        opacity .3s ease;

                    font-family:
                        Arial,sans-serif;

                }


                .bulkPanelTab{

                    flex:0 0 auto;

                    height:36px;

                    padding:0 14px;

                    border:
                        1px solid #743cff;

                    border-radius:10px;

                    background:#120b1d;

                    color:#bda8d0;

                    font-size:11px;

                    font-weight:bold;

                }


                .bulkPanelTab.active{

                    background:#6f2cff;

                    color:white;

                }


                .bulkPanelContent{

                    padding:10px;

                    overflow-y:auto;

                    height:
                        calc(100% - 110px);

                    box-sizing:border-box;

                }


                .bulkStatGrid{

                    display:grid;

                    grid-template-columns:
                        repeat(2,minmax(0,1fr));

                    gap:10px;

                }


                .bulkStat{

                    min-height:75px;

                    border:
                        1px solid #6f2cff;

                    border-radius:14px;

                    background:#0d0716;

                    display:flex;

                    flex-direction:column;

                    justify-content:center;

                    align-items:center;

                    gap:6px;

                }


                .bulkStat span{

                    color:#bda8d0;

                    font-size:10px;

                    font-weight:bold;

                }


                .bulkStat strong{

                    color:white;

                    font-size:17px;

                }


                .bulkEmpty{

                    padding:35px 10px;

                    text-align:center;

                    color:#8e789f;

                    font-size:13px;

                }


                .bulkTransaction{

                    padding:12px;

                    margin-bottom:8px;

                    border:
                        1px solid #6f2cff;

                    border-radius:12px;

                    background:#0d0716;

                }

                .bulkSummaryCard{

    min-height:72px;

    border:
        1px solid #6f2cff;

    border-radius:14px;

    background:#0d0716;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    gap:6px;

    box-sizing:border-box;
}


.bulkSummaryCard span{

    color:#8e789f;

    font-size:9px;

    font-weight:bold;

}


.bulkSummaryCard strong{

    color:white;

    font-size:17px;

}


.bulkProfitCard{

    min-height:82px;

    border:
        1px solid #6f2cff;

    border-radius:15px;

    background:#0d0716;

    display:flex;

    flex-direction:column;

    justify-content:center;

    align-items:center;

    gap:7px;

}


.bulkProfitCard span{

    color:#8e789f;

    font-size:10px;

    font-weight:bold;

}


.bulkProfitCard strong{

    color:#c94fff;

    font-size:24px;

    font-weight:bold;

}

            `;

            document.head.appendChild(style);

        }

    }


    /* OPEN */
    if(
        panel.style.transform === "" ||
        panel.style.transform === "translateY(100%)"
    ){

        panel.style.display = "block";

        requestAnimationFrame(function(){

            panel.style.transform =
    "translateY(0)";

panel.style.opacity =
    "1";

updateBulkResultsSummary();
updateBulkResultsTransactions();
updateBulkResultsJournal();

        });

    }

    /* CLOSE */
    else{

        panel.style.transform =
            "translateY(100%)";

        panel.style.opacity =
            "0";

    }

    }

function showBulkPanelTab(tab){

    const summary =
        document.getElementById("bulkSummaryTab");

    const transactions =
        document.getElementById("bulkTransactionsTab");

    const journal =
        document.getElementById("bulkJournalTab");

    if(!summary || !transactions || !journal) return;


    summary.style.display = "none";
    transactions.style.display = "none";
    journal.style.display = "none";


    if(tab === "summary"){
        summary.style.display = "block";
    }

    if(tab === "transactions"){
        transactions.style.display = "block";
    }

    if(tab === "journal"){
        journal.style.display = "block";
    }


    document
        .querySelectorAll(".bulkPanelTab")
        .forEach(function(button){

            button.classList.remove("active");

        });


    const buttons =
        document.querySelectorAll(".bulkPanelTab");

    if(tab === "summary") buttons[0].classList.add("active");
    if(tab === "transactions") buttons[1].classList.add("active");
    if(tab === "journal") buttons[2].classList.add("active");

}

function updateBulkResultsJournal(){

    const list =
        document.getElementById(
            "bulkJournalList"
        );

    if(!list) return;


    if(
        !phinixBulkJournal ||
        phinixBulkJournal.length === 0
    ){

        list.innerHTML = `
            <div class="bulkEmpty">
                No journal entries yet
            </div>
        `;

        return;
    }


    list.innerHTML =
        phinixBulkJournal.map(
            function(entry){

                const isWin =
                    entry.includes("WIN");

                return `

                    <div style="
                        background:#0d0716;
                        border:1px solid #321650;
                        border-radius:12px;
                        padding:12px;
                        margin-bottom:8px;
                        color:#cfc3d8;
                        font-size:12px;
                        line-height:18px;
                    ">

                        <span style="
                            color:${
                                isWin
                                    ? "#00d995"
                                    : "#ff4d5e"
                            };
                            font-weight:bold;
                        ">
                            ${
                                isWin
                                    ? "WIN"
                                    : "LOSS"
                            }
                        </span>

                        <span style="
                            margin-left:6px;
                        ">
                            ${entry}
                        </span>

                    </div>

                `;

            }
        ).join("");

}

function resetBulkResults(){

    // Stop any running demo trades
    phinixBulkRunning = false;

    if(phinixBulkTimer){
        clearInterval(phinixBulkTimer);
        phinixBulkTimer = null;
    }

    // Clear stored results
    phinixBulkTransactions = [];
    phinixBulkJournal = [];

    // Reset statistics
    phinixBulkStats = {
        stake: 0,
        payout: 0,
        runs: 0,
        won: 0,
        lost: 0,
        profit: 0
    };

    // Clear selected contract
    window.phinixBulkSelectedContract = null;

    // Refresh everything
    updateBulkResultsSummary();
    updateBulkResultsTransactions();
    updateBulkResultsJournal();

}

function updateBulkResultsTransactions(){

    const list =
        document.getElementById(
            "bulkTransactionsList"
        );

    if(!list) return;


    if(
        !phinixBulkTransactions ||
        phinixBulkTransactions.length === 0
    ){

        list.innerHTML = `
            <div class="bulkEmpty">
                No transactions yet
            </div>
        `;

        return;
    }


    list.innerHTML =
        phinixBulkTransactions.map(
            function(tx){

                const resultColor =
                    tx.result === "Won"
                        ? "#00d995"
                        : "#ff4d5e";

                const profitColor =
                    tx.profit >= 0
                        ? "#00d995"
                        : "#ff4d5e";


                return `

                    <div class="bulkTransaction">

                        <div style="
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                        ">

                            <strong style="
                                color:white;
                                font-size:14px;
                            ">
                                ${tx.contract}
                            </strong>

                            <span style="
                                color:${resultColor};
                                font-size:12px;
                                font-weight:bold;
                            ">
                                ${tx.result}
                            </span>

                        </div>


                        <div style="
                            color:#8e789f;
                            font-size:11px;
                            margin-top:6px;
                        ">
                            ${tx.id} • ${tx.time}
                        </div>


                        <div style="
                            display:grid;
                            grid-template-columns:
                                repeat(3,minmax(0,1fr));
                            gap:8px;
                            margin-top:12px;
                        ">

                            <div>
                                <div style="
                                    color:#8e789f;
                                    font-size:9px;
                                ">
                                    STAKE
                                </div>

                                <div style="
                                    color:white;
                                    font-size:13px;
                                    font-weight:bold;
                                    margin-top:3px;
                                ">
                                    $${Number(tx.stake).toFixed(2)}
                                </div>
                            </div>


                            <div>
                                <div style="
                                    color:#8e789f;
                                    font-size:9px;
                                ">
                                    PAYOUT
                                </div>

                                <div style="
                                    color:white;
                                    font-size:13px;
                                    font-weight:bold;
                                    margin-top:3px;
                                ">
                                    $${Number(tx.payout).toFixed(2)}
                                </div>
                            </div>


                            <div>
                                <div style="
                                    color:#8e789f;
                                    font-size:9px;
                                ">
                                    P/L
                                </div>

                                <div style="
                                    color:${profitColor};
                                    font-size:13px;
                                    font-weight:bold;
                                    margin-top:3px;
                                ">
                                    ${
                                        tx.profit >= 0
                                            ? "+"
                                            : ""
                                    }$${Number(tx.profit).toFixed(2)}
                                </div>
                            </div>

                        </div>

                    </div>

                `;

            }
        ).join("");

}

function updateBulkResultsSummary(){

    const stake =
        document.getElementById("bulkSummaryStake");

    const payout =
        document.getElementById("bulkSummaryPayout");

    const runs =
        document.getElementById("bulkSummaryRuns");

    const won =
        document.getElementById("bulkSummaryWon");

    const lost =
        document.getElementById("bulkSummaryLost");

    const profit =
        document.getElementById("bulkSummaryProfit");


    if(stake){
        stake.textContent =
            "$" + Number(phinixBulkStats.stake || 0).toFixed(2);
    }

    if(payout){
        payout.textContent =
            "$" + Number(phinixBulkStats.payout || 0).toFixed(2);
    }

    if(runs){
        runs.textContent =
            Number(phinixBulkStats.runs || 0);
    }

    if(won){
        won.textContent =
            Number(phinixBulkStats.won || 0);
    }

    if(lost){
        lost.textContent =
            Number(phinixBulkStats.lost || 0);
    }

    if(profit){

        const value =
            Number(phinixBulkStats.profit || 0);

        profit.textContent =
            (value >= 0 ? "$" : "-$") +
            Math.abs(value).toFixed(2);
    }

}
    
