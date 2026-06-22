export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">
        AI Travel Planner
      </h1>

      <p className="text-xl text-gray-600 mb-8">
        Plan your perfect trip with AI assistance
      </p>

      <div className="flex gap-4">
        <a
          href="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg"
        >
          Login
        </a>

        <a
          href="/register"
          className="px-6 py-3 bg-green-600 text-white rounded-lg"
        >
          Register
        </a>
      </div>
    </main>
  );
}