export function PageTitle(props) {
  return (
    <div className="w-full items-left justify-center">
      <h1 className="text-red text-3xl font-bold" >
        {props.text}
      </h1>
    </div>
  );
}