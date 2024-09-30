import React from "react";
import {FormattedDate} from 'react-intl';
import { FormattedNumber } from 'react-intl';
import {FormattedMessage} from 'react-intl';

const Job = (props) => {
  const isPlural = props.offer.salary >= 2 && navigator.language.startsWith('es');
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        <FormattedNumber value={props.offer.salary} />{' '}
        <FormattedMessage id={isPlural ? "millions" : "million"} />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate
          value={new Date(props.offer.date)}
          year='numeric'
          month='long'
          day='numeric'
          weekday='long'
        />
      </td>
      <td>
        <FormattedNumber
          value={props.offer.visitas}
        />
      </td>
    </tr>
  );
};

export default Job;
