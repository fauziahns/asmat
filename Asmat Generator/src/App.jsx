import { useEffect, useState } from "react"
import { useDebounce } from "use-debounce"
import Loader from "./components/Loader"
import axios from "axios"

const App = () => {
  return (
  <div className=" bg-[#182331] py-[73px] w-full h-screen mx-auto">

    <div className="w-full lg:w-[1220px] md:w-[800px] xl:w-[1132px] 2xl:w-[1132px] mx-auto py-4">
      <p className="text-[#536378] text-[26px]">V.1.0.0</p>
      <p className="text-white text-[32px] font-[700]">Asmat Generator</p>
    </div>

    <div className="bg-[#1F2A37] w-full lg:w-[1220px] md:w-[800px] xl:w-[1220px] 2xl:w-[1132px] flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row items-center justify-end rounded-t-lg mx-auto px-5">
      <div className="flex items-center p-4">        
          <form className="text-white mr-2" >   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <img src="src/assets/search-outline.png" alt="icon-search" className="w-[18px] h-[18px]" />
                </div>
                <input 
                  type="search" 
                  className="block w-full h-[42px] p-4 pl-10 text-sm rounded-lg bg-[#374151] border-2 border-[#4B5563] placeholder:text-[#9CA3AF]" placeholder="Version Watch" />
            </div>
          </form>

          <form className="text-white mr-2" method="get">   
            <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <img src="src/assets/search-outline.png" alt="icon-search" className="w-[18px] h-[18px]" />
                </div>
                <input 
                  type="search" 
                  className="block lg:w-[384px] xl:w-[384px] 2xl:w-[384px] md:w-[384px] w-[250px] h-[42px] p-4 pl-10 text-sm rounded-lg bg-[#374151] border-2 border-[#4B5563] placeholder:text-[#9CA3AF]" placeholder="Search URL, Tag" />
            </div>
          </form>
      </div>
    </div>

    <div className="w-[1220px] mx-auto h-[50px] bg-[#374151] flex text-[#9CA3AF] text-[15px] font-[400] items-center text-center">
      <div className="w-[180px] ">
        <p>Booking Code</p>
      </div>
      <div className="w-[70px]">
        <p>Type</p>
      </div>
      <div className="w-[300px]">
        <p>URL</p>
      </div>
      <div className="w-[490px] ">
        <p>Log Message</p>
      </div>
      <div className="w-[180px]">
        <p>Data Created</p>
      </div>
    </div>

    <div className="w-[1220px] mx-auto h-[52px] items-center bg-[#1F2A37] flex text-white text-[14px] font-[400] text-center">
      <div className="w-[180px] ">
        <p>BJH248327REWUFHJDE</p>
      </div>
      <div className="w-[70px] ">
        <p>e-ticket</p>
      </div>
      <div className="w-[300px] ">
        <a href="https://generator.asmat.app/api/file/QKGstR9LCazNrVPaCG04fXqFTRZR2oauSNXwzkS8.pdf">
          <p className="truncate ">https://generator.asmat.app/api/file/QKGstR9LCazNrVPaCG04fXqFTRZR2oauSNXwzkS8.pdf</p>
        </a>
      </div>
      <div className="w-[490px] ml-3 ">
        <p>Generating PDF Failed, Undefined array key "num_cols" (View: /home/generator/prod/generator/resources/views/pdf/default/eticket.blade.php)</p>
      </div>
      <div className="w-[180px]">
        <p>Data Created</p>
      </div>
    </div>

    <div className="bg-[#182331] pb-10">
      <p className="text-center pt-10 text-[#536378]">2023</p>
    </div>
  </div>
  )
}
export default App