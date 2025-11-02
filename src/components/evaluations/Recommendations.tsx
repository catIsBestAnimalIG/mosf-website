export interface RecommendationsProps {
  recommendations: string[];
}

export default function Recommendations({ recommendations }: RecommendationsProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
        Recommendations
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
        {recommendations.map((rec, index) => (
          <li key={index} className="leading-relaxed">
            {rec}
          </li>
        ))}
      </ul>
    </div>
  );
}

