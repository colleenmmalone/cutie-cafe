export function MenuCard({ props }) {

  return (
    <>
      <div className="bg-white rounded-xl w-full h-full p-3 flex sm:flex-col flex-row items-center justify-center text-center">
        <div className="min-w-[90px]">
          <p className="text-7xl" > {props.icon}</p>
        </div>
        <p className="font-semibold ml-4 sm:ml-0" > {props.text}</p>
        <p className="text-xs ml-auto sm:mx-auto" >${props.price}</p>
      </div>
    </>
  );
}