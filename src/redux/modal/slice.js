import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  contact: {},
  isDeleteModalOpen: false,
  isEditModalOpen: false,
};
const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openDeleteModal: (state) => {
      state.isDeleteModalOpen = true;
    },
    closeDeleteModal: (state) => {
      state.isDeleteModalOpen = false;
    },
    openEditModal: (state, action) => {
      state.isEditModalOpen = true;
      state.contact = action.payload;
    },

    closeEditModal: (state) => {
      state.isEditModalOpen = false;
      state.contact = {};
    },
  },
});
export const {
  openDeleteModal,
  closeDeleteModal,
  openEditModal,
  closeEditModal,
} = slice.actions;

export const modalReducer = slice.reducer;
