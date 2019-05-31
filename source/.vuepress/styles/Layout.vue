<template lang="pug">
ParentLayout
  h2 That's all folks
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
//import CarbonAds from '@theme/components/CarbonAds.vue'
//import BuySellAds from '@theme/components/BuySellAds.vue'
export default {
  components: {
    ParentLayout,
    //CarbonAds,
    //BuySellAds
  }
}
/*
//ParentLayout
  h1 Does this work?
  <ParentLayout>
    <CarbonAds slot="sidebar-top"/>
    <BuySellAds slot="page-bottom"/>
  </ParentLayout>
*/
</script>