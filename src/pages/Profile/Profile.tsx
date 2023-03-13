import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

type Props = {}

export default function Profile({ }: Props) {
    return (
        <div className='profile' style={{width: '90%', margin: '0 auto', padding: '80px 0'}}>
            <div className="row">
                <div className="col-3 text-center">
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{width: 100, height: 100}}/>
                </div>
                <div className="col-9">
                    <h2>Name: Tom Cruise</h2>
                    <h2>Phone: 090912983</h2>
                </div>
            </div>
        </div>
    )
}