import React, { useState } from 'react';
import FormStyle from './ContactForm.module.css'

function ContactForm() {

    const [form, setForm] = useState({})
    const handleFormChange = (e) => {        
        setForm({
            ...form,
            // destructuracion para crear una variable con el valor como php con $$
            [e.target.name]: e.target.value
        })
        // console.log(form) 
    }

    const handleFormChecked = (e) => {
        setForm({
            ...form,
            // destructuracion para crear una variable con el valor como php con $$
            [e.target.name]: e.target.checked
        })
    }

    // const updCheckbox = () => {
    //     setForm({
    //         ...form,
    //         term: !form.term
    //     })       
    //     // console.log(form) 
    // }

    const formSubmit = (e) => {
        e.preventDefault()
        // console.log(form)
    }

    return ( 
        <section className='z-20'>
            <form className='flex flex-col gap-4'
            onSubmit={formSubmit}>
                <h2>Queremos escucharte</h2>

                <input type="text" 
                name="name"
                className={FormStyle.inputs} 
                value={form.name} 
                placeholder="Dinos tu nombre" 
                onChange={handleFormChange}/>

                <input type="email" 
                name="email" 
                className={FormStyle.inputs}
                placeholder='Tu correo electrónico'
                value={form.email} 
                onChange={handleFormChange}/>

                <input type="text" 
                name="phone" 
                className={FormStyle.inputs}
                placeholder='Tu teléfono'
                value={form.phone} 
                onChange={handleFormChange}/>

                <textarea name="mg" 
                className={FormStyle.inputs}
                placeholder='Tu mensaje'
                value={form.msg} 
                onChange={handleFormChange}/>
                
                <div className='relative flex gap-3 items-center'>
                    <input type="checkbox" id='term' 
                    className={FormStyle.customCheckbox}
                    name="term" 
                    onChange={handleFormChecked} />
                    { form.term && <span></span> }
                    <label htmlFor="term">He leído y acepto las políticas</label>
                </div>

                <input type="submit" 
                className='btn m-auto cursor-pointer bordeDifuminado'
                value='Enviar' />
            </form>
        </section>
     );
}

export default ContactForm;