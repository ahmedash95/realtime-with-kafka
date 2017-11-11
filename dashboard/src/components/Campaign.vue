<template>
  <div class="campaign">
    <h1>{{ title }}</h1>
      <br />
      <div class="col-md-6 col-md-offset-3">
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <th class="text-center text-bold">Page Views</th>
                        <th class="text-center text-bold">Impressions</th>
                        <th class="text-center text-bold">Clicks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{{ analytics.pageviews }}</td>
                        <td>{{ analytics.impressions }}</td>
                        <td>{{ analytics.clicks }}</td>
                    </tr>
                </tbody>
            </table>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Campaign',
  data () {
    return {
      title: 'Campaign #1',
      analytics: {
        pageviews: 0,
        impressions: 0,
        clicks: 0
      }
    }
  },
  created: function () {
    let self = this
    this.$socket.emit('news', 'hi')
    this.$socket.on('news', (response) => {
      let data = JSON.parse(response.data.value)
      console.log(data)
      if (data.type === 'analytics') {
        if (data.action === 'click') {
          self.analytics['clicks'] += 1
        } else if (data.action === 'impression') {
          self.analytics['impressions'] += 1
        } else if (data.action === 'pageview') {
          self.analytics['pageviews'] += 1
        }
      }
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
