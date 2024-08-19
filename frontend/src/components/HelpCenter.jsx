import React, { useEffect, useState } from "react";
import axios from "axios";

const HelpCenter = () => {
  const [cards, setCards] = useState([]);
  // const cards = [
  //   {
  //     title: "Branches",
  //     description:
  //       "Abstract Branches lets you manage, version, and document your designs in one place.",
  //   },
  //   {
  //     title: "Manage your account",
  //     description:
  //       "Configure your account settings, such as your email, profile details, and password.",
  //   },
  //   {
  //     title: "Manage organizations, teams, and projects",
  //     description:
  //       "Use Abstract organizations, teams, and projects to organize your people and your work.",
  //   },
  //   {
  //     title: "Manage billing",
  //     description: "Change subscriptions and payment details.",
  //   },
  // ];

  const fetchHelpCenterCards = async () => {
    try {
      const server_url = process.env.REACT_APP_SERVER_URL;
      const { data } = await axios.get(`${server_url}/api/cards`);
      setCards(data.cards);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHelpCenterCards();
  }, []);

  return (
    <div className="p-4 sm:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md border border-gray-200"
          >
            <h2 className="font-semibold mb-2 text-left border-b border-gray-300">
              {card.title}
            </h2>
            <p className="text-left text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
