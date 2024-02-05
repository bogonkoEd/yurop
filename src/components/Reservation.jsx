import { useState } from 'react';

const generateRoom = (roomData, onRoomSelect) => {
  const { title, description, size, beds, people, baths, costPerNight, imageURL } = roomData;

  return (
    <div
      className="flex flex-row pl-1 m-3 border border-black cursor-pointer"
      onClick={() => onRoomSelect(roomData)}
    >
      <img
        src={imageURL}
        alt={title}
        className="w-[48%]"
      />
      <div>
        <p className="text-3xl font-semibold m-2 text-[#6e477b]">
          {title}
        </p>
        <p className="text-xl font-light ml-2">{description}</p>
        <p className="text-l ml-2 mt-3 font-bold">Size: {size}</p>
        <div className="flex align-items-end justify-evenly">
          <div>
            <img src="src/assets/double-bed.svg" width="40" alt="" />
            <div className="font-semibold">Beds: {beds}</div>
          </div>
          <div>
            <img src="src/assets/people.svg" width="40" alt="" />
            <div className="font-semibold">People: {people}</div>
          </div>
          <div>
            <img src="src/assets/bath.svg" width="40" alt="" />
            <div className="font-semibold">Baths: {baths}</div>
          </div>
        </div>
        <div className="mt-[30px] ml-5">
          <span className="text-2xl font-semibold">Cost per Night:</span>
          <span className="text-2xl font-bold text-[#6e477b]">
            {' '}
            {costPerNight}
          </span>
        </div>
      </div>
    </div>
  );
};

const Reservation = () => {
  const [filter, setFilter] = useState({
    people: 1,
    rooms: 1,
    checkInDate: '',
    checkOutDate: '',
  });

  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleFilterChange = (field, value) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      [field]: value,
    }));
  };

  const handleRoomSelect = (roomData) => {
    setSelectedRoom(roomData);
  };

  return (
    <div className="border-4 h-[150lvh] bg-[#fdbb37] flex flex-col items-center justify-center ">
      <div className="mb-12 mt-5 ml-2 text-center">
        <p className="text-5xl text-[#6e477b] font-bold underline underline-offset-4 ">
          Our Offerings
        </p>
        <p className="text-xl">Plan your perfect stay at our trusted venues</p>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col border-2 border-black h-[130lvh] w-[60%] ml-4">
          {generateRoom(
            {
              imageURL: 'src/assets/Hotel1.jpg',
              title: 'Mini Dreamy Room',
              description: 'Spacious and comfortable, this modern furnished room offers a queen-size bed and breathtaking views.',
              size: '25m2',
              beds: 1,
              people: 2,
              baths: 2,
              costPerNight: 'KES 4000',
              checkIn: "10:00 AM",
              checkOut: "10:00 AM",
            },
            handleRoomSelect
          )}
        </div>
        <div className="flex flex-col border-2 border-black h-[130lvh] w-[30%] ml-4">
          <div className="border-2 border-black h-[50lvh] w-[90%] m-4 p-4">
            <section className="pt-5">
              <p className="text-3xl font-bold m-2 text-[#6e477b]">
                Filter Hotels
              </p>
              <div className="mb-4">
                <label
                  className="block text-xl font-bold mb-2"
                  htmlFor="people"
                >
                  Number of People
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  type="number"
                  id="people"
                  name="people"
                  value={filter.people}
                  onChange={(e) => handleFilterChange("people", e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label className="block text-xl font-bold mb-2" htmlFor="rooms">
                  Number of Rooms
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  type="number"
                  id="rooms"
                  name="rooms"
                  value={filter.rooms}
                  onChange={(e) => handleFilterChange("rooms", e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-xl font-bold mb-2"
                  htmlFor="checkInDate"
                >
                  Check-in Date
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  type="date"
                  id="checkInDate"
                  name="checkInDate"
                  value={filter.checkInDate}
                  onChange={(e) =>
                    handleFilterChange("checkInDate", e.target.value)
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-xl font-bold mb-2"
                  htmlFor="checkOutDate"
                >
                  Check-out Date
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                  type="date"
                  id="checkOutDate"
                  name="checkOutDate"
                  value={filter.checkOutDate}
                  onChange={(e) =>
                    handleFilterChange("checkOutDate", e.target.value)
                  }
                />
              </div>
              <button className="bg-[#6e477b] text-[#fdbb37] px-4 py-2 rounded-lg self-center">
                Apply Filters
              </button>
            </section>
          </div>
          {selectedRoom && (
            <div className="border-2 border-black h-[50lvh] w-[90%] m-4 flex">
              <section className="pt-5 pl-5">
                <p className="text-3xl font-bold m-2 ">Reservation Summary</p>
                <p className="text-3xl font-semibold text-[#6e477b] mt-9">
                  {selectedRoom.title}
                </p>
                <div className="flex w-full mb-6 mt-6 mr-3">
                  <div >
                    <div className="font-bold">Check in</div>
                    <div className="text-xl font-light ">From {selectedRoom.checkIn}</div>
                  </div>
                  <div className='flex mx-7'>
                    <img src="src/assets/room.svg" width="40" alt="" />
                  </div>
                  <div>
                    <div className="font-bold">Check out</div>
                    <div className="text-xl font-light ">Before {selectedRoom.checkOut}</div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="font-bold text-2xl">Reservation date</div>
                  <div className="text-xl font-light">
                    From {filter.checkInDate} to {filter.checkOutDate}
                  </div>
                </div>
                <div className="mb-3">
                  <div className="font-bold text-2xl">People</div>
                  <div className="text-xl font-light ml-2">{filter.people} Adults</div>
                  {/* Add logic for children if needed */}
                </div>
                <div className="">
                  <div className="mb-3">
                    <div>
                      <div className="text-2xl">Total</div>
                    </div>
                    <div className="text-3xl font-bold justify-items-end">
                      {/* You might want to calculate the total cost based on the selected room and other factors */}
                      {/* For now, displaying a placeholder value */}
                      KES {selectedRoom.costPerNight}
                    </div>
                  </div>
                </div>
                <button className="bg-[#6e477b] text-[#fdbb37] px-4 py-2 rounded-lg mt-4 mb-4 self-center">
                  Book Now
                </button>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
