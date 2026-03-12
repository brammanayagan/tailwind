const Financial = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 flex justify-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10">
        {/* Problems Card */}
        <div>
          <h2 className="text-2xl font-bold text-red-600 mb-4 text-left">
            Financial Problems Students Face
          </h2>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-left">
              <li>
                We are not ready for the extra fees and expenses that college
                demands apart from tuition fees.
              </li>

              <li>
                Friends come from different economic backgrounds and their
                spending habits for outings and trips are very different
                compared to ours.
              </li>

              <li>
                During PG we are already adults, so asking parents every time
                for small costs like assignment binding, exam fees, and fest
                fees becomes uncomfortable.
              </li>

              <li>
                Pressure to match the lifestyle of classmates even when our
                financial situation is different.
              </li>

              <li>
                Daily expenses like transport, printing notes, and project
                materials slowly accumulate.
              </li>

              <li>
                Group outings, birthday treats, and social activities often
                require money we did not plan for.
              </li>

              <li>
                Feeling guilty asking parents for additional money because they
                already struggled to arrange college fees.
              </li>

              <li>
                Limited time to earn money while managing assignments, projects,
                and exams.
              </li>
            </ul>
          </div>
        </div>

        {/* Solutions Card */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-4 text-left">
            Practical Ways to Handle It
          </h2>

          <div className="bg-white shadow-lg rounded-xl p-8">
            <ul className="list-disc list-inside space-y-3 text-gray-700 text-left">
              <li>
                If your house has a bike or scooter, you can ride Rapido or do
                delivery work during free hours.
              </li>

              <li>
                Work in event-based jobs like wedding photography assistance or
                event setup where payment is given per event.
              </li>

              <li>
                Look for flexible timing work because PG schedules change often.
              </li>

              <li>
                Learn skills that people will pay for, such as designing using
                Canva if you have a laptop.
              </li>

              <li>
                If you do not have a laptop, start learning video editing using
                mobile apps like CapCut or VN.
              </li>

              <li>
                Build a network by socializing more and using Instagram,
                WhatsApp, and college groups to reach people.
              </li>

              <li>
                Offer services inside college like poster design, reel editing,
                or photography for events.
              </li>

              <li>
                Save small amounts from whatever you earn to cover daily
                academic expenses.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financial;
