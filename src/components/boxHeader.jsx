function BoxHeader() {
  return (
    <>
      {errorText ? (
        <div className="alert alert-error transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{errorText}</span>
        </div>
      ) : null}
      <h2 className="text-4xl font-extrabold ">T O D O</h2>
      <div className="w-[90%] flex justify-between gap-5 items-center mx-5 ">
        <input
          className="input input-bordered input-secondary w-[80%] text-center "
          type="text"
          placeholder="Type here"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />

        <button onClick={addTextToList} className="btn btn-primary ">
          Add To Do
        </button>
      </div>
    </>
  );
}
export default BoxHeader;
