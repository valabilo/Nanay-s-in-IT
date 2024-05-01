// Dashboard.jsx

import React from 'react';
import { Table } from 'react-bootstrap';

const DashboardLayout = ({ sessions }) => {

    console.log(sessions);
    return (
        <div>
            <h1>Dashboard</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Email</th>
                        <th>Logged In At</th>
                        <th>Logged Out At</th>
                    </tr>
                </thead>
                <tbody>
                    {sessions.map(session => (
                        <tr key={session.id}>
                            <td>{session.user.email}</td>
                            <td>{session.logged_in_at}</td>
                            <td>{session.logged_out_at}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DashboardLayout;
