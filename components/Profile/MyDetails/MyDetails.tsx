'use client';
import React, { useEffect, useState } from "react";
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FAQ, faqs } from "@/components/Profile/FAQ"
import '@/components/Profile/Profile.css'

export default function MyDetails() {
    const [firstName, setFirstName] = useState("Jhon");
    const [lastName, setLastName] = useState("White");
    const [phoneNumber, setPhoneNumber] = useState("9981909166");
    const [date, setDate] = React.useState<Date>();
    const [email, setEmail] = useState("jhon@example.com");

    //Disabled? state
    const [isPersonalFormDisabled, setIsPersonalFormDisabled] = useState(true);
    const [isEmailDisabled, setIsEmailDisabled] = useState(true)


    useEffect(() => {
        console.log(date);
    }, [date])

    return (
        <>
            <div>
                <div className="text-bold text-2xl my-4">My Details</div>
                <div className="text-xl group-heading">Personal Information</div>
                <hr />
                <div className="flex flex-start personal-container">
                    <div className="text-gray-500 desc">
                        Assertively utilize adaptive customer service for future-proof platforms. Completely drive optimal markets.
                    </div>
                    <form className="personal-form">
                        <div className="flex justify-start form-group">
                            <div className="flex flex-col mb-5">
                                <label htmlFor="fname">First Name</label>
                                <input type="text" className="form-control" id="fname" placeholder="Ayush" value={firstName} disabled={isPersonalFormDisabled}
                                onChange={(e) => {
                                    setFirstName(e.target.value);
                                }} />
                            </div>
                            <div className="flex flex-col ml-6 px-3">
                                <label htmlFor="lname">Last Name</label>
                                <input type="text" className="form-control" id="lname" placeholder="Sunny" value={lastName} disabled={isPersonalFormDisabled}
                                onChange={(e) => {
                                    setLastName(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="input-group form-group">
                            <label>Birth Date</label>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                        disabled={isPersonalFormDisabled}
                                        variant={"outline"}
                                        className={cn(
                                            "form-control justify-start text-left",
                                            !date && "text-muted-foreground"
                                        )}
                                    >

                                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                    <Calendar
                                        mode="single"
                                        selected={date}
                                        onSelect={setDate}
                                        initialFocus
                                    />
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="input-group form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className="form-control" id="phone" value={phoneNumber} onChange={(e) => {
                                setPhoneNumber(e.target.value);
                            }} disabled={isPersonalFormDisabled} />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit" disabled={isPersonalFormDisabled}> Save </button>
                            <button className="link-edit" type="button"
                                onClick={() => { setIsPersonalFormDisabled(false) }}
                                style={{
                                    display: isPersonalFormDisabled ? "inline-block" : "none"
                                }}>
                                Edit
                            </button>
                            <button className="btn" type="button"
                                onClick={() => {
                                    setIsPersonalFormDisabled(true)
                                }}
                                style={{
                                    display: isPersonalFormDisabled ? "none" : "inline-block"
                                }}>
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>

                {/* Email Address */}
                <div className="text-xl group-heading">Email Address</div>
                <hr />
                <div className="flex flex-start personal-container">
                    <div className="text-gray-500 desc">
                        Assertively utilize adaptive customer service for future-proof platforms. Completely drive optimal markets.
                    </div>
                    <form className="personal-form">
                        <div className="input-group form-group">
                            <label htmlFor="email">E-Mail Address</label>
                            <input type="text" className="form-control" id="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                disabled={isEmailDisabled}
                            />
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" type="submit"> Save </button>
                            <button className="link-edit" type="button"
                                onClick={(e) => {
                                    setIsEmailDisabled(false)
                                }}
                                style={{
                                    display: isEmailDisabled ? "inline-block" : "none"
                                }}>
                                Edit
                            </button>
                            <button className="btn" type="button"
                                onClick={() => {
                                    setIsEmailDisabled(true)
                                }}
                                style={{
                                    display: isEmailDisabled ? "none" : "inline-block"
                                }}>
                                Cancel
                            </button>
                        </div>

                    </form>
                </div>

                {/* FAQs  */}
                <FAQ faqs={faqs} />

                </div>

        </>
    )
}