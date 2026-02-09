import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../components/Header/Header";
import type { User } from "../types/User";

const mockUser: User = {
  id: 1,
  name: "Wenderson",
  nickName: "wenderson.dev",
  email: "wenderson@email.com",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
  birthDate: "1990-01-15",
  cep: "12345-678",
  postsCount: 42,
  friendsCount: 128,
};

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
  args: {
    user: mockUser,
    activeSection: "feed",
    onChangeSection: (section) => {
      console.log("Change section:", section);
    },
    onLogout: () => {
      console.log("Logout");
    },
  },
  argTypes: {
    activeSection: {
      control: "radio",
      options: ["feed", "profile", "search", "notifications"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Padrao: Story = {};