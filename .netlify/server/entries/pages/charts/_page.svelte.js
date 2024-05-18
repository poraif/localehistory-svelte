import { c as create_ssr_component, o as onDestroy, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import "frappe-charts";
import { s as subTitle, l as latestPlacemark } from "../../../chunks/stores.js";
import { C as Card } from "../../../chunks/Card.js";
const Base = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {
    labels: [],
    datasets: [{ values: [] }],
    yMarkers: {},
    yRegions: []
  } } = $$props;
  let { title = "" } = $$props;
  let { type = "line" } = $$props;
  let { height = 300 } = $$props;
  let { animate = true } = $$props;
  let { axisOptions = {} } = $$props;
  let { barOptions = {} } = $$props;
  let { lineOptions = {} } = $$props;
  let { tooltipOptions = {} } = $$props;
  let { colors = [] } = $$props;
  let { valuesOverPoints = 0 } = $$props;
  let { isNavigable = false } = $$props;
  let { maxSlices = 3 } = $$props;
  let chart = null;
  let chartRef;
  function ifChartThen(fn) {
    return function ifChart(...args) {
      if (chart) {
        return fn(...args);
      }
    };
  }
  const addDataPoint = ifChartThen((label, valueFromEachDataset, index) => chart.addDataPoint(label, valueFromEachDataset, index));
  const removeDataPoint = ifChartThen((index) => chart.removeDataPoint(index));
  const exportChart = ifChartThen(() => chart.export());
  const updateChart = ifChartThen((newData) => chart.update(newData));
  onDestroy(() => {
    chart = null;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.axisOptions === void 0 && $$bindings.axisOptions && axisOptions !== void 0)
    $$bindings.axisOptions(axisOptions);
  if ($$props.barOptions === void 0 && $$bindings.barOptions && barOptions !== void 0)
    $$bindings.barOptions(barOptions);
  if ($$props.lineOptions === void 0 && $$bindings.lineOptions && lineOptions !== void 0)
    $$bindings.lineOptions(lineOptions);
  if ($$props.tooltipOptions === void 0 && $$bindings.tooltipOptions && tooltipOptions !== void 0)
    $$bindings.tooltipOptions(tooltipOptions);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.valuesOverPoints === void 0 && $$bindings.valuesOverPoints && valuesOverPoints !== void 0)
    $$bindings.valuesOverPoints(valuesOverPoints);
  if ($$props.isNavigable === void 0 && $$bindings.isNavigable && isNavigable !== void 0)
    $$bindings.isNavigable(isNavigable);
  if ($$props.maxSlices === void 0 && $$bindings.maxSlices && maxSlices !== void 0)
    $$bindings.maxSlices(maxSlices);
  if ($$props.addDataPoint === void 0 && $$bindings.addDataPoint && addDataPoint !== void 0)
    $$bindings.addDataPoint(addDataPoint);
  if ($$props.removeDataPoint === void 0 && $$bindings.removeDataPoint && removeDataPoint !== void 0)
    $$bindings.removeDataPoint(removeDataPoint);
  if ($$props.exportChart === void 0 && $$bindings.exportChart && exportChart !== void 0)
    $$bindings.exportChart(exportChart);
  {
    updateChart(data);
  }
  return `<div${add_attribute("this", chartRef, 0)}></div>`;
});
function generateByCategory(placemarkList) {
  const totalEachCategory = {
    labels: ["Landmark", "Residence", "Event", "Other"],
    datasets: [
      {
        values: [0, 0, 0, 0]
      }
    ]
  };
  placemarkList.forEach((placemark) => {
    if (placemark.category === "Landmark") {
      totalEachCategory.datasets[0].values[0] += 1;
    } else if (placemark.category === "Residence") {
      totalEachCategory.datasets[0].values[1] += 1;
    } else if (placemark.category === "Event") {
      totalEachCategory.datasets[0].values[2] += 1;
    } else if (placemark.category === "Other") {
      totalEachCategory.datasets[0].values[3] += 1;
    }
  });
  return totalEachCategory;
}
function placemarksByLocation(placemarkList) {
  const totalEachLocation = {
    labels: ["Other", "Dublin", "Cork", "Galway", "Belfast", "Limerick", "Derry", "Waterford", "Drogheda", "Dundalk", "Sligo", "Ennis", "Armagh"],
    datasets: [
      {
        values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      }
    ]
  };
  const cities = [
    { name: "Dublin", latRange: [53.2, 53.5], lonRange: [-6.5, -6] },
    { name: "Cork", latRange: [51.7, 52.1], lonRange: [-8.8, -8.2] },
    { name: "Galway", latRange: [53.1, 53.4], lonRange: [-9.5, -8.6] },
    { name: "Belfast", latRange: [54.4, 54.8], lonRange: [-6.4, -5.5] },
    { name: "Limerick", latRange: [52.5, 52.8], lonRange: [-9, -8.3] },
    { name: "Derry", latRange: [54.8, 55.1], lonRange: [-7.7, -6.9] },
    { name: "Waterford", latRange: [52.1, 52.5], lonRange: [-7.4, -6.8] },
    { name: "Drogheda", latRange: [53.6, 53.9], lonRange: [-6.6, -5.9] },
    { name: "Dundalk", latRange: [53.8, 54.2], lonRange: [-6.7, -6.1] },
    { name: "Sligo", latRange: [54.1, 54.4], lonRange: [-8.7, -8.2] },
    { name: "Ennis", latRange: [52.6, 53], lonRange: [-9.2, -8.8] },
    { name: "Armagh", latRange: [54.1, 54.5], lonRange: [-6.8, -6.5] }
  ];
  placemarkList.forEach((placemark) => {
    let found = false;
    cities.forEach((city, index) => {
      if (placemark.lat >= city.latRange[0] && placemark.lat <= city.latRange[1] && placemark.lng >= city.lonRange[0] && placemark.lng <= city.lonRange[1]) {
        totalEachLocation.datasets[0].values[index + 1] += 1;
        found = true;
      }
    });
    if (!found) {
      totalEachLocation.datasets[0].values[0] += 1;
    }
  });
  return totalEachLocation;
}
function placemarksByCentury(placemarkList) {
  const totalsEachCentury = {
    labels: ["Earlier", "1700s", "1800s", "1900s", "2000s"],
    datasets: [
      {
        values: [0, 0, 0, 0, 0]
      }
    ]
  };
  placemarkList.forEach(
    (placemark) => {
      if (placemark.year < 1700) {
        totalsEachCentury.datasets[0].values[0] += 1;
      } else if (placemark.year >= 1700 && placemark.year < 1800) {
        totalsEachCentury.datasets[0].values[1] += 1;
      } else if (placemark.year >= 1800 && placemark.year < 1900) {
        totalsEachCentury.datasets[0].values[2] += 1;
      } else if (placemark.year >= 1900 && placemark.year < 2e3) {
        totalsEachCentury.datasets[0].values[3] += 1;
      } else if (placemark.year >= 2e3) {
        totalsEachCentury.datasets[0].values[4] += 1;
      }
    }
  );
  return totalsEachCentury;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let totalEachCategory;
  let totalEachLocation;
  let totalEachCentury;
  let placemarks = [];
  subTitle.set("Placemark data");
  latestPlacemark.subscribe(async (placemark) => {
    if (placemark) {
      placemarks.push(placemark);
      placemarks = [...placemarks];
      totalEachCategory = generateByCategory(placemarks);
      totalEachLocation = placemarksByLocation(placemarks);
      totalEachCentury = placemarksByCentury(placemarks);
    }
  });
  return `<div class="columns"><div class="column">${validate_component(Card, "Card").$$render($$result, { title: "Placemarks by category" }, {}, {
    default: () => {
      return `${validate_component(Base, "Chart").$$render(
        $$result,
        {
          data: totalEachCategory,
          type: "donut",
          maxSlices: "5"
        },
        {},
        {}
      )}`;
    }
  })}</div> <div class="column has-text-centered">${validate_component(Card, "Card").$$render($$result, { title: "Century of placemarks" }, {}, {
    default: () => {
      return `${validate_component(Base, "Chart").$$render($$result, { data: totalEachCentury, type: "bar" }, {}, {})}`;
    }
  })}</div></div> <div class="columns"><div class="column has-text-centered">${validate_component(Card, "Card").$$render($$result, { title: "Primary locations of placemarks" }, {}, {
    default: () => {
      return `${validate_component(Base, "Chart").$$render($$result, { data: totalEachLocation, type: "bar" }, {}, {})}`;
    }
  })}</div></div>`;
});
export {
  Page as default
};
