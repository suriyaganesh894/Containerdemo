import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
  
const App = () => {
 
    const options = [
   
      { label: 'orange', value: 'orange' },
   
      { label: 'blue', value: 'blue' },
   
      { label: 'lime', value: 'lime' },

      { label: 'pink', value: '#c155ac' },
   
    ];

    const [value, setValue] = React.useState('orange');

 const handleChange = (event) => {

   setValue(event.target.value);

 };
  return (
    <div className='center'>

    <label>

      Pick a colour?

      <select value={value} onChange={handleChange}>

        {options.map((option) => (

          <option value={option.value}>{option.label}</option>

        ))}

      </select>

    </label>
  
  
    <Container maxWidth="sm">
      <Typography component="div" style={{ 
        backgroundColor: value, height: '40vh', border: '2px solid black', borderRadius: '5vh'
      }}>
       
      </Typography>
    </Container>
    </div>
  );
}
  
export default App