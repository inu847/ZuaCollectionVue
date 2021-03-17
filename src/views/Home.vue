<template>
  <div>
      <template>
          <v-slide-group>
            <v-slide-item v-for="(category) in categories" :key="`category-`+category.kategori">
              <v-card class="ma-2" color="transparent">
                <v-card-title v-text="category.kategori" class="fill-height align-end white--text" align="center" style="font-family: 'Poppins'; font-size:14px;"></v-card-title>
                  <v-scale-transition></v-scale-transition>
              </v-card>
              
            </v-slide-item>
          </v-slide-group>
      </template>
    <v-container grid-list-sm>
      <div class="text-right">
        <v-btn small text to="/product" class="blue--text">
          All Categories <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-container>

    <!-- template books -->
    <v-container grid-list-sm>
      <v-layout wrap>
        <v-flex v-for="(book) in books" :key="`book-`+book.id" xs6>
          <v-card :to="'/product/'+ book.id" color="transparent" class="text-center" align="center" >
            <v-img :src="getImage('/storage/'+ book.tampak_depan)" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" ></v-img>
            <v-card-title class="grey--text align-top" v-text="book.product_name" style="font-family: 'Poppins'; font-size:14px;"></v-card-title>
          </v-card>
        </v-flex>
      </v-layout>

      <div class="text-right">
        <v-btn small text to="/books" class="blue--text">
          All Clothes <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      categories: [
        {'kategori' : 'Atasan', 'link' : 'atasan', 'imageSrc': 'background.jpg'},
        {'kategori' : 'Celana', 'link' : 'celana', 'imageSrc': 'logo.png'},
        {'kategori' : 'Rok', 'link' : 'rok', 'imageSrc': 'background.jpg'},
        {'kategori' : 'Dress', 'link' : 'dress', 'imageSrc': 'logo.png'},
        {'kategori' : 'Atasan', 'link' : 'atasan', 'imageSrc': 'background.jpg'},
        {'kategori' : 'Celana', 'link' : 'celana', 'imageSrc': 'logo.png'},
        {'kategori' : 'Rok', 'link' : 'rok', 'imageSrc': 'background.jpg'},
        {'kategori' : 'Dress', 'link' : 'dress', 'imageSrc': 'logo.png'}
      ],
      books: [],
    }),
    created(){
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
