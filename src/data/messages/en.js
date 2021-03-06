import Papa from 'papaparse'
import languageData from './languageData'
const LANGKEY = "en";

let csvResult = Papa.parse(languageData, {
  header: true,
  fastMode: true,
});

let localizationDataEn = {};
csvResult.data.forEach((translation) => {
  localizationDataEn[translation.id] = translation[LANGKEY];
});
console.log(localizationDataEn);
export default localizationDataEn;

export const obj = {
  'register': 'Register',
  'selectLanguage': 'Select your language',
  'battleToLearn': 'Battle To Learn',
  'battleToLearnDescription': 'Word Cosmos is a real-time PvP English vocabulary game set in the boundless realm of space. Through word duels with fellow learners around the world, you will come across practical English words and gain mastery of them. Play more, learn more! Gather your friends now and start your journey to becoming celestial sages!',
  'unlockPossibilities': 'Unlock Possibilities',
  'unlockPossibilitiesDescription': 'Unlock wacky characters and colorful new worlds as you delve further into space! Each planet you step on will introduce you increasingly advanced words, challenging you to expand your vocabulary. An alien golem, a planet of pirates? With infinite possibilities, who knows what you’ll find?',
  'questionSystem': 'Question Systems',
  'questionSystemDescription': 'Each thrilling match consists of three rounds and tests how well you understand a word by quizzing your knowledge of its appropriate synonyms, antonyms, and definition. It’s a race to two and questions will be presented a different way each round - you’ll definitely need to get your swift and smart on to win!',
  'madeForLearning': 'Made For Learning',
  'madeForLearningDescription': 'The key to mastery is healthy repetition. Word Cosmos is designed with a learning technology that automatically notes which words you’ve practiced well and which ones you need to keep encountering. Through this, you expand your vocabulary and retain what you learn as you rise up the ranks. Don’t panic but. . . it’s the new rocket science.',
  'theCompany': 'WHO WE ARE',
  'theCompanyDescription': 'FreCre, Inc. is a team of young talents who believe that the best way to learn is through play. Can studying be fun? Definitely! We make it possible by building gamified educational apps for iOS and Android.',
  'whatWeDo': 'OUR PLAYGROUND',
  'whatWeDoDescription': "Life at FreCre can feel like being in university again! Everyone on the team continuously learns through self-study, collaboration, and experiments. We aim to create a workplace that feels like a playground, allowing creatives to explore freely and bring ideas to life. Our differences sometimes gets us in debates, but there's nothing a tasty Japanese cake can't fix.",
  'theTeam': 'THE TEAM',
  'theTeamDescription': 'Each thrilling match consists of three rounds and tests how well you understand a word by quizzing your knowledge of its appropriate synonyms, antonyms, and definition. It’s a race to two and questions will be presented a different way each round - you’ll definitely need to get your swift and smart on to win!',
  'careers': 'BECOMING A FREEDOM CREATOR',
  'careersDescription': 'Our team needs more heroes! We are always looking for people who are curious, creative, and eager to learn. If you are looking to expand your skill set and change the world with our team, please introduce yourself.',
  'contact': 'CONTACT US',
  'contactDescription': 'Each thrilling match consists of three rounds and tests how well you understand a word by quizzing your knowledge of its appropriate synonyms, antonyms, and definition. It’s a race to two and questions will be presented a different way each round - you’ll definitely need to get your swift and smart on to win!',
  'careerBanner': 'WORK WITH US',
  'contactBanner': 'TALK TO US'
};
