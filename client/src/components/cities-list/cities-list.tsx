import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { changeCity } from '../../store/action';
import { AppRoute, CITIES_LOCATION, CityOffer } from '../../const';
import classNames from 'classnames';

type CitiesListProps = {
  selectedCity: CityOffer;
};

export function CitiesList({ selectedCity }: CitiesListProps): React.JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <ul className="locations__list tabs__list">
      {CITIES_LOCATION.map((city) => (
        <li
          key={city.name}
          className="locations__item"
          onClick={() => dispatch(changeCity(city))}
        >
          <Link
            to={AppRoute.Main}
            className={classNames(
              'locations__item-link',
              'tabs__item',
              { 'tabs__item--active': city.name === selectedCity.name }
            )}
          >
            <span>{city.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
