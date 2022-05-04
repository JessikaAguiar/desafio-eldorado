import { Component, OnInit, ViewChild } from '@angular/core';
import { EChartsOption } from 'echarts';

@Component({
  selector: 'graphic-pie',
  templateUrl: './graphic-pie.component.html',
  styleUrls: ['./graphic-pie.component.css']
})
export class GraphicPieComponent implements OnInit {
  options: any;

  constructor() {
  }

  ngOnInit(): void {
    this.options = {
      title: {
        text: 'Nightingale\'s Rose Diagram',
        subtext: 'Mocking Data',
        x: 'center',
        textStyle: {color: '#ffffff'}
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6'],
        textStyle: {color: '#ffffff'}
      },
      calculable: true,
      series: [
        {
          name: 'area',
          type: 'pie',
          radius: [30, 110],
          roseType: 'area',
          data: [
            {value: 10, name: 'rose1'},
            {value: 5, name: 'rose2'},
            {value: 15, name: 'rose3'},
            {value: 25, name: 'rose4'},
            {value: 20, name: 'rose5'},
            {value: 35, name: 'rose6'}
          ]
        }
      ]
    }
  }
}
