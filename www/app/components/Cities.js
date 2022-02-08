import { MiniReact } from "../MiniReact.js";

export class Cities extends MiniReact.Component {
  constructor(props) {
    super(props);
    this.state.cities = [
      {
        name: "Paris",
        department: "Ville de Paris",
        code: 623,
      },
      {
        name: "Lyon",
        department: "Rhône",
        code: 171210,
      },
      {
        name: "Marseille",
        department: "Bouches-du-Rhône",
        code: 170960,
      },
      {
        name: "Toulouse",
        department: "Haute-Garonne",
        code: 135244,
      },
      {
        name: "Bordeaux",
        department: "Gironde",
        code: 131913,
      },
    ];
  }

  render() {
    return MiniReact.createElement("div", null, [
      MiniReact.createElement(
        "ul",
        null,
        this.state.cities.map((city) =>
          MiniReact.createElement(
            "li",
            {
              click: () => this.props.fetchWeatherData(city.code),
            },
            [`${city.name}, ${city.department}`]
          )
        )
      ),
    ]);
  }
}
