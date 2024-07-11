"use client"
import React, { ChangeEvent, useState } from 'react'
import InputComp from '../shared/InputComp';
import { Button } from '../ui/button';
import Link from 'next/link';



interface FormData {
    pickUp: string;
    via: string;
    dropoff: string;
    date: string;
    time: string;
    noOfPerson: string;
    items: string;
    journey: string;
}

const Booking = () => {

    const [formData, setFormData] = useState<FormData>({
        pickUp: "",
        via: "",
        dropoff: "",
        date: "",
        time: "",
        noOfPerson: "",
        items: "",
        journey: "",
    });


    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
        console.log(formData);
      };


    return (
        <form className='grid grid-flow-row gap-3 xl:gap-5'>
            <InputComp
                placeholder="Pickup"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg lg:p-0" }}
                name={"pickUp"}
                value={formData.pickUp}
                onChange={handleChange}
            />
            <InputComp
                placeholder="Via "
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg lg:p-0" }}
                name={"via"}
                value={formData.via}
                onChange={handleChange}
            />
            <InputComp
                placeholder="Drop Off"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg lg:p-0" }}
                name={"dropoff"}
                value={formData.dropoff}
                onChange={handleChange}
            />
            <InputComp
                placeholder="No Of Person"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg lg:p-0" }}
                name={"noOfPerson"}
                value={formData.noOfPerson}

            />
            <InputComp
                placeholder="Add Items"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg lg:p-0" }}
                name={"items"}
                value={formData.items}
                onChange={handleChange}
            />
            <InputComp
                placeholder="Journey"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4] rounded-lg lg:p-0" }}
                name={"journey"}
                value={formData.journey}
                onChange={handleChange}
            />
            <div className='flex w-full'>
            <InputComp
                placeholder="dd/mm/yy"
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4]  w-full lg:p-0" }}
                name={"date"}
                type={"date"}
                value={formData.date}
                onChange={handleChange}

            />
            <InputComp
                placeholder="Journey"
                type={"time"}
                classes={{ icon: "bg-black text-white", div: "border-[#999999] bg-[#E8E4E4]  w-full lg:p-0" }}
                name={"time"}
                value={formData.time}
                onChange={handleChange}
            />
            
            </div>
            <div className='flex justify-center items-center'>

            <Button className='w-fit  shadow-primary text-xs  sm:text-sm'><Link href={"/quote"}>Book Now</Link></Button>
            </div>
        </form>
    )
}

export default Booking