import type { Meta, StoryObj } from "@storybook/react";
import { PostComments } from "../components/PostComments/PostComments";
import type { Comment } from "../types/Comment";

const mockComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    userId: 10,
    userName: "Maria Silva",
    imageUser: null,
    content: "Comentário de exemplo 😎",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    postId: 1,
    userId: 11,
    userName: "João Santos",
    imageUser: null,
    content: "Outro comentário",
    createdAt: new Date().toISOString(),
  },
];

const meta: Meta<typeof PostComments> = {
  title: "Components/PostComments",
  component: PostComments,
  args: {
    postId: 1
  },
};

export default meta;

type Story = StoryObj<typeof PostComments>;

export const Padrao: Story = {};