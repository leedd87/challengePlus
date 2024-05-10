import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Article} from './types';

interface FavoriteNews {
  value: Article[];
}

const initialState: FavoriteNews = {
  value: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    favoritesNews: (state, action: PayloadAction<Article | Article[]>) => {
      const payloadArticles = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      payloadArticles.forEach(article => {
        // if (state.value.includes(article)) {
        //   state.value = state.value.filter(
        //     favoriteArticle => favoriteArticle.author !== article.author,
        //   );
        //   console.log('-----ARTICULO REPETIDO', article.author);
        // } else {

        state.value = [...state.value, article];
        // }
      });
    },
    removeFavoriteNews: (state, action: PayloadAction<Article>) => {
      const articleToRemove = action.payload;
      state.value = state.value.filter(
        article => article.author !== articleToRemove.author,
      );
    },
  },
});

export const {
  favoritesNews,
  removeFavoriteNews,
  //  addFavoriteNews
} = newsSlice.actions;

export default newsSlice.reducer;
