import React from "react";
import { RiArrowDownSLine, RiArrowRightSLine } from "react-icons/ri";

const GetFilter = (props: any) => {
  const [data, setData] = React.useState<any>([]);
  const [filter, setFilter] = React.useState<boolean>(false);

  return (
    <div className="mb-3">
      <div
        className="flex gap-1 items-center pb-2 cursor-pointer"
        onClick={() => setFilter(!filter)}
      >
        {filter ? (
          <RiArrowDownSLine size={20} />
        ) : (
          <RiArrowRightSLine size={20} />
        )}
        <h1>{props.title}</h1>
      </div>

      {filter && (
        <form>
          {props.data.map((mac: any, idx: number) => {
            return (
              <div className="flex items-center py-2 text-sm px-1" key={idx}>
                <input
                  type="checkbox"
                  name="test"
                  id={mac.name}
                  value={mac.name}
                  onChange={(e) =>
                    setData([...data, e.target.value.toLocaleLowerCase()])
                  }
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor={mac.name}
                  className="ml-2 min-w-0 flex-1 text-gray-500"
                >
                  {mac.name}
                </label>
              </div>
            );
          })}
        </form>
      )}
    </div>
  );
};

export default GetFilter;
