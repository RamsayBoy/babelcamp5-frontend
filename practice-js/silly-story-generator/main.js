const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertX = [
    'Willy the Goblin',
    'Big Daddy',
    'Father Christmas'
];

const insertY = [
    'the soup kitchen',
    'Disneyland',
    'the White House'
];

const insertZ = [
    'spontaneously combusted',
    'melted into a puddle on the sidewalk',
    'turned into a slug and crawled away'
];

randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory
        .replace(':insertx:', xItem)
        .replace(':insertx:', xItem)
        .replace(':inserty:', yItem)
        .replace(':insertz:', zItem);

    if (customName.value !== '') {
        let name = customName.value;
        newStory = newStory.replace('Bob', name);
    }

    if (document.getElementById("uk").checked) {
        let weight = Math.round(toStones(300));
        let temperature = Math.round(toCentigrades(94));

        weight = weight + ' stones';
        temperature = temperature + ' centigrades';

        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    story.textContent = newStory;
    story.style.visibility = 'visible';
}

randomize.addEventListener('click', result);

function toCentigrades(value) {
    return (value - 32) * 5 / 9;
}

function toStones(value) {
    return value * 0.07142;
}