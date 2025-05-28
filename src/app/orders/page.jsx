import BigHeading from '@/components/atoms/BigHeading'
import SeconadryBtn from '@/components/atoms/SecondaryBtn'
import DropDown from '@/components/molecules/DropDown'
import SearchBar from '@/components/molecules/SearchBar'
import Navbar from '@/components/Navbar'
import Table from '@/components/organisms/Table'
import React from 'react'

function page() {
  // dummy data
  const headings = ["Order ID", "Customer", "Pizza type", "Quantity", "Order date", "Status"]
  const data = [
    ["12345", "John Doe", "Pepperoni", "2", "2023-05-01", "Delivered"],
    ["67890", "Jane Smith", "Margherita", "1", "2023-05-02", "Pending"],
    ["24680", "Bob Johnson", "Hawaiian", "3", "2023-05-03", "Delivered"],
    ["13579", "Alice Brown", "BBQ", "2", "2023-05-04", "Cancelled"],
    ["24680", "Bob Johnson", "Hawaiian", "3", "2023-05-03", "Delivered"],
    ["13579", "Alice Brown", "BBQ", "2", "2023-05-04", "Cancelled"],
  ]
  return (
    <>
      <Navbar />
      <div className='flex flex-col pl-[15%] pr-[15%] p-10 '>
        <BigHeading>Orders</BigHeading>
        <SearchBar />
        <div className='flex flex-row mt-6 items-center gap-4'>
          <DropDown>Status</DropDown>
          <DropDown>Order date</DropDown>
          <DropDown>Quantity</DropDown>
          <DropDown>Pizza type</DropDown>
        </div>
        <SeconadryBtn styles={'mt-6'}>Reset filters</SeconadryBtn>
        <Table headings={headings} data={data} />
      </div>
    </>
  )
}

export default page
