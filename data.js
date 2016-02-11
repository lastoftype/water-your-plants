import moment from "moment"

module.exports = [
  {
    id: 1,
    name: "Aloe",
    lastWatered: moment().subtract(1, 'days'),
    frequency: "A little every day can't hurt"
  },
  {
    id: 2,
    name: "Cactus",
    lastWatered: moment().subtract(2, 'days'),
    frequency: "Once every two weeks"
  },
  {
    id: 3,
    name: "Pothos",
    lastWatered: moment().subtract(4, 'days'),
    frequency: "As much as you want"
  },
  {
    id: 4,
    name: "Vine",
    lastWatered: moment().subtract(7, 'days'),
    frequency: "Once every few days"
  },
  {
    id: 5,
    name: "Moss",
    lastWatered: moment().subtract(3, 'days'),
    frequency: "Sometimes when you feel like it"
  },
  {
    id: 6,
    name: "Agave plant",
    lastWatered: moment().subtract(2, 'days'),
    frequency: "Rarely but not infrequently"
  },
  {
    id: 7,
    name: "Chinese Evergreen",
    lastWatered: moment().subtract(6, 'days'),
    frequency: "Often enough"
  }
];
