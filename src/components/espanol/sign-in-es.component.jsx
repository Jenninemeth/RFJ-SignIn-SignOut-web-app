import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import FirebaseContext from '../../firebase/context';
import useFormValidation from '../../redux/form-validation';
import validateForm from '../../redux/validateForm';
import { v4 as uuidv4 } from 'uuid';
import * as moment from "moment";

import '../../pages/sign-in/sign-in.styles.scss';

const INITIAL_STATE = {
    id: uuidv4(),
    jobNumber: '18109',
    isSigningIn: 'sign-in',
    date: '',
    timeIn: '',
    firstName: '',
    lastName: '',
    protocols: ''
}

function SignInEs(props) {
    const { firebase } = React.useContext(FirebaseContext)
    const { handleSubmit, handleChange, values } = useFormValidation(
        INITIAL_STATE,
        validateForm,
        handleCreateLink
    );

    function handleCreateLink() {
        const { id, jobNumber, isSigningIn, date, timeIn, firstName, lastName, protocols } = values
        const getDate = new Date();
        const newSignIn = {
            id,
            jobNumber,
            isSigningIn,
            firstName,
            lastName,
            timeIn: moment(getDate).format('h:mm a'),
            date: moment(getDate).format('L'),
            protocols
        }
        firebase.db.collection('log').add(newSignIn)
        props.history.push('/success');
    }             

    return(
        <div className='sign-in'>
                <h1>Formulario de inicio de sesión</h1>
                <h2>Lea y responda todas las preguntas a diario.</h2>
                <Link className='language' to='/sign-in'>English</Link>

                <form onSubmit={handleSubmit}>
                    <label className='title'>
                        1. Número de trabajo
                        <select 
                            className='job-number' 
                            id="jobNumber" 
                            name="jobNumber" 
                            value="18109"
                            onChange={handleChange}
                            label='Job Number'
                            required 
                        >
                            <option value="18109">18109</option>
                        </select>   
                    </label>
<br></br>
                    <label className='title'>
                        2. Estoy
                        
                    <CustomButton 
                        name='isSigningIn'
                        onChange={handleChange}
                        label='Job Number'
                        value='sign-in'
                        inverted
                        required 
                    > iniciando sesión
                    </CustomButton>
                        por el dia. 
                    </label>
<br></br>
                    <label className='title'>
                    3. Nombre de pila
                    <FormInput 
                        name='firstName'
                        type='firstName' 
                        onChange={handleChange}
                        value={values.firstName}
                        label='Nombre de pila'
                        required 
                        />   
                    </label>
                    <label className='title'>
                    4. Apellido
                        <FormInput 
                        name='lastName'
                        type='lastName' 
                        onChange={handleChange}
                        value={values.lastName}
                        label='Apellido'
                        required 
                        />
                    </label>
                    <label className='title'>
                    5. Confirmación
                    <div>
                    <p>Lea y responda todas las preguntas diariamente. Debe iniciar sesión al comienzo de su día de trabajo.</p>
                    <p>¿Completó todos los protocolos COVID-19 necesarios para ingresar al sitio de trabajo?</p>
                        <div className='choices'>
                            <div>
                                <input 
                                    name='protocols'
                                    type='radio' 
                                    value='YES'
                                    label='YES'
                                    onChange={handleChange}
                                    id='protocols' 
                                    required 
                                    >
                                </input>
                                <label for="yes">Si</label>
                            </div>
                            <div>
                                <input 
                                    name='protocols'
                                    type='radio' 
                                    value='NO'
                                    label='NO'
                                    onChange={handleChange}
                                    id='protocols' >
                                </input>
                                <label for="yes">No</label>
                            </div>
                        </div>
                    </div>
                    </label>
                    <CustomButton type="submit">Enviar</CustomButton>
                </form>
            </div>
    );
};

export default SignInEs;