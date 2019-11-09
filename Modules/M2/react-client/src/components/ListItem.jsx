import React from 'react';

const ListItem = (props) => (
  <div>
  <h1>HERE IS THE DATA FROM MONGO</h1>
    { props.item.data }
  </div>
)

export default ListItem;