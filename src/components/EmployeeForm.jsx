import React from 'react'
import {Typography, TextField, Box, Button} from '@mui/material'


const EmployeeForm = () => {
  return (
    <div>
      <Box
      sx={{
        maxWidth:"600px",
        margin:'0 auto',
        background:"#e6efdc",
        marginTop:"10%",
        padding:5,
        textAlign:'center'
        }}>
        <Typography variant='h5'>
            Employee Form
        </Typography>
        <br/>
        <div>
            <TextField  label="Name" name="name" />
        </div>
        <br/>
        <div>
            <TextField label="Designation" name="designation" />
        </div>
        <br/>
        <div>
            <TextField label="Location" name="location" />
        </div>
        <br/>
        <div>
            <TextField label="Salary" name="salary" />
        </div>
        <br/>
        <Button className='prim-btn'variant='contained'>Signup</Button>
        </Box>
        <br/><br/><br/>
    </div>
  )
}

export default EmployeeForm
