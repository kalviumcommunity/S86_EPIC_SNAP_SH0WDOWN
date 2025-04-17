import React from "react";

export default function App() {
  return (
    <div className="min-h-screen font-poppins text-gray-800 bg-white">
      <header className="bg-red-500 text-white text-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-2">Epic Snap Showdown 📸</h1>
        <p className="text-lg">Upload. Vote. Win. Laugh Hard!</p>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6">Why You'll Love This:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ title, description, icon }) => (
            <div
              key={title}
              className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100 hover:shadow-lg transition"
            >
              <h3 className="text-red-500 text-xl font-bold mb-3">
                {icon} {title}
              </h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full transition"
          >
            Get Started Now
          </a>
        </div>
      </main>

      <footer className="bg-gray-100 text-center py-6 text-sm text-gray-600">
        &copy; 2025 Epic Snap Showdown | Built with ❤️ using React + Vite
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Snap & Share",
    description: "Upload your funniest pictures and let the world see your humor!",
    icon: "😄",
  },
  {
    title: "Vote & Win",
    description: "Vote for your favorite snaps every week and see who wins the crown!",
    icon: "🗳️",
  },
  {
    title: "Weekly Leaderboard",
    description: "Top voted snapper of the week wins exciting prizes and bragging rights.",
    icon: "🏆",
  },
  {
    title: "Caption & Comment",
    description: "Join the fun by adding funny captions and comments to the snaps.",
    icon: "💬",
  },
  {
    title: "Share with Friends",
    description: "Post your snaps on social media and challenge your friends to beat you!",
    icon: "🔗",
  },
];
