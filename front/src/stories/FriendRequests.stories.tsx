import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { FriendRequests } from "../components/FriendRequests/FriendRequests";


const friendsMockReducer = (state = {}) => state;

const makeStore = (friendsState: any) =>
  configureStore({
    reducer: {
      friends: friendsMockReducer,
    },
    preloadedState: {
      friends: friendsState,
    },
  });

const meta: Meta<typeof FriendRequests> = {
  title: "Components/FriendRequests",
  component: FriendRequests,
  decorators: [
    (Story, ctx) => (
      <Provider store={ctx.parameters.store}>
        <div style={{ maxWidth: 500, margin: "0 auto" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FriendRequests>;

export const Padrao: Story = {
  parameters: {
    store: makeStore({
      requests: [
        {
          friend: {
            idFriend: 1,
            friendName: "Maria Silva",
            friendEmail: "maria@email.com",
            imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
          },
        },
        {
          friend: {
            idFriend: 2,
            friendName: "João Santos",
            friendEmail: "joao@email.com",
            imageUrl: null,
          },
        },
      ],
      requestsLoading: false,
      list: [],
      loading: false,
    }),
  },
};

