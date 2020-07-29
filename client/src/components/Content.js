import React from 'react';

// GraphQl
import { useQuery } from '@apollo/react-hooks';
import { getRocketsQuery } from '../queries/queries';

//Material Ui
import Card from './Card';
import { Grid } from '@material-ui/core';



let Content = () => {

  // const {loading, error, data} = useQuery(getRocketsQuery);

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>{`Error: ${error.message}`}</p>;
  
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <h2>Active Rockets</h2>
        <Card 
        title="Hamilton Beach Flex Brew"
        subtitle="$89.99"
        avatarUrl="http://images-na.ssl-image-amazon.com/images/I/81mjh5ZSu1L._AC_SL1500_.jpg"
        />
      </Grid>
      <Grid item xs={12} sm={8}><Card /></Grid>
      <Grid item xs={12} sm={8}><Card /></Grid>
      <Grid item xs={12} sm={8}><Card /></Grid>
      <Grid item xs={12} sm={8}><Card /></Grid>
      
    </Grid>
  )
};

export default Content
