import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postsSlice";
import { PostCard } from "../components/PostCard/PostCard";
import type { Post } from "../types/Post";


const makeStore = () =>
  configureStore({
    reducer: {
      posts: postsReducer,
    },
    preloadedState: {
      posts: {
        posts: [],
        loading: false,
        error: null,
      },
    },
  });

const mockPost: Post = {
  id: 1,
  userId: 10,
  userName: "Maria Silva",
  imageUser: "https://randomuser.me/api/portraits/women/44.jpg",
  content: "Esse é um post de exemplo para o Storybook 🚀",
  isPublic: true,
  image: "https://picsum.photos/500/300",
  createdAt: new Date().toISOString(),
  likes: 12,
  comments: 3,
  likedByMe: false,
};

const meta: Meta<typeof PostCard> = {
  title: "Components/PostCard",
  component: PostCard,
  decorators: [
    (Story) => (
      <Provider store={makeStore()}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  args: {
    post: mockPost,
    onOpenComments: (postId: number) => {
      console.log("Open comments:", postId);
    },
  },
};

export default meta;

type Story = StoryObj<typeof PostCard>;

export const Padrao: Story = {};

export const SemImagem: Story = {
  args: {
    post: {
      ...mockPost,
      image: null,
    },
  },
};