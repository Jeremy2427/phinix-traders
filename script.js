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

document.querySelector(".container").innerHTML = `

<div class="header">
    <div onclick="location.reload()">←</div>
    <div class="logo">PHINIX BOTS</div>
    <div>🏠</div>
</div>

<div class="bot-card">
    <h3>🤖 Apex Bot</h3>
    <p>AI-powered precision trading</p>
    <button onclick="openApexBot()">LOAD BOT</button>
</div>

<div class="bot-card">
    <h3>🚀 Phinix Pro Bot</h3>
    <p>Advanced trend detection</p>
    <button onclick="openPhinixProBot()">LOAD BOT</button>
</div>

<div class="bot-card">
    <h3>⚡ Lightning Bot</h3>
    <p>High-speed scalping</p>
    <button onclick="openLightningBot()">LOAD BOT</button>
</div>

<div class="bot-card">
    <h3>🎯 Sniper Bot</h3>
    <p>Precision entry strategy</p>
    <button>LOAD BOT</button>
</div>

<div class="bot-card">
    <h3>📈 Trend Bot</h3>
    <p>Trend-following system</p>
    <button>LOAD BOT</button>
</div>

<div class="bot-card">
    <h3>💎 Premium Bot</h3>
    <p>Multi-strategy trading</p>
    <button>LOAD BOT</button>
</div>

<div class="bot-card">
    <h3>🧠 AI Predictor Bot</h3>
    <p>AI market prediction</p>
    <button>LOAD BOT</button>
</div>
`;

            }
function openDashboard(){
    location.reload();
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
if (botInterval) {
    clearInterval(botInterval);
    botInterval = null;
}
    if(!document.getElementById("transactionsTable")) return;

    if(botRunning){

        clearInterval(botInterval);
botInterval = null;
botRunning = false;
        document.getElementById("runBotBtn").innerHTML="▶ RUN";
        document.getElementById("runBotBtn").style.background="#00b050";

        document.getElementById("botStatus").innerHTML="STOPPED";

        return;

    }

    botRunning = true;

    document.getElementById("runBotBtn").innerHTML="■ STOP";
    document.getElementById("runBotBtn").style.background="#d62828";

    document.getElementById("botStatus").innerHTML="RUNNING";

    botInterval=setInterval(addFakeTrade,2500);

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

document.querySelector(".container").innerHTML = `

<div class="header">
    <div onclick="openApexBot()" style="cursor:pointer;">←</div>
    <div class="logo">APEX BOT</div>
    <div id="botStatus" style="color:#00ff88;font-weight:bold;">
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
<span id="totalStake">0 USD</span>
</div>

<div>
<b>Total Payout</b><br>
<span id="totalPayout">0 USD</span>
</div>

<div>
<b>Contracts Won</b><br>
<span id="contractsWon">0</span>
</div>

<div>
<b>Contracts Lost</b><br>
<span id="contractsLost">0</span>
</div>

<div>
<b>No. of Runs</b><br>
<span id="numberRuns">0</span>
</div>

<div>
<b>Total Profit</b><br>
<span id="profitLoss" style="color:#00ff88;">0 USD</span>
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
totalStake = 0;
totalPayout = 0;
 journalHistory = "";
contractsWon = 0;
contractsLost = 0;
numberRuns = 0;
profitLoss = 0;

botInterval = setInterval(addFakeTrade,2500);

}
function showSummary(){

let totalTrades = contractsWon + contractsLost;

let winRate = totalTrades > 0
? ((contractsWon / totalTrades) * 100).toFixed(1)
: "0.0";

let avgWin = contractsWon > 0
? (totalPayout / contractsWon).toFixed(2)
: "0.00";

let avgLoss = contractsLost > 0
? (totalStake / contractsLost).toFixed(2)
: "0.00";

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openBotRunningScreen()" style="cursor:pointer;">←</div>
<div class="logo">SUMMARY</div>
<div>📊</div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:18px;
margin-top:14px;
">

<h2 style="text-align:center;color:#c94fff;">
APEX BOT PERFORMANCE
</h2>

<div style="margin-top:20px;line-height:2;font-size:16px;">

<b>Win Rate:</b> ${winRate}%<br>

<b>Contracts Won:</b> ${contractsWon}<br>

<b>Contracts Lost:</b> ${contractsLost}<br>

<b>Total Stake:</b> ${totalStake.toFixed(2)} USD<br>

<b>Total Payout:</b> ${totalPayout.toFixed(2)} USD<br>

<b>Average Win:</b> ${avgWin} USD<br>

<b>Average Loss:</b> ${avgLoss} USD<br>

<b>Total Profit:</b>
<span style="color:${profitLoss>=0 ? "#00ff88" : "#ff4444"};">
${profitLoss.toFixed(2)} USD
</span>

</div>

</div>

`;
}
function showJournal(){

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openBotRunningScreen()" style="cursor:pointer;">←</div>
<div class="logo">JOURNAL</div>
<div>📖</div>
</div>

<div style="
background:#161625;
border:1px solid #7a2cff;
border-radius:18px;
padding:18px;
margin-top:14px;
">

<h2 style="
text-align:center;
color:#c94fff;
margin-bottom:18px;
">
BOT ACTIVITY
</h2>

<div id="journalLogs" style="
margin-top:20px;
line-height:2;
font-size:18px;
color:white;
">
${journalHistory}
</div>

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

function openPhinixProBot(){
activeBot = "Phinix Pro";

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
<input type="number" value="2"
style="width:100%;padding:12px;border-radius:12px;margin-bottom:12px;">

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
<select style="width:100%;padding:12px;border-radius:12px;margin-bottom:20px;">
<option>1</option>
<option>2</option>
<option>5</option>
<option>10</option>
</select>
<button
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
">
▶ RUN
</button>

</div>

`;
}

function openPhinixRunningScreen(){

document.querySelector(".container").innerHTML = `

<div class="header">
<div onclick="openPhinixProBot()" style="cursor:pointer;">←</div>
<div class="logo">PHINIX PRO BOT</div>
<div id="phStatus" style="color:#00ff88;font-weight:bold;">
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

<button onclick="showPhinixSummary()"
style="flex:1;padding:12px;border:none;border-radius:12px;">
Summary
</button>

<button onclick="showPhinixTransactions()"
style="flex:1;padding:12px;border:none;border-radius:12px;background:#7a2cff;color:white;">
Transactions
</button>

<button onclick="showPhinixJournal()"
style="flex:1;padding:12px;border:none;border-radius:12px;">
Journal
</button>

</div>

<div id="phTransactionContainer"
style="
background:#161625;
border:1px solid #7a2cff;
border-radius:16px;
padding:12px;
margin-top:12px;
height:250px;
overflow-y:auto;
">

<table id="phTransactionsTable"
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

<div><b>Total Stake</b><br><span id="phStakeDisplay">0 USD</span></div>

<div><b>Total Payout</b><br><span id="phPayoutDisplay">0 USD</span></div>

<div><b>Won</b><br><span id="phWonDisplay">0</span></div>

<div><b>Lost</b><br><span id="phLostDisplay">0</span></div>

<div><b>Runs</b><br><span id="phRunsDisplay">0</span></div>

<div><b>Profit</b><br><span id="phProfitDisplay">0 USD</span></div>

</div>

<button
id="phRunBtn"
onclick="togglePhinixBot()"
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

phBotRunning = true;

        phStake = 0;
phPayout = 0;
phWon = 0;
phLost = 0;
phRuns = 0;
phProfit = 0;
phJournal = "";

phInterval = setInterval(addPhinixTrade, 2500);
    
}

    
function togglePhinixBot(){
if (phInterval) {
    clearInterval(phInterval);
    phInterval = null;
}
    if(phBotRunning){

        clearInterval(phInterval);
phInterval = null;
phBotRunning = false;

        document.getElementById("phRunBtn").innerHTML = "▶ RUN";
        document.getElementById("phStatus").innerHTML = "STOPPED";

        return;
    }

    phBotRunning = true;

    document.getElementById("phRunBtn").innerHTML = "■ STOP";
    document.getElementById("phStatus").innerHTML = "RUNNING";
clearInterval(phInterval);
    phInterval = setInterval(addPhinixTrade,2500);

}

function addPhinixTrade(){

    const table = document
        .getElementById("phTransactionsTable")
        .getElementsByTagName("tbody")[0];

    const row = table.insertRow();

    const win = Math.random() > 0.35;

    const entry = (735 + Math.random()).toFixed(2);

    const pnl = win ? 3.70 : -5.00;

    phStake += 5;
    phPayout += win ? 8.70 : 0;
    phRuns++;

    if(win){
        phWon++;
    }else{
        phLost++;
    }

    phProfit += pnl;

    row.innerHTML = `
<td style="text-align:center;">${win ? "📈" : "📉"}</td>
<td style="text-align:center;">${entry}</td>
<td style="text-align:center;color:${win ? "#00ff88" : "#ff4444"};">
${pnl.toFixed(2)} USD
</td>
`;

    document.getElementById("phStakeDisplay").innerHTML = phStake.toFixed(2)+" USD";
    document.getElementById("phPayoutDisplay").innerHTML = phPayout.toFixed(2)+" USD";
    document.getElementById("phWonDisplay").innerHTML = phWon;
    document.getElementById("phLostDisplay").innerHTML = phLost;
    document.getElementById("phRunsDisplay").innerHTML = phRuns;
    document.getElementById("phProfitDisplay").innerHTML = phProfit.toFixed(2)+" USD";

    phJournal += `
🎯 Signal Found<br>
${win ? "💰 Contract Won" : "❌ Contract Lost"} (${pnl.toFixed(2)} USD)<br>
📈 Monitoring Market...<br>
`;

    const container = document.getElementById("phTransactionContainer");
    container.scrollTop = container.scrollHeight;

}
function showPhinixTransactions(){
    // Already on Transactions screen
}

function showPhinixSummary(){

document.querySelector(".container").innerHTML=`

<div class="header">
<div onclick="openPhinixRunningScreen()">←</div>
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
PHINIX PRO PERFORMANCE
</h2>

<b>Contracts Won:</b> ${phWon}<br>
<b>Contracts Lost:</b> ${phLost}<br>
<b>Total Stake:</b> ${phStake.toFixed(2)} USD<br>
<b>Total Payout:</b> ${phPayout.toFixed(2)} USD<br>

<b>Total Profit:</b>
<span style="color:${phProfit>=0?"#00ff88":"#ff4444"};">
${phProfit.toFixed(2)} USD
</span>

</div>

`;

}

function showPhinixJournal(){

document.querySelector(".container").innerHTML=`

<div class="header">
<div onclick="openPhinixRunningScreen()">←</div>
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

${phJournal}

</div>

`;

}
function openLightningBot() {
    activeBot = "Lightning Bot";

    document.querySelector(".container").innerHTML = `

<div class="header">
    <div onclick="openBots()" style="cursor:pointer;">←</div>
    <div class="logo">⚡ LIGHTNING BOT</div>
    <div>🏠</div>
</div>

<div style="
background:linear-gradient(180deg,#6a00ff,#8d3cff,#ffd700);
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
