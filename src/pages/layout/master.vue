<template>
  <div>
    <div class="w-full h-full flex">
      <HeaderTop/>
      
      <div>
        <div class="w-full h-[calc(100vh - 50px)]">
          <router-view />
        </div>
      </div>
      <div>
        <Table/>
        <ButtonComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop.vue"
import Table from "../../components/Table.vue"


export default{
  components: { HeaderTop, Table },
 
  


}
</script>

<style>
</style>