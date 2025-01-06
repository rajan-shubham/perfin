import { useState } from "react";

const Body = () => {
    const [view, setView] = useState("all"); // "all", "person", "add"
    const [currentPerson, setCurrentPerson] = useState(null); // Stores the currently selected person's data

    const transactions = [
        { name: "Jamie Vardie", purpose: "Movie", amount: 400, contact: "+919876543210" },
        { name: "Maria Gill", purpose: "Restaurant", amount: -300, contact: "+919876543211" },
        { name: "Jack Roy", purpose: "Backpack", amount: 1200, contact: "+919876543212" },
        { name: "Susan Wood", purpose: "Lending", amount: 23400, contact: "+919876543213" },
        { name: "Jasmine Ver", purpose: "Rent", amount: -5000, contact: "+919876543214" },
        { name: "Carlos Hanks", purpose: "Baseball", amount: -677, contact: "+919876543215" },
    ];

    const personTransactions = {
        "Jamie Vardie": [
            { date: "16 Jul 2019", received: 500, due: 200, balance: 700 },
            { date: "14 Jul 2019", received: -300, due: 500, balance: 400 },
        ],
        "Maria Gill": [
            { date: "10 Sep 2022", received: 700, due: 200, balance: 500 },
            { date: "12 Sep 2022", received: -300, due: 400, balance: 100 },
        ],
        // Add data for other persons
    };

    const handlePersonClick = (person) => {
        setCurrentPerson(person);
        setView("person");
    };

    const renderAllTransactions = () => (
        <div className="p-4 bg-slate-100">
            <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
                <h2 className="text-lg font-bold">Credit Debit</h2>
                <div className="flex justify-between">
                    <p>Total Due: <span className="text-red-500">₹2,000</span></p>
                    <p>Balance: ₹69,000</p>
                    <p>Total Received: <span className="text-green-500">₹67,000</span></p>
                </div>
            </div>
            <div className="bg-white shadow rounded-lg p-4">
                <h3 className="text-lg font-bold mb-2">Latest Transactions</h3>
                <ul>
                    {transactions.map((txn, idx) => (
                        <li
                            key={idx}
                            className="flex justify-between border-b py-2 cursor-pointer hover:bg-gray-100"
                            onClick={() => handlePersonClick(txn)}
                        >
                            <div>
                                <p className="font-bold">{txn.name}</p>
                                <p className="text-sm text-gray-500">{txn.purpose}</p>
                            </div>
                            <p className={`font-bold ${txn.amount > 0 ? "text-green-500" : "text-red-500"}`}>
                                ₹{Math.abs(txn.amount)}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );

    const renderPersonTransactions = () => (
        <div className="p-4 bg-slate-100">
            {currentPerson && (
                <>
                    <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
                        <h2 className="text-lg font-bold">{currentPerson.name}</h2>
                        <p className="text-sm">{currentPerson.contact}</p>
                        <div className="flex justify-between">
                            <p>Paid: <span className="text-red-500">₹700</span></p>
                            <p>Received: ₹3,700</p>
                            <p>Balance: ₹3,000</p>
                        </div>
                    </div>
                    <div className="bg-white shadow rounded-lg p-4">
                        <h3 className="text-lg font-bold mb-2">Transaction History</h3>
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b py-2">Date</th>
                                    <th className="border-b py-2">Received</th>
                                    <th className="border-b py-2">Due</th>
                                    <th className="border-b py-2">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(personTransactions[currentPerson.name] || []).map((txn, idx) => (
                                    <tr key={idx}>
                                        <td className="border-b py-2">{txn.date}</td>
                                        <td className={`border-b py-2 ${txn.received > 0 ? "text-green-500" : "text-red-500"}`}>
                                            ₹{Math.abs(txn.received)}
                                        </td>
                                        <td className="border-b py-2">₹{txn.due}</td>
                                        <td className="border-b py-2">₹{txn.balance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <button
                        className="fixed bottom-4 right-4 bg-red-500 text-white py-2 px-4 rounded-full shadow-lg"
                        onClick={() => setView("add")}
                    >
                        + Add Transaction
                    </button>
                </>
            )}
        </div>
    );

    const renderAddTransaction = () => (
        <div className="p-4 bg-slate-100">
            {currentPerson && (
                <>
                    <div className="bg-blue-500 text-white p-4 rounded-lg mb-4">
                        <h2 className="text-lg font-bold">Add Transaction for {currentPerson.name}</h2>
                    </div>
                    <form className="bg-white shadow rounded-lg p-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Amount Received</label>
                            <input type="text" className="border rounded w-full py-2 px-3" />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 font-bold mb-2">Amount Paid</label>
                            <input type="text" className="border rounded w-full py-2 px-3" />
                        </div>
                        <div className="flex space-x-4">
                            <button className="bg-gray-500 text-white px-4 py-2 rounded">Message</button>
                            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                                Save
                            </button>
                        </div>
                    </form>
                </>
            )}
        </div>
    );

    return (
        <div>
            {view === "all" && renderAllTransactions()}
            {view === "person" && renderPersonTransactions()}
            {view === "add" && renderAddTransaction()}
        </div>
    );
};

export default Body;
