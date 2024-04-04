const target = document.getElementById('target');

const infoArray = [
  { label: 'Browser Info', value: `${navigator.appName}, ${navigator.appVersion.split(' ')[0]}` },
  { label: 'Operating System', value: navigator.platform },
  { label: 'Screen Size', value: `${screen.width} x ${screen.height}` },
  { label: 'Available Screen Size', value: `${screen.availWidth} x ${screen.availHeight}` },
  { label: 'Current Date', value: new Date().toLocaleDateString('fi-FI', { day: 'numeric', month: 'long', year: 'numeric' }) },
  { label: 'Current Time', value: new Date().toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' }) },
];

infoArray.forEach(info => {
  target.insertAdjacentHTML('beforeend', `<p>${info.label}: ${info.value}</p>`);
});
