let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

// Given words of interest
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually' ];

// Isolate words
let storyWords = story.split(" ");

// Initialize Counts
let wordCount = storyWords.length;
let overusedCounts = [0,0,0];
let sentenceCount = 0;

// Count overused words
const sortingFunction = function(word) { 
  if (word === "really"){
      overusedCounts[0]++;
    } else if(word === "very") {
      overusedCounts[1]++;
    } else if(word === "basically"){
      overusedCounts[2]++;
    } 
}

// Count the number of sentences
const punctFunction = function(word) {
  if(word[word.length -1] === "." ||
     word[word.length -1] === "!"){
  	sentenceCount += 1;
	}
}

// remove unnecessary words
let betterWords = storyWords.filter(word => !unnecessaryWords.includes(word));

betterWords.forEach(word => sortingFunction(word));
betterWords.forEach(word => punctFunction(word));

console.log(`Word Count: ${wordCount} \nSentence Count: ${sentenceCount} \nOverused Counts: really: ${overusedCounts[0]}, very: ${overusedCounts[1]}, basically: ${overusedCounts[2]}`);

console.log(betterWords.join(" "));