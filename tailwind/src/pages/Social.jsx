import React from "react";

const Social = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
        <h1 className="text-3xl font-bold mb-6 text-red-600">
          Social Pressure Face in College
        </h1>

        <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl w-full mb-14">
          <ul className="list-disc list-inside space-y-3 text-gray-700">
            <li>Peer pressure to follow friends’ habits or behavior</li>
            <li>
              Difficulty making new friends or building social relationships
            </li>
            <li>Bullying or ragging in college environments</li>
            <li>Social media pressure and comparison with others</li>
            <li>Lack of communication skills</li>
            <li>Feeling lonely or socially isolated</li>
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

export default Social;
