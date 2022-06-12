<template>
  <div>
    <!--  <el-empty description="该模块正在开发或修复中~"></el-empty>-->
    <div id="main" style="width: 2000px;height: 1000px;"></div>
    <!--    <div id="main1" style="width: 600px;height: 400px;"></div>-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      diskData: [],
      series: [
        {
          name: 'Disk Usage',
          type: 'treemap',
          visibleMin: 300,
          label: {
            show: true,
            formatter: '{b}'
          },
          upperLabel: {
            show: true,
            height: 30
          },
          itemStyle: {
            borderColor: '#fff'
          },
          levels: [
            {
              itemStyle: {
                borderColor: '#777',
                borderWidth: 0,
                gapWidth: 1
              },
              upperLabel: {
                show: false
              }
            },
            {
              itemStyle: {
                borderColor: '#555',
                borderWidth: 5,
                gapWidth: 1
              },
              emphasis: {
                itemStyle: {
                  borderColor: '#ddd'
                }
              }
            },
            {
              colorSaturation: [0.35, 0.5],
              itemStyle: {
                borderWidth: 5,
                gapWidth: 1,
                borderColorSaturation: 0.6
              }
            }
          ],
          data: this.diskData
        }
      ]
    }
  }
}
</script>
