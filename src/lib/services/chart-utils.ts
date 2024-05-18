import type { DataSet, Placemark } from "$lib/types/placemark-types";

export function generateByCategory(placemarkList: Placemark[]): DataSet {
  const totalEachCategory: DataSet = {
    labels: ["Landmark", "Residence", "Event", "Other"],
    datasets: [
      {
        values: [0, 0, 0, 0]
      }
    ]
  }

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

export function placemarksByLocation(placemarkList: Placemark[]): DataSet {
    const totalEachLocation: DataSet = {
      labels: ["Other", "Dublin", "Cork", "Galway", "Belfast", "Limerick", "Derry", "Waterford", "Drogheda", "Dundalk", "Sligo", "Ennis", "Armagh"],
      datasets: [
        {
          values: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      ]
    };
  
    const cities = [
      { name: 'Dublin', latRange: [53.2, 53.5], lonRange: [-6.5, -6.0] },
      { name: 'Cork', latRange: [51.7, 52.1], lonRange: [-8.8, -8.2] },
      { name: 'Galway', latRange: [53.1, 53.4], lonRange: [-9.5, -8.6] },
      { name: 'Belfast', latRange: [54.4, 54.8], lonRange: [-6.4, -5.5] },
      { name: 'Limerick', latRange: [52.5, 52.8], lonRange: [-9.0, -8.3] },
      { name: 'Derry', latRange: [54.8, 55.1], lonRange: [-7.7, -6.9] },
      { name: 'Waterford', latRange: [52.1, 52.5], lonRange: [-7.4, -6.8] },
      { name: 'Drogheda', latRange: [53.6, 53.9], lonRange: [-6.6, -5.9] },
      { name: 'Dundalk', latRange: [53.8, 54.2], lonRange: [-6.7, -6.1] },
      { name: 'Sligo', latRange: [54.1, 54.4], lonRange: [-8.7, -8.2] },
      { name: 'Ennis', latRange: [52.6, 53.0], lonRange: [-9.2, -8.8] },
      { name: 'Armagh', latRange: [54.1, 54.5], lonRange: [-6.8, -6.5] },
    ];
  
    placemarkList.forEach((placemark) => {
      let found = false;
      cities.forEach((city, index) => {
        if (placemark.lat >= city.latRange[0] && placemark.lat <= city.latRange[1] &&
            placemark.lng >= city.lonRange[0] && placemark.lng <= city.lonRange[1]) {
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

export function placemarksByCentury(placemarkList: Placemark[]): DataSet {
    const totalsEachCentury: DataSet = {
    labels: ["Earlier", "1700s", "1800s", "1900s", "2000s"],
    datasets: [
      {
        values: [0, 0, 0, 0, 0]
      }
    ]
  };

 placemarkList.forEach((placemark) => {
    if (placemark.year < 1700) {
      totalsEachCentury.datasets[0].values[0] += 1;
    } else if (placemark.year >= 1700 && placemark.year < 1800) {
      totalsEachCentury.datasets[0].values[1] += 1;
    }
    else if (placemark.year >= 1800 && placemark.year < 1900) {
      totalsEachCentury.datasets[0].values[2] += 1;
    }
    else if (placemark.year >= 1900 && placemark.year < 2000) {
      totalsEachCentury.datasets[0].values[3] += 1;
    }
    else if (placemark.year >= 2000) {
      totalsEachCentury.datasets[0].values[4] += 1;
    }
  }
  );
        return totalsEachCentury;
}

