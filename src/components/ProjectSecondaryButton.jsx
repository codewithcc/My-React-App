const ProjectSecondaryButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-2 px-4 rounded-md font-semibold bg-black text-yellow-300 cursor-pointer disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed"
    >
      Demo
    </button>
  );
};

export default ProjectSecondaryButton;