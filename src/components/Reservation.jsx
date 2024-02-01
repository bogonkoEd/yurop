const Reservation = () => {
  return (
    <div className="border-4 h-[150lvh] bg-[#fdbb37] flex flex-col items-center justify-center ">
      <div className="mb-12 mt-5 ml-2 text-center">
        <p className="text-5xl ">Our Offerings</p>
        <p className="text-xl">Plan your perfect stay at our trusted venues</p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col border-2 border-black h-[130lvh] w-[60%] ml-4">
          <div className="flex flex-row pl-0">
            <img
              src="/src/assets/Hotel1.jpg"
              alt="Mini Dreamy Room"
              className="w-[48%]"
            />
            <div>
              <p className="text-3xl font-semibold m-2">Mini Dreamy Room</p>
              <p className="text-xl font-light ml-2">
                Spacious and comfortable, this modern furnished room offers a
                queen-size bed and breathtaking views.
              </p>
              <p className="text-l ml-2 mt-3 font-medium">Size: 25m2</p>
              <div className="flex align-items-end justify-evenly">
                <div>
                  <img src="src/assets/double-bed.svg" width="40" alt="" />
                  <div>Beds: 1</div>
                </div>
                <div>
                  <img src="src/assets/people.svg" width="40" alt="" />
                  <div>People: 2</div>
                </div>
                <div>
                  <img src="src/assets/bath.svg" width="40" alt="" />
                  <div>Baths: 2</div>
                </div>
              </div>
              <div className="mt-[30px] ml-5">
                <span className="text-2xl">Cost per Night:</span>
                <span className="text-2xl font-bold"> KES 4000</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-2 border-black h-[50lvh] w-[30%] m-4">
          <section className="pt-5 pl-5">
            <p className="text-3xl font-semibold m-2">Reservation Summary</p>
            <div className="flex justify-between mr-2">
              <p className="text-2xl font-semibold">Sweet Bungalow</p>
              <select name="rooms" className="">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="flex justify-between mb-6 mt-3 mr-3">
              <div>
                <div className="font-bold">Check in</div>
                <div className="text-xl font-light ml-2">From 15.00h</div>
              </div>
              <div>
                <div className="font-bold">Check out</div>
                <div className="text-xl font-light ml-2">Before 12.00h</div>
              </div>
            </div>
            <div className="mb-3">
              <div className="font-bold">Reservation date</div>
              <div className="text-xl font-light ml-2">
                From 01/02/2024 to 02/02/2024
              </div>
            </div>
            <div className="mb-3">
              <div className="font-bold">People</div>
              <div className="text-xl font-light ml-2">2 Adults</div>
              <div className="text-xl font-light ml-2">0 Children</div>
            </div>
            <div className="">
              <div className="mb-3">
                <div>
                  <div className="text-2xl">Total</div>
                </div>
                <div className="text-2xl font-bold justify-items-end">KES 200</div>
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
