const FormButton = ({ buttonInfo }) => {
  return (
    <button className="shadow bg-green focus:shadow-outline focus:outline-none text-white font-bold px-6 md:text-xl  rounded-sm mt-8 mb-3 py-1">
      {buttonInfo}
    </button>
  );
};

export default FormButton;
