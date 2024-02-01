const Reservation = () => {
  return (
    <div className="border-4 h-[150lvh] bg-[#fdbb37] flex flex-col items-center justify-center ">
      <div className="mb-12 mt-5 ml-2 text-center">
        <p className="text-5xl text-[#6e477b] font-bold underline underline-offset-4 ">Our Offerings</p>
        <p className="text-xl">Plan your perfect stay at our trusted venues</p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col border-2 border-black h-[130lvh] w-[60%] ml-4">
          <div className="flex flex-row pl-1 m-3 border border-black">
            <img
              src="/src/assets/Hotel1.jpg"
              alt="Mini Dreamy Room"
              className="w-[48%]"
            />
            <div>
              <p className="text-3xl font-semibold m-2 text-[#6e477b]">
                Mini Dreamy Room
              </p>
              <p className="text-xl font-light ml-2">
                Spacious and comfortable, this modern furnished room offers a
                queen-size bed and breathtaking views.
              </p>
              <p className="text-l ml-2 mt-3 font-medium">Size: 25m2</p>
              <div className="flex align-items-end justify-evenly">
                <div>
                  <img src="src/assets/double-bed.svg" width="40" alt="" />
                  <div className="font-semibold">Beds: 1</div>
                </div>
                <div>
                  <img src="src/assets/people.svg" width="40" alt="" />
                  <div className="font-semibold">People: 2</div>
                </div>
                <div>
                  <img src="src/assets/bath.svg" width="40" alt="" />
                  <div className="font-semibold">Baths: 2</div>
                </div>
              </div>
              <div className="mt-[30px] ml-5">
                <span className="text-2xl font-semibold">Cost per Night:</span>
                <span className="text-2xl font-bold text-[#6e477b]">
                  {" "}
                  KES 4000
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-black h-[50lvh] w-[30%] m-4">
          <section className="pt-5 pl-5">
            <p className="text-3xl font-bold m-2 ">Reservation Summary</p>
            <p className="text-3xl font-semibold text-[#6e477b] mt-9">
              Sweet Bungalow
            </p>
            <div className="flex justify-around mb-6 mt-6 mr-3">
              <div>
                <div className="font-bold">Check in</div>
                <div className="text-xl font-light ">From 15.00h</div>
              </div>
              <div>
                <img src="src/assets/room.svg" width="40" alt="" />
              </div>
              <div>
                <div className="font-bold">Check out</div>
                <div className="text-xl font-light ">Before 12.00h</div>
              </div>
            </div>
            <div className="mb-3">
              <div className="font-bold text-2xl">Reservation date</div>
              <div className="text-xl font-light">
                From 01/02/2024 to 02/02/2024
              </div>
            </div>
            <div className="mb-3">
              <div className="font-bold text-2xl">People</div>
              <div className="text-xl font-light ml-2">2 Adults</div>
              <div className="text-xl font-light ml-2">0 Children</div>
            </div>
            <div className="">
              <div className="mb-3">
                <div>
                  <div className="text-2xl">Total</div>
                </div>
                <div className="text-3xl font-bold justify-items-end">
                  KES 200
                </div>
              </div>
            </div>
            <button className="bg-[#6e477b] text-[#fdbb37] px-4 py-2 rounded-lg mt-4 mb-4 self-center">
              Book Now
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
