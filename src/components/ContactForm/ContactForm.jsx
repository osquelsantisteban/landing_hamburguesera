import React, { useState } from 'react';
import FormStyle from './ContactForm.module.css'

function ContactForm() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        msg: '',
        term: false,
    });

    const handleFormChange = (e) => {        
        setForm({
            ...form,
            // destructuracion para crear una variable con el valor como php con $$
            [e.target.name]: e.target.value
        })        
    }

    const handleFormChecked = (e) => {
        setForm({
            ...form,
            // destructuracion para crear una variable con el valor como php con $$
            [e.target.name]: e.target.checked
        })
    }


    const formSubmit = (e) => {
        e.preventDefault();
        //console.log(form);
        
        window.location.href = "mailto:"+form.email+'&subject="Mensaje desde la página web del cliente "'+form.name+'&body='+form.msg;
    }

    return ( 
        <section className='z-20'>
            <form 
                className='flex flex-col gap-4'
                onSubmit={formSubmit}>
                <h2 className='stylesTextRed'>Queremos escucharte</h2>

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

                <textarea name="msg" 
                className={FormStyle.inputs+' h-52'}
                placeholder='Tu mensaje'
                value={form.msg} 
                onChange={handleFormChange}/>
                
                <div className='relative flex items-center gap-3'>
                    <input type="checkbox" id='term' 
                    className={FormStyle.customCheckbox}
                    name="term" 
                    onChange={handleFormChecked} />
                    { form.term && <span></span> }
                    <label htmlFor="term">He leído y acepto las políticas</label>
                </div>

                <input type="submit" 
                className='m-auto cursor-pointer btn bordeDifuminado'
                value='Enviar' />
            </form>
        </section>
     );
}

export default ContactForm;