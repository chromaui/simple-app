const SERVER = 'https://yoobic-loopback-dev-v3.herokuapp.com';

function goToStorybook() {
    const url = window.location.href.replace('login-page.html', '');
    location.replace(url);
}

function goToLogin() {
    location.replace(`${window.location.origin}/login-page.html`);
}

function isValidUser(loginDetails) {
    const { username, password } = loginDetails.detail;
    const body = JSON.stringify({ username, password });
    return fetch(`${SERVER}/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body
    });
}

function isValidToken(token) {
    return fetch('https://yoobic-loopback-dev-v3.herokuapp.com/api/businesslogic/getCurrentSession', {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`,
            "X-Application-Id": 'com.ipelia.yoobicv3'
        }
    }).then(res => res.json());
}

