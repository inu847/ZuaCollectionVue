<template>
    <div>
        <v-container class="ma-0 pa-0" grid-list-sm>
            <v-subheader>
                All Books
            </v-subheader>
            <v-layout wrap>
                <v-flex v-for="(category) in categories" :key="`category-`+category.id" xs6>
                    <v-card :to="'/category/'+ category.id">
                        <v-img :src="getImage('/storage/'+category.avatar)" class="white--text align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)">
                            <v-card-title class="fill-height align-end" v-text="category.title" ></v-card-title>
                        </v-img>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
        <template>
            <div class="text-center">
                <v-pagination
                    v-model="page"
                    @input="go"
                    :length="lengthPage"
                    :total-visible="5"
                ></v-pagination>
            </div>
        </template>
    </div>
</template>

<script>

export default {
    data: () => ({
        categories: [],
        page: 1,
        lengthPage: 0
    }),
    created(){
        this.go()
    },
    methods: {
        go(){
            let url = '/scrap?page=' + this.page
            this.axios.get(url)
            .then((response) => {
                let { data } = response.data
                let { last_page } = response.data
                let { current_page } = response.data
                this.categories = data
                // jumlah halaman di dapat dari meta endpoint books
                this.lengthPage = last_page
                this.page = current_page
            })
            .catch((error) => {
                let { responses } = error
                console.log(responses)
            })
        }
    }
};
</script>