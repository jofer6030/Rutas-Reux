import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectYear } from "../../actions/User/select";

const ACCESS_TOKEN = "3875372609247663";
const DOMAIN = "https://www.superheroapi.com/api.php/";

const Hero = () => {
  const [id, setId] = useState(null);
  const [year, setYear] = useState("");

  const dispatch = useDispatch();

  const history = useHistory();
  const getHeros = async () => {
    try {
      const response = await fetch(`${DOMAIN}${ACCESS_TOKEN}/${id}`);

      const hero = await response.json();
      history.push(
        `/hero/${hero.id}?hero=${hero.name}&image=${hero.image.url}&full-name=${hero.biography["full-name"]}`
      );
      console.log("response", hero);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setId(value);
  };

  const handleChangeYear = (e) => {
    const {
      target: { value },
    } = e;
    setYear(value);
  };

  const handleYear = (e) => {
    e.preventDefault();
    dispatch(selectYear(year));
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <br />
      <button onClick={getHeros}>Buscar</button>
      <br />
      <br />
      <input type="text" onChange={handleChangeYear} />
      <br />
      <button onClick={handleYear}>Year</button>
      <br />
      <br />
    </div>
  );
};

export default Hero;
