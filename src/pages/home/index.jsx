import React, { useState } from 'react';
import Button from '../../components/atomes/button';
import Input from '../../components/atomes/input';
import { getWeatherByCityName } from '../../services';
import { formatData } from '../../utils/formatData';

const Home = () => {
  const [cityName, setCityName] = useState('');
  const [data, setData] = useState();

  const onHandleSubmit = () => {
    getWeatherByCityName(cityName)
      .then((response) => {
        setData(formatData(response));
      })
      .catch(() => {
        setData([]);
      });
  };

  const handleCityName = (e) => {
    setCityName(e.target.value);
  };
  return (
    <div>
      <Input onChange={handleCityName}></Input>
      <Button onClick={onHandleSubmit}>submit</Button>
      <ul>
        {data?.map((item) => (
          <li key={Object.keys(item)[0]}>
            {Object.keys(item)[0]}: {Object.values(item)[0]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
