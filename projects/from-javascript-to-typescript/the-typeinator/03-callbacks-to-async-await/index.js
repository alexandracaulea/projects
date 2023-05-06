// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

async function checkEmotion(knownEmotions, emotion, callback) {
	await new Promise((resolve) => {
		return setTimeout(resolve, 1000);
	});

	return knownEmotions.has(emotion);
}

async function speak(knownEmotions, newEmotion, phrase, callback) {
	if (!(await checkEmotion(knownEmotions, newEmotion))) {
		throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
	} else {
		return `"${phrase}" (${newEmotion})`;
	}
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
