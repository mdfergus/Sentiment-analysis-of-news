import React from 'react';
import { Autocomplete, Row } from 'react-materialize';
import data from '../../server/json/sources.json';

const Search = props => {
  return (
    <Row>
      <Autocomplete
        className="m8 push-m1"
        title="Sources"
        data={data}
        limit={5}
        onAutocomplete={props.handleSubmit}
      />
    </Row>
  );
};

export default Search;
