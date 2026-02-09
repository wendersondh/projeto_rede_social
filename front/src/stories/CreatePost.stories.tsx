import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postsSlice";
import { CreatePost } from "../components/CreatePost/CreatePost";


function makeStore(loading = false) {
  return configureStore({
    reducer: {
      posts: postsReducer,
    },
    preloadedState: {
      posts: {
        posts: [],
        loading,
        error: null,
      },
    },
  });
}

const meta: Meta<typeof CreatePost> = {
  title: "Components/CreatePost",
  component: CreatePost,
  decorators: [
    (Story) => (
      <Provider store={makeStore()}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof CreatePost>;

export const Padrao: Story = {};

