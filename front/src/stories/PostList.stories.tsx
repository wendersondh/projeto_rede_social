import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../store/postsSlice";
import { PostList } from "../components/PostList/PostList";
import type { Post } from "../types/Post";


function makeStore({
  posts = [],
  loading = false,
  error = null,
}: {
  posts?: Post[];
  loading?: boolean;
  error?: string | null;
}) {
  return configureStore({
    reducer: {
      posts: postsReducer,
    },
    preloadedState: {
      posts: {
        posts,
        loading,
        error,
      },
    },
  });
}

const mockPosts: Post[] = [
  {
    id: 1,
    userId: 10,
    userName: "Maria Silva",
    imageUser: null,
    content: "Primeiro post no Storybook 🚀",
    isPublic: true,
    image: null,
    createdAt: new Date().toISOString(),
    likes: 3,
    comments: 2,
    likedByMe: false,
  },
  {
    id: 2,
    userId: 11,
    userName: "João Santos",
    imageUser: null,
    content: "Segundo post só pra testar",
    isPublic: true,
    image: null,
    createdAt: new Date().toISOString(),
    likes: 10,
    comments: 5,
    likedByMe: true,
  },
];

const meta: Meta<typeof PostList> = {
  title: "Components/PostList",
  component: PostList,
  decorators: [
    (Story, ctx) => (
      <Provider store={ctx.parameters.store}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  args: {
    onOpenComments: (postId: number) => {
      console.log("Abrir comentários:", postId);
    },
  },
};

export default meta;

type Story = StoryObj<typeof PostList>;

export const Padrao: Story = {
  parameters: {
    store: makeStore({
      posts: mockPosts,
    }),
  },
};