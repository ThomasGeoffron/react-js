import { MiniReact } from "../MiniReact";

export class Home extends MiniReact.Component {
  constructor() {
    super(props);
  }

  fetchWeatherData(cityCode) {
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityCode}?apikey=N6fHuseOGp9r0eDoXUDeyg6EeWFXAp3S&language=fr-fr&details=true&metric=true`;
    fetch(url)
      .then((response) => {
        const json = response.json();
        console.log(json);
        alert(
          `${json.Headline.Text}\nTempérature min: ${
            json.DailyForecasts[0].Temperature.Minimum.Value
          }°C\nTempérature max: ${
            json.DailyForecasts[0].Temperature.Maximum.Value
          }°C\nJournée: ${json.DailyForecasts[0].Day.IconPhrase} (${
            json.DailyForecasts[0].Day.HasPrecipitation
              ? "précipitation"
              : "sans précipitation"
          })\nNuit: ${json.DailyForecasts[0].Night.IconPhrase} (${
            json.DailyForecasts[0].Night.HasPrecipitation
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
