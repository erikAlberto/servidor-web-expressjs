const testServer = require("../utils/testServer");
const tweetsRouter = require("./tweetsRouter");

const request = testServer(tweetsRouter);

jest.mock("../services/tweetsService", () => ({
    getTweets: jest.fn(() => ["tweet1", "tweet2"]),
}));

describe("[ routes / tweetsRouter ]", () => {
    it("should return a response with status 200", async () => {
        const expected = 200;

        const { status: result } = await request.get("/tweets");

        expect(result).toEqual(expected);
    });

    it("should return all tweets", async () => {
        const expected = ["tweet1", "tweet2"];

        const { body: result } = await request.get("/tweets");

        expect(result).toEqual(expected);
    });
})