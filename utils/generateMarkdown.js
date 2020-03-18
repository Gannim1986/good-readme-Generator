function generateMarkdown(answers) {
    return `
    # username ${answers.title}
    ## Description ${answers.description}
    ### date ${answers.date}
   
    `
}

module.exports = generateMarkdown;