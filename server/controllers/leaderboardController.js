
const { connectDB } = require("../connection");
const winnerUser = require("../database/schemas/winnerSchema");

const getLeaderboard = async (req, res) => {
    try {
        await connectDB();
        const leaderboard = await winnerUser.find().sort({ moves: 1, time: 1 }).limit(5);
        res.json(leaderboard);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = { getLeaderboard };
