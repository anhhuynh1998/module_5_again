import React from 'react'
import { useState } from 'react';
import { Modal } from "bootstrap";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from 'uuid';
import ModalCreate from './ModalCreate';

const IndexComponent = () => {
    const [customerList, setCustomerList] = useState([
        {
            id: uuidv4().slice(0, 5),
            name: 'NVA',
            email: 'nva@cc.oo',
            phone: '7712',
            address: 'cháy chợ',
            gender: 'male',
            city: ' hà nội'
        },
        {
            id: uuidv4().slice(0, 5),
            name: 'NVb',
            email: 'nvb@cc.oo',
            phone: '771233',
            address: 'cháy chợ',
            gender: 'Female',
            city: ' hà nội'
        },

    ])

    const { handleSubmit, reset } = useForm();


    const handleEdit = (id) => {
        console.log(id);
    }
    const handleDelete = (id) => {
        alert("delete " + id);
        const updatedList = [];
        for (let i = 0; i < customerList.length; i++) {
            const item = customerList[i];
            if (item.id !== id) {
                updatedList.push(item);
            }
        }
        setCustomerList(updatedList);
    };
    const handleCreate = (data) => {
        console.log(data);
        const customer = {
            ...data,
            id: uuidv4().slice(0, 5)
        }
        setCustomerList([
            ...customerList,
            customer
        ])
        reset();
        document.getElementById('exampleModal').click();
    }

    return (
        <div>
            <h1 className="text-center text-danger">Customer List</h1>
            <div data-bs-toggle="modal"
                data-bs-target="#exampleModal">
                <button className="btn btn-primary">Create</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>FullName</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>City</th>
                        <th>Address</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        customerList.map(item => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.fullname}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.gender}</td>
                                <td>{item.city}</td>
                                <td>{item.address}</td>
                                <td>
                                    <button data-bs-toggle="modal" data-bs-target="#exampleModal"
                                        onClick={() => handleEdit(item.id)}
                                    >
                                        <i className="fa fa-pen btn btn-primary" />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item.id)}>
                                        <i className="fa fa-trash btn btn-danger" />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </table>

            <ModalCreate onSubmit={handleSubmit(handleCreate)} />


        </div>

    )
};

export default IndexComponent 
