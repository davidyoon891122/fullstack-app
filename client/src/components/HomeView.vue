<template>
    <div>
        <p>Home</p>
    </div>
</template>
<script>
import axios from "axios"
export default {
    data() {
        return {
            articles: []
        }
    },
    created() {
        this.getArticles()
    },
    methods: {
        async getArticles() {
        console.log("home")
        const { data } = await axios.get(`http://localhost:3000/read`) // articles
        this.articles = data
        console.log(data)
    }
  }
}
</script>
