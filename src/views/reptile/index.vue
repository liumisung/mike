<template>
  <div id="box" class="" style="height:300px;overflow-y:auto">
    <ul>
      <li v-for="v in list" :key="v.index">
        <img :src="v" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import { imgList } from '@/api/reptile'
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      imgList().then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}

</script>

<style scoped>
#box ul{
		display: flex;
		flex-wrap: wrap;
        position: absolute;
        top: 10px;
	}
#box li{
		padding: 3px;
		list-style: none;
		margin-right: 15px;
		border: 1px solid #eee;
}
#box img{
		width: 200px;
		height: 150px;
}
</style>
