import React, { useState, useEffect } from 'react'
import PatientService from '../services/PatientService'
import { Header } from 'semantic-ui-react'
import OTable from '../utilities/OTable'

export default function ListPatient() {

    const [patients, setPatients] = useState([])

    useEffect(() => {
        let patientService = new PatientService()
        patientService.getAllPatients().then(result => setPatients(result.data.data))
    }, [])

    return (
        <div>
            <Header as='h3' block >
                Hasta Listesi
            </Header>
            <OTable patients = {patients}/>
        </div>
    )
}
