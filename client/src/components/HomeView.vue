<template>
    <div>
        <h1>새 게시글 만들기</h1>
        <textarea v-model="content"></textarea>
        <div>
            <button @click="createArticle">생성하기</button>
        </div>
        <h2>작성된 게시글</h2>
        <CardView v-for="article in articles" 
            :key="article._id" 
            :article="article" 
            @update="updateCard" 
            @delete="deleteCard">
        </CardView>
    </div>
</template>
<script>
import axios from "axios"
import CardView from "@/components/CardView.vue"
export default {
    components: {
        CardView
    },
    data() {
        return {
            content: "",
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
        },
        async createArticle() {
            if (this.content.length === 0) {
                window.alert("컨텐츠를 입력해주세요")
                return
            }
            const { data } = await axios.post(`http://localhost:3000/create`, {
                content: this.content
            }) 
            if (!data) {
                window.alert("생성 실패")
                return
            }
            this.articles.push(data)
            this.content = ""
        },
        updateCard({id, content}) {
            const idx = this.articles.findIndex(v => v._id === id)
            if (idx > -1) {
                this.articles[idx].content = content
            }
        },
        deleteCard({id}) {
            const idx = this.articles.findIndex(v => v._id === id)
            if (idx > -1) {
                this.articles.splice(idx, 1)
            }
        }
  }
}
</script>
