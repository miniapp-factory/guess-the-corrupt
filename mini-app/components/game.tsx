import { useState } from "react";

export default function Game() {
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [score, setScore] = useState(0);
  const [profile, setProfile] = useState({
    name: "John Doe",
    salary: "$5,000",
    wealth: "$200,000",
  });

  const handleGuess = (isCorrupt: boolean) => {
    const correct = isCorrupt; // placeholder logic
    if (correct) {
      setScore(score + 1);
      setFeedback("correct");
    } else {
      setFeedback("incorrect");
    }
    setTimeout(() => {
      setFeedback(null);
      // load next profile (placeholder)
      setProfile({
        name: "Jane Smith",
        salary: "$6,000",
        wealth: "$250,000",
      });
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h2 className="text-xl font-semibold">{profile.name}</h2>
      <p>Monthly Salary: {profile.salary}</p>
      <p>Declared Wealth: {profile.wealth}</p>
      <div className="flex gap-4">
        <button
          className="px-4 py-2 bg-red-500 text-white rounded"
          onClick={() => handleGuess(true)}
        >
          CORRUPT
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => handleGuess(false)}
        >
          NOT CORRUPT
        </button>
      </div>
      {feedback === "correct" && (
        <div className="text-green-600">Correct!</div>
      )}
      {feedback === "incorrect" && (
        <div className="text-red-600">Incorrect!</div>
      )}
      <div className="mt-4">Score: {score}</div>
    </div>
  );
}
