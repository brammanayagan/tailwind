const Academic = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
        <h1 className="text-3xl font-bold mb-6 text-red-600">
          Academic Problems Students Face in College
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full mb-14">
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Heavy syllabus and workload</li>
            <li>Difficulty understanding complex subjects</li>
            <li>Lack of proper time management</li>
            <li>Exam stress and fear of failure</li>
            <li>Poor concentration during classes</li>
            <li>Lack of effective study methods</li>
          </ul>
        </div>

        {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

        <h1 className="text-3xl font-bold mb-6 text-amber-400">
          How Students Can Overcome These Academic Problems
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full">
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Plan short-term and long-term academic goals</li>
            <li>Create a study schedule and follow it regularly.</li>
            <li>
              Seek guidance from teachers, tutors, or classmates when concepts
              are difficult
            </li>
            <li>Practice note-taking, summarizing, and revision techniques</li>
            <li>Solve problems, do exercises, and revise lessons frequently</li>
            <li>
              Study in a quiet place and limit mobile phone or social media use
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Academic;
