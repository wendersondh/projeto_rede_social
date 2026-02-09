import { configureStore } from "@reduxjs/toolkit";
import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import { Profile } from "../components/Profile/Profile";


const meta: Meta<typeof Profile> = {
  title: "Components/Profile",
  component: Profile,
  decorators: [
    (Story) => (
      <Provider store={profileMockStore}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Profile>;

export const Padrao: Story = {};


const profileMockReducer = () => ({
  data: {
    id: 1,
    name: "Wenderson Dhomini",
    email: "wenderson@email.com",
    nickName: "wender_dev",
    image: null,
    postsCount: 8,
    friendsCount: 2,
  },
  loading: false,
  error: null,
});


const friendsMockReducer = () => ({
  list: [
    {
      friend: {
        idFriend: 1,
        friendName: "Maria Silva",
        imageUrl: null,
      },
    },
    {
      friend: {
        idFriend: 2,
        friendName: "João Santos",
        imageUrl: null,
      },
    },
  ],
  requests: [],
  loading: false,
  requestsLoading: false,
});


const profileMockStore = configureStore({
  reducer: {
    profile: profileMockReducer,
    friends: friendsMockReducer,
  },
});

