// https://www.amcharts.com/demos/line-with-changing-color

window.function = function (data, width, height, max) {

  // data
  data = data.value ?? "";
  max = max.value ?? "";
  width = width.value ?? "100";
  height = height.value ?? "500";
 
  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
	
     <!-- Resources (HTML) -->
     <script src="https://cdn.amcharts.com/lib/5/index.js"></script>
     <script src="https://cdn.amcharts.com/lib/5/xy.js"></script>
     <script src="https://cdn.amcharts.com/lib/5/themes/Animated.js"></script>
  </head>
  <body>
  <div id="chartdiv"></div>

  <!-- Styles (CSS) -->
  <style>
    #chartdiv {
      width: ${width}%;
      height: ${height}px;
    }
  </style>

<!-- Chart code (JavaScript)  -->
<script>

// Create root element
var root = am5.Root.new("chartdiv");

// Set themes
root.setThemes([
  am5themes_Animated.new(root)
]);

// Create chart
var chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: true,
  panY: true,
  wheelX: "panX",
  wheelY: "zoomX",
  layout: root.verticalLayout,
  pinchZoomX:true
}));

// Add cursor
var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
  behavior: "none"
}));
cursor.lineY.set("visible", false);

var colorSet = am5.ColorSet.new(root, {});

//   ***  The data ***
var data = [
  {
    year: "2014",
    value: 23.5,
    strokeSettings: {
      stroke: colorSet.getIndex(0)
    },
    fillSettings: {
      fill: colorSet.getIndex(0),
    },
    bulletSettings: {
      fill: colorSet.getIndex(0)
    }
  },
  {
    year: "2015",
    value: 26,
    bulletSettings: {
      fill: colorSet.getIndex(0)
    }
  },
  {
    year: "2016",
    value: 30,
    bulletSettings: {
      fill: colorSet.getIndex(0)
    }
  },
  {
    year: "2017",
    value: 20,
    bulletSettings: {
      fill: colorSet.getIndex(0)
    }
  },
  {
    year: "2018",
    value: 30,
    strokeSettings: {
      stroke: colorSet.getIndex(3)
    },
    fillSettings: {
      fill: colorSet.getIndex(3),
    },
    bulletSettings: {
      fill: colorSet.getIndex(3)
    }
  },
  {
    year: "2019",
    value: 30,
    bulletSettings: {
      fill: colorSet.getIndex(3)
    }
  },
  {
    year: "2020",
    value: 31,
    bulletSettings: {
      fill: colorSet.getIndex(3)
    }
  },
  {
    year: "2021",
    value: 34,
    strokeSettings: {
      stroke: colorSet.getIndex(6)
    },
    fillSettings: {
      fill: colorSet.getIndex(6),
    },
    bulletSettings: {
      fill: colorSet.getIndex(6)
    }
  },
  {
    year: "2022",
    value: 33,
    bulletSettings: {
      fill: colorSet.getIndex(6)
    }
  },
  {
    year: "2023",
    value: 34,
    bulletSettings: {
      fill: colorSet.getIndex(6)
    }
  },
  {
    year: "2024",
    value: 36,
    bulletSettings: {
      fill: colorSet.getIndex(6)
    }
  }
];

// Create axes
var xRenderer = am5xy.AxisRendererX.new(root, {});
xRenderer.grid.template.set("location", 0.5);
xRenderer.labels.template.setAll({
  location: 0.5,
  multiLocation: 0.5
});

var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "year",
  renderer: xRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

xAxis.data.setAll(data);

var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
  maxPrecision: 0,
  renderer: am5xy.AxisRendererY.new(root, {})
}));

var series = chart.series.push(am5xy.LineSeries.new(root, {
  xAxis: xAxis,
  yAxis: yAxis,
  valueYField: "value",
  categoryXField: "year",
  tooltip: am5.Tooltip.new(root, {
    labelText: "{valueY}",
    dy:-5
  })
}));

series.strokes.template.setAll({
  templateField: "strokeSettings",
  strokeWidth: 2
});

series.fills.template.setAll({
  visible: true,
  fillOpacity: 0.5,
  templateField: "fillSettings"
});


series.bullets.push(function() {
  return am5.Bullet.new(root, {
    sprite: am5.Circle.new(root, {
      templateField: "bulletSettings",
      radius: 5
    })
  });
});

series.data.setAll(data);
series.appear(1000);

// Add scrollbar
// https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
chart.set("scrollbarX", am5.Scrollbar.new(root, {
  orientation: "horizontal",
  marginBottom: 20
}));

// Make stuff animate on load
// https://www.amcharts.com/docs/v5/concepts/animations/
chart.appear(1000, 100);


</script>


  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
