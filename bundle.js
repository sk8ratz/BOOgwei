(()=>{document.addEventListener("DOMContentLoaded",(function(){const t=localStorage.getItem("theme");t&&document.body.classList.add(t)})),window.addEventListener("load",(function(){const t=document.getElementById("loading"),e=document.getElementById("content"),s=setInterval((function(){""!==document.getElementById("gasPrice").innerHTML&&(clearInterval(s),t.classList.add("hide"),e.style.display="block")}),500)}));const t=document.getElementById("gasPrice");async function e(){const e=await async function(){const t=new ethers.providers.EtherscanProvider("homestead","2YXUXF3ZWMKVJCVGWRWUKKNKP7S8J8GKNA"),e=await t.getGasPrice();return ethers.utils.formatUnits(e,"gwei")}(),s=Math.round(e);t.textContent=s,document.title=s+" gwei",s>99?(t.classList.remove("medium-gas"),t.classList.remove("low-gas"),t.classList.add("high-gas")):s>49?(t.classList.remove("high-gas"),t.classList.remove("low-gas"),t.classList.add("medium-gas")):(t.classList.remove("high-gas"),t.classList.remove("medium-gas"),t.classList.add("low-gas"))}e(),setInterval(e,5e3);const s=document.getElementById("time");!function t(){const e=new Date,n=e.getUTCHours().toString().padStart(2,"0")+":"+e.getUTCMinutes().toString().padStart(2,"0")+":"+e.getUTCSeconds().toString().padStart(2,"0");s.textContent="UTC "+n,setTimeout(t,1e3)}()})();