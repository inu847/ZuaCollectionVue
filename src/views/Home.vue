<template>
  <div>
    <!-- template categries -->
    <v-container class="ma-0 pa-0" grid-list-sm>
      <div class="text-right">
        <v-btn small text to="/categories" class="blue--text">
          All Categories <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-layout wrap>
        <v-flex v-for="(category) in categories" :key="`category-`+category.id" xs6>
          <v-card :to="'/category/'+ category.title">
              <v-img
                :src="getImage('/storage/'+ category.avatar)"
                class="white--text"
                aspect-ratio="1"
                contain
              >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
            </template>

              <v-card-title
                class="fill-height align-end"
                v-text="category.title"
                >
              </v-card-title>

            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

    <!-- template books -->
    <v-container class="ma-0 pa-0 mt-2" grid-list-sm>
      <div class="text-right">
        <v-btn small text to="/books" class="blue--text">
          All Books <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
      <v-layout wrap>
        <v-flex v-for="(book) in books" :key="`book-`+book.id" xs6>
          <v-card :to="'/book/'+ book.product_name">
            <v-img
              :src="getImage('/storage/'+ book.tampak_depan)"
              class="white--text"
              aspect-ratio="1"
              contain
              >
              <v-card-title
                class="fill-height align-end"
                v-text="book.product_name"></v-card-title>
            </v-img>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data: () => ({
    categories: [],
    books: [],
    }),
    created(){
        this.axios.get('/scrap')
          .then((response) => {
            let { data } = response.data
            this.categories = data
            console.log(data)
          })
          .catch((error) => {
            let { responses } = error
            console.log(responses)
          })
        this.axios.get('/product')
          .then((response) => {
            let { data } = response.data
            this.books = data
          })
          .catch((error) => {
            let { responses } = error
            console.log(responses)
          })
      }
  }
</script>
