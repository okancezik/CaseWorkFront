import React from 'react'
import Table from 'react-bootstrap/Table'

export default function OTableDetails(props) {

    function isSickControl(result) {
        console.log(result)
        if (result == true) {
            return "Pozitif";
        } else {
            return "Negatif";
        }
    }

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Kimlik Numarası</th>
                        <th>Test Sonucu</th>
                        <th>Hasta Kayıt Tarihi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.patients.map((patient) => (
                            <tr>
                                <td>{patient.patientId}</td>
                                <td>{patient.identityNumber}</td>
                                <td>{isSickControl(patient.isSick)}</td>
                                <td>{patient.caseDate}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
