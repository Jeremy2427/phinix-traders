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
    <button>LOAD BOT</button>
</div>

<div class="bot-card">
    <h3>⚡ Lightning Bot</h3>
    <p>High-speed scalping</p>
    <button>LOAD BOT</button>
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
function openDashboard() {




}

function openApexBot(){
document.querySelector(".container").innerHTML = `

<div class="header">
    <div onclick="openBots()" style="cursor:pointer;">←</div>
    <div class="logo">APEX BOT</div>
    <div>🏠</div>
</div>

<div style="
background:linear-gradient(180deg,#8a3cff,#6d28d9);
border-radius:18px;
padding:14px;
margin-top:12px;
box-shadow:0 0 12px rgba(122,44,255,.35);
">

<h2 style="
text-align:center;
font-size:22px;
margin-bottom:16px;
color:white;
">
⚡ Quick Strategy
</h2>

<h3 style="
font-size:18px;
margin-bottom:12px;
color:white;
">
1. Trade Parameters
</h3>

<label style="font-size:13px;">Market</label>

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

<label style="font-size:13px;">Index</label>

<select id="indexSelect" style="
width:100%;
padding:8px;
margin-bottom:8px;
border-radius:10px;
border:none;
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

    if(!document.getElementById("transactionsTable")) return;

    if(botRunning){

        clearInterval(botInterval);
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
        <td>${win?"📈":"📉"}</td>
        <td>${entry}</td>
        <td>${stake} USD</td>
        <td style="color:${win?"#00ff88":"#ff4444"};">
        ${pnl.toFixed(2)}
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
<th>Stake</th>
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
<b>Profit/Loss</b><br>
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
contractsWon = 0;
contractsLost = 0;
numberRuns = 0;
profitLoss = 0;

botInterval = setInterval(addFakeTrade,2500);

}
