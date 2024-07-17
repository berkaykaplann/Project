import React, { useState } from 'react';

const CustomerForm = () => {
    const [customerData, setCustomerData] = useState({
        Customer_Type: '',
        ID_Number: '',
        Customer_Name: '',
        Customer_Last_Name: '',
        Net_Income_Amount: '',
        Customer_Relations: [
            { Relation_Type: '', Related_Customer_ID: '', Relation_Name: '', Related_Person_Full_Name: '' }
        ],
        Customer_Jobs: [
            { Company_Name: '', Start_Date: '', End_Date: '', Position: '', Salary: '' }
        ]
    });

    const handleChange = (e) => {
        setCustomerData({ ...customerData, [e.target.name]: e.target.value });
    };

    const handleRelationChange = (index, e) => {
        const relations = [...customerData.Customer_Relations];
        relations[index][e.target.name] = e.target.value;
        setCustomerData({ ...customerData, Customer_Relations: relations });
    };

    const handleJobChange = (index, e) => {
        const jobs = [...customerData.Customer_Jobs];
        jobs[index][e.target.name] = e.target.value;
        setCustomerData({ ...customerData, Customer_Jobs: jobs });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Customer Data Submitted:', customerData);
        // Veritabanına veri gönderme işlemi burada yapılacak.
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="column">
                        <h1>Customer</h1>
                        <label htmlFor="Customer_Type">Customer Type</label>
                        <select name="Customer_Type" value={customerData.Customer_Type} onChange={handleChange}>
                            <option value="">Select</option>
                            <option value="personal">Personal</option>
                            <option value="non_personal">Non-Personal</option>
                        </select>

                        <label htmlFor="ID_Number">ID Number</label>
                        <input
                            type="number"
                            name="ID_Number"
                            value={customerData.ID_Number}
                            onChange={handleChange}
                            maxLength="11"
                            required
                        />

                        <label htmlFor="Customer_Name">Name</label>
                        <input
                            type="text"
                            name="Customer_Name"
                            value={customerData.Customer_Name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="Customer_Last_Name">Last Name</label>
                        <input
                            type="text"
                            name="Customer_Last_Name"
                            value={customerData.Customer_Last_Name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="Net_Income_Amount">Net Income Amount</label>
                        <input
                            type="number"
                            name="Net_Income_Amount"
                            value={customerData.Net_Income_Amount}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="column">
                        <h1>Customer Relations</h1>
                        {customerData.Customer_Relations.map((relation, index) => (
                            <div key={index}>


                                <label htmlFor={`Relation_Name_${index}`}>Relation Name</label>
                                <input
                                    type="text"
                                    name="Relation_Name"
                                    value={relation.Relation_Name}
                                    onChange={(e) => handleRelationChange(index, e)}
                                />



                                <label htmlFor={`Related_Person_Full_Name_${index}`}>Related Person Full Name</label>
                                <input
                                    type="text"
                                    name="Related_Person_Full_Name"
                                    value={relation.Related_Person_Full_Name}
                                    onChange={(e) => handleRelationChange(index, e)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="full-width">
                    <h1>Customer Jobs</h1>
                    {customerData.Customer_Jobs.map((job, index) => (
                        <div key={index}>
                            <label htmlFor={`Company_Name_${index}`}>Company_Name</label>
                            <input
                                type="text"
                                name="Company_Name"
                                value={job.Company_Name}
                                onChange={(e) => handleJobChange(index, e)}
                            />

                            <label htmlFor={`Start_Date_${index}`}>Start_Date</label>
                            <input
                                type="date"
                                name="Start_Date"
                                value={job.Start_Date}
                                onChange={(e) => handleJobChange(index, e)}
                            />
                            <label htmlFor={`End_Date_${index}`}>End_Date</label>
                            <input
                                type="date"
                                name="End_Date"
                                value={job.End_Date}
                                onChange={(e) => handleJobChange(index, e)}
                            />
                            <label htmlFor={`Position_${index}`}>Position</label>
                            <input
                                type="text"
                                name="Position"
                                value={job.Position}
                                onChange={(e) => handleJobChange(index, e)}
                            />
                            <label htmlFor={`Salary_${index}`}>Salary</label>
                            <input
                                type="text"
                                name="Salary"
                                value={job.Salary}
                                onChange={(e) => handleJobChange(index, e)}
                            />
                        </div>
                    ))}
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default CustomerForm;




