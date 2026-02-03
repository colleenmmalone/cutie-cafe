export function Card(props) {
  return (
     <div className="flex-1 flex flex-col items-center gap-12 p-6 py-16 min-h-0 bg-white my-16 min-w-[80%] rounded-3xl">
        {props.children}
     </div>
  );
}

