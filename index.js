const plotBtn = document.getElementById('plot-btn');
const inputVal = document.getElementById('input-value');
const maxVal = document.getElementById('max-value');
const graph1 = document.getElementById('graph1');
const graph1Percentage = document.getElementById('graph1-percentage');
const graph2 = document.getElementById('graph2');
const graph2Percentage = document.getElementById('graph2-percentage');
const graph3 = document.getElementById('graph3');
const graph3Percentage = document.getElementById('graph3-percentage');

plotBtn.addEventListener('click', plotGraphs);

function plotGraphs() {
  const input = inputVal.value;
  const max = maxVal.value;

  if (input < max) {
    alert('Input value cannot be greater than max value');
    return;
  }

  const graph1Width = (input / max) * 100;
  graph1.style.background = `linear-gradient(to top, #008CFF ${graph1Width}%, #003F73 0%)`;
  graph1Percentage.textContent = `${Math.round(graph1Width)}%`;

  const graph2Data = {
    datasets: [{
      data: [input, max-input],
      backgroundColor: ['#008CFF', '#C2E3FF'],
    }],
    labels: ['Input Value', 'Max Value'],
  };
  new Chart(graph2, {
    type: 'pie',
    data: graph2Data,
  });
  graph2Percentage.textContent = `${Math.round((input / max) * 100)}%`;

  const graph3Width = (input / max) * 100;
  graph3.style.background = `linear-gradient(to top, #008CFF ${graph3Width}%, #C2E3FF 100%)`;
  graph3Percentage.textContent = `${Math.round(graph3Width)}%`;

}
