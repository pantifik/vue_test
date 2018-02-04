<template>
  <div class="picker">
    <v-date-picker class="date-picker"
      mode='range'
      v-model='selectedDate'
      select-color='#ff6666'
      :theme-styles='themeStyles'
      :show-popover='showPopover'
      :popover-visibility='popoverVisibility'
      >
      <div class="calendar"
           @click="popoverVisibility = popoverVisibility == 'hidden' ? 'visible' : 'hidden'"
      ></div>
    </v-date-picker>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        selectedDate: null,
        showPopover: false,
        popoverVisibility: 'hidden',
        themeStyles: {
          wrapper: {
            border: '0', // Override the default border
          },
          header: {
            color: '#fafafa',
            backgroundColor: '#4a5867',
            borderColor: '#404c59',
            borderWidth: '1px 1px 0 1px',
          },
          headerVerticalDivider: {
            borderLeft: '1px solid #404c59',
          },
          weekdays: {
            color: '#98aeb3',
            backgroundColor: '#4a5867',
            borderColor: '#384763',
            borderWidth: '0 1px',
            paddingTop: '5px',
            paddingBottom: '10px',
          },
          weekdaysVerticalDivider: {
            borderLeft: '1px solid #404c59',
          },
          weeks: {
            border: '1px solid #dadada',
          },
        },
      };
    },
    watch: {
      selectedDate: function(newDateObj){
        this.popoverVisibility = 'hidden';
        this.$emit('changeDate', newDateObj)
      }
    }
  };
</script>

<style lang="scss" scoped>

  .date-picker{
    display: block;
  }

  .calendar{
    margin-left: 5px;

    width: 1.5rem;
    height: 1.5rem;

    background: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDYwIDYwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MCA2MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCI+CjxnPgoJPHBhdGggZD0iTTU3LDRoLTdWMWMwLTAuNTUzLTAuNDQ3LTEtMS0xaC03Yy0wLjU1MywwLTEsMC40NDctMSwxdjNIMTlWMWMwLTAuNTUzLTAuNDQ3LTEtMS0xaC03Yy0wLjU1MywwLTEsMC40NDctMSwxdjNIMyAgIEMyLjQ0Nyw0LDIsNC40NDcsMiw1djExdjQzYzAsMC41NTMsMC40NDcsMSwxLDFoNTRjMC41NTMsMCwxLTAuNDQ3LDEtMVYxNlY1QzU4LDQuNDQ3LDU3LjU1Myw0LDU3LDR6IE00MywyaDV2M3YzaC01VjVWMnogTTEyLDJoNSAgIHYzdjNoLTVWNVYyeiBNNCw2aDZ2M2MwLDAuNTUzLDAuNDQ3LDEsMSwxaDdjMC41NTMsMCwxLTAuNDQ3LDEtMVY2aDIydjNjMCwwLjU1MywwLjQ0NywxLDEsMWg3YzAuNTUzLDAsMS0wLjQ0NywxLTFWNmg2djlINFY2eiAgICBNNCw1OFYxN2g1MnY0MUg0eiIgZmlsbD0iIzAwMDAwMCIvPgoJPHBhdGggZD0iTTM4LDIzaC03aC0yaC03aC0yaC05djl2MnY3djJ2OWg5aDJoN2gyaDdoMmg5di05di0ydi03di0ydi05aC05SDM4eiBNMzEsMjVoN3Y3aC03VjI1eiBNMzgsNDFoLTd2LTdoN1Y0MXogTTIyLDM0aDd2N2gtNyAgIFYzNHogTTIyLDI1aDd2N2gtN1YyNXogTTEzLDI1aDd2N2gtN1YyNXogTTEzLDM0aDd2N2gtN1YzNHogTTIwLDUwaC03di03aDdWNTB6IE0yOSw1MGgtN3YtN2g3VjUweiBNMzgsNTBoLTd2LTdoN1Y1MHogTTQ3LDUwaC03ICAgdi03aDdWNTB6IE00Nyw0MWgtN3YtN2g3VjQxeiBNNDcsMjV2N2gtN3YtN0g0N3oiIGZpbGw9IiMwMDAwMDAiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K) center no-repeat;
    background-size: cover;

    cursor: pointer;

    &:hover{
      box-shadow: 0 0 3px rgba(0,0,0,0.5);
    }
  }
</style>
