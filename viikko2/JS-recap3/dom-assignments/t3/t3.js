const target = document.getElementById('target');

const browserInfo = `${navigator.appName}, ${navigator.appVersion.split(' ')[0]}`;

const osName = navigator.platform;

const screenSize = `${screen.width} x ${screen.height}`;

const availableScreenSize = `${screen.availWidth} x ${screen.availHeight}`;

const currentDate = new Date().toLocaleDateString('fi-FI', { day: 'numeric', month: 'long', year: 'numeric' });
const currentTime = new Date().toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });

target.insertAdjacentHTML('beforeend', `<p>Browser Info: ${browserInfo}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Operating System: ${osName}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Screen Size: ${screenSize}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Available Screen Size: ${availableScreenSize}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Current Date: ${currentDate}</p>`);
target.insertAdjacentHTML('beforeend', `<p>Current Time: ${currentTime}</p>`);
