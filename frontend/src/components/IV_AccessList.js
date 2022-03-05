import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useFetch } from '../helpers/useFetch';


const IV_AccessList = () => {
  const url = '/api/education';
  const { data } = useFetch(url);


  return (
    <div className='table-responsive'>
      <table className='table table-hover' id='dataTable' width='100%'>
        <tbody>
          {data?.map((dataItem) => {
            let { title, description, objectUrl } = dataItem;

            if (dataItem.description === "IV Access"){
            return (
              <tr key={title}>
                <td onClick={()=> window.open(dataItem.objectUrl)}>
                  <Link
                    to={`/education/iv-access`}
                    style={{
                      display: 'block',
                      width: '100%',
                      color: 'inherit',
                    }}
                  >
                    {title}
                  </Link>
                </td>

              </tr>
            );
                  }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default IV_AccessList ;
