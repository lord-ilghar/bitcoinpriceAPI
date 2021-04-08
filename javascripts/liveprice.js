setInterval(liveprice, 1000);
async function liveprice() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await res.json();
  console.log(data);
  document.getElementById('price').textContent = data.bpi.USD.rate + '$';
  document.getElementById('updateTime').textContent = data.time.updated;
}
