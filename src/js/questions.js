const questions = [

  {
    title: 'Are you a inside house person or outside person?',
    options: ['Indoors person', 'Outdoors person'],
    name: 'inside-or-out',
  },
  {
    title: 'Are you an energetic person?',
    options: ['Yes', 'No'],
    name: 'is-energetic',
  },
  
  {
    title: "What's the size of your house?",
    options: ['Big', 'Medium', 'Small'],
    name: 'house-size',
  },
];

const questionnaireForm = document.getElementById("questionnaire");
const questionTemplate = document.getElementById('question__template'); // Renamed variable

function createOptionLabel(labelTemplate, option, questionName) {
  const label = labelTemplate.cloneNode(true);
  const input = label.querySelector('input');
  input.name = questionName;
  input.value = option;
  label.childNodes[1].nodeValue = option;
  return label;
}

function createQuestionFieldSet(qTemplate, question, isFirst) {
  const clone = qTemplate.content.cloneNode(true);
  const legend = clone.querySelector('.question__title');
  legend.textContent = question.title;

  const fieldset = clone.querySelector('.question__container');
  fieldset.style.display = isFirst ? 'block' : 'none';

  const exampleLabel = fieldset.querySelector('.question__label');
  exampleLabel.remove();

  question.options.forEach((option) => {
    const label = createOptionLabel(exampleLabel, option, question.name);
    fieldset.appendChild(label);
  });

  return fieldset;
}

questions.forEach((question, index) => {
  const questionFieldset = createQuestionFieldSet(questionTemplate, question, index === 0);
  questionnaireForm.appendChild(questionFieldset);
});

questionnaireForm.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const currentFieldset = event.target.closest('.question__container');
    const isNext = event.target.textContent.includes('Next');
    const targetFieldset = isNext
      ? currentFieldset.nextElementSibling
      : currentFieldset.previousElementSibling;

    if (targetFieldset) {
      currentFieldset.style.display = 'none';
      targetFieldset.style.display = 'block';
    }
  }
});



function sum(a, b, c) {
  return a + b + c;
}

sum(1,2,3)