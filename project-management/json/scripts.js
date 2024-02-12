const wbsJson = {
    "name": "Website Redesign Project",
    "description": "Redesign and develop a new website for our company",
    "start_date": "2024-02-13",
    "due_date": "2024-04-15",
    "budget": 10000,
    "tasks": [
        {
            "name": "Planning",
            "description": "Define project scope, timeline, and budget",
            "duration": 2,
            "dependencies": [],
            "subtasks": [
                {
                    "name": "Define project objectives",
                    "duration": 0.5
                },
                {
                    "name": "Develop user personas and journey maps",
                    "duration": 1
                },
                {
                    "name": "Create website map and wireframes",
                    "duration": 1
                },
                {
                    "name": "Develop project timeline and budget",
                    "duration": 0.5
                }
            ]
        },
        {
            "name": "Design",
            "description": "Create visual design of the website",
            "duration": 3,
            "dependencies": ["Planning"],
            "subtasks": [
                {
                    "name": "Develop style guide and branding",
                    "duration": 1
                },
                {
                    "name": "Design homepage and key pages",
                    "duration": 1.5
                },
                {
                    "name": "Design mobile and responsive layouts",
                    "duration": 0.5
                }
            ]
        },
        {
            "name": "Development",
            "description": "Develop and build the website functionality",
            "duration": 4,
            "dependencies": ["Design"],
            "subtasks": [
                {
                    "name": "Front-end development (HTML, CSS, JavaScript)",
                    "duration": 2
                },
                {
                    "name": "Back-end development (API integration, database)",
                    "duration": 1.5
                },
                {
                    "name": "Content management system setup and configuration",
                    "duration": 0.5
                }
            ]
        },
        {
            "name": "Testing and Deployment",
            "description": "Test the website functionality and deploy to production",
            "duration": 2,
            "dependencies": ["Development"],
            "subtasks": [
                {
                    "name": "Functional testing and bug fixing",
                    "duration": 1
                },
                {
                    "name": "Performance testing and optimization",
                    "duration": 0.5
                },
                {
                    "name": "Website deployment and launch",
                    "duration": 0.5
                }
            ]
        }
    ]
}

const wbsCsv = `"Name","Description","Duration","Dependencies","Subtasks"
"Website Redesign Project","Redesign and develop a new website for our company","10","",""
"Planning","Define project scope, timeline, and budget","2","",""
"Define project objectives","","0.5",""
"Develop user personas and journey maps","","1",""
"Create website map and wireframes","","1",""
"Develop project timeline and budget","","0.5",""
"Design","Create visual design of the website","3","Planning",""
"Develop style guide and branding","","1",""
"Design homepage and key pages","","1.5",""
"Design mobile and responsive layouts","","0.5",""
"Development","Develop and build the website functionality","4","Design",""
"Front-end development (HTML, CSS, JavaScript)","","2",""
"Back-end development (API integration, database)","","1.5",""
"Content management system setup and configuration","","0.5",""
"Testing and Deployment","Test the website functionality and deploy to production","2","Development",""
"Functional testing and bug fixing","","1",""
"Performance testing and optimization","","0.5",""
"Website deployment and launch","","0.5",""`

const wbsTxt = `Project: Website Redesign
Start Date: 2024-02-13
Due Date: 2024-04-15
Budget: $10,000

1. Planning (2 days)
* 1.1 Define project objectives (0.5 days)
* 1.2 Develop user personas and journey maps (1 day)
* 1.3 Create website map and wireframes (1 day)
* 1.4 Develop project timeline and budget (0.5 days)

2. Design (3 days) (Depends on 1)
* 2.1 Develop style guide and branding (1 day)
* 2.2 Design homepage and key pages (1.5 days)
* 2.3 Design mobile and responsive layouts (0.5 days)

3. Development (4 days) (Depends on 2)
* 3.1 Front-end development (HTML, CSS, JavaScript) (2 days)
* 3.2 Back-end development (API integration, database) (1.5 days)
* 3.3 Content management system setup and configuration (0.5 days)

4. Testing and Deployment (2 days) (Depends on 3)
* 4.1 Functional testing and bug fixing (1 day)
* 4.2 Performance testing and optimization (0.5 days)
* 4.3 Website deployment and launch (0.5 days)

Notes:
This is a simplified example and can be adapted to your specific project needs.
The estimated durations are for illustrative purposes only and may vary depending on your resources and scope.
Dependencies indicate which tasks need to be completed before others can begin.`

function downloadString(text, fileType, fileName) {
    var blob = new Blob([text], { type: fileType });

    var a = document.createElement('a');
    a.download = fileName;
    a.href = URL.createObjectURL(blob);
    a.dataset.downloadurl = [fileType, a.download, a.href].join(':');
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 1500);
}

$('#wbs-json').html(JSON.stringify(wbsJson, null, 4))
$('#wbs-csv').html(wbsCsv)
$('#wbs-txt').html(wbsTxt)

$('#swot-export-json').on('click', function () {
    let swotJson = {
"Strength": `${$('#swot-strength').val()}`,
"Weaknessess": `${$('#swot-weaknesses').val()}`,
"Opportunities": `${$('#swot-opportunities').val()}`,
"Threats": `${$('#swot-threats').val()}`
}
    downloadString(JSON.stringify(swotJson, null, 4), 'text/json', 'swot.json')
})
$('#swot-export-csv').on('click', function () {
    let swotCsv = `Strength,Weaknessess,Opportunities,Threats
${$('#swot-strength').val().replace(',',';')},${$('#swot-weaknesses').val().replace(',',';')},${$('#swot-opportunities').val().replace(',',';')},${$('#swot-threats').val().replace(',',';')}`
    downloadString(swotCsv, 'text/csv', 'swot.csv')
})
$('#swot-export-txt').on('click', function () {
    let swotTxt = `Strength: ${$('#swot-strength').val()}

Weaknessess: ${$('#swot-weaknesses').val()}

Opportunities: ${$('#swot-opportunities').val()}

Threats: ${$('#swot-threats').val()}`
    downloadString(swotTxt, 'text/data', 'swot.txt')
})

$('#wbs-export-json').on('click', function () {
    downloadString(JSON.stringify(wbsJson, null, 4), 'text/json', 'wbs.json')
})
$('#wbs-export-csv').on('click', function () {
    downloadString(wbsCsv, 'text/csv', 'wbs.csv')
})
$('#wbs-export-txt').on('click', function () {
    downloadString(wbsTxt, 'text/data', 'wbs.txt')
})

$('#color-toggle-button').on('click', function () {
    let currentColor = $('html').attr('data-bs-theme')
    if (currentColor == "dark") {
        $('html').attr('data-bs-theme', 'light')
        $('#color-toggle-button').attr('class', 'btn btn-dark')
        $('#color-toggle-icon').attr('class', 'bi bi-lightbulb')
    }
    else {
        $('html').attr('data-bs-theme', 'dark')
        $('#color-toggle-button').attr('class', 'btn btn-light')
        $('#color-toggle-icon').attr('class', 'bi bi-lightbulb-fill')
    }
})