const tweetsRepository = require("../repositories/tweetsRepository");

module.exports = {
    getTweets,
    createTweet,
    getTweet,
    deleteTweet,
    updateTweet,
};

async function getTweets() {
    return await tweetsRepository.getTweets();
}

async function createTweet(tweet) {
    return await tweetsRepository.createTweet(tweet);
}

async function getTweet() {
    return await tweetsRepository.getTweet(tweetId);
}

async function deleteTweet() {
    return await tweetsRepository.deleteTweet(tweetId);
}

async function updateTweet() {
    return await tweetsRepository.updateTweet(tweetId, content);
}