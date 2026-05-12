// const Home = () => {
//   return (
//     <>
//       <h1 className="font-roboto">
//         Welcome, to Hello World Next.js Course
//       </h1>
//       <button
//         className="bg-amber-400 text-black p-5"
//         // onClick={() => alert("hii")}
//       >
//         Click Me, Currently Not Working
//       </button>
//     </>
//   );
// };

// export default Home;

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center gap-6">
      <h1 className="font-roboto text-3xl font-bold">
        Welcome to Hello World Next.js Course
      </h1>

      <p className="text-gray-600">
        Start building modern web apps with Next.js 🚀
      </p>

      <button className="bg-amber-400 text-black px-6 py-3 rounded hover:bg-amber-500 transition">
        Click Me
      </button>
    </main>
  );
};

export default Home;
