// MiniProjectsCard.jsx

import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";

export default function MiniProjectsCard() {
  return (
    <Card className="rounded-2xl shadow-md p-6 hover:border-blue-700 transition-shadow bg-white mt-10">
      <CardContent>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">💡 Mini Projects</h2>
        <p className="text-gray-600 text-xl mb-4">
         💻 A curated collection of 20+ mini web applications built using HTML, CSS, and JavaScript during my learning phase. This includes calculators, to-do lists, clocks, games, and more — each project crafted to strengthen my frontend fundamentals, UI logic, and problem-solving skills.
        </p>
        <ul className="list-disc pl-5 text-lg text-gray-700 mb-4 space-y-1">
          <li>Analog Watch</li>
          <li>QR Code Generator</li>
          <li>Calculator</li>
          <li>Toggle Password</li>
          <li>Password Generator</li>
          <li>Note's Taking</li>
          <li>And many more...</li>
        </ul>
        <a
          href="https://github.com/impriteshmishra/Basic-WebDev-Projects"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800 transition rounded-xl"
        >
          <FaGithub className="mr-2" />
          View on GitHub
        </a>
      </CardContent>
    </Card>
  );
}
