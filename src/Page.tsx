function Page() {
  return (
    <>
      <div className="h-screen w-screen">
        <div className="flex flex-row justify-center">
          <img src="/dragondivider.gif" alt="" className="w-2/4" />
        </div>
        <div className="mocha flex flex-row p-4 md:p-8 justify-center">
          <div className="flex flex-col md:flex-row justify-between w-full md:w-2/4">
            <div className="flex flex-col sigma border-solid border-2 border-purple-900 bg-purple-600 p-2 md:mr-2 md:p-4 w-full">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <img src="/mysticalcrystal.gif" alt="" className="mb-4 md:mb-0 w-16 md:w-auto" />
                <h1 className="text-center text-4xl md:text-5xl lg:text-7xl font-bold text-white rubik-puddles-regular mb-4 md:mb-0">benike's lair</h1>
                <img src="/mysticalcrystal.gif" alt="" className="mt-4 md:mt-0 w-16 md:w-auto" />
              </div>
              <p className="text-center text-white mt-4 md:mt-2">welcome to my lair on the interwebz</p>
              <p className="text-center text-white mt-2 md:mt-1">i am an 18 year old student of IT, and i like programming, and tinkering with computers in my free time</p>
              <div className="flex flex-row justify-between mt-4 md:mt-2">
                <img src="/drktorch.gif" alt="" className="w-16 md:w-auto" />
                <img src="/drktorch.gif" alt="" className="w-16 md:w-auto" />
              </div>
              <div className="webrings flex flex-wrap justify-center mt-4 md:mt-2">
                <img src="/bestviewed.gif" alt="" className="m-1 w-16 md:w-auto" />
                <a href="https://yesterweb.org/no-to-web3/index.html"><img src="/saynotoweb3.gif" alt="" className="m-1 w-16 md:w-auto" /></a>
                <img src="/catscape.gif" alt="" className="m-1 w-16 md:w-auto" />
                <img src="/benikemoe.gif" alt="" className="m-1 w-16 md:w-auto" />
                <a href="https://boodlebox.neocities.org/blinkexchange/blink.htm#join"><img src="/blink.gif" alt="" className="m-1 w-16 md:w-auto" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;