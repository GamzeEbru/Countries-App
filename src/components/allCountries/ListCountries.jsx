import React from 'react';
import { Link } from 'react-router-dom';
import Papa from 'papaparse';

export const ListCountries = (props) => {
  const handleExport = () => {
    const headers = ['name', 'population', 'region', 'capital'];
    const records = props.countries.map(({ name, population, region, capital }) => (
      [name, population, region, capital]
    ));
    const csv = Papa.unparse({ fields: headers, data: records });
    const blob = new Blob([csv], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'countries.csv';
    link.click();
  };

  return (
    <>
      <button className="csvbutton" onClick={handleExport}>Export to CSV</button>
      <div className="container">

        {props.countries.map(
          ({ name, population, region, capital }) => (
            <Link
              key={name}
              to={`/${name.toLowerCase().replace(/\s/g, '%20')}`}
              className="insideContainer"
            >
             
                <section className="infoSection">
                  <h2 className="countryName"> {name}</h2>
                  <div>
                    <p>
                      <span className="category">Population:</span>
                      {population.toLocaleString()}
                    </p>
                    <p>
                      <span className="category">Region:</span> {region}
                    </p>
                    <p>
                      <span className="category">Capital:</span> {capital}
                    </p>
                  </div>
                </section>
         
            </Link>
          )
        )}
      </div></>
  );
};
