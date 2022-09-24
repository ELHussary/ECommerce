import React from 'react'
import { RiFilterFill, RiListCheck, RiArrowDownSLine } from 'react-icons/ri'
import GetFilter from './GetFilter'
import Price from './Price'

const Category = [
  {
    name: 'Pants & Shorts',
  },
  {
    name: 'Tees',
  },
  {
    name: 'Sweatshirts',
  },
  {
    name: 'Crewnecks',
  },
]
const Colors = [
  {
    name: 'Black',
  },
  {
    name: 'White',
  },
  {
    name: 'Red',
  },
]

const Size = [
  {
    name: 'Small',
  },
  {
    name: 'Medium',
  },
  {
    name: 'Large',
  },
  {
    name: 'X-Large',
  },
  {
    name: 'XX-Large',
  },
]

const Filter = () => {
  const [filter, setFilter] = React.useState<boolean>(false)
  return (
    <header className="py-6 flex justify-between items-start">
      <section>
        <div className="relative">
          <button
            className=" border bg-white px-3 py-1.5 rounded-md  flex items-center gap-1"
            onClick={() => setFilter(!filter)}>
            Filters <RiFilterFill size={20} className="text-gray-600" />
          </button>

          {filter && (
            <div className="w-80 bg-white shadow-sm border p-4 pb-0 text-sm absolute z-40 rounded-lg top-11 left-0">
              <h1 className="text-xl font-semibold mb-5 px-1">Filters</h1>

              {/* Category */}
              <GetFilter data={Category} title={'Category'} />

              {/* Price */}
              <Price />

              {/* Size */}
              <GetFilter data={Size} title={'Size'} />

              {/* Colors */}
              <GetFilter data={Colors} title={'Colors'} />

              <div className="mb-6 flex gap-3 items-center">
                <button className="bg-indigo-600 py-1 px-4 rounded-md text-white ">
                  Apply
                </button>
                <button className="border py-1 px-4 rounded-md">Reset</button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="flex items-center gap-3">
        <div className="flex items-center cursor-pointer">
          <button>Sort</button>
          <RiArrowDownSLine size={25} />
        </div>
        <div>
          <RiListCheck size={25} />
        </div>
      </section>
    </header>
  )
}

export default Filter
