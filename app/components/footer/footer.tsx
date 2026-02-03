export function Footer() {
  return (
    <div className="w-full min-h-[300px] flex flex-1 flex-row items-left justify-between bg-[#bb99ff] py-2 px-8">
      <div className="w-full min-h-[300px] flex flex-col items-left justify-center gap-6">
        <h1 className="text-white text-2xl" >Cute Cafe</h1>

        <p>
          123 Cutie Cafe Ct
          <br />
          NYC, NY
        </p>

        <p>
          Mon - Thurs : 9am - 7pm
          <br />
          Fri - Sat : 9am - 9pm
          <br />
          Sun : Closed
        </p>
      </div>

      <div className="flex flex-1 items-center justify-center">

        <p className="text-9xl">&#9749;</p>


      </div>
    </div>
  );
}

