import fs from 'fs'
import inquirer from 'inquirer'
import generateREADME from './readme.js'

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a brief description of this project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions for this project?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'How will this project be used?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Which type of license does this project have?',
        choices: [
            'MIT',
            'GPLv2',
            'Apache',
            'Other'
        ],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'What are the test instructions for this project?',
        name: 'testIns'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your Github URL?',
        name: 'github'
    },
])
    .then((answers) => {
        console.log(answers)

        // generate HTML string
        const README = generateREADME(answers)
//        console.log(html)
        // write the file
        fs.writeFile('./exports/README.md', README, error => {
        if (error) throw error
            console.log('README saved')
        })
    })
    .catch(error => console.log(error))