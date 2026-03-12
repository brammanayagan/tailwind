import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    { id: 1, color: "bg-blue-500", link: "/problem1" },
    { id: 2, color: "bg-green-500", link: "/problem2" },
    { id: 3, color: "bg-purple-500", link: "/problem3" },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
      {cards.map((card) => (
        <Link to={card.link} key={card.id}>
          <div
            className={`${card.color} text-white rounded-xl shadow-lg p-8 h-64 flex flex-col justify-between`}
          >
            <div>
              <h2 className="text-2xl font-bold mb-2">Card {card.id}</h2>
              <p>Financial Problem</p>
            </div>

            <p className="text-sm">by Brammanayagan S</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Home;
