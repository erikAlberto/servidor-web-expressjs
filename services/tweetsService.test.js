const tweetsService = require("./tweetsService");
const tweetsRepository = require("../repositories/tweetsRepository");

jest.mock("../repositories/tweetsRepository", () => ({
        getTweets: jest.fn(() => ["tweet1", "tweet2"]),
    }
))

describe("[ services / tweetsService ]", () => {
    describe("#getTweets", () => {
        it("should get all tweets", async () => {
            
            const expected = ["tweet1", "tweet2"];
            
            const result = await tweetsService.getTweets();

            expect(result).toEqual(expected);

            //Another assert
            expect(tweetsRepository.getTweets).toHaveBeenCalled();
        });
    })
})