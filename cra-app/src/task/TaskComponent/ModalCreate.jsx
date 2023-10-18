import React from 'react'
import { useForm } from 'react-hook-form';

const ModalCreate = () => {
    const { register } = useForm();

    return (
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="row ms-3 m-2 ">
                            <div className="col-lg-6">
                                <label htmlFor="">FullName</label>
                                <input type="text" name="name" id="name"
                                    {...register('name')} />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="">Email</label>
                                <input type="email" name="email" id="email"
                                    {...register('email')} />
                            </div>
                        </div>
                        <div className="row ms-3 m-2">
                            <div className="col-lg-6">
                                <label htmlFor="">Phone</label>
                                <input type="number" name="phone" id="phone"
                                    {...register('phone')} />
                            </div>
                            <div className="col-lg-6">
                                <label htmlFor="">Address</label>
                                <input type="text" name="address" id="address"
                                    {...register('address')} />
                            </div>
                        </div>
                        <div className="row ms-3 ">
                            <div className="col-lg-6">
                                <label htmlFor="">City</label>
                                <select
                                    className="form-select"
                                    multiple=""
                                    aria-label="multiple select example"
                                    {...register('city')}
                                >
                                    <option defaultValue="">-Vui Lòng Chọn-</option>
                                    <option value='Hà Nội'>Hà Nội</option>
                                    <option value='TP HCM'>TP HCM</option>
                                    <option value='Huế'>Huế</option>
                                    <option value='Hp'>Hải Phòng</option>
                                    <option value='Bc'>Bắc Cạn</option>
                                </select>
                            </div>
                            <div className="col-lg-6 mb-5">
                                <label htmlFor="" className="">Gender
                                    <div className="d-flex">
                                        <div className="form-check me-3">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault1"
                                                value="male"
                                                {...register('gender')}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="flexRadioDefault"
                                                id="flexRadioDefault2"
                                                defaultChecked=""
                                                value="female"
                                                {...register("gender")}
                                            />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2"> Female</label>
                                        </div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ModalCreate
