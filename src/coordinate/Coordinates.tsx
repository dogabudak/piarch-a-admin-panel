import React from 'react';
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import axios from 'axios';
import {AttractionType, Coordinates} from "piarch-a-interfaces";
import './Coordinates.css';

const CoordinateForm: React.FC = () => {
    const { register, handleSubmit } = useForm<Coordinates & FieldValues>();

    const onSubmit: SubmitHandler<Coordinates> = async (data) => {
        try {
            const response = await axios.post(
                `http://localhost:4567/coordinates`,
                data,
                {
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Content-Type': 'application/json',
                    },
                }
            );
            console.log('Response:', response);
            console.log('Response Data:', response.data);
            // TODO: Provide feedback to the user about success
        } catch (error) {
            console.error('Error submitting form:', error);
            // TODO: Provide feedback to the user about the error
        }
    };
    // TODO this enum is stupid
    const attractionTypes = Object.keys(AttractionType);

    return (
        <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label>Name</label>
                <input className="form-input" {...register("name", { required: true })} />
            </div>
            <div className="form-group">
                <label>Coordinate X</label>
                <input className="form-input" type="number" placeholder="Coordinate X" {...register("x", { required: true })} />
            </div>
            <div className="form-group">
                <label>Coordinate Y</label>
                <input className="form-input" type="number" placeholder="Coordinate Y" {...register("y", { required: true })} />
            </div>
            <div className="form-group">
                <label>Description (EN)</label>
                <textarea className="form-textarea" placeholder="Description (EN)" {...register("description.en" as const, { required: true })}></textarea>
            </div>
            <div className="form-group">
                <label>Description (TR)</label>
                <textarea className="form-textarea" placeholder="Description (TR)" {...register("description.tr" as const, { required: true })}></textarea>
            </div>
            <div className="form-group">
                <label>Advertisement</label>
                <input className="form-checkbox" type="checkbox" {...register("advertisement")} />
            </div>
            <div className="form-group">
                <label>Type</label>
                <select className="form-select" {...register("type", { required: true })}>
                    {attractionTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                </select>
            </div>
            <button className="form-submit" type="submit">Submit</button>
        </form>
    );
};

export default CoordinateForm;
