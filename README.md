# Project Development Guide

## Index

1. [Getting Started](#getting-started)
2. [Working on Tasks](#working-on-tasks)
   1. [Choosing a Task](#choosing-a-task)
   2. [Branch Naming Convention](#branch-naming-convention)
   3. [Pull Request and Code Review](#pull-request-and-code-review)
3. [Development Practices](#development-practices)
   1. [HTML Development](#html-development)
   2. [CSS Development](#css-development)
   3. [JavaScript Development](#javascript-development)
4. [Code Standards](#code-standards)
5. [Testing and Debugging](#testing-and-debugging)
6. [Documentation](#documentation)

## Getting Started

- Clone the repository to your local machine.
- Familiarize yourself with the folder structure and configuration files.
- Install any required dependencies by running `npm install`.

## Working on Tasks

Ask for help if whatever you're working on is taking more than 30 minutes, usually all it takes is 5 min. from another developers time to unblock you.

### Choosing a Task

- Tasks are listed and tracked using GitHub Issues.
- Pick tasks that match your skill level, starting with `good first issue` if you're new.

### Branch Naming Convention

- For each task, create a new branch: `[feature/bugfix]/[issue-number]-short-description`.
- Example: `feature/42-add-contact-form`.

### Pull Request and Code Review

- Complete your task and create a PR against the `main` branch.
- Ensure your PR passes any linting or automated checks.
- PRs require at least one peer review before merging.

## Development Practices

### HTML Development

- Add new HTML files in the `src/html` directory.
- Link to the main CSS and JavaScript files appropriately in your HTML.

### CSS Development

- Create new CSS files within the `src/css` directory for different components or pages.
- **Importing Stylesheets:**
  - When creating a new CSS file, import it into the `src/css/style.css` file using `@import` at the top of `style.css`.
  - Example: `@import url("./Buttons.css");` (assuming you've created `Buttons.css`).
- Ensure that styles are responsive and follow the project's design guidelines.
- Use [BEM](https://bagor.tech/what-is-bem/#:~:text=Block%20Element%20Modifier%2C%20or%20BEM%2C%20is%20a%20naming,CSS%20classes%2C%20making%20collaboration%20and%20scalability%20a%20breeze)

### JavaScript Development

- Add new JavaScript files in the `src/js` directory.
- Modularize your JavaScript code and ensure it's linked correctly in the corresponding HTML files.

## Code Standards

- Run `npm run lint` before creating a PR.
- Use meaningful variable and function names.

## Testing and Debugging

https://developer.chrome.com/docs/devtools/overview

- Use browser developer tools for debugging and performance testing.
