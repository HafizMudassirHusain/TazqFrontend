const Chip = ({ image, name, followers }) => {
    return (
      <div className="chipContainer p-4 shadow-sm hover:shadow-lg transition-all duration-300">
        <div className="flex items-center space-x-4 border-[#8CA419] border-r-2 pr-4">
          {/* Profile Image */}
          <img
            src={image}
            alt="Profile"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#8CA419] object-cover"
          />
          {/* Name and Followers */}
          <div className="mr-2">
            <h4 className="text-base sm:text-lg font-semibold text-[#a7b80e]">
              {name}
            </h4>
            <p className="text-xs sm:text-sm text-[#ebecec]">{followers}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Chip;