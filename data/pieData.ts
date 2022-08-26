const setColors = {
  blue: '#009bff', // Brand | Development' blue
  turquoise: '#1dc4d7', // Technology
  purple: '#6b00ff', // Strategy
  red: '#df425a', // Design
  orange: '#fa7548', // Marketing
  gold: '#feb12b', // Production
  gray: '#cacaca',
  light: '#fefefe',
};

const setValues = {
  dev: 100, // Brand | Development'
  tech: 0, // Technology
  strat: 0, // Strategy
  des: 0, // Design
  mark: 0, // Marketing
  prod: 0, // Production
  remaining: 0,
  inactive: 20, // always! please do not change!
};

export const data = {
  datasets: [
    {
      data: [
        setValues.dev,
        setValues.tech,
        setValues.strat,
        setValues.des,
        setValues.mark,
        setValues.prod,
        setValues.remaining,
        setValues.inactive,
      ],
      backgroundColor: [
        setColors.blue,
        setColors.turquoise,
        setColors.purple,
        setColors.red,
        setColors.orange,
        setColors.gold,
        setColors.gray,
        setColors.light,
      ],
      borderWidth: 0,
    },
  ],
  labels: [`Development`, 'Technology', 'Strategy', 'Design', 'Marketing', 'Production', '', ''],
};
