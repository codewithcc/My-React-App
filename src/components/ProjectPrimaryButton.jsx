const ProjectPrimaryButton = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full py-2 px-4 rounded-md font-semibold bg-yellow-300 text-black cursor-pointer disabled:bg-gray-400 disabled:text-gray-700 disabled:cursor-not-allowed"
    >
      GitHub
    </button>
  );
};

export default ProjectPrimaryButton;