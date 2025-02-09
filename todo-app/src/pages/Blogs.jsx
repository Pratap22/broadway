export const blogs = [
  {
    title: "The Future of AI",
    detail:
      "Exploring the advancements in artificial intelligence and what lies ahead.",
    date: "2025-02-15",
    author: "Alice Johnson",
  },
  {
    title: "Healthy Eating Habits",
    detail: "A guide to maintaining a balanced diet for a healthy lifestyle.",
    date: "2025-01-20",
    author: "Mark Smith",
  },
  {
    title: "Top 10 Travel Destinations",
    detail: "Discover the best travel spots to visit this year.",
    date: "2025-03-05",
    author: "Emma Davis",
  },
  {
    title: "The Rise of Electric Cars",
    detail: "How electric vehicles are shaping the future of transportation.",
    date: "2025-04-10",
    author: "John Williams",
  },
  {
    title: "Mastering JavaScript",
    detail: "Essential tips and tricks to become proficient in JavaScript.",
    date: "2025-02-28",
    author: "Sophia Lee",
  },
  {
    title: "The Power of Meditation",
    detail: "How meditation can improve mental clarity and reduce stress.",
    date: "2025-05-12",
    author: "Daniel Brown",
  },
  {
    title: "Home Workout Routines",
    detail: "Effective exercises to stay fit without hitting the gym.",
    date: "2025-06-18",
    author: "Sarah Wilson",
  },
  {
    title: "The Impact of Climate Change",
    detail:
      "Understanding the effects of climate change and how to mitigate them.",
    date: "2025-07-22",
    author: "Michael Clark",
  },
  {
    title: "Investing in Cryptocurrency",
    detail: "A beginner’s guide to investing in digital currencies.",
    date: "2025-08-30",
    author: "Jessica White",
  },
  {
    title: "The Art of Productivity",
    detail: "Time management techniques to boost efficiency and success.",
    date: "2025-09-10",
    author: "Robert Green",
  },
];

const Blogs = () => {
  return (
    <div>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Blogs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-500">
                {blog.date} - {blog.author}
              </p>
              <a
                href={`/blog/${index}`}
                className="text-blue-500 hover:underline mt-2 block"
              >
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
