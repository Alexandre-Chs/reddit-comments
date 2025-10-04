const Errors = ({ errors }: { errors: string[] }) => {
  return (
    <div className="rounded-md bg-red-900/20 border border-red-800 p-4">
      <ul className="space-y-1 text-sm text-red-400">
        {errors.map((error, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2 text-red-500">•</span>
            {error}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Errors;
