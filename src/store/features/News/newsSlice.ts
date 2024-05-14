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
        const existingArticle = state.value.findIndex(
          favArticle => favArticle.author === article.author,
        );

        if (existingArticle === -1) {
          state.value = [
            ...state.value,
            {...article, favorito: true} as Article,
          ];
        }
      });
    },
    removeFavoriteNews: (state, action: PayloadAction<Article>) => {
      const articleToRemove = action.payload;
      state.value = state.value?.filter(
        article => article.author !== articleToRemove.author,
      );
    },
  },
});

export const {favoritesNews, removeFavoriteNews} = newsSlice.actions;

export default newsSlice.reducer;
