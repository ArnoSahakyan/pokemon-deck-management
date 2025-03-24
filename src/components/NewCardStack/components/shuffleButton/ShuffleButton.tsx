export const ShuffleButton = () => {
  return (
    <button className="w-20 h-20 rounded-full bg-white p-4 border-2 cursor-pointer transition border-gray-300 active:border-blue-500">
      <img src="/shuffle.svg" alt="shuffle" className="w-full h-full object-cover object-center" />
    </button>
  );
};
