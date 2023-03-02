import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './fetchCountries';
import { countriesMarkup, countryMarkup } from './markupCountry';
import Notiflix from 'notiflix';

const countryInfoEl = document.querySelector('.country-info');
const searchEl = document.querySelector('#search-box');
const countryListEl = document.querySelector('.country-list');

const DEBOUNCE_DELAY = 300;

searchEl.addEventListener('input', debounce(onSearchCountry, DEBOUNCE_DELAY));

function onSearchCountry(event) {
    event.preventDefault();
    const searchRequest = event.target.value;
    if (!searchRequest) {
        return
    }
    fetchCountries(searchRequest)
        
        .then(data => {
            countryInfoEl.innerHTML = '';
            countryListEl.innerHTML = '';

            if (data.status === 404) {
                return Notiflix.Notify.failure('Oops, there is no country with that name');
            }
             if (data.length === 1) { 
                return countryMarkup(data, countryInfoEl);
            }
             if (data.length > 10) {
                return  Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'); 
            }  
                countriesMarkup(data, countryInfoEl)
        })
       
};

