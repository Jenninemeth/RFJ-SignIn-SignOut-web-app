import React from 'react';
import { Link } from 'react-router-dom';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import FirebaseContext from '../../firebase/context';
import useFormValidation from '../../redux/form-validation';
import validateForm from '../../redux/validateForm';
import { v4 as uuidv4 } from 'uuid';

import '../../pages/sign-in/sign-in.styles.scss';

const INITIAL_STATE = {
    id: uuidv4(),
    jobNumber: '18109',
    isSigningIn: 'sign-in',
    firstName: '',
    lastName: '',
    protocols: ''
}

function SignOutEs(props) {
    const { firebase } = React.useContext(FirebaseContext)
    const { handleSubmit, handleChange, values } = useFormValidation(
        INITIAL_STATE,
        validateForm,
        handleCreateLink
    );

    function handleCreateLink() {
        const { id, jobNumber, isSigningIn, firstName, lastName, protocols } = values
        const newSignIn = {
            id,
            jobNumber,
            isSigningIn,
            firstName,
            lastName,
            time: new Date(),
            protocols
        }
        firebase.db.collection('log').add(newSignIn)
        props.history.push('/success');
    }             

    return(
        <div className='sign-in'>
                <h1>Formulario de cierre de sesión</h1>
                <h2>Lea y responda todas las preguntas a diario.</h2>
                <Link className='language' to='/sign-out'>English</Link>

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
                        value='sign-out'
                        inverted
                        required 
                    > cerrando sesión
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
                    <p>Debe cerrar sesión y confirmar que no se lesionó al final de su jornada laboral. No hacerlo implicará acciones disciplinarias por parte de su supervisor.</p>
                    <p>¿Se lesionó durante las horas de trabajo?</p>
                    <div className='choices'>
                        <div>
                            <input 
                                name='injury'
                                type='radio' 
                                value='YES'
                                label='YES'
                                onChange={handleChange}
                                id='injury' 
                                required 
                                >
                            </input>
                            <label for="yes">Si</label>
                        </div>
                        <div>
                            <input 
                                name='injury'
                                type='radio' 
                                value='NO'
                                label='NO'
                                onChange={handleChange}
                                id='injury' >
                            </input>
                            <label for="yes">No</label>
                        </div>
                    </div>
                </div>
                <p>Al enviar, reconozco que he tomado todos mis descansos, almuerzos y períodos de descanso. También reconozco que estoy libre de lesiones, si pude lastimarme mientras trabajaba para RFJ Meiswinkle, he informado de tal lesión a mi supervisor.</p>
                </label>
                    <CustomButton type="submit">Enviar</CustomButton>
                </form>
            </div>
    );
};

export default SignOutEs;