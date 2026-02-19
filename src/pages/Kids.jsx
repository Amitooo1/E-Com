import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'

const Kids = () => {
  return (
    <div className='pt-14'>
      <div className='flex justify-center gap-10 py-8 px-12'>
        <div className='1/4'>
          <h1>FILTERS</h1>
          <div>
            <h5 className="pt-3 mb-3">Gender</h5>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span>BOY</span>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span>GIRL</span>
              </div>
            </div>
          </div>
          <div>
            <h5 className='mt-3'>Size</h5>
            <div className="grid grid-cols-3 gap-3">
              {[6,7,8,9,10,11,12,13].map(size => (
                <button
                  key={size}
                  className="cursor-pointer border py-2 px-4 !rounded-xl transition-transform duration-200 hover:scale-110 hover:bg-red-400 hover:shadow-2xl"
                >
                  {size}
                </button>
              ))}
            </div>

          </div>
          <div>
            <h5 className='pt-3'>Brand</h5>
            <div className=''>
              <select className='w-full border rounded'>
                <option value="" disabled selected>
                  Choose Brand
                </option>
                <option>PUMA</option>
                <option>NIKE</option>
                <option>ADIDAS</option>
                <option>REDTAPE</option>
                <option>BUCCA BUCCI</option>
                <option>METRO</option>
                <option>RED CHIEF</option>
                <option>ASICS</option>
                <option>CAMPUS</option>
                <option>SPARKS</option>
                <option>ASIAN</option>
              </select>
            </div>
          </div>
          <div>
            <h5 className='pt-3'>Price Range</h5>
            <div className="flex flex-col gap-2">
              <label>Price Range: ₹0 - ₹12,000</label>
              <input type='range'></input>
            </div>
          </div>
          <div>
            <h5 className="pt-3 mb-3">Colours</h5>

            <div className="space-y-2 max-h-60 overflow-y-auto">
              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span className="w-5 h-5 rounded-full bg-green-500 border"></span>
                <span>Green</span>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span className="w-5 h-5 rounded-full bg-black border"></span>
                <span>Black</span>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span className="w-5 h-5 rounded-full bg-white border"></span>
                <span>White</span>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span className="w-5 h-5 rounded-full bg-yellow-700 border"></span>
                <span>Tan</span>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span className="w-5 h-5 rounded-full bg-red-800 border"></span>
                <span>Maroon</span>
              </div>

              <div className="flex items-center gap-3">
                <input type="checkbox" />
                <span className="w-5 h-5 rounded-full bg-amber-900 border"></span>
                <span>Brown</span>
              </div>

            </div>
          </div>

        </div>
        <div className='flex flex-col w-3/4'>
          <h1 className='font-extrabold'>KIDS</h1>
          <div className='grid grid-cols-3 gap-4'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Kids