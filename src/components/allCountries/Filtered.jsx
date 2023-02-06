import React from 'react';
import { Link } from 'react-router-dom';


export const Filtered = (props) => {
  return (
    <section className="container">
      {props.foundFilter ? (
        props.filtered?.map(
          ({ name, population, region, capital }) => (
            <Link
              key={name}
              to={`/${name.toLowerCase().replace(/\s/g, '%20')}`}
              className="insideContainer"
            >
              <div>
                <div>
                  <section className="infoSection">
                    <h2 className="countryName">{name}</h2>
                    <p>
                      <span className="category">Population:</span>{' '}
                      {population.toLocaleString()}
                    </p>
                    <p>
                      <span className="category">Region:</span> {region}
                    </p>
                    <p>
                      <span className="category">Capital:</span> {capital}
                    </p>
                  </section>
                </div>
              </div>
            </Link>
          ),
        )
      ) : (
       console.log('no')
      )}
    </section>
  );
};
