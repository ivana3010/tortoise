import { HourglassFull, RssFeed } from '@mui/icons-material'
import React, { useDebugValue, useState } from 'react'

const DonationSection = () => {
    const [donationType, setDonationType] = useState('One Time')
    const [customAmount, setCustomAmount] = useState('')
    const [selectedCurrency, setSelectedCurrency] = useState('€')

    const donationTypes = ['One Time', 'Monthly', 'Yearly']
    const amounts = [10, 25, 50, 100, 200]
    const currency = ["€", "DIN", "FT", "$", "KR", "CHF"]

    const handleAmountClick = (amount) => {
        setCustomAmount(amount)
    }

    return (
        <div className=" py-16 px-4 sm:px-10 md:px-20">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="bg-[#f7e4bb]  shadow-lg rounded-lg p-6 md:p-8 border-[2px] border-primary">
                    <h3 className="text-xl font-bold text-primary mb-4">Choose a Donation</h3>
                    <div className="relative bg-primary bg-opacity-50 rounded-full flex items-center p-1 w-full max-w-sm mx-auto mb-6">
                        <div
                            className="absolute top-1 bottom-1 bg-primary rounded-full transition-all duration-300"
                            style={{
                                width: '33%',
                                transform: `translateX(${donationTypes.indexOf(donationType) * 100}%)`
                            }}
                        ></div>
                        {donationTypes.map((type) => (
                            <button
                                key={type}
                                className={`relative z-10 flex-1 text-center text-sm font-medium py-2 transition-all ${
                                    donationType === type ? 'text-white' : 'text-white'
                                }`}
                                onClick={() => setDonationType(type)}
                            >
                                {type}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-6">
                        {amounts.map((amount) => (
                            <button
                                key={amount}
                                className={`px-4 py-2 rounded-full text-sm font-bold ${
                                    customAmount === amount
                                        ? 'bg-primary text-white'
                                        : 'bg-primary bg-opacity-50 text-white hover:bg-primary hover:text-white transition-all'
                                }`}
                                onClick={() => handleAmountClick(amount)}
                            >
                                {selectedCurrency} {amount}
                            </button>
                        ))}
                    </div>
                    <div className="flex items-center gap-2 mb-6">
                        <input
                            type="number"
                            placeholder="Custom Amount"
                            className="w-full border rounded-md px-4 py-2 text-sm border-primary"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                        />
                        
                        <select className="border border-primary rounded-md px-2 py-2"
                        onChange={(e)=>setSelectedCurrency(e.target.value)}
                        >
                          {currency.map((currenc) =>
                          <option key={currenc} value={currenc}>{currenc}</option>
                      )}
                      </select>
                    </div>
                    <input type="email" placeholder="Email Address" className="w-full border rounded-md px-4 py-2 text-sm mb-6 border-primary" />
                    <button className="w-full bg-primary text-white py-3 rounded-md font-medium hover:-translate-y-1 transition-all">
                        Donate Now
                    </button>
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-primary">Your donation helps</h2>
                    <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                        Your donation helps us protect and conserve tortoises around the world. With your support, we can rescue, rehabilitate, and release these incredible creatures back into their natural habitats.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default DonationSection
