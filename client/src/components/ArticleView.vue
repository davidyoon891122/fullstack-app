<template>
    <div class="card">
        <div class="content">{{article.content}}</div>
        <div class="created-at">{{article.createdAt}}</div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            article: {
                id: null,
                content: null,
                createdAt: null
            }
        }
    },
    created() {
        this.findOneArticle()
    },
    methods: {
        async findOneArticle() {
            const articleId = this.$route.params.id
            const { data } = await axios.get(`http://localhost:3000/read/${articleId}`) // articles
            this.article = {
                ...data
            }
        }
    }
}
</script>

