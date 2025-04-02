import React, { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

// Apply the animated theme
am4core.useTheme(am4themes_animated);

const DonutChart3D = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Create chart instance
    const chart = am4core.create('chartdiv', am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // Initial fade-in

    // Add data
    chart.data = [
      { category: 'Water', value: 61 },
      { category: 'Light', value: 49 },
      { category: 'Air', value: 48 },
      { category: 'Police', value: 34 },
      { category: 'Municipality', value: 26 },
      { category: 'Law and Order', value: 23 },
    ];

    // Set inner radius to make it a donut chart
    chart.innerRadius = am4core.percent(50    ); // Match the hole size in the image
    chart.depth = 280; // Adjust depth for 3D effect

    // Configure the legend
    chart.legend = new am4charts.Legend();
    chart.legend.position = 'bottom';
    chart.legend.labels.template.text = '{category}';
    chart.legend.valueLabels.template.text = ''; // Hide values in legend
    chart.legend.itemContainers.template.paddingTop = 5;
    chart.legend.itemContainers.template.paddingBottom = 5;
    chart.legend.markers.template.width = 20;
    chart.legend.markers.template.height = 20;

    // Create pie series
    const series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = 'value';
    series.dataFields.depthValue = 'value';
    series.dataFields.category = 'category';
    series.dataFields.radiusValue= 'value';
    series.slices.template.cornerRadius = 5;
    series.colors.step = 3;

    // Customize colors to match the image
    series.colors.list = [
      am4core.color('#7086FD'), // Water (grayish)
      am4core.color('#6FD195'), // Light (green)
      am4core.color('#FFAE4C'), // Air (yellow)
      am4core.color('#07DBFA'), // Police (light blue)
      am4core.color('#FFAE4C'), // Municipality (purple)
      am4core.color('#2563EB'), // Law and Order (dark blue)
    ];

    // Add labels with lines (arrows)
    series.labels.template.disabled = false;
    series.labels.template.text = '{value}';
    series.labels.template.fontSize = 16;
    series.labels.template.fontWeight = 'bold';
    series.labels.template.padding(5, 5, 5, 5);
    series.labels.template.align = 'center';

    // Configure label lines
    series.labels.template.adapter.add('radius', (radius, target) => {
      return radius + 40; // Increase distance of labels from the chart
    });
    series.labels.template.adapter.add('fill', (fill, target) => {
      return am4core.color('#000'); // Label text color
    });

    // Configure the lines connecting labels to segments
    series.slices.template.labelLines = series.labels.template.createChild(am4core.Line);
    series.slices.template.labelLines.stroke = am4core.color('#000');
    series.slices.template.labelLines.strokeWidth = 2;
    series.labels.template.bent = true; // Slight bend in the lines
    series.labels.template.interactionsEnabled = false;

    // Add center label for total value
    const label = chart.seriesContainer.createChild(am4core.Label);
    label.text = '241';
    label.horizontalCenter = 'middle';
    label.verticalCenter = 'middle';
    label.fontSize = 50;
    label.fontWeight = 'bold';

    // Adjust the angle for 3D effect
    chart.angle = 30; // Match the tilt in the image

    // Store chart instance in ref
    chartRef.current = chart;

    // Cleanup on unmount
    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div>
      <div id="chartdiv" style={{ width: '100%', height: '700px' }}></div>
    </div>
  );
};

export default DonutChart3D;