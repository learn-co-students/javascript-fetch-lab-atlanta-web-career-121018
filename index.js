
const base = 'https://api.github.com/'
const fork = `bavarianrhino/intro-fetch-lab-atlanta-web-career-121018`

function getIssues() {
    fetch(`${base}repos/${fork}/issues`)
    .then(res => res.json())
    .then(json => showIssues(json))
}

function showIssues(json) {
    const template = Handlebars.compile(document.querySelector('#issues-template').innerHTML)
    document.querySelector('#issues').innerHTML = template(json)
}

function createIssue() {
    const issueTitle = document.querySelector('#title').value
    const issueBody = document.querySelector('#body').value
    const postData = { title: issueTitle, body: issueBody }

    fetch(`${base}/repos/${fork}/issues`, {
        method: 'post',
        headers: {
            Authorization: `token ${getToken()}`
        },
        body: JSON.stringify(postData)
    })
    .then(resp => getIssues())
}

function showResults(json) {
    const source = document.querySelector('#repo-template').innerHTML
    const template = Handlebars.compile(source)
    const parsedTemp = template(json)
    document.querySelector('#results').innerHTML = parsedTemp
}

function forkRepo() {
    const repo = 'intro-fetch-lab-atlanta-web-career-121018'
    fetch(`${base}/repos/${repo}/forks`, {
        method: 'post',
        headers: {
            Authorization: `token ${getToken()}`
        }
    })
    .then(res => res.json())
    .then(json => showIssues(json))
}


function getToken() {
    const token = '';
    return token;
}
