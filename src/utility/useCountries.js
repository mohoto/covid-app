import React, { useState, useEffect } from 'react'

const useCountries = () => {

    const [countries, setCountries] = useState([]);
    //const [countriesTable, setCountriesTable] = useState([]);

    useEffect(() => {

        const getCountriesData = async () => {

            await fetch('https://disease.sh/v3/covid-19/countries')
                .then((response) => response.json())
                .then((data) => {
                    /* const countries = data.map((country) => (
                        {
                            name: country.country,
                            value: country.countryInfo.iso2
                        }
                    ));
                    setCountries(countries);
                    setCountriesTable(sortData(data)); */
                    setCountries(data);
                })
        };
        getCountriesData();

    }, []);

    return { countries };

}

export default useCountries;
