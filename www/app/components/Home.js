import { MiniReact } from "../MiniReact.js";
import { Cities } from "./Cities.js";
import { link } from "./Link.js";

export class Home extends MiniReact.Component {
  constructor(props) {
    super(props);
  }

  fetchWeatherData(cityName, cityCode) {
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityCode}?apikey=N6fHuseOGp9r0eDoXUDeyg6EeWFXAp3S&language=fr-fr&details=true&metric=true`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert(
          `${cityName}\n\n${data.Headline.Text}\nTempérature min: ${
            data.DailyForecasts[0].Temperature.Minimum.Value
          }°C\nTempérature max: ${
            data.DailyForecasts[0].Temperature.Maximum.Value
          }°C\nJournée: ${data.DailyForecasts[0].Day.IconPhrase} (${
            data.DailyForecasts[0].Day.HasPrecipitation
              ? "précipitation"
              : "sans précipitation"
          })\nNuit: ${data.DailyForecasts[0].Night.IconPhrase} (${
            data.DailyForecasts[0].Night.HasPrecipitation
              ? "précipitation"
              : "sans précipitation"
          })`
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return MiniReact.createElement("div", null, [
      link("/meteo", "Météo"),
      link("/commentaire", "Commentaires"),
      MiniReact.createElement("h1", null, ["Bienvenue sur M&T&O !"]),
      MiniReact.createElement(
        "p",
        { style: "font-style: italic; color: darkgrey;" },
        [
          "Sélectionnez la ville dont vous souhaitez connaître les informations météorologique",
        ]
      ),
      MiniReact.createElement(Cities, {
        fetchWeatherData: this.fetchWeatherData,
      }),
    ]);
  }
}
