const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'The :team: played against the :stadium:. The weather was :weather:, and Bob :player:.';
const insertX = ['Hawai\'i Fridays', 'Mexico City Wild Wings', 'Seattle Garages', 'Yellowstone Magic', 'Ohio Worms', 'Tokyo Lift', 'Atlantis Georgias', 'Breckenridge Jazz Hands', 'Chicago Firefighters', 'Core Mechanics', 'Dallas Steaks', 'Houston Spies', 'Boston Flowers', 'Canada Moist Talkers', 'Kansas City Breath Mints', 'LA Unlimited Tacos', 'New York Millenials', 'San Francisco Lovers', 'Baltimore Crabs', 'Charleston Shoe Thieves', 'Hades Tigers', 'Hellmouth Sunbeams', 'Miami Dale', 'Philly Pies'];
const insertY = ['Hawai\'i Fridays in Hawai\'i Viberight Stadium', 'Mexico City Wild Wings in the Bucket', 'Seattle Garages in the Big Garage', 'Yellowstone Magic in Yellowstone National Park (Ballpark)', 'Ohio Worms in the Wapakoneta Air, Space, and Worm Museum and Ballpark', 'Tokyo Lift in the Legscraper', 'Atlantis Georgias in the Atlantean Dome', 'Breckenridge Jazz Hands in Breckenridge Community Field', 'Chicago Firefighters in the Fire House', 'Core Mechanics in the Core Pillar Center', 'Dallas Steaks in George Foreman Stadium', 'Houston Spies in an Undisclosed Location', 'Boston Flowers in the Boston Garden', 'Canada Moist Talkers in Gleek Arena', 'Kansas City Breath Mints in the Kansas City FreshDome', 'LA Unlimited Tacos in Al Pastor Memorial Park', 'New York Millennials in Battin\' Island', 'San Francisco Lovers in San Franstadium', 'Baltimore Crabs in the Crabitat', 'Charleston Shoe Thieves in Choux Stadium', 'Hades Tigers in Sixth Circle Stadium', 'Hellmouth Sunbeams in Lower Moab Scenic Overlook Field', 'Miami Dale in Worldwide Field', 'Philly Pies in the Oven'];
const insertZ = ['Solar Eclipse', 'Peanuts', 'Birds', 'Feedback', 'Reverb', 'Blooddrain', 'Black Hole', 'Sun 2', 'Coffee', 'Coffee 2', 'Coffee 3', 'Flooding', 'Salmon', 'Glitter', 'Polarity +', 'Polarity -', 'Sun 90', 'Sun .1', 'Sum Sun', 'Jazz', 'Night', 'Supernova Eclipse', 'Black Hole (Black Hole)'];
const insertJ = ['was Incinerated', 'was percolated', 'was Shelled', 'had a yummy reaction', 'had an allergic reaction', 'was pecked free', 'feedbacked to the opposing team', 'started reverberating', 'drained blood', 'had their blood drained', 'became Wired', 'became Tired', 'was given a Free Refill', 'was swept away Elsewhere', 'was traded to the shadows'];

randomize.addEventListener('click', result);

function result() {
let newStory = storyText;
const xItem = randomValueFromArray(insertX);
const yItem = randomValueFromArray(insertY);
const zItem = randomValueFromArray(insertZ);
const jItem = randomValueFromArray(insertJ);

newStory = newStory.replaceAll(':team:', xItem);
newStory = newStory.replaceAll(':stadium:', yItem);
newStory = newStory.replaceAll(':weather:', zItem);
  newStory = newStory.replaceAll(':player:', jItem);

  if(customName.value !== '') {
    const name = customName.value;
newStory = newStory.replaceAll('Bob', name);
  }

  if(document.getElementById("uk").checked) {
newStory = newStory.replaceAll(' The weather was :weather:, and', '');
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}