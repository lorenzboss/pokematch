const { connectDB, disconnectDB } = require("./server/connection");
const winnerUser = require("./server/database/schemas/winnerSchema");

const initializeSampleData = async (data) => {
  try {
    await connectDB();

    for (const winUser of data) {
      await winUser.save();
    }
  } catch (error) {
    console.error("Error initializing sample data:", error);
  } finally {
    await disconnectDB();
    console.log("Sample data initialized successfully!");
  }
};

const sampleData = [
  new winnerUser({ time: 34, moves: 15, user: "Lorenz Boss" }),
  new winnerUser({ time: 35, moves: 13, user: "Leandro Äebi" }),
  new winnerUser({ time: 47, moves: 19, user: "Cem Akkaya" }),
];

initializeSampleData(sampleData);
