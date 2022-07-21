import React from "react";

const ApplyForm_ = ({ onSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="shadow-md rounded-lg px-7 pt-6 pb-8 m-5 border-gray border-2 "
    >
      <div className="mb-4">
        <label className="text-lg md:text-xl">Passport Number</label>
        <input
          {...register("passport_no", {
            required: "Passport number is required",
            pattern: {
              value: /^[0-9]{10}$/,
              message: "Must be 10 digit number"
            }
          })}
          type="text"
          // name="passport_no"

          placeholder=""
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors.passport_no && (
          <p className="text-red-500 text-xs">{errors.passport_no.message}</p>
        )}
      </div>
      <div className="mb-6">
        <label className="text-lg md:text-xl">Expiry Date</label>
        <input
          min={minDate}
          max={maxDate}
          {...register("passport_expiry", {
            required: "Passport expiry date is required",
            validate: (value) => {
              const now = new Date();
              const val = new Date(value);
              if (now.getHours() < val.getHours()) return "Must be in future";
              const ft = new Date(now.setFullYear(now.getFullYear() + 10));
              console.log("FT", ft);
              if (ft.getFullYear() < val.getFullYear()) return "Expired";
              return true;
            }
          })}
          type="date"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder=""
        />
        {errors.passport_expiry && (
          <p className="text-red-500 text-xs ">
            {errors.passport_expiry.message}
          </p>
        )}
      </div>

      <div>
        <label className="text-lg md:text-xl">
          Preferred Areas of Conservation
        </label>
      </div>
      <div className="flex items-center mt-4">
        <Controller
          rules={{ required: "required" }}
          name="conservation_areas"
          control={control}
          render={({ field: { onChange, value, ref } }) => (
            <Select
              inputRef={ref}
              className=" px-2 py-1"
              value={options.find((c) => c.value === value)}
              onChange={(val) => onChange(val.map((c) => c.value))}
              options={options}
              theme={customTheme}
              isSearchable
              isMulti
              autoFocus
            />
          )}
        />
        {errors.conservation_areas && (
          <p className="text-red-500 text-xs ">
            {errors.conservation_areas.message}
          </p>
        )}
      </div>

      <div className="mt-5 ml-[8vh]">
        <button className="shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 md:text-xl bg-[#418d89] rounded-sm mt-8 mb-3">
          {loading ? "Sending..." : "Proceed to payment"}
        </button>
      </div>
    </form>
  );
};

export default ApplyForm_;
