<script>
    // @ts-ignore
    import { chart } from "svelte-apexcharts";


    let pieChart = {
      chart: {
        type: "donut",
      },
      series: [
        { 
          name: "Landmark",
          data: [125,1111],
        },
        {
          name: "Residence",
          data: [125,155],
        },
        {
          name: "Event",
          data: [125,124],
        },
        {
          name: "Other",
          data: [125,123],
        },
      ],
      responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 200
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
    };
  </script>
  
  <div use:chart={pieChart} />