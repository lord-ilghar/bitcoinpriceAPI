const fram = document.getElementById('chart');
let xlabels = [];
let xvalue = [];

historyweek();

async function historyweek() {
  const res = await fetch(
    'https://api.coindesk.com/v1/bpi/historical/close.json'
  );
  let data = await res.json();
  document.getElementById('lastUP').textContent = data.time.updated;
  data = JSON.stringify(data.bpi);
  data = data.replace('{', '');
  data = data.replace('}', '');
  splitdata = data.split(',');
  splitdata.forEach((item) => {
    const value = item.split(':');
    value[0] = value[0].replace('"', '');
    value[0] = value[0].replace('"', '');
    xlabels.push(value[0]);
    xvalue.push(value[1]);
  });
  await chart();
}

async function chart() {
  const mychart = new Chart(fram, {
    type: 'line',
    data: {
      labels: xlabels,
      datasets: [
        {
          data: xvalue,
          label: 'price',
          borderColor: 'green',
        },
      ],
    },
  });
}
